import React, { useEffect, useState } from 'react'
import styles from '../components/NoticiaCard.module.css'
import NoticiaDetalle from './NoticiaDetalle';

const NoticiaCard = (noticia) => {
  //console.log(detalle);
  return (
      <div className={styles.container}>
      <div className={styles.child}>
        <img className={styles.img} src={noticia.data.urlToImage}/>
        <div className={styles.date}>
          <h5>{noticia.data.publishedAt}</h5>
          <h5>fuente: {noticia.data.source.name}</h5>
        </div>
      </div>
      <div className={styles.child}>
        <h2>{noticia.data.title}</h2>
        <a href={noticia.data.url} target="_blank" rel="noopener noreferrer">Ir a Noticia</a>
      </div>
      </div>
  )
}

export default NoticiaCard