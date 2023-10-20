FROM node:20-slim 
# debian

WORKDIR /home/node/app

RUN apt update -y && \
    apt install -y procps && \
    npm install -g npm@10.2.1

COPY . .
USER node

#CMD ["npm", "start"]
CMD [ "tail", "-f", "/dev/null" ]