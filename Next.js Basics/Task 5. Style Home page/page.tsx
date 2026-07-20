import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>
        Welcome to My Next.js Learning Project
      </h1>

      <p className={styles.paragraph}>
        Welcome to my Next.js learning project! This application was created as
        part of a web development course to explore the core features of
        Next.js. Throughout this project, I am learning how to build modern web
        applications by creating pages, implementing navigation with the Link
        component, and using the App Router. As I continue working on this
        project, I will also learn about reusable components, layouts, styling,
        and other powerful features that make Next.js an excellent framework for
        developing fast, responsive, and user-friendly websites.
      </p>

      <Link href="/about" className={styles.link}>
        Go to About Page
      </Link>
    </main>
  );
}