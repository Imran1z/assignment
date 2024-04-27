import express from 'express'
import mongoose from 'mongoose';

const app= express();

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




// mongodb+srv://shaikhzimran12334:imran12334@cluster0.ldrt7yq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0