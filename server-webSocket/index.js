const express = require("express");
const { WebSocketServer } = require("ws");

const app = express();
const PORT = 5000;

// Create HTTP server
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Create WebSocket server
const wss = new WebSocketServer({ server });

// Store connected clients
const clients = new Set();

wss.on("connection", (ws) => {
  console.log("New client connected!");
  clients.add(ws);

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Broadcast message to all connected clients
    clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    clients.delete(ws);
  });
});
