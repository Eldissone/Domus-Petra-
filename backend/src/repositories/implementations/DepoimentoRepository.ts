import { appDataSource } from "../../../orm.config";
import { IDepoimentoDTO } from "../../dtos/IDepoimentoDTO";
import { depoimentos } from "../../model/depoimentos";
import { IDepoimentoRepository } from "../IDepoimentoRepository";
import { Repository } from "typeorm";



export class DepoimentoRepository implements IDepoimentoRepository {
    private repository: Repository<depoimentos>
    constructor() {
        this.repository = appDataSource.getRepository(depoimentos)
    }


    async create({ avatar, depoimento, empresa, idAdmin, nome }: IDepoimentoDTO): Promise<void> {
        const depoiment = this.repository.create({ avatar, depoimento, empresa, idAdmin, nome })
        await this.repository.save(depoiment)
    }
}