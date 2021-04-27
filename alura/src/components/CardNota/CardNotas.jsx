import React, { Component } from "react";
import "../../css/materialize.css";
import {ReactComponent as DeleteSVG} from "../../assets/delete.svg";

class CardNotas extends Component {
  
  
  render() {
    return (
      <div>
        <div className="card blue-grey darken-1 ">
          <div className="card-content white-text">
            <span className="card-title">{this.props.titulo}</span>
            <p>
              {this.props.texto}
              <br/>
              

            </p>
            <div class="card-action">
          
          <button className="btn red" onClick={this.props.deletarNota} ><DeleteSVG/></button>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardNotas;
