# Portfolio Installer Script for Windows
# This script sets up your portfolio for deployment

Write-Host ""
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   Portfolio Deployment Installer      ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "🔍 Checking prerequisites..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed!" -ForegroundColor Red
    Write-Host "   Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

try {
    $npmVersion = npm --version
    Write-Host "✅ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not installed!" -ForegroundColor Red
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

Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
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

# Display deployment options
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║   ✅ Installation Complete!            ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Ready to deploy! Choose an option:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1️⃣  VERCEL (Recommended - Easiest)" -ForegroundColor Yellow
Write-Host "   • Go to: https://vercel.com" -ForegroundColor White
Write-Host "   • Sign up with GitHub" -ForegroundColor White
Write-Host "   • Click 'New Project' → Import your repo" -ForegroundColor White
Write-Host "   • Deploy automatically!" -ForegroundColor White
Write-Host ""
Write-Host "2️⃣  NETLIFY (Easy - Drag & Drop)" -ForegroundColor Yellow
Write-Host "   • Go to: https://app.netlify.com/drop" -ForegroundColor White
Write-Host "   • Drag the 'dist' folder" -ForegroundColor White
Write-Host "   • Done! Your site is live" -ForegroundColor White
Write-Host ""
Write-Host "3️⃣  GITHUB PAGES (Free Hosting)" -ForegroundColor Yellow
Write-Host "   • Run: npm install --save-dev gh-pages" -ForegroundColor White
Write-Host "   • Update vite.config.js base path" -ForegroundColor White
Write-Host "   • Run: npm run deploy:github" -ForegroundColor White
Write-Host ""
Write-Host "📖 For detailed instructions, see:" -ForegroundColor Cyan
Write-Host "   • QUICK_DEPLOY.md (fastest options)" -ForegroundColor White
Write-Host "   • DEPLOYMENT.md (detailed guide)" -ForegroundColor White
Write-Host ""
Write-Host "💡 Tip: Test locally first with 'npm run preview'" -ForegroundColor Yellow
Write-Host ""

