import prisma from '../../../lib/prisma';
import Link from 'next/link';
// Dynamic Post Page Component
export default async function PostPage({ params }: { params: { id: string } }) {
  // Fetch the post by ID from the database using Prisma
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id) },
  });

  // If post not found, return a simple message
  if (!post) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-4xl font-bold text-red-500">Post Not Found</h1>
        <a href="/posts" className="text-blue-500 hover:underline mt-4 block">
          &larr; Back to Posts List
        </a>
      </div>
    );
  }

  // If post is found, render the post's details
  return (
    <div className="container mx-auto max-w-3xl py-10 px-5">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6">{post.title}</h1>
      <p className="text-lg text-gray-600 leading-relaxed">{post.content}</p>
      <div className="mt-10">
        <a href="/posts" className="text-blue-500 hover:underline">
          &larr; Back to Posts List
        </a>
      </div>
    </div>
  );
}
