FROM node:20-slim 
# debian

WORKDIR /home/node/app
COPY . .

RUN apt update -y && \
    apt install -y procps && \
    npm install -g npm@10.2.1


USER node

CMD ["npm", "start"]