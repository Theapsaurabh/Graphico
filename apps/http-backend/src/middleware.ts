import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
/**
 * Express middleware that verifies a JWT from the Authorization header and attaches the token's `userId` to the request.
 *
 * If verification succeeds, `req.userId` is set and the next middleware is invoked; otherwise a 403 response with `{ message: "Unauthorized" }` is sent.
 *
 * @param req - Express request; reads the `Authorization` header and receives `userId` when verification succeeds
 * @param res - Express response; used to send a 403 JSON response on unauthorized requests
 * @param next - Callback to invoke when authentication succeeds
 */
export function middleware(req:Request, res:Response, next:NextFunction){

const token= req.headers["authorization"] ?? "" ;
const decoded= jwt.verify(token, JWT_SECRET)


if(decoded){
    // @ts-ignore: Todo
    req.userId= decoded.userId
    next()


}else{
    res.status(403).json({
        message: "Unauthorized"
    })

}


}