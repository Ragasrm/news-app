import { Category, NewsResponse } from '../../../types/Category';
import { categories } from '../../../utils/constants';
import fetchNews from '../../../utils/fetchNews';
import NewsList from '../../NewsList/NewsList';


type Props = {
    params: {
        category:Category
    }
}

const NewsCategory = async(props: Props) => {
    const { params:{ category}} = props;
    console.log("category************", category)
    const news: NewsResponse =  await fetchNews(category)
    console.log("*********NEWS")
    console.log(news)

  return (
    <div>
         <h1 className='headerTitle'>{category}</h1>
         <NewsList news={news}/>
    </div>
  )
}

export default NewsCategory;

export async function genarateStaticParams() {
    return categories.map((category)=>({
        category: category
    }))
    
}