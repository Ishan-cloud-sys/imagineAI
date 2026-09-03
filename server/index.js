import dns from 'dns'

dns.setServers(["8.8.8.8", "1.1.1.1"]);
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js';


const PORT=process.env.PORT || 4000 //either what is specified in the env file or 4000
const app=express()

app.use(express.json()) //all requests will be passed using json method
app.use(cors())
await connectDB()
app.use('/api/user',userRouter)
app.get('/',(req,res)=>res.send('API working finer'))
app.listen(PORT,()=>console.log('Server running on port:'+PORT))
