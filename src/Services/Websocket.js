// websocket.js
import { Server } from "socket.io";

export default function startWebSocketServer(expressServer) {
  const io = new Server(expressServer);

  io.on('connection', (socket) => {
    console.log('Servidor WebSocket conectado');
    socket.on('disconnect', () => {
      console.log('Desconectado');
    });
    socket.on("pagamentos", (msg) => {
      io.emit("update.payment", 1);
    });
  });
}
