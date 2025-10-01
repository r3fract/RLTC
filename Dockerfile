# Simple single-page website container
FROM nginx:alpine

# Copy single-page website
COPY index.html /usr/share/nginx/html/

# Copy images
COPY assets/img/ /usr/share/nginx/html/assets/img/

# Copy simple nginx config
COPY nginx-simple.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
