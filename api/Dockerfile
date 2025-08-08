FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
ENV PORT=8081
EXPOSE 8081
CMD ["npm","run","dev"]
