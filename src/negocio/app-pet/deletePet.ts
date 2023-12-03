import Empresa from "../../modelo/empresa";
import PetController from "../prog-controllers/petController";


export class ExclusaoPet {
  static excluirPet(empresa: Empresa, nomePet: string) {
    let selecionadorPet = new PetController(empresa.getPets);
    let pet = selecionadorPet.selectPet(nomePet);

    let indice = empresa.getPets.indexOf(pet);

    if (indice !== -1) {
      empresa.getPets.splice(indice, 1);
      console.log('\n----------------------------------------------\n           Pet excluído com sucesso.\n----------------------------------------------');
    } else {
      console.log(`\n----------------------------------------------\n               Pet não encontrado.\nVerifique se o Nome do Pet foi digitado corretamente\n----------------------------------------------`);
    }
  }
}