import express from "express"
import PagamentosRoutes from "./PagamentosRoutes.js"
const router = express.Router()

router.use("/pagamentos", PagamentosRoutes)

export default router