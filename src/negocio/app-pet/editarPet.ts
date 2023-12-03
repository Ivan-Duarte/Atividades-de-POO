import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";


export default class EditorPet {
    private entrada: Entrada
    constructor() {
        this.entrada = new Entrada()
    }

    public editar(pet: Pet): void {
        console.log(`\nInício da edição do pet`);
        let novoNome = this.entrada.receberTexto(`Novo nome do pet: `);
        let novoTipo = this.entrada.receberTexto(`Novo tipo do pet: `);
        let novaRaca = this.entrada.receberTexto(`Nova raça do pet: `);
        let novoGenero = this.entrada.receberTexto(`Novo gênero do pet: `);
        let novoDono = this.entrada.receberTexto(`Novo dono do pet: `);
        pet.atualizarPet(novoNome, novaRaca, novoGenero, novoTipo, novoDono);

        console.log(`\Edição concluída :)\n`);
    }
}