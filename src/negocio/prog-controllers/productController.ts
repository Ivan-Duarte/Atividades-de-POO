import Produto from "../../modelo/produto"

export default class ProductController {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        this.produtos = produtos
    }
    public selectProduto(nomeProduto: string) {
        let produtoSelecionado = new Produto('', 0)

        this.produtos.forEach(produto => {
            if (nomeProduto === produto.getNome) {
                produtoSelecionado = produto
            }
        })
        return produtoSelecionado
    }
}