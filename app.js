const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let messageHistory = [];

// Serve static HTML and CSS
app.use(express.static(__dirname));

// Serve the client-side Vue app code
app.get("/app.js", (req, res) => {
  const vueClientCode = `
    const { createApp } = Vue;

    createApp({
      data() {
        return {
          message: "",
          messages: [],
          socket: null,
          user: "User" + Math.floor(Math.random() * 1000)
        };
      },
      mounted() {
        this.socket = new WebSocket("ws://" + window.location.host);

        this.socket.onopen = () => {
          console.log("Connected to WebSocket");
        };

        this.socket.onmessage = (event) => {
          const msg = JSON.parse(event.data);
          this.messages.push(msg);
        };
      },
      methods: {
        sendMessage() {
          if (this.message.trim() === "") return;

          const msg = {
            user: this.user,
            text: this.message,
            time: new Date().toISOString()
          };

          this.socket.send(JSON.stringify(msg));
          this.message = "";
        }
      }
    }).mount("#app");
  `;
  res.setHeader("Content-Type", "application/javascript");
  res.send(vueClientCode);
});

// WebSocket logic
wss.on("connection", (ws) => {
  console.log("✅ Client connected");

  // Send existing history to the new client
  messageHistory.forEach((msg) => {
    ws.send(JSON.stringify(msg));
  });

  ws.on("message", (message) => {
    const msg = JSON.parse(message);
    messageHistory.push(msg);

    if (messageHistory.length > 100) messageHistory.shift();

    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(msg));
      }
    });
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("🚀 Server is running at http://localhost:" + PORT);
});
