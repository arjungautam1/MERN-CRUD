import express from "express";
import {
  create,
  getAllUsers,
  getUserById,
} from "../controller/userController.js";

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);

export default route;
