import React from 'react';
import axios from 'axios';
import BlogCard from '../../components/BlogCard';

async function getPosts() {
  const res = await axios.get('https://dummyjson.com/posts?limit=10');
  return res.data;
}

async function Page() {
  const { posts } = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li className="mb-4 last:mb-0">
          <BlogCard key={post.id} post={post} />
        </li>
      ))}
    </ul>
  );
}

export default Page;
