import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Pet from "../../modelo/pet"
import Servico from "../../modelo/servico"
import Purchased from "../prog-abstract/purchase"
import ClientController from "./clientController"
import PetController from "./petController"
import ServiceController from "./serviceController"

export default class PurchaseServico extends Purchased {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(servicos: Array<Servico>, clientes: Array<Cliente>, pets: Array<Pet>) {
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.pets = pets
        this.entrada = new Entrada()
    }

    public purchase(): void {
        console.log(`\nInício da requisição de serviço`);
        let numeroCpf = this.entrada.receberTexto(`Por favor informe o CPF do cliente: `)
        let selecionador = new ClientController(this.clientes)
        let cliente = selecionador.selectCliente(numeroCpf)

        let nomePet = this.entrada.receberTexto(`Por favor, informe o nome do pet: `)
        let selecionadorPet = new PetController(this.pets)
        let pet = selecionadorPet.selectPet(nomePet)

        let nomeServico = this.entrada.receberTexto('Por favor, informe o nome do servico: ');
        let selecionadorNome = new ServiceController(this.servicos)
        let servico = selecionadorNome.selectServico(nomeServico)
        
        cliente.addServico(servico)
        pet.addServicoPet(servico)
        console.log(`\nServico adquirido pelo cliente ${cliente.nome}\n`);
    }
}