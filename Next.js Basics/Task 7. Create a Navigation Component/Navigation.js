import Link from "next/link";

export default function Navigation() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/blog/post">Blog Post</Link>
    </nav>
  );
}