import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        
        let cpf = this.obterCPF();
        
        let cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

    private obterCPF(): CPF {
        let opL = false;
        let cpf: CPF = new CPF('', new Date()); // Inicialização com valores vazios para poder utilizar  o return sem erro de uso antes da inicialização.
        
        while (!opL) {
            try {
                let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
                let datacpf = this.entrada.receberTexto(`Por favor informe a data de Emissão do seu CPF, no padrão dd/mm/yyyy: `);
                let partesData = datacpf.split('/');
                let [dia, mes, ano] = partesData.map(Number);
    
                this.validarData(dia, mes, ano);

                let dataEmissao = new Date(ano, mes - 1, dia);
                cpf = new CPF(valor, dataEmissao);
                opL = true;
            } catch (error){
                console.error("DATA INVALIDA !")
            }
        }
        return cpf;
    }

    private validarData(dia: number, mes: number, ano: number): void {
        if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
            throw new Error("Data de Emissão inválida");
        }
    }
}