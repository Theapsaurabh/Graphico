import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateUserSchema } from "@repo/common/types";
import { PrismaClient } from "@repo/db/client";
const prisma= new  PrismaClient({} as any)
const app = express();
app.listen(3001);
app.post("/signup", (req, res) => {
    const Parsedata= CreateUserSchema.safeParse(req.body)
    if(! Parsedata.success){
        return res.json({
            message: "Incorrect inputs"
        })
    }
  // db call here\
  try {
    prisma.user.create({
  data:{
  email:  Parsedata.data?.username,
  password:Parsedata.data.password,
  name:Parsedata.data.name


  }



 })
 res.json({
  userId:"123"
 })

    
  } catch (error) {
    res.status(411).json({
      message:"User Already exist with this user name"
    })
    
  }

 

  res.json({
    userId: "123",
  });
});
app.post("/signin", (req, res) => {
  const userId = 1;
  jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );
});

app.post("/room", middleware, (req, res) => {
  res.json({
    roomId: 123,
  });
});
