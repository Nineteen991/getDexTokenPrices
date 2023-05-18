import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'

import getPriceRouter from './routes/getPriceRouter'

const app = express()

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json())

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send("Let's get some Polygon chain prices!")
})
app.use('/api/v1/polygonV2', getPriceRouter)

const PORT = 5003

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Polygon server started on port: ${ PORT }`)
    })
  } catch (error) {
    console.error('PolygonV2 server broken: ', error)
  }
}

start()