import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function NoticiaDetalle() {
  const params = useParams()
  console.log(params);
  
  useEffect(() => {
    
  },[])
  
  
  return (
    <div>
        <h1>{params.index}</h1>
        <h2>title</h2>
        <img src=''/>
        <p>description</p>
    </div>
  )
}

export default NoticiaDetalle