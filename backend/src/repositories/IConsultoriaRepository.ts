import { IConsultoriaDTO } from "../dtos/IConsultoriaDTO";


export interface IConsultoriaRepository {


    create({ categoria, contactoUser, conteudo, descricao, emailUser, idUser, imagem, tema }: IConsultoriaDTO): Promise<void>
}

