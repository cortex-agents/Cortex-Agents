@echo off
echo ==========================================
echo STOPPING ANY RUNNING NEXT.JS SERVERS...
echo ==========================================
taskkill /F /IM node.exe /T 2>NUL

echo.
echo ==========================================
echo CLEANING CORRUPTED NEXT.JS CACHE...
echo ==========================================
rmdir /s /q .next 2>NUL
if exist .next (
    echo ERROR: Could not delete .next folder. Please close VS Code and run again.
    pause
    exit /b
)
echo Cache cleaned successfully.

echo.
echo ==========================================
echo RUNNING PRODUCTION BUILD...
echo ==========================================
call npm run build

echo.
echo ==========================================
echo STARTING PRODUCTION SERVER...
echo ==========================================
call npm run start
