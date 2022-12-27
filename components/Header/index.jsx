import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <Link href="/" className="text-2xl font-bold">
        <span>Blog</span>
      </Link>
      <nav className="flex gap-x-2">
        <Link href="/blog">Blog</Link>
        <Link href="https://github.com/anilsoylu" target="_blank ">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
