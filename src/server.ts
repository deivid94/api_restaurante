import express from 'express';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';


const app = express()
app.use(express.json())
app.use(routes)
app.use(errorHandler)


app.listen(3333, ()=>{
    console.log ('server rodando na porta 3333')
})



