import { Repository } from "typeorm";
import { IConsultoriaRepository } from "../IConsultoriaRepository";
import { consultoria } from "../../model/consultoria";
import { appDataSource } from "../../../orm.config";
import { IConsultoriaDTO } from "../../dtos/IConsultoriaDTO";



export class ConsultoriaRepository implements IConsultoriaRepository {
    private repository: Repository<consultoria>
    constructor() {
        this.repository = appDataSource.getRepository(consultoria)
    }

    async create({ categoria, contactoUser, conteudo, descricao, emailUser, idUser, imagem, tema }: IConsultoriaDTO): Promise<void> {

        const consultoria = this.repository.create({ categoria, contactoUser, conteudo, descricao, emailUser, idUser, imagem, tema })

        await this.repository.save(consultoria)

    }
}