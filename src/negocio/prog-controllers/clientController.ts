import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"

export default class ClientController {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public selectCliente(numeroCpf: string) {
        let cpf = new CPF('', new Date())
        let clienteSelecionado = new Cliente('', '', cpf,[],[])

        this.clientes.forEach(cliente => {
            if (numeroCpf === cliente.getCpf.getValor) {
                clienteSelecionado = cliente
            }
        })
        return clienteSelecionado
    }
}