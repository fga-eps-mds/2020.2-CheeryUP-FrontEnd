FROM node:14.9.0-alpine3.10

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

ADD . /app

EXPOSE 3000
CMD ["npm","start"]