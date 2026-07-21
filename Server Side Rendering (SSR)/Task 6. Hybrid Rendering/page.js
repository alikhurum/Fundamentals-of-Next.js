// app/hybrid/page.js

export const revalidate = 10; // ISR for the static section

export default async function HybridPage() {
  // Static section (SSG/ISR)
  const postsRes = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      next: { revalidate: 10 },
    }
  );

  // Dynamic section (SSR)
  const userRes = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      cache: "no-store",
    }
  );

  if (!postsRes.ok || !userRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const posts = await postsRes.json();
  const user = await userRes.json();

  return (
    <div>
      <h1>Hybrid Rendering Example</h1>

      {/* Static Section (SSG/ISR) */}
      <section>
        <h2>Latest Posts</h2>
        <p>Last updated: {new Date().toLocaleString()}</p>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* Dynamic Section (SSR) */}
      <section>
        <h2>User Dashboard</h2>
        <p>Welcome, {user.name}!</p>
        <p>Email: {user.email}</p>
      </section>
    </div>
  );
}