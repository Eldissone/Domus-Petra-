import { Router } from "express";
import { PalestraRepository } from "../repositories/implementations/PalestraRepository";
import { CreatePalestraService } from "../services/CreatePalestraService";

const palestraRouter = Router()
const palestraRepository = new PalestraRepository()
const createPalestraService = new CreatePalestraService(palestraRepository)

palestraRouter.post("/", async (request, response) => {
    await createPalestraService.execute(request, response)
})


export {
    palestraRouter
}