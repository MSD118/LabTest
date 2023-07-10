FROM node

WORKDIR /src

COPY . .

EXPOSE 9898

CMD node index.js