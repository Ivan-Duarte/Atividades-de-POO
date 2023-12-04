import React from "react";

interface DetalhesServicoProps {
  tema: string;
  nome: string;
  valor: number;
}

const DetalhesServico: React.FC<DetalhesServicoProps> = (props) => {
  const { tema, nome, valor } = props;

  return (
    <div style={{ marginLeft: "40px", marginTop: "30px" }}>
      <p>
        <b>Nome:</b> {nome}
      </p>
      <p>
        <b>Valor:</b> {valor}
      </p>

      <button
        type="button"
        className="btn btn-success"
        style={{ width: "100px", marginRight: "20px" }}
      >
        Editar
      </button>
      <button
        type="button"
        className="btn btn-danger"
        style={{ width: "100px", left: "10px" }}
      >
        Excluir
      </button>
    </div>
  );
};

export default DetalhesServico;