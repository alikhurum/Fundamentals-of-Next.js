"use client";

import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <main className={theme}>
      <ThemeToggle />

      <h1>About this Course</h1>

      <p>
        This course teaches the basics of Next.js, including routing, pages,
        components, layouts, and building modern web applications using the App
        Router.
      </p>

      <p>
        <strong>Current Theme:</strong> {theme}
      </p>

      <Link href="/">Back to Home</Link>
    </main>
  );
}