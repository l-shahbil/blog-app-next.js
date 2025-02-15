// app/blogs/page.js
import { Suspense } from 'react';
import BlogList from '../components/BlogList';
import { getBlogs } from './blogs/action';
import Loading from './loading';

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">All Blog Posts</h1>
      <Suspense fallback={<Loading />}>
        <BlogList blogs={blogs}/>
      </Suspense>
    </div>
  );
}
