import express from "express"
import cors from "cors"
import { carroController } from "./app/carro-controller.factory"


const app = express()

app.use(cors())
app.use(express.json())




app.post("/carro", carroController.criarCarro.bind(carroController))


app.listen(3000, () => {
    console.log("rodando")
})
