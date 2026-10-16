import { Router } from 'express'
import {getProduct, listAllProducts} from '../controllers/product.controllers'

const produtcRoutes = Router()
produtcRoutes.get('/', listAllProducts)
produtcRoutes.get('/:id', getProduct)
export default produtcRoutes 