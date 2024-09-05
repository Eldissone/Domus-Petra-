import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1721982707573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "usuarios",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "nome",
                    type: "varchar",
                },

                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "contacto",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "avatar",
                    type: "varchar",
                },
                {
                    name: "admin",
                    type: "boolean",
                    default: "false"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }

}
