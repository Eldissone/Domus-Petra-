import { join } from "path";
import { DataSource } from "typeorm";


export const appDataSource = new DataSource({
    type: "postgres",
    username: "postgres",
    port: 5432,
    host: "localhost",
    password: "12345",
    database: "hackathon",
    migrations: ["src/migrations/*.ts"],

    entities: [
        join(__dirname, "src/model/usuario.ts"),
        join(__dirname, "src/model/depoimentos.ts"),
        join(__dirname, "src/model/contacto.ts"),
        join(__dirname, "src/model/consultoria.ts"),
        join(__dirname, "src/model/treinamentos.ts"),
        join(__dirname, "src/model/palestra.ts"),
    ],
    synchronize: true
})


appDataSource
    .initialize()
    .then(() => {
        console.log("Data Source initialized");
    })
    .catch((e) => {
        console.error(e.message)
    });
