import React from 'react'
import { NewsResponse } from '../../types/Category'
import fetchNews from '../../utils/fetchNews'
import NewsList from '../NewsList/NewsList'

type Props = {
    searchParams?: { term: string}
}

const SearchPage = async (props: Props) => {
    const {searchParams} = props

    const news: NewsResponse =  await fetchNews('general', searchParams?.term, true)

    
  return (
    <div>
        <h1 className='headerTitle'>Search Result for: {searchParams?.term}</h1>
         <NewsList news={news}/>
    </div>
  )
}

export default SearchPage;