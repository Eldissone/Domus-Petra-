import { randomUUID } from "crypto"
import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"

@Entity("palestras")
export class palestras {
    @PrimaryColumn()
    id?: string
    @Column()
    descricao: string
    @Column()
    contacto: string
    @Column()
    dataPalestra: string
    @Column()
    localPalestra: string
    @Column()
    tema: string
    @Column()
    conteudo: string
    @CreateDateColumn()
    created_at: Date
    @Column()
    categoria: string
    @Column()
    imagem: string
    @Column()
    idUser: string

    constructor() {
        if (!this.id) this.id = randomUUID()
    }
}