import express from "express";
import dotenv from "dotenv";

import {initDB} from "./config/db.js";



dotenv.config();


const app = express();


const PORT = process.env.PORT || 5001;


initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is up and running on PORT : " , PORT);
    });
});