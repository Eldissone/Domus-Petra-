import { randomUUID } from "crypto"
import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm"

@Entity("contacto")
export class contacto {
    @PrimaryColumn()
    id?: string
    @Column()
    nome: string
    @Column()
    email: string
    @Column()
    message: string
    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) this.id = randomUUID()
    }

}