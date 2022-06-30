import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/header/header";
import Prato from "./components/Prato/Prato";

function App() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    fetch("https://pizza-restaurante.herokuapp.com/api/pratos/")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPratos(dados);
      });
  }, []);

  return (
    <>
     <Header/>
      <main>
        <section className="cardapio">
          {pratos.map(prato => 
          <Prato 
            key={prato.id} 
            nome={prato.nome} 
            imagem={prato.imagem}
            descricao={prato.descricao}
            preco={prato.preco}
          />)}
        </section>
      </main>
    </>
  );
}

export default App;
