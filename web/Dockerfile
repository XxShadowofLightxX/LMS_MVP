FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
ENV PORT=3001
ENV HOST=0.0.0.0
EXPOSE 3001
CMD ["npm","run","dev","--","--port","3001","--host","0.0.0.0"]
