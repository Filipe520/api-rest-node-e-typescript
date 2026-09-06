import Express = require("express");

const server = Express();

interface Teste {}

server.get("/", (__, res) => {
  return res.send("Olá, DEV!");
});

export { server };
