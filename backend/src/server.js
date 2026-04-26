import express from "express"
import {connectDB} from "./db/index.js"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authroutes from "./routes/auth.route.js"
import projectroutes from "./routes/project.routes.js"

dotenv.config();
const app = express();
const PORT= process.env.PORT || 4004
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth",authroutes)
app.use("/api/projects",projectroutes)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
  connectDB()
})
