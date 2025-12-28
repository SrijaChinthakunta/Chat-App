# Real-Time Chat Application

🚀 **A full-stack real-time chat application** built with React.js, Node.js/Express, and Socket.IO for seamless communication.

## ✨ Features

- 💬 Real-time messaging using WebSockets
- 👁️ Live typing indicators
- 🔗 Connection status monitoring
- 📱 Responsive UI design
- 🏗️ RESTful API architecture
- 📝 Full CRUD operations for messages
- ⚡ Instant message delivery

## 🛠️ Tech Stack

### Frontend
- **React.js** - JavaScript library for building user interfaces
- **Socket.IO Client** - Real-time bidirectional event-based communication
- **CSS** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Socket.IO** - Real-time engine for bidirectional communication
- **CORS** - Cross-Origin Resource Sharing support
- **Dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

### Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
PORT=5000
NODE_ENV=development
```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```
   The server will run on `http://localhost:5000`

2. Start the frontend server:
   ```bash
   cd frontend
   npm start
   ```
   The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
chatapp/
├── backend/
│   ├── controllers/
│   │   └── messageControllers.js
│   ├── routes/
│   │   └── messageRoutes.js
│   ├── public/
│   │   └── index.html
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat.css
│   │   │   ├── Chat.js
│   │   │   ├── ChatInput.css
│   │   │   ├── ChatInput.js
│   │   │   ├── MessageList.css
│   │   │   └── MessageList.js
│   │   ├── App.css
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

- `GET /api/messages` - Get all messages
- `POST /api/messages` - Create a new message
- `DELETE /api/messages` - Delete all messages
- `GET /` - Get server info and available endpoints

## 📊 Real-time Events

- `sendMessage` - Emit when sending a message
- `receiveMessage` - Listen for incoming messages
- `typing` - Emit when user is typing
- `userTyping` - Listen for typing indicators
- `connect/disconnect` - Handle connection status

