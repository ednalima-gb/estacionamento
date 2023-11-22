import { Carro } from "./carro"


export class Vaga {
    numero: number
    ocupado: boolean = false
    carro: Carro | null

    constructor(numero: number, carro: Carro) {
        this.numero = numero
        this.carro = carro
    }

    setOcupado(ocupado: boolean) {
        this.ocupado = ocupado
    }
}