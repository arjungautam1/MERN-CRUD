import express from "express";
import { create, getAll } from "../controller/userController.js";

const route = express.Router();

route.post("/user", create);
route.get("/users", getAll);

export default route;
