import express from "express";
import PagamentosRoutes from "./PagamentosRoutes.js";
import { createPreference } from "../Controllers/Gateways/Mercadopago/Preference.js";
import { gerenciaPagamentoWebhook } from "../Controllers/Gateways/Mercadopago/Webhook.js";
const router = express.Router();

// Rotas
router.get("/", (_, res) => res.render("index"));
router.use("/pagamentos", PagamentosRoutes);
router.post("/createPreference", createPreference);
router.get("/webhook", gerenciaPagamentoWebhook);

export default router;
