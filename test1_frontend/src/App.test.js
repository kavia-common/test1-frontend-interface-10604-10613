import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders first page input screen title", () => {
  render(<App />);
  expect(screen.getByText(/Upload Documents & Configure/i)).toBeInTheDocument();
});
