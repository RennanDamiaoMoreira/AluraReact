import React, { Component } from "react";
import CardNotas from "./CardNota/CardNotas";

class ListaDeNotas extends Component {
  
  render() {
    
    return (
      <ul className="">
        {this.props.notas.map((nota,index) => {
          return (
            <li key={index}  className="col s12 l4">
              <CardNotas titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
