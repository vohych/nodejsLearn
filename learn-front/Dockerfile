FROM node:14-alpine

RUN apk add --update

WORKDIR /var/www

RUN npm install -g @angular/cli

COPY package*.json ./

#RUN npm install --production=false
RUN npm install

COPY . .

CMD ng serve --host 0.0.0.0
