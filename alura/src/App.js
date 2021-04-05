import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/fomularioCadastro";
import "./css/materialize.css";
class App extends Component {
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col s12 l4"><FormularioCadastro></FormularioCadastro></div>
          <div className="col s12 l8"><ListaDeNotas></ListaDeNotas></div>
        </div>
        
        
        
      </section>
    );
  }
}

export default App;
