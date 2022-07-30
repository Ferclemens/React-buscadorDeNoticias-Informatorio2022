import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
    <a className={styles.gitHubLogo} href="https://github.com/Ferclemens/React-buscadorDeNoticias-Informatorio2022" target="_blank" rel="noopener noreferrer">
      <img className={styles.logo}src='https://cdn-icons-png.flaticon.com/512/1322/1322053.png'/>
    </a>
    <h3>React - Informatorio 2022</h3>
    <h3>Fernando O. Clemens</h3>
    </div>
  )
}

export default Footer