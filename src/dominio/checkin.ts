import { Vaga } from "./vaga"


export class Checkin {
    dataEntrada: Date
    vaga: Vaga

    constructor(dataEntrada: Date, vaga: Vaga) {
        this.dataEntrada = dataEntrada
        this.vaga = vaga
    }
}