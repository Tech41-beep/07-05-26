# 🎂 Romantic Birthday Web App 💕

A beautiful, interactive romantic birthday web application built with React (Vite), Node.js, and Express. Features smooth animations, floating hearts, and heartfelt messages across multiple sections.

## ✨ Features

- **🎨 Beautiful UI**: Soft romantic colors with gradient backgrounds
- **💕 Smooth Animations**: Floating hearts, hover effects, and transitions
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🎵 Background Music**: Optional ambient romantic music (can be toggled)
- **🗺️ Multi-Section Navigation**:
  - **Home**: Beautiful birthday greeting with floating animation
  - **Memories**: Card-based memory gallery with emoji decorations
  - **Message**: Rotating love messages with navigation
  - **Surprise**: Special reveal section with celebration effects
- **🛜 Backend API**: Express server providing data endpoints
- **⚡ Vite**: Fast development experience with hot module replacement
- **✨ Special Effects**: Floating hearts, shimmer animations, bounce effects

## 📂 Project Structure

```
BD-S/
├── backend/                  # Express server
│   ├── server.js            # Main server file
│   ├── package.json         # Backend dependencies
│   └── .env                 # Environment variables
│
└── frontend/                # React Vite app
    ├── src/
    │   ├── components/      # React components
    │   │   ├── Home.jsx
    │   │   ├── Memories.jsx
    │   │   ├── Message.jsx
    │   │   ├── Surprise.jsx
    │   │   └── FloatingHearts.jsx
    │   ├── App.jsx          # Main app component
    │   ├── main.jsx         # Entry point
    │   └── index.css        # Global styles
    ├── index.html           # HTML template
    ├── package.json         # Frontend dependencies
    └── vite.config.js       # Vite configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Run the Backend

In the `backend` folder:

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 4. Run the Frontend

In a new terminal, in the `frontend` folder:

```bash
npm run dev
```

The frontend will open automatically at `http://localhost:3000`

## 🚀 Deploy to Vercel

This project is set up so the Vite frontend and the API routes can be deployed from the `frontend` folder.

### Recommended Vercel settings
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### What gets deployed
- The React app from `frontend/src`
- The photo assets from `frontend/src/img`
- The API routes from `frontend/api` for `/api/memories`, `/api/messages`, `/api/surprise`, and `/api/health`

### Steps
1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Set the root directory to `frontend`.
4. Deploy.

### Notes
- The app uses client-side section switching, so it works well as a Vercel static frontend.
- The `/api/*` requests are handled by Vercel serverless functions in `frontend/api`.

### 5. Access the App

- Open your browser to `http://localhost:3000`
- Navigate through Home, Memories, Message, and Surprise sections
- Click the Music button (🔊) to toggle background music
- Watch the floating hearts animation
- Click "Reveal Surprise" for a special effect

## 🎨 Customization

### Modify Colors
Edit `frontend/src/index.css` - Update the CSS variables at the top:

```css
:root {
  --primary: #ff69b4;      /* Pink */
  --secondary: #ff1493;    /* Deep pink */
  --accent: #ffc0cb;       /* Light pink */
  --dark: #8b1538;         /* Dark maroon */
  --light: #fff5f9;        /* Light pink background */
  --gold: #ffd700;         /* Gold for accents */
}
```

### Change Memories
Edit `frontend/src/components/Memories.jsx` - Update the hardcoded memories array or modify the backend response in `backend/server.js`

### Add Your Messages
Edit `frontend/src/components/Message.jsx` or `backend/server.js` - Update the messages array

### Customize Surprise Section
Edit `frontend/src/components/Surprise.jsx` or `backend/server.js` - Modify the surprise data

### Add Background Music
The app has a placeholder for background music. Replace the URL in `frontend/src/App.jsx`:

```javascript
const audio = new Audio('YOUR_MUSIC_URL_HERE')
```

You can use:
- Free music from: Pixabay, Pexels Music, Freepik
- Or upload your own music file to the `public` folder and reference it

## 🎯 API Endpoints

The backend provides the following endpoints:

- `GET /api/memories` - Returns array of memory objects
- `GET /api/messages` - Returns array of love messages
- `GET /api/surprise` - Returns surprise data
- `GET /api/health` - Health check

## 🛠️ Development

### File Structure Summary

- **Backend**: Express server with CORS enabled, provides JSON data
- **Frontend**: React app using hooks for state management
- **Styling**: CSS animations with smooth transitions and responsive design
- **Components**: Modular React components for each section

### Adding New Features

1. **Add a new section**:
   - Create component in `frontend/src/components/`
   - Import in `App.jsx`
   - Add navigation button
   - Add API endpoint in `backend/server.js`

2. **Modify styling**:
   - Edit `frontend/src/index.css`
   - Use existing animations or create new `@keyframes`

3. **Add backend data**:
   - Create new endpoint in `backend/server.js`
   - Fetch in component using `useEffect`

## 📦 Technologies Used

- **Frontend**: React 18, Vite, CSS3
- **Backend**: Node.js, Express, CORS
- **Styling**: CSS3 Animations, Gradients, Responsive Design
- **Tools**: npm, ES Modules

## 🎁 Optional Enhancements

Consider adding:
- Photo gallery with real images
- Sound effects for interactions
- Animated counters (days together)
- Local storage for custom messages
- Download as PDF feature
- Send via email functionality
- Confetti animation library
- Particle effects

## 📝 License

Free to use for personal projects!

## 💕 Made with Love

This app is perfect for:
- Birthday celebrations
- Anniversaries
- Special occasions
- Expressing love and appreciation

---

**Enjoy celebrating! 🎂💕✨**
