import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "../prog-abstract/cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do Serviço`);
        let nomeServico = this.entrada.receberTexto('Por favor, informe o nome do serviço: ');
        let valorServico = this.entrada.receberNumero('Por favor, informe o valor do serviço: ');
        let servico = new Servico(nomeServico, valorServico);
        servico.nomeServico = nomeServico;
        servico.valorServico = valorServico;

        this.servicos.push(servico)
    }
    public obterDadosAtualizadosServico(): any {
        let nome = this.entrada.receberTexto('Novo nome do Serviço: ');
        let valor = this.entrada.receberNumero('Novo valor do Serviço: ');
        return {
            nome,
            valor,
        };
    }
}