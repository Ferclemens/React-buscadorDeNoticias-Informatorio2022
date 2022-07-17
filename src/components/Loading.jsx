import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.container}>
        <div className={styles.loading}>
          <CircularProgress color="inherit"/>
          <h3>Loading...</h3>
        </div>
    </div>
  )
}

export default Loading