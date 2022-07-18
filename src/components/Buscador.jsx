import React, { useEffect, useState } from 'react'
import styles from './Buscador.module.css'
import GetData from './GetData';
import NoticiasList from './NoticiasList';
import Loading from './Loading'
import ErrorCatch from './ErrorCatch'
import Paginado from './Paginado'
import NoResults from './NoResults';

const Buscador = () => {
  const [busqueda, setBusqueda] = useState('')
  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(false);
  const [noDataMessage, setNoDataMessage] = useState(false)
  const [cantidadNoticias, setCantidadNoticias] = useState(0) 
  const [totalPaginas, setTotalPaginas] = useState(0)
  const [pagina, setPagina] = useState(1)

  const onTextoChange = (e) => {
    setBusqueda(e.target.value)
    //logica de condición para la busqueda (+ de 3 caracteres)
    if ((e.target.value).length > 2){
      document.getElementById('Button').hidden = false;
    } else {
      document.getElementById('Button').hidden = true;
    }
  }

  const onBuscar = async () => {
    const respuesta = await GetData(busqueda, pagina)
    //logica para determinar si mostramos los resultados o mensaje de NoResults
    if (respuesta.totalResults === 0) {
      setNoDataMessage(true)
    } else{
      setNoticias(respuesta.articles)
      const paginas = Math.ceil(parseInt(respuesta.totalResults)/10)
      setTotalPaginas(paginas)
      setCantidadNoticias(respuesta.totalResults)
    }
  }
  
  //console.log(busqueda);
  //console.log(noticias);
  //console.log(noDataMessage);
  //console.log(loading);

  const onChangePaginacion = async (event,value) => {
    setPagina(value);
  }
  //console.log(pagina);
  
  useEffect(() => {
    setLoading(true)
    onBuscar()
    setLoading(false)
  },[pagina])

  if (loading) {
    return <Loading />
  }
  if (noDataMessage) {
    return <NoResults />
  }

  return (
    <ErrorCatch>
      <section className={styles.container}>
        <input className={styles.input} type='text' placeholder='Buscar noticias' onChange={onTextoChange}/>
        <button className={styles.button} id='Button' hidden={true} onClick={onBuscar}>Buscar</button>
      </section> 
      {cantidadNoticias != 0 &&
        <section className={styles.noticiaList}> 
          <h5 className={styles.cantidadNoticias}>Está viendo 10 noticias de {cantidadNoticias} resultados</h5>
          <Paginado className={styles.paginado} page={pagina} count={totalPaginas} onChange={onChangePaginacion}/>
          <NoticiasList noticias={noticias}/>
          <Paginado page={pagina} count={totalPaginas} onChange={onChangePaginacion}/>
        </section>
      }
    </ErrorCatch>
  )
}
export default Buscador;
