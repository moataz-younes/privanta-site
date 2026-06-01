@echo off
setlocal EnableExtensions
cd /d "%~dp0"

echo.
echo ============================================
echo  Privanta - development server (port 8080)
echo ============================================
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo ERROR: Node.js is not installed or not in PATH.
  pause
  exit /b 1
)

echo Open: http://localhost:8080/
echo Press Ctrl+C in this window to stop.
echo.

call npm run dev
if errorlevel 1 pause
endlocal
