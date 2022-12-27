import axios from 'axios';

async function getPost(slug) {
  const res = await axios.get(`https://dummyjson.com/posts/${slug}`);
  return res.data;
}

export default async function Head({ params }) {
  const { title, body } = await getPost(
    params.slug.toString().split('-').slice(-1)[0],
  );

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={body} />
    </>
  );
}
