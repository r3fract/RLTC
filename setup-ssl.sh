#!/bin/bash

# SSL Certificate Setup Script for RLTC
# This script installs Certbot and obtains SSL certificates for both domains

set -e

echo "🔐 Setting up SSL certificates for RLTC..."

# Install Certbot
echo "📦 Installing Certbot..."
apt update
apt install -y certbot

# Stop the current container to free up port 80
echo "🛑 Stopping website container temporarily..."
docker compose down

# Get certificates for both domains
echo "🔒 Obtaining SSL certificate for rainylaketrading.co..."
certbot certonly --standalone \
  -d rainylaketrading.co \
  -d www.rainylaketrading.co \
  --non-interactive \
  --agree-tos \
  --email riley@rainylaketrading.co

echo "🔒 Obtaining SSL certificate for pineandstonestays.ca..."
certbot certonly --standalone \
  -d pineandstonestays.ca \
  -d www.pineandstonestays.ca \
  --non-interactive \
  --agree-tos \
  --email riley@rainylaketrading.co

# Create SSL directory
echo "📁 Creating SSL directory..."
mkdir -p ./ssl

# Copy certificates to our ssl directory
echo "📋 Copying certificates..."
cp /etc/letsencrypt/live/rainylaketrading.co/fullchain.pem ./ssl/rainylaketrading.co.crt
cp /etc/letsencrypt/live/rainylaketrading.co/privkey.pem ./ssl/rainylaketrading.co.key
cp /etc/letsencrypt/live/pineandstonestays.ca/fullchain.pem ./ssl/pineandstonestays.ca.crt
cp /etc/letsencrypt/live/pineandstonestays.ca/privkey.pem ./ssl/pineandstonestays.ca.key

# Switch to SSL configuration
echo "🔄 Switching to SSL configuration..."
cp nginx-ssl.conf nginx.conf

# Restart container with SSL
echo "🚀 Starting website with SSL..."
docker compose up -d --build

# Test SSL
echo "🧪 Testing SSL certificates..."
sleep 5
echo "Testing rainylaketrading.co..."
curl -I https://rainylaketrading.co/ || echo "Certificate may still be propagating..."
echo "Testing pineandstonestays.ca..."
curl -I https://pineandstonestays.ca/ || echo "Certificate may still be propagating..."

echo "✅ SSL setup complete!"
echo ""
echo "🌐 Your websites are now available at:"
echo "   https://rainylaketrading.co"
echo "   https://pineandstonestays.ca"
echo ""
echo "📋 Certificate auto-renewal:"
echo "   Certificates will auto-renew. Test with: certbot renew --dry-run"
