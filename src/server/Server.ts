import Express = require("express");

const server = Express();

server.get("/", (__, res) => {
  return res.send("Olá, DEV!");
});

export { server };
