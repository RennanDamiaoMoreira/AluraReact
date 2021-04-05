import React, { Component } from "react";
import CardNotas from "./CardNota/CardNotas";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "estudo", "vagabs","tops").map((categoria,index) => {
          return (
            <li key={index}>
              <CardNotas />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
