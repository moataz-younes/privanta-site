@echo off
setlocal EnableExtensions
title Privanta - Dev (Vite + API)

cd /d "%~dp0"

echo.
echo  ========================================
echo   Privanta - Starting development stack
echo  ========================================
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js is not installed or not in PATH.
  echo         Install from https://nodejs.org/
  pause
  exit /b 1
)

where npm >nul 2>&1
if errorlevel 1 (
  echo [ERROR] npm was not found.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo [INFO] Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
  )
)

if not exist ".env" (
  if exist ".env.example" (
    echo [INFO] Creating .env from .env.example ...
    copy /Y ".env.example" ".env" >nul
    echo [WARN] Edit .env with your real DATABASE_URL, Resend, and Upstash keys.
  ) else (
    echo [WARN] No .env file found. Create one before using the contact API.
  )
)

REM Contact form CSRF must match the URL you open in the browser (Vite = port 8080)
powershell -NoProfile -Command ^
  "$p='.env'; $c=Get-Content $p -Raw -ErrorAction SilentlyContinue; if($c -notmatch 'NEXT_PUBLIC_APP_URL='){ Add-Content $p 'NEXT_PUBLIC_APP_URL=http://localhost:8080' } else { $c=$c -replace 'NEXT_PUBLIC_APP_URL=.*','NEXT_PUBLIC_APP_URL=http://localhost:8080'; Set-Content $p $c.TrimEnd() }"

echo [INFO] Generating Prisma client...
call npx prisma generate >nul 2>&1

echo.
echo  ========================================
echo   OPEN THIS URL (site UI):
echo     http://localhost:8080
echo     http://localhost:8080/contact
echo.
echo   Port 3000 = API only (do not browse there)
echo  ========================================
echo.
echo  Press Ctrl+C to stop both servers.
echo.

start "" cmd /c "timeout /t 12 /nobreak >nul && start http://localhost:8080/contact"

call npm run dev:full

if errorlevel 1 (
  echo.
  echo [ERROR] dev:full exited with an error.
  pause
  exit /b 1
)

endlocal
