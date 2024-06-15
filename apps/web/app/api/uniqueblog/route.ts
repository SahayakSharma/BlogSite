import { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'
import { headers } from 'next/headers'
const prisma = new PrismaClient()

export const GET = async (req: Request, res: Response) => {
    const a=headers()
    const blogid=a.get('blogid')
    const id=parseInt(blogid)
    
    
        const post = await prisma.posts.findUnique({
            where:{
                id:id
            }
        })
        return Response.json(post)

}