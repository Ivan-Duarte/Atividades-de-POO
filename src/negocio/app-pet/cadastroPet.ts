import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Pet from "../../modelo/pet"
import Cadastro from "../prog-abstract/cadastro"
import ClientController from "../prog-controllers/clientController"

export default class CadastroPet extends Cadastro {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.pets = pets
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let numeroCpf = this.entrada.receberTexto(`Por favor informe o CPF do Dono: `)
        let selecionadorPet = new ClientController(this.clientes)

        //Verificação do CPF que o Cliente Inseriu.
        if (!selecionadorPet.verificarCpfExistente(numeroCpf)) {
            console.log("Operação cancelada devido a CPF inválido.\n-----------------------------------------\n");
            return;
        }

        let cliente = selecionadorPet.selectCliente(numeroCpf)

        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do pet: `);
        let dono = cliente.nome

        let pet = new Pet(nome, raca, genero, tipo, dono);
        this.pets.push(pet)
        
        cliente.addPet(pet)
        console.log(`\nPet cadastrado pelo cliente ${cliente.nome}\n`);
    }
}
