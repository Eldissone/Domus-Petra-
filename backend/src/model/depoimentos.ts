import { randomUUID } from "crypto"
import { Column, CreateDateColumn, PrimaryColumn, Entity } from "typeorm"

@Entity("depoimentos")
export class depoimentos {
    @PrimaryColumn()
    id?: string
    @Column()
    nome: string
    @Column()
    empresa: string
    @Column()
    depoimento: string
    @Column()
    avatar: string
    @Column()
    idAdmin: string
    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) this.id = randomUUID()
    }
}