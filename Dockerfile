# Estágio de desenvolvimento
FROM node:20-alpine as development

WORKDIR /usr/app

# Copia os arquivos de dependências
COPY package*.json ./
RUN yarn install
COPY tsconfig.json ./


COPY .env ./
# Copia todos os arquivos do projeto para o contêiner
COPY . .

# Expõe a porta da aplicação
EXPOSE 5000

# Estágio de produção
FROM node:20-alpine as production

# Create app directory
WORKDIR /usr/app
# Install app dependencies
COPY .env ./
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "dist/server.js"]