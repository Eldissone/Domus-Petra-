import { Router } from "express"
import { CreateContactoService } from "../services/CreateContactoService"
import { ContactoRepository } from "../repositories/implementations/ContactoRepository"


const contactoRouter = Router()
const contactoRepository = new ContactoRepository()
const createContactoService = new CreateContactoService(contactoRepository)

contactoRouter.post("/", async (request, response) => {
    await createContactoService.execute(request, response)
})


export {
    contactoRouter
}