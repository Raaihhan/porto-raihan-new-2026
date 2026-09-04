import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Raihan | Backend Developer",
  description:
    "Portfolio Muhammad Raihan, Backend Developer dengan pengalaman pada layanan perbankan dan integrasi sistem.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
