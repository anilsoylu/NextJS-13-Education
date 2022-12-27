import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

function BlogCard() {
  return (
    <Link
      href="/"
      className="flex items-center flex-1 gap-x-4 max-sm:flex-wrap"
    >
      <div className="relative h-24 w-24 flex-shrink-0 max-sm:mb-4  max-sm:h-[150px]  max-sm:w-[100%]">
        <Image
          src="https://picsum.photos/200/300"
          alt="blog image"
          fill
          priority={true}
          className="object-cover border-r-8"
        />
      </div>
      <div>
        <h3 className={`overflow-hidden text-lg font-bold ${styles.cardTitle}`}>
          Blog Title
        </h3>
        <p
          className={`card-paragraf mt-1 overflow-hidden ${styles.cardParaghraf}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          repellat delectus quasi quae optio dignissimos eius mollitia totam
          impedit. Ullam aut maxime nobis officia illo cum. Id suscipit deleniti
          perspiciatis?
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
