import { Server, WebSocket } from "ws";

const wss = new Server({ port: 8080 });

wss.on("connection", (ws: WebSocket) => {
  console.log("Client connected");

  ws.on("message", (message: string) => {
    console.log("Received message:", message);
    // Handle incoming messages
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
