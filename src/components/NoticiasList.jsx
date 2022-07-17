import NoticiaCard from './NoticiaCard'


const NoticiasList = ({noticias}) => {

  //console.log(noticias);
  return (
    <div>
      {noticias.map((noticia, index) => (
          <div key={index}>
            <NoticiaCard data={noticia} />
          </div>
          )
      )}
    </div>
  )
}

export default NoticiasList