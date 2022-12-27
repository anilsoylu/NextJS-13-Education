import React from 'react';
import axios from 'axios';
import Image from 'next/image';

async function getPosts(blogId) {
  const res = await axios.get(`https://dummyjson.com/posts/${blogId}`);
  return res.data;
}

async function Page({ params }) {
  const blogId = params.slug.toString().split('-').slice(-1)[0];
  const { id, title, body } = await getPosts(blogId);

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
