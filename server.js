import express from "express"
import db from "./src/db/conn.js"
import cors from "cors"

const server = express()
const { PORT } = process.env || 5001

server.use(express.json())
server.use(cors())

// server.use("/products", productsRouter)

const db_sync = async () => await db.Sequelize.sync()

server.listen(PORT, async () => {
  try {
    console.log("🚀 Server is running on port ", PORT)
  } catch (error) {
    console.log("🚀 Server crashed due to ", error)
  }
})

server.on("error", (error) => console.log(error))
