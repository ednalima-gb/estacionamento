export interface CarroInterface {
    placa: string
    modelo: string
    condutor: string
}


export class Carro {
    placa: string = ""
    modelo: string = ""
    condutor: string = ""

    constructor(carro: CarroInterface) {
        this.condutor = carro.condutor
        this.modelo = carro.modelo
        this.placa = carro.placa
    }

}