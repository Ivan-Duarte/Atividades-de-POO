import Cliente from "../../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\n\nLista de todos os clientes:\n--------------------------------------`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ${cliente.getCpf.getValor}, Data de Emissão: ${this.formatarData(cliente.getCpf.getDataEmissao)}`);
            console.log(`RGs:`);
            cliente.getRgs.forEach(rg => {
                console.log(`RG: ${rg.getValor}, Data de Emissão: ${this.formatarData(rg.getDataEmissao)}`);
            });
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    private formatarData(data: Date): string {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }
}