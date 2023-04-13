import express from 'express'

import getPricesController from '../controllers/getPricesController'

const pricesRouter = express.Router()

pricesRouter.route('/').post(getPricesController)

export default pricesRouter