import express from "express";
import RotasPagamentos from "./Modules/PagamentosRoutes.js";
import { createPreference } from "../Controllers/Gateways/Mercadopago/Preference.js";
import { gerenciaPagamentoWebhook } from "../Controllers/Gateways/Mercadopago/Webhook.js";
const router = express.Router();
// Rotas API
router.use("/pagamentos", RotasPagamentos);
router.post("/createPreference", createPreference);
router.get("/webhook", gerenciaPagamentoWebhook);

export default router;
