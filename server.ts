import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "messages.json");

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Load messages from file
  let messages: { text: string; timestamp: number }[] = [];
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      messages = JSON.parse(data);
    }
  } catch (e) {
    console.error("Failed to load messages:", e);
  }

  // Helper to save messages
  const saveMessages = () => {
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));
    } catch (e) {
      console.error("Failed to save messages:", e);
    }
  };

  // API Routes
  app.get("/api/messages", (req, res) => {
    res.json(messages);
  });

  app.post("/api/messages", (req, res) => {
    const { text } = req.body;
    if (text && typeof text === 'string') {
      const newMessage = { text: text.slice(0, 200), timestamp: Date.now() };
      messages.push(newMessage); 
      // Keep only last 50 messages to prevent memory bloat
      if (messages.length > 50) messages.shift();
      
      saveMessages(); // Save to file
      
      res.json({ success: true });
    } else {
      res.status(400).json({ error: "Invalid message" });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
