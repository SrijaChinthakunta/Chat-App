const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http"); 
const { Server } = require("socket.io"); 
const { addMessage } = require("./controllers/messageControllers"); 

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {

  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); 

// Routes
app.use("/api/messages", require("./routes/messageRoutes"));

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Chat API Server with Socket.io", 
    version: "2.0.0", 
    endpoints: {
      getMessages: "GET /api/messages",
      createMessage: "POST /api/messages",
      deleteMessages: "DELETE /api/messages",
      testClient: "GET /index.html",
    },
  });
});


io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

 
  socket.emit("message", {
    user: "System",
    text: "Welcome to the chat!",
    timestamp: new Date().toISOString(),
  });

  
  socket.broadcast.emit("message", {
    user: "System",
    text: "A new user has joined the chat",
    timestamp: new Date().toISOString(),
  });

  
  socket.on("sendMessage", (data) => {
    console.log("📩 Message received:", data);


    const newMessage = addMessage(data);


    io.emit("receiveMessage", newMessage);
  });


  socket.on("typing", (data) => {
    socket.broadcast.emit("userTyping", data);
  });


  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);


    io.emit("message", {
      user: "System",
      text: "A user has left the chat",
      timestamp: new Date().toISOString(),
    });
  });
});


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: err.message,
  });
});


server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🔌 Socket.io enabled`); 
  console.log(`Environment: ${process.env.NODE_ENV}`);
});



