import express from "express";
import "dotenv/config";
const appServer = express();
appServer.delete("/teste", (__, res) => {
    return res.send("Olá, DEV!");
});
export { appServer };
//# sourceMappingURL=Server.js.map