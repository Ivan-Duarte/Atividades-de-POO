import Pet from "../../modelo/pet"


export default class PetController {
    private pets: Array<Pet>
    constructor(pets: Array<Pet>) {
        this.pets = pets
    }
    public selectPet(nomePet: string) {
        let petSelecionado = new Pet('','','','','')

        this.pets.forEach(pet => {
            if (nomePet === pet.getNome) {
                petSelecionado = pet
            }
        })
        return petSelecionado
    }
}