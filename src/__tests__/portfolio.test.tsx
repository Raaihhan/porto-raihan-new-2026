import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("portfolio page", () => {
  it("introduces Muhammad Raihan as a Backend Developer", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /membangun solusi teknologi/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("Backend Developer").length).toBeGreaterThan(0);
  });

  it("renders every required portfolio section", () => {
    render(<Home />);

    for (const name of [
      "Tentang Saya",
      "Keahlian",
      "Pengalaman Kerja",
      "Pendidikan",
      "Sertifikasi",
      "Proyek",
      "Mari Terhubung",
    ]) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    }
  });

  it("uses the latest CV employment facts", () => {
    render(<Home />);

    expect(
      screen.getByText("Associate IT - Project Officer 3 Level 6"),
    ).toBeInTheDocument();
    expect(screen.getByText("Dec 2025 – Present")).toBeInTheDocument();
    expect(screen.getByText("PT Steradian Data Optima")).toBeInTheDocument();
    expect(screen.getByText("Feb 2025 – Dec 2025")).toBeInTheDocument();
  });

  it("renders education, certification, projects, and CV-backed skills", () => {
    render(<Home />);

    expect(screen.getByText("Universitas Negeri Semarang")).toBeInTheDocument();
    expect(screen.getByText("GPA 3.70 / 4.00")).toBeInTheDocument();
    expect(screen.getByText("Pemrograman Go-Lang")).toBeInTheDocument();
    expect(
      screen.getByText("SMS (System Management School)"),
    ).toBeInTheDocument();
    expect(screen.getByText("EDC Bank")).toBeInTheDocument();
    expect(screen.getAllByText("Golang").length).toBeGreaterThan(0);
    expect(screen.getByText("OpenShift")).toBeInTheDocument();
  });

  it("links to the exact CV-backed contact targets and local CV", () => {
    render(<Home />);

    expect(screen.getAllByRole("link", { name: /email/i })[0]).toHaveAttribute(
      "href",
      "mailto:raihanamin2212@gmail.com",
    );
    expect(
      screen.getAllByRole("link", { name: /linkedin/i })[0],
    ).toHaveAttribute(
      "href",
      "https://linkedin.com/in/muhammadraihandev/",
    );
    expect(screen.getByRole("link", { name: /unduh cv/i })).toHaveAttribute(
      "href",
      "/cv/muhammad-raihan-cv.pdf",
    );
  });

  it("exposes stable section targets for single-page navigation", () => {
    const { container } = render(<Home />);

    for (const id of [
      "beranda",
      "tentang",
      "pengalaman",
      "proyek",
      "pendidikan",
      "kontak",
    ]) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    }
  });

  it("uses the supplied portrait with meaningful alternative text", () => {
    render(<Home />);
    const portrait = screen.getByRole("img", {
      name: "Muhammad Raihan mengenakan setelan formal",
    });

    expect(portrait.getAttribute("src")).toContain("raihan-portrait");
  });

  it("shows the supplied organization logos", () => {
    render(<Home />);

    const expectedLogos = [
      ["Logo Bank Rakyat Indonesia", "bri.png"],
      ["Logo PT Steradian Data Optima", "steradian.jpeg"],
      ["Logo Universitas Negeri Semarang", "unnes.png"],
      ["Logo Udemy", "udemy.png"],
    ] as const;

    for (const [alternativeText, filename] of expectedLogos) {
      expect(
        screen.getByRole("img", { name: alternativeText }).getAttribute("src"),
      ).toContain(filename);
    }
  });

  it("places the supplied building image behind the hero portrait", () => {
    const { container } = render(<Home />);
    const hero = container.querySelector("#beranda");
    const building = hero?.querySelector('img[src*="gedung.png"]');
    const portrait = screen.getByRole("img", {
      name: "Muhammad Raihan mengenakan setelan formal",
    });

    expect(building).toBeInTheDocument();
    expect(building).toHaveAttribute("alt", "");
    expect(building?.compareDocumentPosition(portrait)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
  });
});
