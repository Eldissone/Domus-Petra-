import { Request, Response } from "express";
import { IConsultoriaRepository } from "../repositories/IConsultoriaRepository";
import { ITreinamentoRepository } from "../repositories/ITreinamentoRepository";


export class CreateTreinamentoService {

    constructor(private repository: ITreinamentoRepository) {

    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { categoria, contactoUser, conteudo, descricao, emailUser, idUser, imagem, tema } = request.body

        await this.repository.create({ categoria, contactoUser, conteudo, descricao, emailUser, idUser, imagem, tema })

        return response.status(201).json({ message: "Treinamento created with sucess" })
    }

}