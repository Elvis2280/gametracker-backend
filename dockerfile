FROM node:20

WORKDIR /app

COPY package.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN npm run build
RUN npx prisma generate

CMD [ "npm", "run", "start:dev" ]
