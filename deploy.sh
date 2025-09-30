#!/bin/bash

# RLTC Website Deployment Script
# This script builds and deploys the website to both domains

set -e

echo "🚀 Starting RLTC Website Deployment..."

# Build Docker image
echo "📦 Building Docker image..."
docker build -t rltc-website:latest .

# Stop existing container if running
echo "🛑 Stopping existing container..."
docker-compose down || true

# Start new container
echo "▶️ Starting new container..."
docker-compose up -d

# Wait for container to be ready
echo "⏳ Waiting for container to be ready..."
sleep 5

# Check if container is running
if docker ps | grep -q rltc-website; then
    echo "✅ Container is running successfully!"
    echo ""
    echo "🌐 Website URLs:"
    echo "   Primary: http://rainylaketrading.co"
    echo "   Pine & Stone: http://pineandstonestays.ca"
    echo ""
    echo "📋 To check logs: docker logs rltc-website"
    echo "📋 To restart: docker-compose restart"
    echo "📋 To stop: docker-compose down"
else
    echo "❌ Container failed to start. Check logs:"
    docker logs rltc-website
    exit 1
fi

echo "🎉 Deployment complete!"
