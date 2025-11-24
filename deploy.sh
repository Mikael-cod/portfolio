#!/bin/bash

# Portfolio Deployment Script
# This script helps deploy your portfolio to various platforms

echo "🚀 Portfolio Deployment Script"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Build project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"
echo ""

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ dist folder not found"
    exit 1
fi

echo "📁 Build output is in the 'dist' folder"
echo ""
echo "🎉 Ready to deploy!"
echo ""
echo "Next steps:"
echo "1. For Vercel: Run 'vercel' or push to GitHub and connect to Vercel"
echo "2. For Netlify: Run 'netlify deploy --prod' or drag 'dist' folder to Netlify"
echo "3. For GitHub Pages: Run 'npm run deploy'"
echo ""

