# REAL-TIME-CHAT-APPLICATION

*COMPANY*: CODETECH IT SOLUTIONS

*NAME*: RAJ VERMA

*INTERN ID*: CTO4DF1448

*DOMAIN*: FRONTEND WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

## Project Description
This project is a Real-Time Chat Application built using WebSockets, Node.js (Express), and Vue.js. It allows multiple users to send and receive messages instantly through a persistent WebSocket connection. The application also displays recent message history when a new user joins the chat. The project includes a responsive user interface styled with CSS and structured with HTML.

🎯 Objective
The main goal of this project was to create a responsive, real-time chat interface using WebSockets and a modern frontend framework. The application is designed to handle:

Bi-directional real-time communication between the client and the server.

Auto-refreshing message updates across connected users.

Message history for all newly connected users.

A single script file (app.js) that contains both server-side and client-side logic (injected into the HTML dynamically).

The application is developed in a modular way where only the frontend files (index.html and style.css) are static, and all application logic (server + Vue client) is handled from app.js.

🔧 Technologies Used
Node.js – Backend runtime environment.

Express.js – For serving static files like index.html and style.css.

WebSocket (ws) – For enabling real-time, two-way communication between client and server.

Vue.js (CDN) – Front-end framework used for rendering dynamic UI components.

HTML & CSS – For structure and styling of the chat interface.

⚙️ Features
✅ Real-time chat with WebSocket support.

✅ Dynamic user identity assigned on connect (e.g. User123).

✅ Message history loaded for newly connected clients.

✅ Responsive UI with scrollable message area.

✅ Single script (app.js) that handles both frontend and backend logic.

🚀 How It Works
1. Server Side (app.js):
Initializes an Express server to serve static files.

Creates a WebSocket server using ws.

Stores and manages message history (up to 100 messages).

Sends previous messages to any new connected clients.

Broadcasts messages to all connected users.

2. Client Side (app.js injected via <script src="/app.js">):
Vue.js is mounted to the DOM element #app.

On mount, it connects to the WebSocket server.

Messages are displayed in real-time using Vue’s reactivity.

Messages sent by the user are serialized and sent to the server.

New messages from other users are pushed to the chat box immediately.

📌 Use Cases
🔁 Group Chat Platform

🧪 WebSocket Learning/Testing App

📚 Classroom Collaborative Chat

📡 Real-time Notification Systems

📈 Future Improvements
Add login or nickname input.

Save chat history in a database (e.g., MongoDB or SQLite).

Add emojis or file-sharing support.

Add chatroom support with unique room IDs.

#output

![Image](https://github.com/user-attachments/assets/33ca1128-647c-42ae-b7f9-c941f997a136)



