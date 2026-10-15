import { type Request,type Response } from "express";
export async function healthStatus (req: Request, res: Response){
    try {
        res.json({'server':'servidor funcionando'})
    }catch (error) {
        
            res.json({'error.message':'messgge'}) 
    }
}