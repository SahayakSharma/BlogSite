import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
const prisma = new PrismaClient();

export const GET = async () => {
  const a = headers();
  const blogid = a.get("blogid") || "";
  const post = await prisma.posts.findUnique({
    where: {
      id: blogid,
    },
  });
  return Response.json(post);
};
