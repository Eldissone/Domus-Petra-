import { Repository } from "typeorm";
import { appDataSource } from "../../../orm.config";
import { usuario } from "../../model/usuario";
import { IUsuarioDTOS } from "../../dtos/IUsuarioDTO";
import { IUserRepository } from "../IUserRepository";
export class UserRepository implements IUserRepository {
    private repository: Repository<usuario>
    constructor() {
        // this.repository = getRepository(usuario)
        this.repository = appDataSource.getRepository(usuario)
    }
    async findByEmail(email: string): Promise<usuario> {
        const user = await this.repository.findOne({
            where: {
                email
            }
        })
        return user
    }
    async create({ name, admin, contacto, email, password }: IUsuarioDTOS): Promise<void> {

        const user = this.repository.create({ name, admin, contacto, email, password })
        await this.repository.save(user)

    }
}
