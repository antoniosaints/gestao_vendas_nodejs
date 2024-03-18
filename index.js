import express from "express";
import "dotenv/config";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import rotas_api from "./src/Routes/api.js";
import rotas_web from "./src/Routes/web.js";

// Configuração do servidor WS
import { createServer } from "http"
import { Server } from "socket.io"

const app = express();
const server = createServer(app);
const io = new Server(server);

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

// WS
io.on('connection', (socket) => {
  console.log('Conectado');
  socket.on('disconnect', () => {
    console.log('Desconectado');
  })
  socket.on("pagamentos", (msg) => {
    io.emit("message", msg);
  })
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
})