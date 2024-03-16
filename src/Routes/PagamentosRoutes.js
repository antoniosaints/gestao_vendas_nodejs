import express from "express";
const router = express.Router();
import {
  cancelPayment,
  createPayment,
  getPayment,
  refoundPayment,
} from "../Controllers/Gateways/Mercadopago/Pagamentos.js";

router.get("/", (_, res) => {
  res.json({ message: "Pagamentos" });
});
router.post("/createPayment", createPayment);
router.get("/getPayment", getPayment);
router.get("/cancelPayment", cancelPayment);
router.get("/refoundPayment", refoundPayment);

export default router;