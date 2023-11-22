import { Carro, Checkin, Vaga } from "../dominio";

export class CheckinService {

    checkin(carro: Carro, vaga: Vaga): Checkin {
        const novoCarro = new Carro(carro)
        const novaVaga = new Vaga(vaga.numero, novoCarro)
        return new Checkin(new Date(), novaVaga)
    }
    
}
