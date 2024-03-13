import mongoose from "mongoose";
import chalk from "chalk";

const connectionString =
  process.env.DB_URL || "mongodb://127.0.0.1:27017/products";

mongoose.set("returnOriginal", false);

mongoose
  .connect(connectionString)
  .catch((error) =>
    console.log("Error connecting to MongoDB: ", error.message)
  );

mongoose.connection.on("disconnected", () =>
  console.log(chalk.bold("Disconnected from MongoDB!"))
);

mongoose.connection.on("error", (error) =>
  console.error(chalk.red(`MongoDB connection error: ${error}`))
);

export default mongoose.connection;