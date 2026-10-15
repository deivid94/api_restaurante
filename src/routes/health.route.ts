import { Router } from "express";
import { healthStatus } from "@/controllers/health.controllers";

const healthServer = Router()
 
healthServer.get('/', healthStatus)

export { healthServer} 