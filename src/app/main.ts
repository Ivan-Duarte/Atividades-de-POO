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
import CadastroProduto from "../negocio/app-produto/cadastroProduto";
import { ExclusaoProduto } from "../negocio/app-produto/deleteProduto";
import EditorProduto from "../negocio/app-produto/editarProduto";
import ListagemProdutos from "../negocio/app-produto/listagemProduto";
import CadastroServico from "../negocio/app-serviço/cadastroServico";
import { ExclusaoServico } from "../negocio/app-serviço/deleteServico";
import EditorServico from "../negocio/app-serviço/editarServico";
import ListagemServicos from "../negocio/app-serviço/listagemServico";
import PetController from "../negocio/prog-controllers/petController";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os Clientes`);
    console.log(`3 - Deletar Cliente por "CPF"`);
    console.log(`4 - Editar Cliente por "CPF"\n`);
    console.log(`5 - Cadastrar um Pet`);
    console.log(`6 - Listar todos os Pets`);
    console.log(`7 - Deletar Pet por "Nome"`);
    console.log(`8 - Editar Pet por "Nome"\n`);
    console.log(`9 - Cadastrar Produto`);
    console.log(`10 - Listar todos os Produtos`);
    console.log(`11 - Deletar Produto por "Nome"`);
    console.log(`12 - Editar Produto por "Nome"\n`);
    console.log(`13 - Cadastrar Serviço`);
    console.log(`14 - Listar todos os Serviços`);
    console.log(`15 - Deletar Serviço por "Nome"`);
    console.log(`16 - Editar Serviço por "Nome"\n`);
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
        case 9:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 10:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 11:
                let nomeProdutoDel = entrada.receberTexto('Digite o nome do Produto para exclusão: ');
                ExclusaoProduto.excluirProduto(empresa, nomeProdutoDel);
                break;
        case 12:
                let nomeProdutoEditar = entrada.receberTexto('Digite o nome do Produto para edição: ')            
                EditorProduto.editar(empresa, nomeProdutoEditar)
                break;
        case 13:
                let cadastroServico = new CadastroServico(empresa.getServicos)
                cadastroServico.cadastrar()
                break;
        case 14:
                let listagemServico = new ListagemServicos(empresa.getServicos)
                listagemServico.listar()
                break;
        case 15:
                let nomeServicoDel = entrada.receberTexto('Digite o nome do Serviço para exclusão: ');
                ExclusaoServico.excluirServico(empresa, nomeServicoDel);
                break; 
        case 16:
                let nomeServicoEditar = entrada.receberTexto('Digite o nome do Servico para edição: ')            
                EditorServico.editar(empresa, nomeServicoEditar)
                break;   
        case 0:
            execucao = false
            console.log(`\n----------------------------\n        Desligando...\n----------------------------`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}