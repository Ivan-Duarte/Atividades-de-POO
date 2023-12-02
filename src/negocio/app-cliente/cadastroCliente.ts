import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import RG from "../../modelo/rg"
import CPF from "../../modelo/cpf"
import Cadastro from "../prog-abstract/cadastro"
import Telefone from "../../modelo/telefone"

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
        let rgs = this.obterRGs();
        let telefones = this.obterTels();

        let cliente = new Cliente(nome, nomeSocial, cpf, rgs, telefones);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
    //Essa função tem os mesmos moldes da de CPF e RG porque quero facilitar a implementação de um filtro para verificar se o telefone ou DDD é valido.
    public obterTels(): Array<Telefone>{
        let telefones: Array<Telefone> = [];
        let addTel = true; //Operador lógico para verificar se existe mais telefones

        while (addTel) {
            let opL = false; //Operador lógico
            let telefone: Telefone = new Telefone('', ''); // Inicialização com valores vazios para poder utilizar  o return sem erro de uso antes da inicialização.
            while (!opL) {
                try {
                    let dddTel = this.entrada.receberTexto(`Por favor informe o DDD do seu número de Telefone:  `);
                    let numTel = this.entrada.receberTexto(`Por favor informe agora o seu número de Telefone: `);
                    telefone = new Telefone(dddTel, numTel);
                    opL = true;
                } catch (error){
                    console.error(`\n----------------------------\n       DDD ou Telefone Inválidos\n----------------------------`)
                }
            }
            telefones.push(telefone);

            // Perguntar se o usuário deseja adicionar outro RG
            let resposta = this.entrada.receberTexto(`Deseja adicionar outro número de Telefone? (s/n): `).toLowerCase();
            addTel = resposta === 's';
        }
        return telefones;
    }
    //Tentando entender meu código neh ? Hahaha, eu até acho que está bem organizado para ser sincero XD
    //Função para filtrar o erro de colocar valores incorretos na data do RG.
    public obterRGs(): Array<RG> {
        let rgs: Array<RG> = [];
        let addRG = true;

        while (addRG) {
            let opL = false; //Operador lógico
            let rg: RG = new RG('', new Date()); // Inicialização com valores vazios para poder utilizar  o return sem erro de uso antes da inicialização.
            while (!opL) {
                try {
                    let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                    let dataRG = this.entrada.receberTexto(`Por favor informe a data de Emissão do seu RG, no padrão dd/mm/yyyy: `);
                    let partesData = dataRG.split('/');
                    let [dia, mes, ano] = partesData.map(Number);
        
                    this.validarData(dia, mes, ano);
    
                    let dataEmissao = new Date(ano, mes - 1, dia);
                    rg = new RG(valorRG, dataEmissao);
                    opL = true;
                } catch (error){
                    console.error(`\n----------------------------\n       DATA INVALIDA !\nINSIRA UMA DATA VÁLIDA PARA O RG\n----------------------------`)
                }
            }
            rgs.push(rg);

            // Perguntar se o usuário deseja adicionar outro RG
            let resposta = this.entrada.receberTexto(`Deseja adicionar outro RG? (s/n): `).toLowerCase();
            addRG = resposta === 's';
        }
        return rgs;
    }
    //Função para filtrar o erro de colocar valores incorretos na data do CPF.
    //Quero depois tentar colocar um filtro para o número também
    public obterCPF(): CPF {
        let opL = false; //Operador lógico
        let cpf: CPF = new CPF('', new Date()); // Inicialização com valores vazios para poder utilizar  o return sem erro de uso antes da inicialização.
        
        while (!opL) {
            try {
                let valorcpf = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
                let datacpf = this.entrada.receberTexto(`Por favor informe a data de Emissão do seu CPF, no padrão dd/mm/yyyy: `);
                let partesData = datacpf.split('/');
                let [dia, mes, ano] = partesData.map(Number);
    
                this.validarData(dia, mes, ano);

                let dataEmissao = new Date(ano, mes - 1, dia);
                cpf = new CPF(valorcpf, dataEmissao);
                opL = true;
            } catch (error){
                console.error(`\n----------------------------\n       DATA INVALIDA !\nINSIRA UMA DATA VÁLIDA PARA O CPF\n----------------------------`)
            }
        }
        return cpf;
    }
    //Função para verificar se a data contem um valor válido type Number
    public validarData(dia: number, mes: number, ano: number): void {
        if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
            throw new Error("Data de Emissão inválida");
        }
    }
}