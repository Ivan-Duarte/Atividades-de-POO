import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/app-cliente/cadastroCliente";
import { ExclusaoCliente } from "../negocio/app-cliente/deleteCliente";
import EditorCliente from "../negocio/app-cliente/editarCliente";
import ListagemClientes from "../negocio/app-cliente/listagemCliente";
import CadastroPet from "../negocio/app-pet/cadastroPet";
import { ExclusaoPet } from "../negocio/app-pet/deletePet";
import EditorPet from "../negocio/app-pet/editarPet";
import ListagemPets from "../negocio/app-pet/listagemPet";
import PetController from "../negocio/prog-controllers/petController";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Deletar Cliente por "CPF"`);
    console.log(`4 - Editar Cliente por "CPF"\n`);
    console.log(`5 - Cadastrar um Pet`);
    console.log(`6 - Listar todos os Pets`);
    console.log(`7 - Deletar Pet por "Nome"`);
    console.log(`8 - Editar Pet por "Nome"`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`\nPor favor, escolha uma opção: `)

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
            let cpfDel = entrada.receberTexto('Digite um CPF para exclusão: ');
            ExclusaoCliente.excluirCliente(empresa, cpfDel);
            break;
        case 4:
            let cpfEdit = entrada.receberTexto('Digite um CPF para edição: ')            
            EditorCliente.editar(empresa, cpfEdit)
            break;
        case 5:
            let cadastroPet = new CadastroPet(empresa.getPets, empresa.getClientes)
            cadastroPet.cadastrar()
            break;
        case 6:
            let listagemPet = new ListagemPets(empresa.getPets)
            listagemPet.listar()
            break;
        case 7:
            let nomePeteDel = entrada.receberTexto('Digite o Nome do Pet para exclusão: ');
            ExclusaoPet.excluirPet(empresa, nomePeteDel);
            break;
        case 8:
            let nomePetEditar = entrada.receberTexto('Digite um pet para edição: ')
            let selecionadorPetEditar = new PetController(empresa.getPets)
            let petEditar = selecionadorPetEditar.selectPet(nomePetEditar)
    
            let editorPet = new EditorPet()
            editorPet.editar(petEditar)
            break;
        case 0:
            execucao = false
            console.log(`\n----------------------------\n        Desligando...\n----------------------------`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}