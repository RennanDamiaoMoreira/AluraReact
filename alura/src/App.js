import React from "react";
function App() {
  return (
    <div>
      <form>
        <input type="text" placeholder="título" />
        <textarea placeholder="insira sua nota" />
        <button type="submit">enviar</button>
      </form>
      <ul>
        <li>
          <section>
            <header>
              <h3>Título</h3>
            </header>
            <p>escreva sua nota</p>
          </section>
        </li>
      </ul>
    </div>
  );
}

export default App;
