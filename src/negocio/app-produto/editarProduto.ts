import Empresa from "../../modelo/empresa";
import ProductController from "../prog-controllers/productController";

import CadastroProduto from "./cadastroProduto";

export default class EditorProduto {
    static editar(empresa: Empresa, nome: string): void {
        let selecionadorProduto = new ProductController(empresa.getProdutos);
        let produto = selecionadorProduto.selectProduto(nome);

        let indice = empresa.getProdutos.indexOf(produto);

        if (indice !== -1) {
            const cadastroProduto = new CadastroProduto(empresa.getProdutos);
            const dadosAtualizados = cadastroProduto.obterDadosAtualizadosProduto();
            
            empresa.getProdutos[indice].nomeProduto = dadosAtualizados.nome;
            empresa.getProdutos[indice].valorProduto = dadosAtualizados.valor;

            console.log('\n---------------------------------------------------------\n               Produto atualizado com sucesso.\n---------------------------------------------------------');
        } else {
            console.log(`\n---------------------------------------------------------\n                 Produto não encontrado.\nVerifique se o nome do Produto foi digitado corretamente\n---------------------------------------------------------`);
        }   
    }
}