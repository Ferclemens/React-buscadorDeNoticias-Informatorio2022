import React from "react";
import { Link, Outlet } from "react-router-dom";

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
        <div>
          <h2>Se ha producido un error!</h2>
          <img src="emogi" />
          <p>tipo: {this.state.mensaje}</p>
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

