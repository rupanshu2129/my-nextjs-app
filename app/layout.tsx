import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Blog',
  description: 'A simple blog built with Next.js and PostgreSQL',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        {/* Header */}
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto max-w-4xl flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">Rupanshu's Blog</h1>
            <nav>
              <Link href="/" className="text-white hover:underline mx-2">
                Home
              </Link>
              <Link href="/posts" className="text-white hover:underline mx-2">
                Browse Blogs
              </Link>
              <Link href="/posts/create" className="text-white hover:underline mx-2">
                Create Post
              </Link>
            </nav>
          </div>
        </header>


        {/* Main content, grow to take up remaining space */}
        <main className="container mx-auto max-w-4xl py-10 px-4 flex-grow">
          {children}
        </main>

        {/* Footer, sticks to the bottom */}
        <footer className="bg-blue-600 text-white py-4 mt-10">
          <div className="container mx-auto max-w-4xl text-center">
            <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}