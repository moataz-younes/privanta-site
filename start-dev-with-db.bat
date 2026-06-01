@echo off
setlocal EnableExtensions
title Privanta - Dev + Database sync

cd /d "%~dp0"

echo.
echo  ================================================
echo   Privanta - Dev stack + Prisma db push
echo  ================================================
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js is not installed or not in PATH.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo [INFO] Installing dependencies...
  call npm install
  if errorlevel 1 (
    pause
    exit /b 1
  )
)

if not exist ".env" (
  if exist ".env.example" (
    copy /Y ".env.example" ".env" >nul
    echo [WARN] Created .env from example — set DATABASE_URL and other keys.
  )
)

call npx prisma generate >nul 2>&1

echo [INFO] Syncing database schema (prisma db push)...
call npx prisma db push
if errorlevel 1 (
  echo [WARN] db push failed. Check DATABASE_URL in .env
  echo        Servers will still start; contact form save may fail until DB is ready.
  echo.
  timeout /t 3 >nul
)

echo.
echo  Frontend:  http://localhost:8080
echo  API:       http://localhost:3000
echo.

call npm run dev:full

pause
endlocal
