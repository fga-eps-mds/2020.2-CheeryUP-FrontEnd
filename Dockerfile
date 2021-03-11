FROM node:14.9.0-alpine3.10

RUN mkdir app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY package-lock.json app/package-lock
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

ADD . /app

EXPOSE 3000
CMD ["npm","start"]