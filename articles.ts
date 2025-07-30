import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import {remark} from "remark"
import html from 'remark-html'

import type { ArticleItem } from "./types"

const articlesDirectory = path.join(process.cwd(), "articles")

const getSortedArtciles = (): ArticleItem[] => {
    const fileNames = fs.readdirSync(articlesDirectory)

    const allAriclesData = fileNames.map((fileName)=> {
        const id = fileName.replace(/\.md$/, "")

        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResults = matter(fileContents)

        return{
            id,
            title:matterResults.data.title,
            date: matterResults.data.data,
            category: matterResults.data.category,
            author: matterResults.data.author,
            description: matterResults.data.description
        }
    })
    return allAriclesData.sort((a,b)=>{
        const format = "DD-MM-YY"
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)
        if (dateOne.isBefore(dateTwo)) {
            return -1

        } else if (dateTwo.isAfter(dateOne)) {
            return 1
        } else {
            return 0
        }
    }) 
}

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArtciles()
    const catetorisedArticles: Record<string, ArticleItem[]> = {}
    
    sortedArticles.forEach((article)=>{
        if (!catetorisedArticles[article.category]) {
            catetorisedArticles[article.category] = []
        }
        catetorisedArticles[article.category].push(article)
    })
    return catetorisedArticles
}

export const getArticlesData = async(id:string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`)

    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContents)

    const processedContent = await remark().use(html).process(matterResult.content)

    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        tutle:matterResult.data.title,
        description: matterResult.data.description,
        author: matterResult.data.author,
        category: matterResult.data.category,
        date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
    }
}