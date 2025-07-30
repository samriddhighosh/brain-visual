import Link from "next/link"
import type { ArticleItem } from "@/types"
import Image from "next/image"
import { CircleUserRound } from "lucide-react"

interface Props{
    category: string,
    articles: ArticleItem[]
}

const ArticleItemList = ({category, articles}: Props) => {
    return(
        <div className="flex flex-col gap-3">
            <h2 className="text-[24px] font-semibold">{category}</h2>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_0fr))] gap-6">
                {articles.map((article,id) => (
                    
                    <Link key={id} href={`library/${article.id}`}  className='border-1 border-blue-900 rounded-xl p-2 h-[350px] bg-white shadow-2xs'>
                        <Image src={`/${article.id}.jpg`} alt="article image" width={250} height={180} className="object-cover"/>
                        {/* <p className='h-1/2 bg-gray-300 mb-2 rounded-xl'/> */}
                        <div className='pl-2 pt-2 flex-col flex'>
                            <h3 className='text-[16px] font-medium leading-5 pb-2'>{article.title}</h3>
                            <p className="text-[12px]">{article.description}</p>
                            <div className="flex gap-2 pt-4">
                                <CircleUserRound className="text-gray-700"/>
                                <p className='text-[14px]'>{article.author}</p>
                            </div>
                        </div>
                        </Link>
                ))}
            </div>

        </div>
    )
}
export default ArticleItemList