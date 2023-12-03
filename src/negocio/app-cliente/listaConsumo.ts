import Cliente from "../../modelo/cliente";
import Listagem from "../prog-abstract/listagem";

export default class ListagemConsumo extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de Consumo de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.cpf.getValor);
            console.log(`Produtos: `);
            cliente.getProdutosConsumidos.forEach(produto => {
                console.log(`- ${produto.getNome} (R$ ${produto.getValor})`);
            });
            console.log(`Serviços: `);
            cliente.getServicosConsumidos.forEach(servico => {
                console.log(`- ${servico.getNome} (R$ ${servico.getValor})`);
            });
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}