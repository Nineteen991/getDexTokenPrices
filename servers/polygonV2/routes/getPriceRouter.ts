import express from 'express'

import getPriceController from "../controller/getPriceController"

const getPriceRouter = express.Router()
getPriceRouter.route('/').post(getPriceController)

export default getPriceRouter