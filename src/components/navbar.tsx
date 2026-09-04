"use client";

import { useState } from "react";
import { DownloadIcon } from "@/components/icons";
import { navigation, portfolioData } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuLabel = open ? "Tutup menu navigasi" : "Buka menu navigasi";

  return (
    <header>
      <div>
        <a href="#beranda">{portfolioData.shortName}</a>
        <nav aria-label="Navigasi utama">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href={portfolioData.contact.cv} download>
          Unduh CV <DownloadIcon width={18} height={18} />
        </a>
        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open ? (
        <nav id="mobile-navigation" aria-label="Navigasi seluler">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
