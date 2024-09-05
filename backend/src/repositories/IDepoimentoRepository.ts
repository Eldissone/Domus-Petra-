import { IDepoimentoDTO } from "../dtos/IDepoimentoDTO";



export interface IDepoimentoRepository {
    create({ avatar, depoimento, empresa, idAdmin, nome }: IDepoimentoDTO): Promise<void>
}