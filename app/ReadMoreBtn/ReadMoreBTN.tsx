'use client'
import { useRouter } from 'next/navigation'
import { Article } from '../../types/Category'

type Props = {
    article:Article
}

export default function ReadMoreBTN(props: Props) {
    const { article } = props
    const router = useRouter();

    const handleClick = () => {
        const querySting = Object.entries(article).map(([key, value]) => `${key}=${value}`).join("&");
        const URL = `/article?${querySting}`
        console.log("URL", URL)
        router.push(URL)
    }
  return (
    <button 
        className='bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500'
        onClick={handleClick}
    >
        Read More
    </button>
  )
}