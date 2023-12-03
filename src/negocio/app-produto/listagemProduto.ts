import Produto from "../../modelo/produto";
import Listagem from "../prog-abstract/listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:\n--------------------------------------`);
        
        this.produtos.forEach( produto => {
            console.log(`Nome do produto: ${produto.nomeProduto}`);
            console.log(`Valor do produto: ${produto.valorProduto}`);
            console.log(`--------------------------------------`);
        })
        
        console.log(`\n`);
    }
    //Ja desisti de comentar todo código certinho, estou a quase 12h programando
    //Minha cabeça já está doendo e eu preciso terminar isso.
    //Se quiser saber como as funções estão funcionando da uma olhada na pasta app-client, foi aonde eu mais detalhei...
}