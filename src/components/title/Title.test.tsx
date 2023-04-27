import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

test("renders the expected text in the title", () => {
  const expectedText = "Hello";
  render(<Title title={expectedText} size="m" status="default" />);
  const titleElement = screen.getByText(expectedText);
  expect(titleElement).toBeInTheDocument();
});

test("renders the correct size class", () => {
  const expectedText = "Size Test";
  render(<Title title={expectedText} size="xl" status="default" />);
  const titleElement = screen.getByText(expectedText);
  expect(titleElement.classList.contains("xl")).toBeTruthy();
});

test("renders the correct status class", () => {
  const expectedText = "Status Test";
  render(<Title title={expectedText} size="m" status="error" />);
  const titleElement = screen.getByText(expectedText);
  expect(titleElement.classList.contains("error")).toBeTruthy();
});
