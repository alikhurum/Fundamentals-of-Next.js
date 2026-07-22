import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import { ThemeProvider } from "../context/ThemeContext";

test("renders homepage heading", () => {
  render(
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );

  expect(
    screen.getByRole("heading", {
      name: /welcome to my next\.js app/i,
    })
  ).toBeInTheDocument();
});