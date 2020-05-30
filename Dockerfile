FROM node:10

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

# Add Tini
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]

USER node
