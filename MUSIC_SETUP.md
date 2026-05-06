# 🎵 Adding "Photograph" by Ed Sheeran - Music Setup Guide

## Option 1: Add Local MP3 File (Recommended - Simplest)

### Steps:
1. **Get the MP3 file** of "Photograph" by Ed Sheeran
   - Download from a music service you have access to
   - Or search for "Photograph Ed Sheeran mp3" online

2. **Place the file in the public folder**
   ```
   frontend/public/photograph-ed-sheeran.mp3
   ```

3. **That's it!** The app will automatically play it when you click the music button 🎵

### Example folder structure:
```
frontend/
├── public/
│   └── photograph-ed-sheeran.mp3  ← Add file here
├── src/
└── ...
```

---

## Option 2: Use YouTube Audio URL

If you want to use a YouTube link, follow these steps:

1. **Extract audio from YouTube using a converter**
   - Go to: https://www.youtube-mp3.org/ or similar service
   - Paste a "Photograph" link
   - Download the MP3

2. **Follow Option 1 above** to add it to the public folder

---

## Option 3: Use a Music Streaming Service URL

If the MP3 doesn't work, you can try these alternatives:

### Spotify Embed (Limited):
- Get a Spotify track URL
- Note: Spotify has CORS restrictions in browsers

### SoundCloud:
- Some tracks are available on SoundCloud
- Copy the track URL

### Music APIs:
- Genius
- Last.fm
- Music Brainz

---

## Troubleshooting

### Issue: Music doesn't play
**Solution:** 
1. Check file is in `frontend/public/` folder
2. File name must be exactly: `photograph-ed-sheeran.mp3`
3. Refresh the browser (Ctrl + F5 - hard refresh)
4. Check browser console (F12) for errors

### Issue: File is too large
**Solution:**
1. Compress MP3 using Audacity or online tools
2. Keep file size under 15MB for good performance

### Issue: Audio plays but is low volume
**Solution:**
1. Edit `App.jsx` line 14, change `audio.volume = 0.3` to `0.5` or `0.7`

### Issue: Copyright concerns
**Solution:**
- If using for personal/birthday purposes, it's generally fine
- For commercial use, obtain proper licensing

---

## 🎵 Music Player Controls

Once the file is added:
1. Click 🔊 button to play music
2. Click 🔇 button to pause music
3. Music loops continuously until stopped
4. Volume is set to 30% (can be adjusted in App.jsx)

---

## 📝 Quick Checklist

- ✅ Downloaded "Photograph" MP3
- ✅ Placed in `frontend/public/` folder
- ✅ File named exactly: `photograph-ed-sheeran.mp3`
- ✅ Run `npm run dev` (frontend)
- ✅ Click 🔊 music button
- ✅ Enjoy the music! 💕

---

## 🎧 Volume Adjustment

To change the volume, edit `frontend/src/App.jsx` line 14:

```javascript
// Current (30% volume):
audio.volume = 0.3

// Options:
audio.volume = 0.5    // 50% - Medium
audio.volume = 0.7    // 70% - Loud
audio.volume = 1.0    // 100% - Maximum
```

---

## Alternative: Different Songs

You can use ANY song! Just:
1. Replace `photograph-ed-sheeran.mp3` with your music file name
2. Update the filename in `App.jsx` line 12
3. Place the file in `public/` folder

Example: If using "All of Me" by John Legend:
```javascript
// In App.jsx, line 12:
const audio = new Audio('/all-of-me-john-legend.mp3')
```
Then place `all-of-me-john-legend.mp3` in `public/` folder

---

## 🚀 After Setup

Once file is added:
1. **Restart frontend**: `npm run dev`
2. **Click music button** (🔊) in the app
3. **Enjoy!** 🎵💕

---

## Questions?

- Check that file path is correct
- Verify file format is MP3
- Make sure browser allows audio autoplay
- Try hard refresh (Ctrl + F5)

**Perfect for creating the mood for your romantic birthday app!** 🎂💕✨
