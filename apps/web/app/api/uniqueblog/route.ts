import { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'
import { headers } from 'next/headers'
const prisma = new PrismaClient()

export const GET = async (req: Request, res: Response) => {
    const a=headers()
    const blogid=a.get('blogid')
        const post = await prisma.posts.findUnique({
            where:{
                id:blogid
            }
        })
        return Response.json(post)

}