import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Welcome to My Blog</h1>
      <p className="text-lg text-gray-600 mb-8">
        This is a simple blog application built with Next.js and PostgreSQL using Prisma. Here
        you can browse various posts, create your own, and explore more content.
      </p>
      <Link href="/posts" className="text-blue-500 hover:underline text-lg">
        Browse Posts &rarr;
      </Link>
    </div>
  );
}