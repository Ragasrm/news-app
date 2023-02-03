import React from 'react'
import { NewsResponse } from '../../types/Category'
import ArticleSection from '../article/Article'

type Props = {
    news:NewsResponse
}

export default function NewsList(props: Props) {
    const {news} = props
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10 '>
       {news.data.map(article=>(
        <ArticleSection key={article.title} article={article}/>
       ))}
    </main>
    
  )
}