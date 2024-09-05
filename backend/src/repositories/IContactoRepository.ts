import { IContactoDTO } from "../dtos/IContactoDTO";



export interface IContactoRepository {

    create({ email, message, nome }: IContactoDTO): Promise<void>

}