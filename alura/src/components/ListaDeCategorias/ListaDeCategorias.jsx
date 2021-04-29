import React, { Component } from "react";
class ListaDeCategorias extends Component {
    eventInput(e){
        if (e.key=="Enter"){
            
        }
    }
  state = {};
  render() {
    return (
      <section>
        <ul>
          <li>
              <button className="btn">categorias</button>
              </li>
          
        </ul>
        <input type="text" name="" id="" placeholder="Add Categoria " onKeyUp={this.eventInput.bind(this)} />
      </section>
    );
  }
}

export default ListaDeCategorias;
