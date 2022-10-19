import { PrismaClient } from "@prisma/client"
import express, { request } from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()

app.get("/main", async (req, res) => {
  const StartDate = await prisma.time.findFirst({
    select: { createdAt: true },
  })

  return res.json(StartDate)
})

app.listen(3333)
