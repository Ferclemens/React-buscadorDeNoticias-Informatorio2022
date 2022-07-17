import React, { useEffect, useState } from 'react'
import styles from '../components/NoticiaCard.module.css'
import NoticiaDetalle from './NoticiaDetalle';

const NoticiaCard = (noticia) => {
  //console.log(detalle);
  return (
      <div className={styles.container}>
        <p>{noticia.data.source.name}</p>
        <h2>{noticia.data.title}</h2>
        <img className={styles.img} src={noticia.data.urlToImage}/>
        <p>{noticia.data.publishedAt}</p>
      </div>
  )
}

export default NoticiaCard