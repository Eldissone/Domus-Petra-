import { Request, Response } from "express";
import { IConsultoriaRepository } from "../repositories/IConsultoriaRepository";


export class CreateConsultoriaService {

    constructor(private repository: IConsultoriaRepository) {

    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { categoria, contactoUser, conteudo, descricao, emailUser, idUser, imagem, tema } = request.body

        await this.repository.create({ categoria, contactoUser, conteudo, descricao, emailUser, idUser, imagem, tema })

        return response.status(201).json({ message: "Consultoria created with sucess" })
    }

}