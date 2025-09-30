#!/bin/bash

# SSL Certificate Renewal Script for RLTC
# Run this script to renew certificates (typically via cron)

set -e

echo "🔄 Renewing SSL certificates..."

# Stop container to free up port 80 for renewal
docker compose down

# Renew certificates
certbot renew --standalone

# Copy renewed certificates
cp /etc/letsencrypt/live/rainylaketrading.co/fullchain.pem ./ssl/rainylaketrading.co.crt
cp /etc/letsencrypt/live/rainylaketrading.co/privkey.pem ./ssl/rainylaketrading.co.key
cp /etc/letsencrypt/live/pineandstonestays.ca/fullchain.pem ./ssl/pineandstonestays.ca.crt
cp /etc/letsencrypt/live/pineandstonestays.ca/privkey.pem ./ssl/pineandstonestays.ca.key

# Restart container
docker compose up -d

echo "✅ Certificate renewal complete!"
