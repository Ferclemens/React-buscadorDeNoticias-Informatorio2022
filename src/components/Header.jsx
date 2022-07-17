import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.logo}src='https://cdn-icons-png.flaticon.com/512/2540/2540832.png' />
      <h1 className={styles.tittle}>Buscador de Noticias</h1>
    </div>
  )
}

export default Header