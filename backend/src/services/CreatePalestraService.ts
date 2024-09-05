import { Request, Response } from "express";
import { IPalestraRepository } from "../repositories/IPalestraRepository";


export class CreatePalestraService {

    constructor(private repository: IPalestraRepository) {

    }

    async execute(request: Request, response: Response): Promise<Response> {
        const { categoria, contacto, conteudo, descricao, dataPalestra, localPalestra, idUser, imagem, tema } = request.body

        await this.repository.create({ categoria, contacto, conteudo, descricao, dataPalestra, localPalestra, idUser, imagem, tema })

        return response.status(201).json({ message: "palestra created with sucess" })
    }

}