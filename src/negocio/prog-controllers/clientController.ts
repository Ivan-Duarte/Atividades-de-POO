import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"

export default class ClientController {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public selectCliente(numeroCpf: string) {
        let cpf = new CPF('', new Date())
        let clienteSelecionado = new Cliente('', '', cpf,[],[], new Date())

        this.clientes.forEach(cliente => {
            if (numeroCpf === cliente.cpf.getValor) {
                clienteSelecionado = cliente
            }
        })
        return clienteSelecionado
    }
    public verificarCpfExistente(numeroCpf: string): boolean {
        const cpfDigitado = new CPF(numeroCpf, new Date());

        for (const cliente of this.clientes) {
            if (cliente.cpf.getValor === cpfDigitado.getValor) {
                return true; // CPF existe na lista
            }
        }
        console.log("\n-----------------------------------------\nCPF inválido. Cliente não encontrado.");
        return false; // CPF não encontrado na lista
    }
}