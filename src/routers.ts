import { Router } from "express";
import userController from "./controllers/user.controller";

const routers = Router();

routers.use("/users", userController);

export default routers;