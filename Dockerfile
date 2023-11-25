FROM node:21

WORKDIR /app

COPY ./package.json .

RUN npm i --production

COPY . .

RUN npm run build

COPY ./.next/ ./.next/

CMD [ "npm", "run", "dev" ]
