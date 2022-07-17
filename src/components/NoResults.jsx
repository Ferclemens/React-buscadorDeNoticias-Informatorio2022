import React from 'react'
import styles from './NoResults.module.css'
import { Link, Outlet } from "react-router-dom";

function NoResults() {
  return (
    <div className={styles.container}>
    <h2>No hay noticias para la busqueda solicitada</h2>
    <img className={styles.emogi} src='https://cdn-icons-png.flaticon.com/512/725/725085.png'/>
    <Link to='/error'>Volver al Buscador</Link>
        <div>
        <Outlet />
        </div> 
    </div>
  )
}

export default NoResults