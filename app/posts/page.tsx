import Link from 'next/link';
import prisma from '../../lib/prisma'; // Path to your Prisma client


export default async function BrowsePostsPage() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
  });
  if (!posts || posts.length === 0) {
    return <p>No posts found</p>;
  }
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Browse All Blogs</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded-lg bg-white shadow">
            <Link href={`/posts/${post.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}