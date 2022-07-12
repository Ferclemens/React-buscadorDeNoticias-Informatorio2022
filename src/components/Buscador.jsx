import React, { useState } from 'react'
import styles from './Buscador.module.css'
import PeticionGet from './servicio/PeticionGet'


function Buscador() {
  const [busqueda, setBusqueda] = useState('');

  const onTextoChange = (e) => {
    setBusqueda(e.target.value);
    if ((e.target.value).length > 2){
      document.getElementById('submitButton').disabled = false;
    } else {
      document.getElementById('submitButton').disabled = true;
    }
  }

  const onBuscar = (e) => {
      e.preventDefault()
      PeticionGet(busqueda)
    }

  return (
    <section className={styles.box}>
      <form className={styles.form} onSubmit={onBuscar}>
        <input type='text' placeholder='Buscar noticias' onChange={onTextoChange}/>
        <button id='submitButton' type='submit' disabled={true} >Buscar</button>
      </form>
    </section>
  );
}
export default Buscador