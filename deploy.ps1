# Portfolio Deployment Script for Windows PowerShell
# This script helps deploy your portfolio to various platforms

Write-Host "🚀 Portfolio Deployment Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Build project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully" -ForegroundColor Green
Write-Host ""

# Check if dist folder exists
if (-not (Test-Path "dist")) {
    Write-Host "❌ dist folder not found" -ForegroundColor Red
    exit 1
}

Write-Host "📁 Build output is in the 'dist' folder" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎉 Ready to deploy!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. For Vercel: Run 'vercel' or push to GitHub and connect to Vercel"
Write-Host "2. For Netlify: Run 'netlify deploy --prod' or drag 'dist' folder to Netlify"
Write-Host "3. For GitHub Pages: Run 'npm run deploy'"
Write-Host ""

