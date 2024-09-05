import { IPalestraDTO } from "../dtos/IPalestraDTO"


export interface IPalestraRepository {


    create({ categoria, contacto, conteudo, descricao, dataPalestra, localPalestra, idUser, imagem, tema }: IPalestraDTO): Promise<void>
}

