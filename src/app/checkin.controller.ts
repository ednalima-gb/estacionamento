import { Request, Response } from "express";
import { CheckinService } from "./checkin.service";

export class CheckinController {
    checkinService: CheckinService

    constructor(checkinService: CheckinService) {
        this.checkinService = checkinService
    }

    checkin(req: Request, res: Response) {
        const { carro, vaga } = req.body
        const checkin = this.checkinService.checkin(carro, vaga)
        res.json(checkin)
    }

}
