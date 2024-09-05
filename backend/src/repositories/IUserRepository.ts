import { IUsuarioDTOS } from "../dtos/IUsuarioDTO";
import { usuario } from "../model/usuario";


export interface IUserRepository {
    create({ admin, contacto, email, name, password }: IUsuarioDTOS): Promise<void>
    findByEmail(email: string): Promise<usuario>
}