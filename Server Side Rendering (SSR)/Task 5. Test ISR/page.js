// app/blog/page.js

export const revalidate = 10;

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

  // Pick a random post each time the page is regenerated
  const randomPost = posts[Math.floor(Math.random() * posts.length)];

  return (
    <div>
      <h1>Blog</h1>

      <p>Last updated: {new Date().toLocaleString()}</p>

      <h2>Featured Post</h2>
      <p>{randomPost.title}</p>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}