@echo off
setlocal EnableExtensions
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo ERROR: Node.js is not installed or not in PATH.
  pause
  exit /b 1
)

if not exist "scripts\build-maat-mockup.mjs" (
  echo ERROR: scripts\build-maat-mockup.mjs not found.
  pause
  exit /b 1
)

if not exist "%USERPROFILE%\Downloads\maat_ai_dashboard_mockup_v3.html" (
  echo ERROR: Source file not found:
  echo   %USERPROFILE%\Downloads\maat_ai_dashboard_mockup_v3.html
  echo Put the HTML mockup there, then run this file again.
  pause
  exit /b 1
)

echo Building public\maat-dashboard-mockup.html ...
call node "scripts\build-maat-mockup.mjs"
if errorlevel 1 (
  echo FAILED.
  pause
  exit /b 1
)

echo Done. Arabic text should display correctly (UTF-8 + Cairo font).
pause
endlocal
