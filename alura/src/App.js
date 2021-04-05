import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/fomularioCadastro";
import "./css/materialize.css"
class App extends Component {
  render() {
    return (
      <section className="container">
        <FormularioCadastro></FormularioCadastro>
        <ListaDeNotas></ListaDeNotas>
      </section>
    );
  }
}

export default App;
