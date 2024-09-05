import 'reflect-metadata'
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import { router } from "./routes";
import './database'
import '../orm.config';
const app = express();

app.use(express.json());
app.use(cors())
app.use(router)


app.listen(2000, () => console.log("server is running"));


// import 'reflect-metadata'
// import express from "express";

// import { router } from "./routes";
// import '../orm.config'


// import "./database/"
// const app = express();

// app.use(express.json());
// app.use(router)

// app.listen(2000, () => {
//     console.log('servidor esta a rodar na porta 2000');
// })