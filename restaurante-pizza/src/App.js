import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";
import "./App.css";
import Prato from "./components/Prato";

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
      <header className="header">
        <div className="banner-container">
          <img src={banner} alt="Banner mostrando uma pizza" />
        </div>
        <div className="logo-container">
          <img src={logo} alt="logo da Alura Pizza" />
        </div>
      </header>
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
