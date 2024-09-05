import { Repository } from "typeorm";
import { consultoria } from "../../model/consultoria";
import { appDataSource } from "../../../orm.config";
import { IConsultoriaDTO } from "../../dtos/IConsultoriaDTO";
import { ITreinamentoRepository } from "../ITreinamentoRepository";
import { treinamentos } from "../../model/treinamentos";
import { ITreinamentosDTO } from "../../dtos/ITreinamentosDTO";



export class TreinamentoRepository implements ITreinamentoRepository {
    private repository: Repository<treinamentos>
    constructor() {
        this.repository = appDataSource.getRepository(treinamentos)
    }

    async create({ categoria, contactoUser, conteudo, descricao, emailUser, idUser, imagem, tema }: ITreinamentosDTO): Promise<void> {

        const treinamento = this.repository.create({ categoria, contactoUser, conteudo, descricao, emailUser, idUser, imagem, tema })

        await this.repository.save(treinamento)

    }
}