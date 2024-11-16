import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "My First Blog Post",
      date: "2023-10-27",
      summary: "This is a summary of my first blog post.",
    },
    {
      id: 2,
      title: "My Second Blog Post",
      date: "2023-10-28",
      summary: "This is a summary of my second blog post.",
    },
    // Add more blog posts here
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`} className="hover:underline">
                {post.title} ({post.date}) - {post.summary}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
