import React from "react";
import ListaDeNotas from "./components/ListaDeNotas"

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="título" />
        <textarea placeholder="insira sua nota" />
        <button type="submit">enviar</button>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;
