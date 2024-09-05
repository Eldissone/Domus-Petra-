import {
    randomUUID
} from "crypto";
import {
    Column, CreateDateColumn, PrimaryColumn, Entity
} from "typeorm"
@Entity("usuarios")
export class usuario {

    @PrimaryColumn()
    id?: string
    @Column()
    name: string
    @Column()
    email: string
    @Column()
    contacto: string
    @Column()
    password: string
    @Column()
    admin: boolean
    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = randomUUID()
        }
    }

} 
