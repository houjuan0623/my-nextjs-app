import Link from "next/link";

export default async function BlogPage() {
  const res = await fetch("http://localhost:8080/posts");
  const blogPosts: { id: number; title: string; body: string }[] =
    await res.json();
  //Infer the type of blogPosts to avoid the error
  //Type 'any[]' is not assignable to type '{ id: number; title: string; body: string; }[]'.
  //Type 'any' is not assignable to type '{ id: number; title: string; body: string; }'.

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`} className="hover:underline">
              {post.title} - {post.body}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
