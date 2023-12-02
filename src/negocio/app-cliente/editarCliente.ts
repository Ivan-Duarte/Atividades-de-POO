import Empresa from "../../modelo/empresa";
import ClientController from "../prog-controllers/clientController";
import CadastroCliente from "./cadastroCliente";


export default class EditorCliente {
    static editar(empresa: Empresa, cpf: string): void {
        let selecionadorCliente = new ClientController(empresa.getClientes);
        let cliente = selecionadorCliente.selectCliente(cpf);

        let indice = empresa.getClientes.indexOf(cliente);

        if (indice !== -1) {
            const cadastroCliente = new CadastroCliente(empresa.getClientes);
            const dadosAtualizados = cadastroCliente.obterDadosAtualizados();
            
            empresa.getClientes[indice].nome = dadosAtualizados.nome;
            empresa.getClientes[indice].nomeSocial = dadosAtualizados.nomeSocial;
            empresa.getClientes[indice].cpf = dadosAtualizados.cpf;
            empresa.getClientes[indice].rgs = dadosAtualizados.rgs;
            empresa.getClientes[indice].telefones = dadosAtualizados.telefones;

            console.log('\n---------------------------\n      Cliente atualizado com sucesso.\n---------------------------');
        } else {
            console.log(`\n----------------------------------------------\n               Cliente não encontrado.\nVerifique se o CPF foi digitado corretamente\n----------------------------------------------`);
        }
    }
}