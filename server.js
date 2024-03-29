import db from "./db/connection.js";
import routes from "./routes/index.js";
import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

// INITIALIZE EXPRESS INSTANCE
const app = express();

//Port Defined
const PORT = process.env.PORT || 3000;

//MIddleware
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/", routes);

//Database Connection
db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!"));
  app.listen(PORT, () => chalk.magenta(`Express serving running on ${PORT}`));
});
