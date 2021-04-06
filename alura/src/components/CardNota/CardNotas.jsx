import React, { Component } from "react";
import "../../css/materialize.css";
class CardNotas extends Component {
  constructor(){
    super();
    this.handler = this.handler.bind(this);
  }
  excluirNota(evento){
    evento.preventDefault();
    evento.stopPropagation()
    this.props.excluirNota("this.props.bind(this.props.index)");

  }
  render() {
    return (
      <div>
        <div className="card blue-grey darken-1 ">
          <div className="card-content white-text">
            <span className="card-title">{this.props.titulo}</span>
            <p>
              {this.props.texto}
              <br/>
              {this.props.index}

            </p>
            <div class="card-action">
          
          <button className="btn red" onClick={this.excluirNota.bind(this)}>Excluir</button>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardNotas;
