import express from "express";
import {
  create,
  deleteUser,
  getAllUsers,
  getUserById,
  update,
  deleteAllUsers,
} from "../controller/userController.js";

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);
route.delete("/deleteAll", deleteAllUsers);

export default route;
