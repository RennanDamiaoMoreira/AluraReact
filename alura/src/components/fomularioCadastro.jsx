import React, { Component } from "react";
class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="titulo"></input>
        <textarea name="" placeholder="insira sua nota aqui"></textarea>
        <button type="submit">enviar</button>
      </form>
    );
  }
}
export default FormularioCadastro;
