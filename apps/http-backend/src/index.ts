import express from 'express';
import jwt from 'jsonwebtoken';
import { middleware } from './middleware';
import { JWT_SECRET } from './config';
const app= express();
app.listen(3001);
app.post("/signup", (req,res)=>{
    // db call here 
    res.json({
        userId: "123"
    })


})
app.post("/signin", (req,res)=>{
    const userId=1;
    jwt.sign({

        userId
    }, JWT_SECRET)
    
})

app.post("/room",middleware, (req,res)=>{
    res.json({
        roomId:123
    })
})