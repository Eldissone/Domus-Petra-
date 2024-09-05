import { Router } from "express";
import { TreinamentoRepository } from "../repositories/implementations/TreinamentoRepository";
import { CreateTreinamentoService } from "../services/CreateTreinamentoService";

const treinamentoRouter = Router()
const treinamentoRepository = new TreinamentoRepository()
const createTreinamentoService = new CreateTreinamentoService(treinamentoRepository)

treinamentoRouter.post("/", async (request, response) => {
    await createTreinamentoService.execute(request, response)
})


export {
    treinamentoRouter
}