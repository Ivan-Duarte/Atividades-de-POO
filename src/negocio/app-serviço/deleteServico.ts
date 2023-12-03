import Empresa from "../../modelo/empresa";
import ServiceController from "../prog-controllers/serviceController";

export class ExclusaoServico {
    static excluirServico(empresa: Empresa, nome: string) {
      let selecionadorServico = new ServiceController(empresa.getServicos);
      let servico = selecionadorServico.selectServico(nome);
  
      let indice = empresa.getServicos.indexOf(servico);
  
      if (indice !== -1) {
        empresa.getServicos.splice(indice, 1);
        console.log('\n---------------------------------------------------------\n               Serviço excluído com sucesso.\n---------------------------------------------------------');
      } else {
        console.log(`\n---------------------------------------------------------\n               Serviço não encontrado.\nVerifique se o Nome do Serviço foi digitado corretamente\n---------------------------------------------------------`);
      }
    }
  }