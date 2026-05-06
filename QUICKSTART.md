# Romantic Birthday Web App - Quick Start Guide 🎂💕

## One-Click Setup (Windows Command Prompt)

### Step 1: Open Command Prompt and Navigate to Project
```cmd
cd C:\Users\USER\Documents\test2\BD-S
```

### Step 2: Install Backend
```cmd
cd backend
npm install
```

### Step 3: Install Frontend
```cmd
cd ../frontend
npm install
```

### Step 4: Start Backend (Keep this terminal open)
```cmd
cd ../backend
npm start
```
**Expected output:** 
```
🎂 Romantic Birthday App Backend running on http://localhost:5000
```

### Step 5: Start Frontend (Open NEW Command Prompt window)
```cmd
cd C:\Users\USER\Documents\test2\BD-S\frontend
npm run dev
```
**Expected output:** App opens automatically at http://localhost:3000

---

## ✅ Verify Everything Works

1. **Frontend loads** → http://localhost:3000
2. **Navigation buttons visible** → Home, Memories, Message, Surprise, Music
3. **Floating hearts animation** → Watch bottom of page
4. **Backend working** → Try: http://localhost:5000/api/health

---

## 🎨 What You'll See

### Home 💕
- Greeting message
- Animated hearts
- Beautiful gradient text

### Memories 📸
- 4 memory cards
- Hover animations
- Memory titles and descriptions

### Message 💌
- Rotating love messages
- Beautiful card design
- "Next Message" button

### Surprise 🎉
- Hidden reveal button
- Celebration effect when opened
- Special birthday message

---

## 🎵 Music Control
- **Click 🔊 button** → Toggle background music on/off
- Note: Browser may require user interaction first

---

## 📱 Responsive Design
App works on:
- ✅ Desktop (full experience)
- ✅ Tablet (optimized layout)
- ✅ Mobile (responsive design)

---

## 🛑 Stopping the App

**To stop:**
- Frontend: Press `Ctrl + C` in frontend terminal
- Backend: Press `Ctrl + C` in backend terminal

---

## ❌ Troubleshooting

### Issue: Port 5000 already in use
**Solution:** Change PORT in `backend/.env`
```
PORT=5001
```

### Issue: npm install fails
**Solution:** Clear cache and try again
```cmd
npm cache clean --force
npm install
```

### Issue: Module not found errors
**Solution:** Delete node_modules and reinstall
```cmd
rmdir /s node_modules
npm install
```

### Issue: App won't open
**Solution:** Make sure you opened http://localhost:3000 (not http://localhost:5000)

---

## 🎯 Next Steps to Customize

1. **Change colors** → Edit `frontend/src/index.css` (CSS variables at top)
2. **Add memories** → Edit `frontend/src/components/Memories.jsx`
3. **Change messages** → Edit `frontend/src/components/Message.jsx`
4. **Add music** → Replace URL in `frontend/src/App.jsx`
5. **Change surprise message** → Edit `frontend/src/components/Surprise.jsx`

---

## 💕 Have Fun! 🎉
Enjoy your romantic birthday app! This is perfect for:
- Birthday celebrations
- Anniversaries  
- Special dates
- Expressing love and appreciation

---

For detailed information, see **README.md**
