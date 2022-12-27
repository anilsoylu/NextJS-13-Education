import React from 'react';
import Image from 'next/image';
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

async function Page({ params }) {
  const blogId = params.slug.toString().split('-').slice(-1)[0];
  const blog = await getPost(blogId);

  if (!blog) {
    return notFound();
  }

  const { id, title, body } = blog;

  return (
    <div className="flex flex-col items-center mb-5 text-center">
      <div className="relative h-[400px] w-[100%]">
        <Image
          src={`https://picsum.photos/960/400?random=${id}`}
          alt={title}
          fill
          priority={true}
          className="object-cover rounded-2xl"
        />
      </div>
      <h1 className="my-4 text-lg font-bold">{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Page;
