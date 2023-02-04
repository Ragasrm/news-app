import { gql } from "graphql-request";
import { Category } from "../types/Category";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async(
    category?: Category | string,
    keywords?: string,
    isDynamic?:boolean
) => {
    // GraphQL QUERY

    const query = gql`
        query myQuery ($access_key:String!
            # $categories: String
            # $keyword:String
            )
            {
                myQuery(
                    access_key: $access_key,
                    #categories: $categories,
                    countries: "us"
                    # keyword: $keyword
                    ) {
                    data {
                    author
                    category
                    country
                    description
                    image
                    language
                    published_at
                    source
                    title
                    url
                    }
                    pagination {
                    count
                    limit
                    offset
                    total
                    }
                }
}`;


    // Fecth function with Next.js 13 caching..!
const res = await fetch('https://enid.stepzen.net/api/rafting-tortoise/__graphql', {
    method:'POST',
    cache: isDynamic ? 'no-cache' : 'default',
    next: isDynamic ? { revalidate: 0}: {revalidate : 20},
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
    },
    body: JSON.stringify({
        query,
        variables: {
            access_key: process.env.MEDIASTACK_API_KEY,
            categories: "Business",
            keywords: keywords
        }
    })
});



const newsResponse = await res.json();
    // sort by img vs not img present
    const news = sortNewsByImage(newsResponse?.data?.myQuery)

    return news


}

export default fetchNews;

//http://api.mediastack.com/v1/news?access_key=YOUR_ACCESS_KEY&sources=cnn,bbc