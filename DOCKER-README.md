# RLTC Website Docker Deployment

This repository contains the Docker deployment configuration for the Rainy Lake Trading Co. website.

## 🌐 Domains

- **Primary Site**: rainylaketrading.co (full website)
- **Pine & Stone**: pineandstonestays.ca (redirects to pine-stone.html)

## 🚀 Quick Deployment

1. **Build and deploy:**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

2. **Or manually:**
   ```bash
   docker build -t rltc-website:latest .
   docker-compose up -d
   ```

## 📁 File Structure

```
├── Dockerfile              # Container definition
├── docker-compose.yml      # Service orchestration  
├── nginx.conf              # HTTP configuration
├── nginx-ssl.conf          # HTTPS configuration (production)
├── deploy.sh               # Deployment script
└── .dockerignore           # Docker ignore rules
```

## 🔧 Configuration

### Domain Routing:
- **rainylaketrading.co** → Serves full website (index.html, about.html, etc.)
- **pineandstonestays.ca** → Serves pine-stone.html as main page

### SSL Setup (Production):
1. Obtain SSL certificates for both domains
2. Place certificates in `./ssl/` directory:
   ```
   ssl/
   ├── rainylaketrading.co.crt
   ├── rainylaketrading.co.key
   ├── pineandstonestays.ca.crt
   └── pineandstonestays.ca.key
   ```
3. Replace `nginx.conf` with `nginx-ssl.conf`:
   ```bash
   cp nginx-ssl.conf nginx.conf
   ```

## 🔍 Monitoring

```bash
# Check container status
docker ps

# View logs
docker logs rltc-website

# Restart container
docker-compose restart

# Stop container
docker-compose down
```

## 🛠 Development

For local development without Docker:
```bash
# Serve with Python
python -m http.server 8000

# Or with Node.js
npx serve .
```

## 📋 Environment Variables

- `DOMAIN_PRIMARY`: Primary domain (rainylaketrading.co)
- `DOMAIN_SECONDARY`: Secondary domain (pineandstonestays.ca)

## 🔐 Security Features

- ✅ Security headers (XSS, Content-Type, Frame-Options)
- ✅ Gzip compression
- ✅ Static asset caching
- ✅ Hidden file protection
- ✅ SSL/TLS encryption (with nginx-ssl.conf)
- ✅ HSTS headers

## 🎯 DNS Configuration

Point your domains to your server:

```
rainylaketrading.co     A     YOUR_SERVER_IP
www.rainylaketrading.co A     YOUR_SERVER_IP
pineandstonestays.ca    A     YOUR_SERVER_IP
www.pineandstonestays.ca A    YOUR_SERVER_IP
```
