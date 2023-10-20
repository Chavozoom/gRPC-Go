FROM node:20-slim 
# debian

WORKDIR /home/node/app

COPY package.json /home/node/app
RUN npm install --omit-dev
COPY . /home/node/app

RUN apt update -y && \
    apt install -y procps && \
    npm install -g npm@10.2.1


USER node

CMD ["npm", "start"]