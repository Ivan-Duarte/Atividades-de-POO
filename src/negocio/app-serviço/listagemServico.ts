import Servico from "../../modelo/servico";
import Listagem from "../prog-abstract/listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços:\n--------------------------------------`);
        
        this.servicos.forEach( servico => {
            console.log(`Nome do Serviço: ${servico.nomeServico}`);
            console.log(`Valor do Serviço: ${servico.valorServico}`);
            console.log(`--------------------------------------`);
        })
        
        console.log(`\n`);
    }
    //Continuo na luta ... 00h02 já :(
}