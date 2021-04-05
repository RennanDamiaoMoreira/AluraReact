import React, { Component } from "react";
import CardNotas from "./CardNota/CardNotas";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="">
        {Array.of("Trabalho", "estudo", "vagabs","tops").map((categoria,index) => {
          return (
            <li key={index}  className="col s12 l4">
              <CardNotas />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
