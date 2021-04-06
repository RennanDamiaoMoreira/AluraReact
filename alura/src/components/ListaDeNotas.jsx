import React, { Component } from "react";
import CardNotas from "./CardNota/CardNotas";

class ListaDeNotas extends Component {
  
  render() {
    
    return (
      <ul className="">
        {this.props.notas.map((nota,index) => {
          return (
            <li key={index}  className="col s12 l4">
              <CardNotas  nota={this.props.notas[index]}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
