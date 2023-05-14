import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'

import getPriceRouter from './routers/getPriceRouter'

const app = express()

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json())

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send("Let's get some ETH chain prices!")
})
app.use('/api/v1/ethV3', getPriceRouter)

const PORT = 5001

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`ETHv3 server started on port: ${ PORT }`)
    })
  } catch (error) {
    console.error('ETHv3 server broken: ', error)
  }
}

start()