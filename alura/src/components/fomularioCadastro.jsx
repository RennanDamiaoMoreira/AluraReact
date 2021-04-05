import React, { Component } from "react";
import "../css/materialize.css"
class FormularioCadastro extends Component {
  constructor (){
    super();
    this.titulo="";
    this.nota="";
  }
  handleMudancaTitulo(evento){
    this.titulo = evento.target.value;
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="titulo"  onChange={this.handleMudancaTitulo}></input>
        <textarea name="" placeholder="insira sua nota aqui"></textarea>
        <button className="btn " type="submit" >enviar</button>
      </form>
    );
  }
}
export default FormularioCadastro;
