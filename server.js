import cors      from "cors";
import express   from "express";
import connectDB from "./config/bd";
import { readdirSync } from "fs"

require("dotenv").config();

const app = express();

connectDB();

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

readdirSync("./routes").map(r => app.use("/api", require(`./routes/${r}`)))

const port = process.env.PORT || 8000

app.listen(port, () => console.log("server ready"));
