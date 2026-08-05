# Sti til prosjektroten
$root = $PSScriptRoot

Write-Host ""
Write-Host "Starter backend..." -ForegroundColor Green

Start-Process powershell `
    -ArgumentList "-NoExit", "-Command", "cd '$root\server'; dotnet watch run"

Start-Sleep -Seconds 2

Write-Host "Starter frontend..." -ForegroundColor Green

Start-Process powershell `
    -ArgumentList "-NoExit", "-Command", "cd '$root\client'; npm run dev"

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Yellow
Write-Host "Backend : Se URL i dotnet-vinduet" -ForegroundColor Yellow
Write-Host "======================================" -ForegroundColor Cyan