import db from "../db/connection.js";
import pokemonData from "./products.json" assert { type: "json"};
import Product from "../models/Product.js";
import chalk from "chalk";


const insertData = async() => {
    await db.dropDatabase();
    await Product.create(pokemonData);
    console.log(chalk.greenBright("Producsts DB created!!"))
    await db.close();
}

insertData()