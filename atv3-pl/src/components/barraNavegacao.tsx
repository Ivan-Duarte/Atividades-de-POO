import React, { useState, MouseEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

interface BarraNavegacaoProps {
  tema: string;
  botoes: string[];
  seletorView: (valor: string, e: MouseEvent) => void;
}

const BarraNavegacao: React.FC<BarraNavegacaoProps> = (props) => {
  const [dropdownCadastrarAberto, setDropdownCadastrarAberto] = useState(false);
  const [dropdownConsumirAberto, setDropdownConsumirAberto] = useState(false);
  const [dropdownListagemAberto, setDropdownListagemAberto] = useState(false);
  const [dropdownConsumosAberto, setDropdownConsumosAberto] = useState(false);

  const alternarDropdownCadastrar = () => {
    setDropdownCadastrarAberto(!dropdownCadastrarAberto);
  };

  const alternarDropdownConsumir = () => {
    setDropdownConsumirAberto(!dropdownConsumirAberto);
  };

  const alternarDropdownListagem = () => {
    setDropdownListagemAberto(!dropdownListagemAberto);
  };

  const alternarDropdownConsumos = () => {
    setDropdownConsumosAberto(!dropdownConsumosAberto);
  };

  const gerarListaBotoes = () => {
    if (props.botoes.length <= 0) {
      return <></>;
    } else {
      let lista = props.botoes.map((valor) => {
        if (valor === "Cadastrar") {
          return (
            <li
              key={valor}
              className={`nav-item dropdown ${
                dropdownCadastrarAberto ? "show" : ""
              }`}
            >
              <a
                className={`nav-link dropdown-toggle ${
                  dropdownCadastrarAberto ? "active" : ""
                } text-white`}
                href="#"
                role="button"
                id="dropdownCadastrar"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={dropdownCadastrarAberto ? "true" : "false"}
                onClick={alternarDropdownCadastrar}
              >
                {valor}
              </a>
              <ul
                className={`dropdown-menu ${
                  dropdownCadastrarAberto ? "show" : ""
                }`}
                aria-labelledby="dropdownCadastrar"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => props.seletorView("Cliente", e)}
                  >
                    Cliente
                  </a>
                </li>
                {/* Adicione mais itens de dropdown conforme necessário */}
              </ul>
            </li>
          );
        } else if (valor === "Consumir") {
          return (
            <li
              key={valor}
              className={`nav-item dropdown ${
                dropdownConsumirAberto ? "show" : ""
              }`}
            >
              {/* Adicione o restante da lógica de dropdown para "Consumir" */}
            </li>
          );
        } else if (valor === "Listagem") {
          return (
            <li
              key={valor}
              className={`nav-item dropdown ${
                dropdownListagemAberto ? "show" : ""
              }`}
            >
              {/* Adicione o restante da lógica de dropdown para "Listagem" */}
            </li>
          );
        } else if (valor === "Consumos") {
          return (
            <li
              key={valor}
              className={`nav-item dropdown ${
                dropdownConsumosAberto ? "show" : ""
              }`}
            >
              {/* Adicione o restante da lógica de dropdown para "Consumos" */}
            </li>
          );
        } else {
          return (
            <li key={valor} className="nav-item">
              <a
                className="nav-link text-white"
                href="#"
                onClick={(e) => props.seletorView(valor, e)}
              >
                {valor}
              </a>
            </li>
          );
        }
      });

      return lista;
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="light"
        style={{ backgroundColor: "#AB8262", marginBottom: 10 }}
      >
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" style={{ color: "#faf6f6" }}>
            <img
              src="/iconePet2.png"
              width="25"
              height="25"
              className="d-inline-block align-top"
              alt=""
            />
            PetLovers
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">{gerarListaBotoes()}</ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BarraNavegacao;