FROM nginx:1.26 AS development
RUN apt update && apt -y install certbot python3-certbot-nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default-dev.conf /etc/nginx/conf.d/default.conf




FROM nginx:1.26 AS production
RUN apt update && apt -y install certbot python3-certbot-nginx

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default-prod.conf /etc/nginx/conf.d/default.conf
