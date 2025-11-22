Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  KSR Learner Download Website Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting local web server..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Your website will be available at:" -ForegroundColor Green
Write-Host "  http://localhost:8000" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Try Python first, then Node.js, then PHP
if (Get-Command python -ErrorAction SilentlyContinue) {
    Write-Host "Using Python..." -ForegroundColor Green
    python -m http.server 8000 --bind 127.0.0.1
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    Write-Host "Using Python3..." -ForegroundColor Green
    python3 -m http.server 8000 --bind 127.0.0.1
} elseif (Get-Command node -ErrorAction SilentlyContinue) {
    Write-Host "Using Node.js..." -ForegroundColor Green
    npx http-server -p 8000 -a 127.0.0.1
} elseif (Get-Command php -ErrorAction SilentlyContinue) {
    Write-Host "Using PHP..." -ForegroundColor Green
    php -S 127.0.0.1:8000
} else {
    Write-Host "Error: No web server found!" -ForegroundColor Red
    Write-Host "Please install Python, Node.js, or PHP" -ForegroundColor Red
    Write-Host ""
    Write-Host "Download Python from: https://www.python.org/" -ForegroundColor Yellow
    pause
}

