import { render, screen } from "@testing-library/react";
import App from "./App";

test("email input should render", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText("Email");
  expect(linkElement).toBeInTheDocument();
});

test("password input should render", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText("Password");
  expect(linkElement).toBeInTheDocument();
});

test("submit button should be render", () => {
  render(<App />);
  const linkElement = screen.getByDisplayValue("Submit");
  expect(linkElement).toBeInTheDocument();
});

test("email input value should be empty", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText("Email");
  expect(linkElement).toHaveValue("");
});

test("password input value should be empty", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText("Password");
  expect(linkElement).toHaveValue("");
});
