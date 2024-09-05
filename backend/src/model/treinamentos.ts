import { randomUUID } from "crypto"
import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"

@Entity("treinamentos")
export class treinamentos {
    @PrimaryColumn()
    id?: string
    @Column()
    descricao: string
    @Column()
    contactoUser: string
    @Column()
    emailUser: string
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