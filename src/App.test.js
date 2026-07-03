import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio sections", () => {
  render(<App />);

  expect(screen.getByText(/welcome to my world/i)).toBeTruthy();
  expect(screen.getByText(/contact with me/i)).toBeTruthy();
});
