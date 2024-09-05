import { Request, Response } from "express";
import { IContactoRepository } from "../repositories/IContactoRepository";



export class CreateContactoService {

    constructor(private repository: IContactoRepository) {

    }

    async execute(request: Request, response: Response): Promise<Response> {

        const {
            nome,
            email,
            message
        } = request.body

        await this.repository.create({
            nome,
            email,
            message
        })

        return response.status(201).json({ message: "message created with sucess" });
    }

}