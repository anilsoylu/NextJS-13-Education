import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function BlogCard() {
  return (
    <Link href="/" className="flex flex-1 gap-x-5">
      <div>
        <Image
          src="https://picsum.photos/200/300"
          alt="blog image"
          width={96}
          height={96}
        />
      </div>
      <div>// Blog Title // Blog Description</div>
    </Link>
  );
}

export default BlogCard;
