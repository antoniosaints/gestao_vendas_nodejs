import express from "express";
import {
  cancelPayment,
  createPayment,
  getPayment,
  refoundPayment,
  statusPayment,
} from "../../Controllers/Gateways/Mercadopago/Pagamentos.js";

const router = express.Router();

// Rotas
router.get("/", (_, res) => res.json({ rota: "Pagamentos" }));
router.post("/createPayment",   createPayment);
router.get("/getPayment",       getPayment);
router.get("/cancelPayment",    cancelPayment);
router.get("/refoundPayment",   refoundPayment);
router.get("/status",           statusPayment);

export default router;