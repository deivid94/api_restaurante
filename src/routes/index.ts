import { Router } from "express"
import produtcRoutes from "./product.route"

const routes = Router()

routes.use('/products', produtcRoutes)

export default routes


