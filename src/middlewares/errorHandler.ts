import {type Request, type Response, type NextFunction} from 'express'

export async function errorHandler(err: Error,req: Request, res: Response, next: NextFunction){
    console.log (err)
    return (res.status(500).json({'message':'Erro interno do servidor'}))
}
