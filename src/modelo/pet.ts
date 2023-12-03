import Produto from "./produto"
import Servico from "./servico"

export default class Pet {
    
    public nome: string
    private tipo: string
    private raca: string
    private genero: string
    private dono: string
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>

    constructor(nome: string, raca: string, genero: string, tipo: string, dono: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.dono = dono
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getDono(){return this.dono}
    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}

    public atualizarPet(nome: string, raca: string, genero: string, tipo: string, dono: string): void {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.dono = dono
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public addProdutoPet(produtoConsumido: Produto): void {
        this.produtosConsumidos.push(produtoConsumido);
    }
    public addServicoPet(servicoConsumido: Servico): void {
        this.servicosConsumidos.push(servicoConsumido);
    }
}