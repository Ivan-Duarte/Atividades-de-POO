import Empresa from "../../modelo/empresa";
import ProductController from "../prog-controllers/productController";


export class ExclusaoProduto {
    static excluirProduto(empresa: Empresa, nome: string) {
      let selecionadorProduto = new ProductController(empresa.getProdutos);
      let produto = selecionadorProduto.selectProduto(nome);
  
      let indice = empresa.getProdutos.indexOf(produto);
  
      if (indice !== -1) {
        empresa.getProdutos.splice(indice, 1);
        console.log('\n----------------------------------------------\n        Produto excluído com sucesso.\n----------------------------------------------');
      } else {
        console.log(`\n----------------------------------------------\n               Produto não encontrado.\nVerifique se o Nome do Produto foi digitado corretamente\n----------------------------------------------`);
      }
    }
  }