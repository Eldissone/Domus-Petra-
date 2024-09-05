import { Router } from "express";
import { userRouter } from "./user.routes"
import { depoimentoRouter } from "./depoimento.routes";
import { contactoRouter } from "./contacto.routes";
import { consultoriaRouter } from "./consultoria.routes";
import { treinamentoRouter } from "./treinamento.routes";
import { palestraRouter } from "./palestra.routes";

const router = Router()

router.use("/user", userRouter)
router.use("/depoimento", depoimentoRouter)
router.use("/lead", contactoRouter)
router.use("/consultoria", consultoriaRouter)
router.use("/treinamento", treinamentoRouter)
router.use("/palestra", palestraRouter)

export {
    router
}