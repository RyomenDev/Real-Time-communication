import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Adjust this to match your frontend origin
    methods: ["GET", "POST"],
  },
});

let notifications = []; // Store notifications temporarily

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Send initial notifications to the client
  socket.emit("initialNotifications", notifications);

  // Listen for new notifications from the client
  socket.on("sendNotification", (message) => {
    console.log("New Notification:", message);
    const newNotification = { message, timestamp: new Date() };
    notifications.unshift(newNotification); // Add to the beginning

    // Broadcast the new notification to all clients
    io.emit("receiveNotification", newNotification);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
