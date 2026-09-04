import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("portfolio page", () => {
  it("introduces Muhammad Raihan as a Backend Developer", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /membangun solusi teknologi/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Backend Developer")).toBeInTheDocument();
  });
});
