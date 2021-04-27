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
  deletarNota(){
    let arrayNotas = this.state.notas;
    var index=arrayNotas.find(arrayNotas);
    arrayNotas.splice(0,1);
    console.log(index);
    this.setState({notas:arrayNotas});
  }
  render() {
    return (
      <section className="container">
        <div className="center">
          <div className="header blue-text lighten-1">
            <h3>Sistema de cadastro de lembretes</h3>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4"><FormularioCadastro criarNota={this.criarNota.bind(this)}></FormularioCadastro></div>
          <div className="col s12 l8"><ListaDeNotas apagarNota={this.deletarNota.bind(this)} notas={this.state.notas}></ListaDeNotas></div>
        </div>
        
        
        
      </section>
    );
  }
}

export default App;
