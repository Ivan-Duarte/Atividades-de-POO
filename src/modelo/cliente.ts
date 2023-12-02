import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private _cpf: CPF
    private _rgs: Array<RG>
    public dataCadastro: Date
    private _telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF, rgs: Array<RG>, telefones: Array<Telefone>, dataCadastro: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this._cpf = cpf
        this._rgs = rgs
        this.dataCadastro = dataCadastro
        this._telefones = telefones
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get cpf(): CPF {
        return this._cpf;
    }
    public set cpf(novoCPF: CPF) {
        this._cpf = novoCPF;
    }

    public get rgs(): Array<RG> {
        return this._rgs
    }
    public set rgs(novoRG: Array<RG>){
        this._rgs = novoRG;
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get telefones(): Array<Telefone> {
        return this._telefones;
    }
    public set telefones(novosTelefones: Array<Telefone>) {
        this._telefones = novosTelefones;
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
    public addPet(pet: Pet): void {
        this.pets.push(pet);
    }
}