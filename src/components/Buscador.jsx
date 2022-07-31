import React, { useEffect, useState } from 'react'
import styles from './Buscador.module.css'
import GetData from './GetData';
import NoticiasList from './news/NoticiasList';
import Loading from './news/Loading'
import ErrorCatch from './errors/ErrorCatch'
import Paginado from './news/Paginado'
import NoResults from './errors/NoResults';

const Buscador = () => {
  const [busqueda, setBusqueda] = useState('')
  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(false);
  const [noDataMessage, setNoDataMessage] = useState(false)
  const [cantidadNoticias, setCantidadNoticias] = useState(null) 
  const [totalPaginas, setTotalPaginas] = useState(0)
  const [pagina, setPagina] = useState(1)

  const onTextoChange = (e) => {
    setBusqueda(e.target.value)
    //logica de condición para la busqueda (+ de 3 caracteres)
    if ((e.target.value).length > 2){
      document.getElementById('button').hidden = false;
    } else {
      document.getElementById('button').hidden = true;
    }
  }


  const onBuscar = async() => {
    setLoading(true)
    const respuesta =  await GetData(busqueda, pagina)
    //logica para determinar si mostramos los resultados o mensaje de NoResults
    if (respuesta === undefined) {
      setNoticias([])
    } else if (respuesta.totalResults === 0) {
        setNoDataMessage(true)
    } else{
      setNoticias(respuesta.articles)
      const paginas = Math.ceil(parseInt(respuesta.totalResults)/10)
      setTotalPaginas(paginas)
      setCantidadNoticias(respuesta.totalResults)
    }
    setLoading(false)
  }
  
  //console.log(busqueda);
  //console.log(noticias);
  //console.log(cantidadNoticias);
  //console.log(noDataMessage);
  //console.log(loading);

  const onChangePaginacion = async (event,value) => {
    setPagina(value);
  }
  //console.log(pagina);
  
  useEffect(() => {
    onBuscar(pagina)
  },[pagina])

  if (loading) {
    return <Loading />
  }
  if (noDataMessage) {
    return <NoResults />
  }

  return (
    <ErrorCatch>
      <form className={ cantidadNoticias ? styles.containerRedux : styles.container } onSubmit={onBuscar} >
        <input className={styles.input} type='text' placeholder='Buscar noticias' onChange={onTextoChange} name='input' autoComplete="off"/>
        <button className={styles.button} id='button' hidden={true} name='buttonBuscar' type='submit'>Buscar</button>
      </form> 
      {cantidadNoticias != null &&
        <section className={styles.noticiaList}> 
          <h5 className={styles.cantidadNoticias}>Estas viendo {cantidadNoticias < 10 ? cantidadNoticias : 10} noticias de {cantidadNoticias} resultados</h5>
          <Paginado className={styles.paginado} page={pagina} count={totalPaginas} onChange={onChangePaginacion}/>
          <NoticiasList noticias={noticias}/>
          <Paginado page={pagina} count={totalPaginas} onChange={onChangePaginacion}/>
        </section>
      }
    </ErrorCatch>
  )
}
export default Buscador;
