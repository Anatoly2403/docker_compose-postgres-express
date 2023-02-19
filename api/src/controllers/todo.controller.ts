import type { Request, Response } from "express";
import { pool } from "../db";
import { I_PayloadWithId, I_PayloadWithTitle, I_Todo } from "../models/todo";

class TodoController {
  async createTodo(
    req: Request<void, I_Todo, I_PayloadWithTitle>,
    res: Response<I_Todo>
  ) {
    const { title } = req.body;
    const { rows } = await pool.query<I_Todo>(
      "INSERT INTO todo (title) values ($1) RETURNING *",
      [title]
    );
    res.json(rows[0]);
  }
  async getTodos(_: Request, res: Response<I_Todo[]>) {
    const { rows } = await pool.query<I_Todo>("SELECT * FROM todo");
    res.json(rows);
  }
  async getTodoById(req: Request<I_PayloadWithId>, res: Response<I_Todo>) {
    const { id } = req.params;
    const { rows } = await pool.query<I_Todo>(
      "SELECT * FROM todo where id = $1",
      [id]
    );
    res.json(rows[0]);
  }
  async removeTodo(req: Request<I_PayloadWithId>, res: Response<string>) {
    const { id } = req.params;
    await pool.query<I_Todo>("DELETE FROM todo where id = $1", [id]);
    res.json("Ok");
  }
}

export const todoController = new TodoController();
