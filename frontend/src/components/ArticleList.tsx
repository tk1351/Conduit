import React from 'react'
import { useAppSelector } from '../app/hooks'
import { selectArticles, ArticleState } from '../features/testSlice'

const ArticleList = () => {
  const articles = useAppSelector(selectArticles)
  if (!articles) {
    return <div className="article-preview">Loading...</div>
  }
  if (articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>
  }
  return (
    <div>
      {articles.map((article: ArticleState) => {
        return <h2>{article.title}</h2>
      })}
    </div>
  )
}

export default ArticleList
