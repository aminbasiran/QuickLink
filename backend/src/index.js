import express from "express"
import dotenv from "dotenv"
import {urlRouter} from "./routes/urlRouter.js"
import connectDB from "./mongoose.js"
import cors from "cors"

dotenv.config()

const PORT = process.env.PORT

const app = express()


app.use(cors())

app.use(express.json())
app.use("/api/v1",urlRouter)

connectDB()
app.listen(PORT,()=>{
    console.log(PORT)
})
