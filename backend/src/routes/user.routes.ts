import { Router } from "express";
import { CreateUserService } from "../services/CreateUserSevice";
import { UserRepository } from "../repositories/implementations/UserRepository";
import { AuthenticatedUserService } from "../services/AuthenticatedUserService";

const userRouter = Router()
const userRepository = new UserRepository()
const createUserService = new CreateUserService(userRepository)

userRouter.post("/", async (request, response) => {
    await createUserService.execute(request, response)
})

userRouter.post("/login", async (request, response) => {
    const authenticatedUserService = new AuthenticatedUserService(userRepository)
    await authenticatedUserService.execute(request, response)

})




export {
    userRouter
}