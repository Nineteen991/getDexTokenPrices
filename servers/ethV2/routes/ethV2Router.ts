import express from 'express'

import getSinglePriceController from '../controller/getPriceController'

const ethV2Router = express.Router()
ethV2Router.route('/').post(getSinglePriceController)

export default ethV2Router