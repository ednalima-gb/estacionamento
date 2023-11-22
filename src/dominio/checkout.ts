import { Checkin } from "./checkin"


export class Checkout {
    dataSaida: Date
    checkin: Checkin
    tarifa: number = 0

    constructor(dataSaida: Date, checkin: Checkin) {
        this.dataSaida = dataSaida
        this.checkin = checkin
    }

    removerCarroVaga() {
        this.checkin.vaga.carro = null
    }

    desocuparVaga() {
        this.checkin.vaga.setOcupado(false)
    }

    calcularTarifa() {
        const horaEntrada = this.checkin.dataEntrada.getHours();
        const horaSaida = this.dataSaida.getHours();
        const tempo = horaSaida - horaEntrada;
        const tarifa = tempo * 5;
        this.tarifa = tarifa
    }


}
