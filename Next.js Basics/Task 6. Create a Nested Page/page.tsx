import Link from "next/link";

export default function BlogPostPage() {
  return (
    <main>
      <h1>Welcome to My Blog Post</h1>

      <p>
        This is a nested page created in the Next.js App Router. It demonstrates
        how folders inside the <code>app</code> directory automatically become
        nested routes. This page is part of my course assignment and shows how
        Next.js organizes pages using the file-based routing system.
      </p>

      <Link href="/">Back to Home</Link>
    </main>
  );
}