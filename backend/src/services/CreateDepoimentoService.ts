import { Request, Response } from "express";
import { IDepoimentoRepository } from "../repositories/IDepoimentoRepository";


export class CreateDepoimentoService {

    constructor(private repository: IDepoimentoRepository) {

    }

    async execute(request: Request, response: Response): Promise<Response> {

        const { avatar, depoimento, empresa, idAdmin, nome } = request.body

        await this.repository.create({ avatar, depoimento, empresa, idAdmin, nome })

        return response.status(201).json({
            message: "Depoimentos created with sucess"
        })
    }

}