import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// API Routes
app.get('/api/memories', (req, res) => {
  const memories = [
    {
      id: 1,
      title: "Greating To Meet You",
      description: "The day we met, everything changed. You brought light into my life.",
      emoji: "💑",
      image: "/memories/memory-1.jpg"
    },
    {
      id: 2,
      title: "Adventures Together",
      description: "Every moment with you is an adventure filled with laughter and love.",
      emoji: "🌍",
      image: "/memories/memory-2.jpg"
    },
    {
      id: 3,
      title: "Quiet Moments",
      description: "In the silence, holding your hand says everything I feel.",
      emoji: "🌙",
      image: "/memories/memory-3.jpg"
    },
    {
      id: 4,
      title: "Dreams & Promises",
      description: "With you, I see a beautiful future full of endless possibilities.",
      emoji: "✨",
      image: "/memories/memory-4.jpg"
    }
  ];
  res.json(memories);
});

app.get('/api/messages', (req, res) => {
  const messages = [
    "You make every day special just by being in it.",
    "Your smile is my favorite view.",
    "Forever is not enough time to love you.",
    "In a world of billions, you're my favorite one.",
    "With you, my heart found its home."
  ];
  res.json(messages);
});

app.get('/api/surprise', (req, res) => {
  const surprises = {
    message: "🎉 Happy Birthday to the Love of My Life! 🎉",
    hearts: "❤️ 💕 💖 💗 💝 💓",
    special: "You deserve all the happiness in the world. Thank you for being you."
  };
  res.json(surprises);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running! 💕' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎂 Romantic Birthday App Backend running on http://localhost:${PORT}`);
  console.log(`📱 Frontend should connect to http://localhost:${PORT}`);
});
