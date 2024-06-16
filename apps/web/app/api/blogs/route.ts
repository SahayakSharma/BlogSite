import { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'
import { headers } from 'next/headers'
import { parse } from 'path'
const prisma = new PrismaClient()

export const GET = async (req: Request, res: Response) => {
    const a=headers()
    const toget=a.get('to_get')
    if(toget==='all'){
        const allposts = await prisma.posts.findMany()
        return Response.json(allposts)
    }
    else{
        const allposts = await prisma.posts.findMany({
            where:{
                authorid:toget
            }
        })
        return Response.json(allposts)
    
    }
    

}

export const POST = async (req: Request) => {
    console.log('createpost')
    const a=await req.json()
    console.log(a)
    const { authorid,author,title, content } = a;
    const post = await prisma.posts.create({
        data: {
            authorid,
            title,
            content,
            author,
        }
    });
    return Response.json(post);

}

export const DELETE = async (req: Request) => {
    // console.log('deletepost')
    const a=await req.json()
    const { id } = a;
    const post = await prisma.posts.delete({
        where: {
            id
        }
    });
    Response.json(post);


}

export const PUT = async (req: Request, res: Response) => {
    console.log('updatepost')
    const a=headers()
    const postid=a.get('postid')
    const toupdate=a.get('toupdate')
    const b=await req.json()
    
    const { viewcounter,likecounter } = b;
    const post = await prisma.posts.update({
        where: {
            id:postid
        },
        data: toupdate==='view'?{viewcounter}:{likecounter}
            
    });
    return Response.json(post);
}



