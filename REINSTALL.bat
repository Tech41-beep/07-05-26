@echo off
REM Clean up and reinstall all dependencies
echo.
echo ========================================
echo   🎂 Fresh Installation Script 💕
echo ========================================
echo.

echo Cleaning backend...
cd backend
if exist "node_modules" rmdir /s /q node_modules
del package-lock.json 2>nul
echo Installing backend dependencies...
call npm install
cd ..

echo.
echo Cleaning frontend...
cd frontend
if exist "node_modules" rmdir /s /q node_modules
if exist "dist" rmdir /s /q dist
del package-lock.json 2>nul
echo Installing frontend dependencies...
call npm install
cd ..

echo.
echo ✅ Fresh installation complete!
echo Ready to start the app with START.bat
echo.
pause
