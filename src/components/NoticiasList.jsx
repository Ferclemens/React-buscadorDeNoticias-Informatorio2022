import NoticiaCard from './NoticiaCard'


const NoticiasList = ({noticias}) => {

  //console.log(noticias);
  return (
    <div>
      {noticias.map((noticia, index) => (
          <div key={index}>
            <NoticiaCard data={noticia} />
            <a href={noticia.url} target="_blank" rel="noopener noreferrer">Ir a Noticia</a>
          </div>
          )
      )}
    </div>
  )
}

export default NoticiasList