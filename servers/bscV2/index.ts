import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import pancakeRouter from './routers/pancakeRouter'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send("Let's get some BSC prices!")
})
app.use('/api/v1/bsc', pancakeRouter)

const PORT = 5000

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port: ${ PORT }`)
    })
  }
  catch (error) {
    console.log(`You broke the server: ${ error }`)
  }
}

start()