"use client";

import { useState } from "react";
import { DownloadIcon } from "@/components/icons";
import { navigation, portfolioData } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuLabel = open ? "Tutup menu navigasi" : "Buka menu navigasi";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="page-shell flex h-[72px] items-center justify-between gap-6">
        <a
          href="#beranda"
          className="text-lg font-extrabold tracking-tight text-navy transition-colors hover:text-royal sm:text-xl"
        >
          Muhammad <span className="text-royal">Raihan</span>
        </a>
        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-medium text-slate-600 transition-colors hover:text-royal"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={portfolioData.contact.cv}
          download
          className="hidden items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-royal md:inline-flex"
        >
          Unduh CV <DownloadIcon width={18} height={18} />
        </a>
        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-2xl leading-none text-navy transition hover:border-royal hover:text-royal lg:hidden"
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Navigasi seluler"
          className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 shadow-soft lg:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-sky hover:text-royal"
            >
              {item.label}
            </a>
          ))}
          <a
            href={portfolioData.contact.cv}
            download
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3 font-semibold text-white"
          >
            Unduh CV <DownloadIcon width={18} height={18} />
          </a>
        </nav>
      ) : null}
    </header>
  );
}
