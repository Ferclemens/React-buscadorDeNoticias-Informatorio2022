import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
    <img className={styles.logo}src='https://cdn-icons-png.flaticon.com/512/2540/2540832.png' />
    <h5>Informatorio 2022</h5>
    <h5>Fernando O. Clemens</h5>
    </div>
  )
}

export default Footer