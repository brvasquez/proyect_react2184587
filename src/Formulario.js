import { Component } from "react";
import './css/formulario.css'




class Formulario extends Component {

  render() {
    return (
      <>
        <nav>
          <ul class="menu">
            <li><a href="/">Inicio</a></li>
            <li><a href="/Objetos">Contenido</a></li>
            <li><a href="/Formulario">Ingresar</a></li>
          </ul>
        </nav>

        <div className="formulario">
          <div class="login-page">
            <div class="form">
              <form class="login-form">
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido " />
                <input type="Gmail" placeholder="Email " />
                <input type="password" placeholder="password " />

                <button>Ingresar</button>
                <p class="message"> Terminos y condiciones  <a href="#">Leer</a></p>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }

}
export default Formulario;