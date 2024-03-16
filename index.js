import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { createPreference } from "./src/Controllers/Gateways/Mercadopago/Preference.js";
import { gerenciaPagamentoWebhook } from "./src/Controllers/Gateways/Mercadopago/Webhook.js";
import router from "./src/Routes/Router.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.json());

// Rotas
app.get("/", (_, res) => {
  res.render("index");
});

app.get("/teste", (_, res) => {
  res.render("mercadopago/teste", {
    title: "Tela de teste",
    message: "top demais",
  })
});

app.get("/status", (req, res) => {
  const id = req.query.id;
  res.render("mercadopago/resultado", {
    paymentIdController: id,
  });
});

app.post("/webhook", gerenciaPagamentoWebhook);
app.post("/createPreference", createPreference);
app.use(router);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
