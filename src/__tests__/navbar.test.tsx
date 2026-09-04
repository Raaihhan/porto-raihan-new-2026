import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "@/components/navbar";

describe("Navbar", () => {
  it("opens and closes the mobile navigation accessibly", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggle = screen.getByRole("button", {
      name: /buka menu navigasi/i,
    });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    const mobileNavigation = screen.getByRole("navigation", {
      name: /navigasi seluler/i,
    });
    expect(mobileNavigation).toBeVisible();

    await user.click(
      within(mobileNavigation).getByRole("link", { name: "Tentang" }),
    );
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
