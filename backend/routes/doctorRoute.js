import express from "express";
import {
  doctorList,
  loginDoctor,
  appointmentsDoctor,
} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.get("/login", loginDoctor);
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);

export default doctorRouter;
