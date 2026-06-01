@echo off
setlocal EnableExtensions
cd /d "%~dp0"

echo.
echo ============================================
echo  Privanta - build then preview (port 4173)
echo ============================================
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo ERROR: Node.js is not installed or not in PATH.
  echo Install from https://nodejs.org/ then run this file again.
  pause
  exit /b 1
)

where npm >nul 2>&1
if errorlevel 1 (
  echo ERROR: npm was not found. Reinstall Node.js and try again.
  pause
  exit /b 1
)

if exist "scripts\build-maat-mockup.mjs" (
  if exist "%USERPROFILE%\Downloads\maat_ai_dashboard_mockup_v3.html" (
    echo [0/2] Updating MAAT dashboard mockup ...
    call node "scripts\build-maat-mockup.mjs"
    if errorlevel 1 (
      echo WARNING: Mockup update failed. Continuing with existing public file.
    )
    echo.
  )
)

echo [1/2] Building latest changes - npm run build ...
call npm run build
if errorlevel 1 (
  echo.
  echo BUILD FAILED. Fix the errors above, then run new.bat again.
  pause
  exit /b 1
)

echo.
echo [2/2] Starting preview server ...
echo      Primary:  http://localhost:4173/
echo      Fallback: http://localhost:4174/  (if 4173 is busy)
echo      If the page stays blank, try: http://127.0.0.1:4173/
echo      Close this window to stop the server.
echo.

call npx vite preview --host --port 4173 --open
if errorlevel 1 (
  echo.
  echo Port 4173 is in use. Trying port 4174 ...
  call npx vite preview --host --port 4174 --open
  if errorlevel 1 (
    echo.
    echo PREVIEW FAILED. Close any other preview/dev server, then run new.bat again.
    pause
    exit /b 1
  )
)

endlocal
