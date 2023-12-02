import entrada from '../../io/entrada';
import Empresa from '../../modelo/empresa';
import ClientController from '../prog-controllers/clientController';


export class ExclusaoCliente {
  static excluirCliente(empresa: Empresa, cpf: string) {
    let selecionadorCliente = new ClientController(empresa.getClientes);
    let cliente = selecionadorCliente.selectCliente(cpf);

    let indice = empresa.getClientes.indexOf(cliente);

    if (indice !== -1) {
      empresa.getClientes.splice(indice, 1);
      console.log('\n---------------------------\n      Cliente excluído com sucesso.\n---------------------------');
    } else {
      console.log(`\n----------------------------------------------\n               Cliente não encontrado.\nVerifique se o CPF foi digitado corretamente\n----------------------------------------------`);
    }
  }
}