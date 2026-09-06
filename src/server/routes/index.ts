import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (__, res) => {
  return res.send("olá, Dev!");
});

router.post("/teste", (req, res) => {
  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

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
