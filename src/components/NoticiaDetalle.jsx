import React from 'react'

function NoticiaDetalle({noticia}) {
  return (
    <div>
      <h2>{noticia.title}</h2>
      <img src={noticia.urlToImage}/>
      <p>{noticia.description}</p>
    </div>
  )
}

export default NoticiaDetalle