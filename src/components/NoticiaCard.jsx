import styles from '../components/NoticiaCard.module.css'
import { DateTime } from 'luxon';

const NoticiaCard = (noticia) => {
  const dt = DateTime.fromISO(noticia.data.publishedAt)
  //console.log(dt);
  //console.log(detalle);
  return (
      <div className={styles.container}>
        <div className={styles.child}>
          <img className={styles.img} src={noticia.data.urlToImage}/>
          <div className={styles.date}>
            <h5>{`Publicado el: ${dt.day} ${dt.month} ${dt.year} a las ${dt.hour}:${dt.minute} hs.`}</h5>
            <h5>Fuente: {noticia.data.source.name}</h5>
          </div>
        </div>
        <div className={styles.child}>
          <h2>{noticia.data.title}</h2>
          <p>{noticia.data.description}</p>
          <a href={noticia.data.url} target="_blank" rel="noopener noreferrer">Ir a Noticia</a>
        </div>
      </div>
  )
}

export default NoticiaCard