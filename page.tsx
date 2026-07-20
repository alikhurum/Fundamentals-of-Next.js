import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <h1>About this course</h1>
      <p>
        This course teaches the basics of Next.js, including routing and pages.
      </p>

      <Link href="/">Back to Home</Link>
    </main>
  );
}