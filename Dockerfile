FROM node

WORKDIR /src

COPY . .

EXPOSE 7878

CMD node index.js