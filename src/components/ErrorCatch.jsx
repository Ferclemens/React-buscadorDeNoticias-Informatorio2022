import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from './ErrorCatch.module.css'

export default class ErrorCatch extends React.Component {
  state = {
    tieneError: false,
    mensaje: '',
  }
  componentDidCatch(error) {
    this.setState({
      tieneError: true,
      mensaje: error.message,
    });
  }
  render() {
    if(this.state.tieneError){
      return (
        <div className={styles.container}>
          <h2>Se ha producido un error!</h2>
          <img className={styles.emogi} src="https://cdn-icons-png.flaticon.com/512/725/725099.png" />
          <Link to='/error'>Volver al Buscador</Link>
          <div>
            <Outlet />
          </div> 
        </div>
      );
    }
    return this.props.children;
  }
}

