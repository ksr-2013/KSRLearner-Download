@echo off
echo ========================================
echo   KSR Learner Download Website Server
echo ========================================
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python is not installed or not in PATH
    echo.
    echo Please install Python from https://www.python.org/
    echo Or use one of these alternatives:
    echo   - Node.js: npx http-server -p 8000
    echo   - PHP: php -S 127.0.0.1:8000
    echo.
    pause
    exit /b 1
)

echo Starting local web server...
echo.
echo Your website will be available at:
echo   http://127.0.0.1:8000
echo   OR
echo   http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Use 127.0.0.1 instead of localhost to force IPv4
python -m http.server 8000 --bind 127.0.0.1

pause

