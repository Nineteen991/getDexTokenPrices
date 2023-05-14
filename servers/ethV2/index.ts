import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'

import ethV2Router from './routes/ethV2Router'

const app = express()

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json())

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send("Let's get some ETH chain prices!")
})
app.use('/api/v1/ethV2', ethV2Router)

const PORT = 5002

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`ETHv2 server started on port: ${ PORT }`)
    })
  } catch (error) {
    console.error('ETHv2 server is broken: ', error)
  }
}

start()