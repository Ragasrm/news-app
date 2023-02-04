'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Article } from '../../types/Category'

type Props = {
    article:Article
}

export default function ReadMoreBTN(props: Props) {
    const { article } = props;
    const router = useRouter();

    // const handleClick = () => {
    //     const querySting = Object.entries(article).map(([key, value]) => `${key}=${value}`).join("&");
    //     const URL = `/article?${querySting}`
    //     console.log("URL", URL)
    //     router.push(URL)
    // }
  return (
    <Link href={article.url} target={'_blank'}
    className='bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500'
    ><button 
    className='h-10 w-full'
        // onClick={handleClick}
    >
        Read More
    </button>
    </Link>
  )
}