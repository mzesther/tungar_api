import { Request, Response } from "express";
import { SuccessResult } from "../middleware/response";
import Blog from "../modules/blog";


export default class BlogController{









    static async post(req:Request,res:Response){

        const {author,content} = req.body;

        const data = await Blog.post({content,author});


        return res.status(201).send(SuccessResult("Success",201,data));

    }









}