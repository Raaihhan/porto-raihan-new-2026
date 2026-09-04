import { act, render, screen, within } from "@testing-library/react";
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

  it("moves the active navigation state when a menu is selected", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const navigation = screen.getByRole("navigation", {
      name: /navigasi utama/i,
    });
    const homeLink = within(navigation).getByRole("link", { name: "Beranda" });
    const projectsLink = within(navigation).getByRole("link", { name: "Proyek" });

    expect(homeLink).toHaveAttribute("aria-current", "page");
    expect(projectsLink).not.toHaveAttribute("aria-current");

    await user.click(projectsLink);

    expect(projectsLink).toHaveAttribute("aria-current", "page");
    expect(homeLink).not.toHaveAttribute("aria-current");
  });

  it("updates the active navigation state as sections enter the viewport", () => {
    let intersectionCallback: IntersectionObserverCallback = () => undefined;
    const originalIntersectionObserver = globalThis.IntersectionObserver;

    class IntersectionObserverStub implements IntersectionObserver {
      readonly root = null;
      readonly rootMargin = "";
      readonly thresholds = [0];

      constructor(callback: IntersectionObserverCallback) {
        intersectionCallback = callback;
      }

      disconnect() {}
      observe() {}
      takeRecords() {
        return [];
      }
      unobserve() {}
    }

    globalThis.IntersectionObserver = IntersectionObserverStub;

    try {
      render(
        <>
          <Navbar />
          <section id="beranda" />
          <section id="tentang" />
          <section id="pengalaman" />
          <section id="proyek" />
          <section id="pendidikan" />
          <section id="kontak" />
        </>,
      );

      const projectsSection = document.querySelector("#proyek");
      const navigation = screen.getByRole("navigation", {
        name: /navigasi utama/i,
      });

      act(() => {
        intersectionCallback(
          [
            {
              isIntersecting: true,
              target: projectsSection,
              boundingClientRect: { top: 72 },
            } as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );
      });

      expect(
        within(navigation).getByRole("link", { name: "Proyek" }),
      ).toHaveAttribute("aria-current", "page");
    } finally {
      if (originalIntersectionObserver) {
        globalThis.IntersectionObserver = originalIntersectionObserver;
      } else {
        Reflect.deleteProperty(globalThis, "IntersectionObserver");
      }
    }
  });
});
