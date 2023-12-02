import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/app-cliente/cadastroCliente";
import { ExclusaoCliente } from "../negocio/app-cliente/deleteCliente";
import ListagemClientes from "../negocio/app-cliente/listagemClientes";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Deletar cliente por CPF`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let cpf = entrada.receberTexto('Digite um CPF para exclusão: ');
            ExclusaoCliente.excluirCliente(empresa, cpf);
            break;
        case 0:
            execucao = false
            console.log(`\n----------------------------\n        Desligando...\n----------------------------`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}