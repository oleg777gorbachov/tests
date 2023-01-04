import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("email input should render", () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText("Email");
  expect(emailInput).toBeInTheDocument();
});

test("password input should render", () => {
  render(<App />);
  const passlInput = screen.getByPlaceholderText("Password");
  expect(passlInput).toBeInTheDocument();
});

test("submit button should be render", () => {
  render(<App />);
  const btnElement = screen.getByDisplayValue("Submit");
  expect(btnElement).toBeInTheDocument();
});

test("email input value should be empty", () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText("Email");
  expect(emailInput).toHaveValue("");
});

test("password input value should be empty", () => {
  render(<App />);
  const passlInput = screen.getByPlaceholderText("Password");
  expect(passlInput).toHaveValue("");
});

test("button onclick focus on email", () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText("Email");
  const btnElement = screen.getByDisplayValue("Submit");

  fireEvent.click(btnElement);
  expect(emailInput).toHaveFocus();
});

test("button onclick focus on password", () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passlInput = screen.getByPlaceholderText("Password");
  const btnElement = screen.getByDisplayValue("Submit");

  fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
  fireEvent.click(btnElement);
  expect(passlInput).toHaveFocus();
});

test("email validation false", () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText("Email");
  const btnElement = screen.getByDisplayValue("Submit");

  fireEvent.change(emailInput, { target: { value: "test@gmailcom" } });
  fireEvent.click(btnElement);
  expect(emailInput).toHaveFocus();
});

test("email validation true", () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passlInput = screen.getByPlaceholderText("Password");
  const btnElement = screen.getByDisplayValue("Submit");

  fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
  fireEvent.click(btnElement);
  expect(passlInput).toHaveFocus();
});

test("password length < 4", () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passlInput = screen.getByPlaceholderText("Password");
  const btnElement = screen.getByDisplayValue("Submit");

  fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
  fireEvent.change(passlInput, { target: { value: "tes" } });
  fireEvent.click(btnElement);
  expect(passlInput).toHaveFocus();
});
