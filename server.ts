import express from "express";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory message store
  const messages: { text: string; timestamp: number }[] = [];

  // API Routes
  app.get("/api/messages", (req, res) => {
    res.json(messages);
  });

  app.post("/api/messages", (req, res) => {
    const { text } = req.body;
    if (text && typeof text === 'string') {
      messages.push({ text: text.slice(0, 200), timestamp: Date.now() }); // Limit length
      // Keep only last 50 messages to prevent memory bloat
      if (messages.length > 50) messages.shift();
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
