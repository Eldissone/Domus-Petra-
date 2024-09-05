import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Depoimentos1721982931473 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "depoimentos",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },

                {
                    name: "empresa",
                    type: "varchar",
                },
                {
                    name: "depoimento",
                    type: "varchar",
                },
                {
                    name: "avatar",
                    type: "varchar",
                },
                {
                    name: "id_admin",
                    type: "uuid",
                    isNullable: true
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
        await queryRunner.dropTable("depoimentos")
    }


}
