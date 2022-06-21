import React from "react";
import "./Prato.css";

function Prato({ nome, preco, descricao, imagem }) {
  return (
    <div className="prato">
      <div className="imagem-container">
        <img src={imagem} alt={descricao} />
      </div>
      <div className="conteudo">
        <p className="nome">
          <strong>{nome}</strong>
        </p>
        <p className="descricao">
          <strong>{descricao}</strong>
        </p>
        <p className="preco">
          <strong>R$ {preco}</strong>
        </p>
      </div>
    </div>
  );
}

export default Prato;
