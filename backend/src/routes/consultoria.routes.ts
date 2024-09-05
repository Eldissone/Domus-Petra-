import { Router } from "express";
import { CreateConsultoriaService } from "../services/CreateConsultoriaService";
import { ConsultoriaRepository } from "../repositories/implementations/ConsultoriaRepository";

const consultoriaRouter = Router()
const consultoriaRepository = new ConsultoriaRepository()
const createConsultoriaService = new CreateConsultoriaService(consultoriaRepository)

consultoriaRouter.post("/", async (request, response) => {
    await createConsultoriaService.execute(request, response)
})


export {
    consultoriaRouter
}