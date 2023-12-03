import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Pet from "../../modelo/pet"
import Produto from "../../modelo/produto"
import Purchased from "../prog-abstract/purchase"
import ClientController from "./clientController"
import PetController from "./petController"
import ProductController from "./productController"

export default class PurchaseProduto extends Purchased{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(produtos: Array<Produto>, clientes: Array<Cliente>, pets: Array<Pet>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.pets = pets
        this.entrada = new Entrada()
    }

    public purchase(): void {
        console.log(`\nInício da requisição de produto`);
        let numeroCpf = this.entrada.receberTexto(`Por favor, informe o CPF do cliente: `)
        let selecionador = new ClientController(this.clientes)
        let cliente = selecionador.selectCliente(numeroCpf)

        let nomePet = this.entrada.receberTexto(`Por favor, informe o nome do pet: `)
        let selecionadorPet = new PetController(this.pets)
        let pet = selecionadorPet.selectPet(nomePet)

        let nomeProduto = this.entrada.receberTexto('Por favor, informe o nome do produto: ');
        let selecionadorNome = new ProductController(this.produtos)
        let produto = selecionadorNome.selectProduto(nomeProduto)
        
        cliente.addProduto(produto)
        pet.addProdutoPet(produto)
        console.log(`\nProduto adquirido pelo cliente ${cliente.nome}\n`);
    }
}
