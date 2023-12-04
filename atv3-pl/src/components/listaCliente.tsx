import React from "react";

interface ListaClienteProps {
  tema: string;
}

const ListaCliente: React.FC<ListaClienteProps> = (props) => {
  const { tema } = props;

  const seletorView = (view: string) => {
  };

  return (
    <div className="container-fluid" style={{ marginLeft: "30px" }}>
      <div className="list-group" style={{ width: "600px" }}>
        <a
          href="/cliente-x"
          className="list-group-item list-group-item-action"
          data-cliente-id="1"
          onClick={(e) => seletorView("DetalhesCliente")}
        >
          Cliente 1
        </a>
        <a
          href="/cliente-x"
          className="list-group-item list-group-item-action"
          data-cliente-id="2"
          onClick={(e) => seletorView("DetalhesCliente")}
        >
          Cliente 2
        </a>
        <a
          href="/cliente-x"
          className="list-group-item list-group-item-action"
          data-cliente-id="3"
          onClick={(e) => seletorView("DetalhesCliente")}
        >
          Cliente 3
        </a>
        <a
          href="/cliente-x"
          className="list-group-item list-group-item-action"
          data-cliente-id="4"
          onClick={(e) => seletorView("DetalhesCliente")}
        >
          Cliente 4
        </a>
        <a
          href="/cliente-x"
          className="list-group-item list-group-item-action"
          data-cliente-id="5"
          onClick={(e) => seletorView("DetalhesCliente")}
        >
          Cliente 5
        </a>
        <a
          href="/cliente-x"
          className="list-group-item list-group-item-action"
          data-cliente-id="6"
          onClick={(e) => seletorView("DetalhesCliente")}
        >
          Cliente 6
        </a>
      </div>
    </div>
  );
};

export default ListaCliente;