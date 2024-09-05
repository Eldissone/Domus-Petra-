
import { Repository } from "typeorm";
import { appDataSource } from "../../../orm.config";
import { IPalestraRepository } from "../IPalestraRepository";
import { palestras } from "../../model/palestra";
import { IPalestraDTO } from "../../dtos/IPalestraDTO";



export class PalestraRepository implements IPalestraRepository {
    private repository: Repository<palestras>
    constructor() {
        this.repository = appDataSource.getRepository(palestras)
    }

    async create({ categoria, contacto, conteudo, descricao, dataPalestra, localPalestra, idUser, imagem, tema }: IPalestraDTO): Promise<void> {

        const palestra = this.repository.create({ categoria, contacto, conteudo, descricao, dataPalestra, localPalestra, idUser, imagem, tema })

        await this.repository.save(palestra)

    }
}