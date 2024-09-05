import { Request, Response } from "express";
import { IUserRepository } from "../repositories/IUserRepository";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";

interface IReponse {
    token: string
    user: {
        name: string
        email: string
    }
}

export class AuthenticatedUserService {

    constructor(private repositoryUser: IUserRepository) { }

    async execute(request: Request, response: Response): Promise<Response> {
        const {
            email,
            password
        } = request.body

        const user = await this.repositoryUser.findByEmail(email)
        if (!user) throw new Error("Email ou senha incorrecto")
        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) throw new Error("Email ou senha incorrecto")
        const token = sign({}, "asdfghjkl", { expiresIn: "1d", subject: user.id })
        const tokenReturn: IReponse = {
            user: {
                name: user.name,
                email: user.email

            },
            token
        }
        return response.status(200).json(tokenReturn)
    }

}