import axios from 'axios';
import BlogCard from '../components/BlogCard';

async function getPosts() {
  const res = await axios.get('https://dummyjson.com/posts?limit=10');
  return res.data;
}

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <>
      <h1 className="mb-5 text-3xl font-bold underline">Hello, Next.js!</h1>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </>
  );
}
