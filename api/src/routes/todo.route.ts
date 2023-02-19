import express from "express";
import { todoController } from "../controllers/todo.controller";

const router = express.Router();

router.post("/todo", todoController.createTodo);
router.get("/todo", todoController.getTodos);
router.get("/todo/:id", todoController.getTodoById);
router.delete("/todo/:id", todoController.removeTodo);

export { router };
