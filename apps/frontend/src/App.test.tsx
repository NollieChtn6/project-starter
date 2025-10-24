import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component rendering", () => {
  it("displays 'Hello World From Template Repository!'", () => {
    render(<App />);
    expect(screen.getByText(/Hello World From Template Repository!/i)).toBeInTheDocument();
  });
});
