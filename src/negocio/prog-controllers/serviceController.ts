import Servico from "../../modelo/servico"

export default class ServiceController {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        this.servicos = servicos
    }
    public selecionarServico(nomeServico: string) {
        let servicoSelecionado = new Servico('', 0)

        this.servicos.forEach(servico => {
            if (nomeServico === servico.getNome) {
                servicoSelecionado = servico
            }
        })
        return servicoSelecionado
    }
}