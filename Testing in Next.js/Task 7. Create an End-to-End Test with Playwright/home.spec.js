import { test, expect } from "@playwright/test";

test("homepage has welcome heading", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(
    page.getByRole("heading", {
      name: /welcome to my next\.js app/i,
    })
  ).toBeVisible();
});