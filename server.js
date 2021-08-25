import express from "express"
import db from "./src/db/models/db_assoc.js"
import cors from "cors"

const server = express()
const { PORT } = process.env || 5001

server.use(express.json())
server.use(cors())

// server.use("/products", productsRouter)
// const db_sync = async () => await db.sequelize.sync()

// server.listen(PORT, () => console.log("🚀 Server is running on port ", PORT))

// server.on("error", (error) =>
//   console.log("🚀 Server is crashed due to ", error)
// )

db.sequelize
  .sync()
  .then(() => {
    server.listen(PORT, () =>
      console.log("🚀 Server is running on port ", PORT)
    )

    server.on("error", (error) =>
      console.log("🚀 Server is crashed due to ", error)
    )
  })
  .catch((error) => console.log(error))
