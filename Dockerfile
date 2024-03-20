# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o código fonte da aplicação para o diretório de trabalho
COPY . .

# Expõe a porta 3000 que é a porta em que sua aplicação Express estará rodando
EXPOSE 3001

# Comando para executar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
