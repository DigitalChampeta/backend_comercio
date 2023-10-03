import express from "express";
import cors from 'cors'
import db from "./database/db.js"
import productsRouter from "./routes/marketRoutes.js"
import brandRouter from "./routes/brandRoute.js";


export const app = express()
app.get('/', (_req, res) =>{
res.send('Hola Api')
})

app.use(cors())
app.use(express.json())
app.use('/products', productsRouter);
app.use('/brands', brandRouter);


try{
	await db.authenticate()
		console.log('conected to database')
	}catch(error){
		console.log(`error:' ${error}`)
	}


export const server = app.listen(0,() =>{
console.log('server is ready:',server.address().port)
})