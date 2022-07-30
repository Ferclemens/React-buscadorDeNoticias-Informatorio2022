import React from 'react'
import styles from './NoMatch404.module.css'
import { Link, Outlet } from "react-router-dom";

function NoMatch404() {
    return (
        <div className={styles.container}>
        <h1>Error 404</h1>
        <h3>No se encuentra la página - URL inválida</h3>
        <img className={styles.emogi} src='https://cdn-icons-png.flaticon.com/512/463/463612.png'/>
        <Link className={styles.link} to='/error'>Volver al Buscador</Link>
            <div>
            <Outlet />
            </div> 
        </div>
      )
}

export default NoMatch404