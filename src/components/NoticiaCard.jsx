import React from 'react'
import { Link } from 'react-router-dom'

function NoticiaCard({noticia}) {
  return (
    <div>
      <Link to={`/noticia/${noticia.id}`}>
      <p>{noticia.source.name}</p>
      <h2>{noticia.title}</h2>
      <img src={noticia.urlToImage}/>
      <p>{noticia.publishedAt}</p>
      </Link>
    </div>
  )
}

export default NoticiaCard