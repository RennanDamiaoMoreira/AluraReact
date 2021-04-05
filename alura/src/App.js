import React from "react";
import ListaDeNotas from "./components/ListaDeNotas"

function App() {
  return (
    <div>
      <form>
        <input type="text" placeholder="título" />
        <textarea placeholder="insira sua nota" />
        <button type="submit">enviar</button>
      </form>
      <ListaDeNotas/>
    </div>
  );
}

export default App;
