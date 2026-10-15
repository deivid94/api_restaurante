import { Router } from "express"
import produtcRoutes from "./product.route"
import { healthServer } from "./health.route"
import { errorHandler } from "@/middlewares/errorHandler"

const routes = Router()
routes.use('/health', healthServer, errorHandler)
routes.use('/products',produtcRoutes, errorHandler)

export default routes


