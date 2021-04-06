import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/fomularioCadastro";
import "./css/materialize.css";
class App extends Component {
  constructor(){
    super();
    this.state={
      notas:[]
    }
    
  }
  criarNota(titulo,texto){
   const novaNota = {titulo,texto};
   const novoArrayNotas = [...this.state.notas,novaNota];
   const novoEstado={notas:novoArrayNotas}
  
   this.setState(novoEstado)
  
  }
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col s12 l4"><FormularioCadastro criarNota={this.criarNota.bind(this)}></FormularioCadastro></div>
          <div className="col s12 l8"><ListaDeNotas notas={this.state.notas}></ListaDeNotas></div>
        </div>
        
        
        
      </section>
    );
  }
}

export default App;
