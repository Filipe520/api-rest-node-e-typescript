import { Router } from "express";
import { CidadesController } from "../controllers/cidades/index.js";

const router = Router();

router.get("/", (__, res) => {
  return res.send("olá, Dev!");
});

router.post("/cidades", CidadesController.create);

export { router };

// Middleware
// (req, res, next) => {
//   if (false) {
//     return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
//   } else return next;
// },

// Controllers
// (req, res) => {
//   return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
// },
// (req, res) => {
//   return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
// },
// (req, res) => {
//   return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
// },
// (req, res) => {
//   return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
// },
// (req, res) => {
//   return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
// },
