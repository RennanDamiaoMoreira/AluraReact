import React, { Component } from "react";
import "../../css/materialize.css";
class CardNotas extends Component {
  render() {
    return (
      <div>
        <div className="card blue-grey darken-1 ">
          <div className="card-content white-text">
            <span className="card-title">{this.props.titulo}</span>
            <p>
              {this.props.texto}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardNotas;
