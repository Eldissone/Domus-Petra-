import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Consultorias1722044351100 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "consultorias",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "descricao",
                    type: "varchar",
                },
                {
                    name: "contactoUser",
                    type: "varchar",
                },
                {
                    name: "emailUser",
                    type: "varchar",
                },
                {
                    name: "tema",
                    type: "varchar",
                },
                {
                    name: "conteudo",
                    type: "varchar",
                },
                {
                    name: "categoria",
                    type: "varchar",
                },
                {
                    name: "imagem",
                    type: "varchar",
                },
                {
                    name: "idUser",
                    type: "uuid",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
            ]

        }))


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("consultorias")
    }

}
