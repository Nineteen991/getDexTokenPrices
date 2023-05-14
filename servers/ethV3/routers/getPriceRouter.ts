import express from 'express'

import getPriceController from '../controllers/getPriceController'

const getPriceRouter = express.Router()
getPriceRouter.route('/').post(getPriceController)

export default getPriceRouter