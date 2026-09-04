import { DownloadIcon } from "@/components/icons";
import { navigation, portfolioData } from "@/data/portfolio";

export function Navbar() {
  return (
    <header>
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
    </header>
  );
}
