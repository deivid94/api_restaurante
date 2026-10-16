
import  {NextFunction, type Request, type Response} from "express";
import { HttpError } from "@/utils/erro";
export async function listAllProducts(req:Request,res:Response, next:NextFunction){
 try {
     //chamar o middleware -> chamar os service -> repository 
    res.status(200).json({"msg":"Todos produtos"})
 }catch(error){
    next(error)
    }
 }

export async function getProduct(req:Request,res:Response, next:NextFunction){
    try {
        const {id} = req.params
        res.status(200).json({"msg":"Produto encontrado"})
    }catch(error){
        next(error)
        
    }


}