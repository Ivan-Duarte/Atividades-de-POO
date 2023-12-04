import React from "react";

interface FormularioCadastroProdutoProps {
  tema: string;
}

const FormularioCadastroProduto: React.FC<FormularioCadastroProdutoProps> = (props) => {
  const { tema } = props;

  return (
    <div className="container-fluid" style={{ marginLeft: "30px" }}>
      <form>
        <div className="input-group mb-3" style={{ width: "600px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            aria-label="Nome"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3" style={{ width: "600px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Valor"
            aria-label="Valor"
            aria-describedby="basic-addon1"
          />
        </div>
        <button
          className="btn btn-secondary"
          type="submit"
          style={{
            backgroundColor: "#AB8262",
            width: "100px",
            marginRight: "20px",
            marginBottom: "30px",
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default FormularioCadastroProduto;