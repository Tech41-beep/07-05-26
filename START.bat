@echo off
REM Romantic Birthday App - Quick Start Batch Script
REM This script opens two terminals: one for backend, one for frontend

echo.
echo ========================================
echo   🎂 Romantic Birthday App Launcher 💕
echo ========================================
echo.
echo Starting Backend and Frontend...
echo.

REM Check if backend node_modules exists
if not exist "backend\node_modules" (
    echo Installing backend dependencies...
    cd backend
    call npm install
    cd ..
)

REM Check if frontend node_modules exists
if not exist "frontend\node_modules" (
    echo Installing frontend dependencies...
    cd frontend
    call npm install
    cd ..
)

echo.
echo Starting backend on http://localhost:5000...
start cmd /k "cd backend && npm start"

timeout /t 3

echo Starting frontend on http://localhost:3000...
start cmd /k "cd frontend && npm run dev"

echo.
echo ✅ Servers are starting!
echo.
echo 🎂 Backend: http://localhost:5000
echo 🎂 Frontend: http://localhost:3000 (will open automatically)
echo.
echo 💕 To stop: Press Ctrl+C in each terminal window
echo.
pause
