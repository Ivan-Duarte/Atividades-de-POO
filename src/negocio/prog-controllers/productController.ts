import Produto from "../../modelo/produto"

export default class ProdutoController {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        this.produtos = produtos
    }
    public selecionarProduto(nomeProduto: string) {
        let produtoSelecionado = new Produto('', 0)

        this.produtos.forEach(produto => {
            if (nomeProduto === produto.getNome) {
                produtoSelecionado = produto
            }
        })
        return produtoSelecionado
    }
}