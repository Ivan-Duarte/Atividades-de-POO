export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string
    private dono: string

    constructor(nome: string, raca: string, genero: string, tipo: string, dono: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.dono = dono
    }

    public get getDono(){return this.dono}
    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
}