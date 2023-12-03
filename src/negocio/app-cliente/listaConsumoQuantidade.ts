import Cliente from "../../modelo/cliente";
import Listagem from "../prog-abstract/listagem";

export default class ListagemConsQuant extends Listagem {
    private clientes: Array<Cliente>;
  
    constructor(clientes: Array<Cliente>) {
      super();
      this.clientes = clientes;
    }
  
    public listar(): void {
        console.log(`\nTop 10 Clientes que mais consumiram Produtos ou Serviços || Quantidade:`);
      
        const clientesOrdenados = this.clientes.sort((a, b) => {
        const totalA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
        const totalB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
        return totalB - totalA;
    });
        const top10Clientes = clientesOrdenados.slice(0, 10);
        top10Clientes.forEach((cliente, index) => {
            console.log(`\n${index + 1}. Cliente: ${cliente.nome}`);
            console.log(`   Total de produtos e serviços consumidos: ${cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length}`);
        });
    }      
}