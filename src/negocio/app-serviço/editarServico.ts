import Empresa from "../../modelo/empresa";
import ServiceController from "../prog-controllers/serviceController";
import CadastroServico from "./cadastroServico";

export default class EditorServico {
    static editar(empresa: Empresa, nome: string): void {
        let selecionadorServico = new ServiceController(empresa.getServicos);
        let servico = selecionadorServico.selectServico(nome);

        let indice = empresa.getServicos.indexOf(servico);

        if (indice !== -1) {
            const cadastroServico = new CadastroServico(empresa.getServicos);
            const dadosAtualizados = cadastroServico.obterDadosAtualizadosServico();
            
            empresa.getServicos[indice].nomeServico = dadosAtualizados.nome;
            empresa.getServicos[indice].valorServico = dadosAtualizados.valor;

            console.log('\n---------------------------------------------------------\n               Serviço atualizado com sucesso.\n---------------------------------------------------------');
        } else {
            console.log(`\n---------------------------------------------------------\n                 Serviço não encontrado.\nVerifique se o nome do Serviço foi digitado corretamente\n---------------------------------------------------------`);
        }
    }
}