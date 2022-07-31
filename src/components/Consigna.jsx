import React from 'react'
import styles from './Consigna.module.css'

function Consigna() {
  return (
    <div className={styles.container}>
      <h1>Trabajo Práctico React - Informatorio 2022</h1>
      <h2>Escenario</h2>
      <h4>Se solicita la construcción de un buscador de noticias que cumpla con ciertas validaciones.
        Para poder realizar este proyecto, deberán registrarse en el sitio: https://newsapi.org/
        Al obtener la apikey, tendrán disponible un endpoint, que les permitirá realizar la
        búsqueda de noticias.
        La información de los parámetros requeridos por el endpoint lo van a poder encontrar
        en: https://newsapi.org/docs/endpoints/everything.</h4>
        <h4>EJEMPLO de BUSQUEDA: https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY&page=1&pageSize=1
        0&language=es</h4>
      <h2>Validaciones Generales</h2>
      <ul>
        <li>El buscador debe estar disponible ya sea en la raíz (http://localhost) o en la ruta
          /buscador (http://localhost/buscador).</li>
        <li>En caso que el usuario ingrese en una url inválida, se debe presentar una página
          de 404, con el mensaje recurso no encontrado, con los estilos apropiados.</li>
        <li>El proyecto debe contener pruebas unitarias.</li>
        <li>El proyecto se deberá subir a un repositorio en Github.</li>
        <li>La aplicación debe contener un Footer y Header, acorde a los estilos escogidos.</li>
        <li>Los estilos, colores y fuentes quedan a criterio del desarrollador.</li>
        <li>Uso de librerías/frameworks como mui, bootstrap, styled-components, etc. es opcional.</li>
      </ul>
      <h2>Validaciones de busqueda</h2>
      <ul>
        <li>No se debe realizar la búsqueda a menos que el usuario haya escrito al menos 3
          caracteres.</li>
        <li>El botón buscar se debe habilitar cuando el input cumpla con la condición
          anterior.</li>
        <li>la búsqueda puede realizarse apretando la tecla enter del teclado (opcional).</li>
        <li>Se deberá presentar un spinner/loading para que el usuario sepa de que se está
          realizando un procesamiento.</li>
        <li>En caso de que ocurra algún fallo, se deberá presentar un mensaje adecuado,
          explicando el error al usuario.</li>
        <li>En caso de que no haya resultados, se deberá presentar un mensaje adecuado,
          que indique que no hay resultados para la búsqueda.</li>
        <li>La búsqueda sólo debe realizarse en noticias en español.</li>
      </ul>
      <h2>Validaciones de resultados</h2>
      <p>Por cada noticia obtenida, se debe presentar:</p>
      <ul>
        <li>El nombre de la plataforma de origen de la noticia.</li>
        <li>El título de la noticia.</li>
        <li>La imagen de portada de la noticia.</li>
        <li>La fecha de publicación de la noticia en formato: dd-mm-aaaa - hh:mm hs.
          Ejemplo: Publicado el: 28-06-2022 a las 03:00 hs. (Para esto valerse de la librería
          Luxon Date: https://moment.github.io/luxon/#/?id=luxon).</li>
        <li>Cuando el usuario haga click sobre una noticia, la misma deberá de abrirse en
          una nueva pestaña.</li>
      </ul>
      <h2>Validaciones de Listado de Noticias</h2>
      <ul>
        <li>Mostrar la leyenda: Está viendo 10 noticias de (totalResults) resultados.</li>
        <li>Paginación, donde se presenten 10 noticias por vez.</li>
        <li>Se puede optar por un Infinite Scroll (opcional).</li>
        <li>Lo importante es que se vean 10 noticias por página.</li>
      </ul>

    </div>
  )
}

export default Consigna