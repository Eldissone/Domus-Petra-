import { Request, Response } from "express";
import { IUserRepository } from "../repositories/IUserRepository";

import { hash } from "bcrypt"

export class CreateUserService {

    constructor(private repository: IUserRepository) {
    }

    async execute(request: Request, response: Response): Promise<Response> {
        const {
            name, admin, contacto, email, password
        } = request.body
        const passwordHash = await hash(password, 8)
        await this.repository.create({
            name, admin, contacto, email, password: passwordHash
        })

        return response.status(201).json({
            message: "User created with sucess"
        })
    }

}