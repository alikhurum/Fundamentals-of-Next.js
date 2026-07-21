// app/blog/page.js

export const revalidate = 10; // Regenerate every 10 seconds

export default async function Blog() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts = await res.json();

  return (
    <div>
      <h1>Blog</h1>

      <p>Last updated: {new Date().toLocaleString()}</p>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}