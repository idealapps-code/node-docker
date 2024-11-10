FROM node:22 AS development
WORKDIR /app
ENTRYPOINT [ "npm", "run", "dev" ]

FROM node:22 AS production
WORKDIR /app
COPY ./app/ /app
RUN npm install
RUN npm run build
ENTRYPOINT [ "npm", "run", "start" ]
