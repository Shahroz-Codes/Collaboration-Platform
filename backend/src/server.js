import express from "express"
import {connectDB} from "./db/index.js"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authroutes from "./routes/auth.route.js"


dotenv.config();
const app = express();
const PORT= process.env.PORT || 5000
app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/auth",authroutes)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
  connectDB()
})
