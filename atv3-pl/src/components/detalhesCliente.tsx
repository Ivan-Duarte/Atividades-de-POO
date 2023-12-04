import React from "react";

interface DetalhesClienteProps {
  tema: string;
  nome: string;
  nomeSocial: string;
  cpf: string;
  rg: string;
  dataCpf: string;
  dataRg: string;
  telefone: string;
  produtosConsumidos: string;
  servicosConsumidos: string;
}

const DetalhesCliente: React.FC<DetalhesClienteProps> = (props) => {
  const {
    tema,
    nome,
    nomeSocial,
    cpf,
    rg,
    dataCpf,
    dataRg,
    telefone,
    produtosConsumidos,
    servicosConsumidos,
  } = props;

  return (
    <div style={{ marginLeft: "40px", marginTop: "30px" }}>
      <p>
        <b>Nome:</b> {nome}
      </p>
      <p>
        <b>Nome Social:</b> {nomeSocial}
      </p>
      <p>
        <b>CPF:</b> {cpf}
      </p>
      <p>
        <b>Data de emissão CPF:</b> {dataCpf}
      </p>
      <p>
        <b>RG:</b> {rg}
      </p>
      <p>
        <b>Data de emissão RG:</b> {dataRg}
      </p>
      <p>
        <b>Telefone:</b> {telefone}
      </p>
      <p>
        <b>Produtos consumidos:</b> {produtosConsumidos}
      </p>
      <p>
        <b>Serviços consumidos:</b> {servicosConsumidos}
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

export default DetalhesCliente;