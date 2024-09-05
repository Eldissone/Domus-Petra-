import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Palestras1722047788737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "palestras",
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
                    name: "dataPalestra",
                    type: "timestamp",
                },
                {
                    name: "localPalestra",
                    type: "varchar",
                },
                {
                    name: "contacto",
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
        await queryRunner.dropTable("palestras")
    }

}
