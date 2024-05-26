FROM nginx:stable-bookworm-perl

# Remove Default
RUN rm /usr/share/nginx/html/index.html
RUN rm /usr/share/nginx/html/50x.html
RUN rm -rf /etc/nginx/conf.d/

# Load All
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY src/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]