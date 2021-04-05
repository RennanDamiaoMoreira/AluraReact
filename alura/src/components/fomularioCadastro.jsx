import React, { Component } from "react";
export class formularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="título" />
        <textarea placeholder="insira sua nota" />
        <button type="submit">enviar</button>
      </form>
    );
  }
}
