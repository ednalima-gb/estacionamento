import { CheckinController } from "./checkin.controller"
import { CheckinService } from "./checkin.service"



const checkinService = new CheckinService()
const checkinController = new CheckinController(checkinService)

export { checkinController }
