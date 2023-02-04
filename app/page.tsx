
import { NewsResponse } from '../types/Category'
import { categories } from '../utils/constants'
import fetchNews from '../utils/fetchNews'
import NewsList from './NewsList/NewsList';
import { response} from "../response"

async function Homepage() {

  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","))

 
  return (
    <div>
      <NewsList news={news}/>
      </div>
  )
}

export default Homepage