import axios from 'axios';
import { notFound } from 'next/navigation';

async function getPost(slug) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${slug}`);
    if (!res.ok) return undefined;
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
}

export default async function Head({ params }) {
  const headId = params.slug.toString().split('-').slice(-1)[0];
  const head = await getPost(headId);

  return (
    <>
      <title>{head?.title}</title>
      <meta name="description" content={head?.body} />
    </>
  );
}
