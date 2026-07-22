import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import { ThemeProvider } from "../context/ThemeContext";

test("renders homepage", () => {
  render(
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );

  expect(
    screen.getByRole("heading", {
      name: "Welcome to My Next.js App",
    })
  ).toBeInTheDocument();
});