import { appServer } from "./server/Server.js";

appServer.listen(process.env["PORT"], () => {
  console.log(`App rodando na porta ${process.env["PORT"] || 3333}`);
});
