import { Repository } from "typeorm";
import { contacto } from "../../model/contacto";
import { appDataSource } from "../../../orm.config";
import { IContactoRepository } from "../IContactoRepository";
import { IContactoDTO } from "../../dtos/IContactoDTO";

export class ContactoRepository implements IContactoRepository {
    private repository: Repository<contacto>
    constructor() {
        this.repository = appDataSource.getRepository(contacto)
    }

    async create({ email, message, nome }: IContactoDTO): Promise<void> {
        const lead = this.repository.create({ email, message, nome })
        await this.repository.save(lead)
    }


}


