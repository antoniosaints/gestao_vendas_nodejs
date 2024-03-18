import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import rotas_api from "./src/Routes/api.js";
import rotas_web from "./src/Routes/web.js";
import startWebSocketServer from "./src/Services/Websocket.js";

// Configuração do servidor WS
import { createServer } from "http"
const app = express();
const server = createServer(app);
startWebSocketServer(server);

// Configuração de rotas das pastas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "src", "assets")));

// Rotas API
app.use(rotas_api).use(rotas_web);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
})