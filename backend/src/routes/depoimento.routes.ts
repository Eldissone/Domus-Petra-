import { Router } from "express"
import { DepoimentoRepository } from "../repositories/implementations/DepoimentoRepository"
import { CreateDepoimentoService } from "../services/CreateDepoimentoService"

const depoimentoRouter = Router()
const depoimentoRepository = new DepoimentoRepository()
const createDepoimentoService = new CreateDepoimentoService(depoimentoRepository)

depoimentoRouter.post("/", async (request, response) => {
    await createDepoimentoService.execute(request, response)
})



export {
    depoimentoRouter
}

