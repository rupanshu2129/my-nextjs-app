import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

// GET all posts (Read operation)
export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

// POST a new post (Create operation)
export async function POST(req: Request) {
  const body = await req.json();
  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return NextResponse.json(newPost);
}

// PUT (Update operation)
export async function PUT(req: Request) {
  const body = await req.json();
  const updatedPost = await prisma.post.update({
    where: { id: body.id },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return NextResponse.json(updatedPost);
}

// DELETE a post (Delete operation)
export async function DELETE(req: Request) {
  const body = await req.json();
  await prisma.post.delete({
    where: { id: body.id },
  });
  return NextResponse.json({ message: 'Post deleted successfully' });
}
