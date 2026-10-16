import {type Request, type Response, type NextFunction} from 'express'
import { HttpError } from '@/utils/erro'

export async function errorHandler(error: Error,req: Request, res: Response, next: NextFunction){
    if (error instanceof HttpError){
        return res.status(error.statusCode).json({message: error.message})
    } else {
        console.log (error)
        return res.status(500).json({message: 'Erro interno do servidor'})
    }
}
