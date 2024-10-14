'use client';

import { useState, useEffect } from 'react';

type Post = {
  id: number;
  title: string;
  content: string;
};

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [postId, setPostId] = useState<number | null>(null);

  // Fetch posts from the API
  const fetchPosts = async () => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create or update a post
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editMode ? '/api/posts' : '/api/posts';
    const method = editMode ? 'PUT' : 'POST';
    const body = { id: postId, title, content };
    
    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    setTitle('');
    setContent('');
    setEditMode(false);
    setPostId(null);
    fetchPosts();
  };

  // Delete a post
  const handleDelete = async (id: number) => {
    await fetch('/api/posts', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    fetchPosts();
  };

  // Set a post for editing
  const handleEdit = (post: Post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditMode(true);
    setPostId(post.id);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-5xl font-bold mb-6">Blog Posts</h1>
      
      {/* Form to create or update a post */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editMode ? 'Update Post' : 'Create Post'}
        </button>
      </form>

      {/* List of posts */}
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <div className="mt-2">
              <button
                onClick={() => handleEdit(post)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
