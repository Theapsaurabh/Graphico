import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateUserSchema } from "@repo/common/types";
const app = express();
app.listen(3001);
app.post("/signup", (req, res) => {
    const data= CreateUserSchema.safeParse(req.body)
    if(!data.success){
        return res.json({
            message: "Incorrect inputs"
        })
    }
  // db call here

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
