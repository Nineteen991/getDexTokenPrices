import express from 'express'

import getSinglePriceController from '../controllers/getSinglePriceController'

const pancakeRouter = express.Router()

pancakeRouter.route('/').post(getSinglePriceController)

export default pancakeRouter