import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
var slug = require('slug');

function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${slug(post.title)}-${post.id}`}
      className="flex items-center flex-1 gap-x-4 max-sm:flex-wrap"
    >
      <div className="max-sm:h-[150px relative h-24 w-24 flex-shrink-0 max-sm:mb-4 max-sm:w-[100%]">
        <Image
          src={`https://picsum.photos/200/300?random=${post.id}`}
          alt={post.title}
          fill
          priority={true}
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className={`overflow-hidden text-lg font-bold ${styles.cardTitle}`}>
          {post.title}
        </h3>
        <p
          className={`card-paragraf mt-1 overflow-hidden ${styles.cardParaghraf}`}
        >
          {post.body}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
