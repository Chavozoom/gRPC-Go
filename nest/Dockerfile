FROM node:20-slim 
# debian

WORKDIR /home/node/app
COPY package.json .
RUN npm install --omit=dev
COPY . .

RUN apt update -y && \
    apt install -y procps && \
    npm install -g @nestjs/cli@10.0.0

USER node

CMD ["npm", "start"]