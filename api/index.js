import express from 'express'
import mongoose from 'mongoose';
import authRouter from './Routes/auth.route.js'
import bookRouter from './Routes/book.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app= express();
app.use(express.json()); // Parse incoming JSON data


const MONGO_URL='mongodb+srv://shaikhzimran12334:imran12334@cluster0.ldrt7yq.mongodb.net/assignment?retryWrites=true&w=majority'
const PORT=3000;

mongoose.connect(MONGO_URL).then(()=>{
    console.log('Connected to Mongodb')
    app.listen(PORT,()=>{
        console.log('Server is up and running on port:',PORT)
    })
}).catch((err)=>{
    console.log(err)
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/book',bookRouter)





// mongodb+srv://shaikhzimran12334:imran12334@cluster0.ldrt7yq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0