import { ITreinamentosDTO } from "../dtos/ITreinamentosDTO";



export interface ITreinamentoRepository {


    create({ categoria, contactoUser, conteudo, descricao, emailUser, idUser, imagem, tema }: ITreinamentosDTO): Promise<void>
}

