import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => fsPromises.writeFile("./products.json", JSON.stringify(data.products)))
    .catch(error=> console.error(error))