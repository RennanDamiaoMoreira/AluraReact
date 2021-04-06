import React, { Component } from "react";
import "../css/materialize.css"
class FormularioCadastro extends Component {
 
  constructor (props){
    super(props);
    this.titulo="";
    this.nota="";
  }

  handleMudancaTitulo(evento){
    this.titulo = evento.target.value;
    
  }
  handleMudancaNota(evento){
    this.nota = evento.target.value;
   
  }
  criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo,this.nota);
   
  }
  render() {
    return (
      <form onSubmit={this.criarNota.bind(this)}>
        <input type="text" placeholder="titulo"  onChange={this.handleMudancaTitulo.bind(this)}></input>
        <textarea name="" placeholder="insira sua nota aqui"  onChange={this.handleMudancaNota.bind(this)}></textarea>
        <button className="btn " type="submit" >enviar</button>
      </form>
    );
  }
}
export default FormularioCadastro;
