import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/fomularioCadastro";
import "./css/materialize.css";
class App extends Component {
  constructor(){
    super();
    this.notas=[];
    
  }
  criarNota(titulo,texto){
   const novaNota = {titulo,texto};
   this.notas.push(novaNota);
   this.setState({
     
   })
   alert(this.notas.length)
  }
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col s12 l4"><FormularioCadastro criarNota={this.criarNota.bind(this)}></FormularioCadastro></div>
          <div className="col s12 l8"><ListaDeNotas notas={this.notas}></ListaDeNotas></div>
        </div>
        
        
        
      </section>
    );
  }
}

export default App;
