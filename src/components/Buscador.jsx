import React, { useState } from 'react'
import styles from './Buscador.module.css'
import {APY_KEY, URL, LEN} from '../components/const/Const'
import NoticiaCard from './NoticiaCard';


function Buscador() {
  //control de estado de input para busqueda
  const [busqueda, setBusqueda] = useState('');
  const [data, setData] = useState([])

  const onTextoChange = (e) => {
    setBusqueda(e.target.value);
    //logica de condición para la busqueda (+ de 3 caracteres)
    if ((e.target.value).length > 2){
      document.getElementById('submitButton').disabled = false;
    } else {
      document.getElementById('submitButton').disabled = true;
    }
  }
  //traemos los datos desde la API según busqueda
  const onBuscar = async (e) => {
      e.preventDefault()
      await fetch(`${URL}?q=${busqueda}&apiKey=${APY_KEY}&page=1&pageSize=10&${LEN}`)
      .then(response => response.json())
      .then(data => {
        const {articles} = data
        setData(articles)
      })
    }
    console.log(data);
  return (
    <section className={styles.box}>
      <form className={styles.form} onSubmit={onBuscar}>
        <input type='text' placeholder='Buscar noticias' onChange={onTextoChange}/>
        <button id='submitButton' type='submit' disabled={true}>Buscar</button>
      </form>
      <div>
        {data.map((noticia) => {
          return <NoticiaCard key={noticia.id} noticia={noticia}/>
        })}
      </div>
    </section>
  );
}
export default Buscador