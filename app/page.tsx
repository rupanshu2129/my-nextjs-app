import { FC } from 'react';
import Link from 'next/link';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Next.js Apps with TypeScript</h1>
      <p className="text-gray-700 mb-6">This is the homepage, styled with Tailwind CSS</p>
      <Link href="/about" className="text-green-500 hover:text-green-700">
       About Us
      </Link>
    </div>
  );
};

export default Home;
