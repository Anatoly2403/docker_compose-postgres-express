import express from "express";
import cors from "cors";
import { router } from "./routes/todo.route";
import { port } from "./configuration";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (_, res) => {
  res.send("Server is work correctly");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
