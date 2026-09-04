import Image from "next/image";
import {
  ArrowIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  SectionIcon,
} from "@/components/icons";
import { navigation, portfolioData } from "@/data/portfolio";

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky text-royal">
        <SectionIcon width={23} height={23} />
      </span>
      <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-[1.7rem]">
        {title}
      </h2>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="beranda"
      aria-labelledby="hero-title"
      className="hero-surface relative isolate overflow-hidden"
    >
      <Image
        src="/images/gedung.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-building object-cover"
      />
      <div aria-hidden="true" className="hero-overlay" />
      <div className="page-shell relative grid min-h-[540px] items-center gap-4 pt-12 lg:grid-cols-[0.82fr_1.18fr] lg:pt-0">
        <div className="relative z-20 pb-10 lg:py-14">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.38em] text-royal sm:text-sm">
            {portfolioData.title}
          </p>
          <h1
            id="hero-title"
            className="max-w-[610px] text-4xl font-black leading-[1.02] tracking-[-0.05em] text-navy sm:text-5xl lg:text-[3.45rem]"
          >
            Membangun Solusi Teknologi{" "}
            <span className="text-royal">yang Berdampak</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 lg:text-[1.05rem]">
            Backend Developer dengan pengalaman membangun layanan perbankan,
            integrasi sistem, dan solusi digital. Berfokus pada layanan yang
            andal, efisien, dan memberikan nilai bagi pengguna.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#kontak" className="button-primary group">
              Hubungi Saya <ArrowIcon width={18} height={18} />
            </a>
            <a href="#proyek" className="button-secondary">
              Lihat Proyek Saya
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium text-navy">
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Muhammad Raihan"
              className="hero-social-link"
            >
              <LinkedInIcon width={22} height={22} />
            </a>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              aria-label={`Kirim email ke ${portfolioData.contact.email}`}
              className="hero-social-link"
            >
              <MailIcon width={23} height={23} />
            </a>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="transition-colors hover:text-royal"
            >
              {portfolioData.contact.email}
            </a>
          </div>
        </div>
        <div className="relative z-10 min-h-[410px] self-end overflow-hidden lg:h-[540px]">
          <Image
            src="/images/raihan-portrait-cutout.png"
            alt="Muhammad Raihan mengenakan setelan formal"
            width={1122}
            height={1402}
            priority
            sizes="(min-width: 1024px) 46vw, (min-width: 768px) 62vw, 94vw"
            className="absolute bottom-0 left-1/2 z-10 max-h-[510px] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_32px_rgba(8,43,97,0.2)] lg:max-h-[555px]"
          />
        </div>
      </div>
      <div aria-hidden="true" className="hero-ribbon" />
    </section>
  );
}

export function AboutAndSkills() {
  return (
    <section
      id="tentang"
      aria-label="Tentang dan keahlian"
      className="page-shell grid gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
    >
      <article className="min-w-0">
        <SectionHeading title="Tentang Saya" />
        <p className="max-w-xl leading-7 text-slate-600">
          Lulusan Informatics Engineering Universitas Negeri Semarang dengan
          pengalaman di pengembangan backend dan analisis proses bisnis
          perbankan. Berfokus pada integrasi layanan, keandalan sistem, serta
          penyampaian solusi yang selaras dengan kebutuhan operasional.
        </p>
      </article>
      <article className="min-w-0">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="[&>div]:mb-0">
            <SectionHeading title="Keahlian" />
          </div>
          <a
            href="#pengalaman"
            className="inline-flex items-center gap-2 text-sm font-bold text-royal transition hover:gap-3 hover:text-navy"
          >
            Lihat Selengkapnya <ArrowIcon width={17} height={17} />
          </a>
        </div>
        <ul className="flex flex-wrap gap-3" aria-label="Daftar keahlian">
          {portfolioData.skills.map((skill) => (
            <li key={skill} className="skill-pill">
              {skill}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export function Experience() {
  return (
    <section
      id="pengalaman"
      aria-labelledby="experience-title"
      className="border-t border-blue-50 bg-white pb-16 pt-5"
    >
      <div className="page-shell">
        <div id="experience-title">
          <SectionHeading title="Pengalaman Kerja" />
        </div>
        <div className="timeline ml-5 border-l-2 border-blue-200 pl-8 sm:ml-6 sm:pl-12">
          {portfolioData.experiences.map((experience) => (
            <article
              key={experience.company}
              className="timeline-item relative grid gap-5 border-b border-blue-100 py-7 first:pt-1 last:border-0 last:pb-0 lg:grid-cols-[120px_320px_1fr] lg:gap-6"
            >
              <div className="grid h-[74px] w-[110px] place-items-center overflow-hidden rounded-xl border border-blue-100 bg-white px-3 shadow-sm">
                <Image
                  src={experience.logo}
                  alt={experience.logoAlt}
                  width={1536}
                  height={1024}
                  sizes="110px"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-extrabold text-navy">
                  {experience.company}
                </h3>
                <p className="mt-1 text-sm font-bold text-royal">
                  {experience.role}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {experience.location} <span className="mx-1">|</span>{" "}
                  <time>{experience.period}</time>
                </p>
              </div>
              <ul className="space-y-1 text-[0.82rem] leading-[1.35rem] text-slate-600 lg:pt-1">
                {experience.summary.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 before:absolute before:left-0 before:top-[0.55rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-royal"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationAndCertification() {
  const { education, certification } = portfolioData;

  return (
    <section
      id="pendidikan"
      aria-label="Pendidikan dan sertifikasi"
      className="page-shell grid gap-8 py-16 lg:grid-cols-2"
    >
      <article>
        <SectionHeading title="Pendidikan" />
        <div className="section-card flex h-[calc(100%-68px)] flex-col gap-5 p-7 sm:flex-row sm:items-center sm:p-8">
          <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl border border-blue-100 bg-white p-2 shadow-sm">
            <Image
              src="/images/brands/unnes.png"
              alt="Logo Universitas Negeri Semarang"
              width={1536}
              height={1024}
              sizes="80px"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-extrabold text-navy">{education.institution}</h3>
            <p className="mt-1 text-slate-600">{education.degree}</p>
            <p className="mt-3 text-sm text-slate-500">{education.period}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="skill-pill">{education.gpa}</span>
              <strong className="skill-pill">{education.honor}</strong>
            </div>
          </div>
        </div>
      </article>
      <article>
        <SectionHeading title="Sertifikasi" />
        <div className="section-card flex h-[calc(100%-68px)] flex-col gap-5 p-7 sm:flex-row sm:items-center sm:p-8">
          <div className="grid h-20 w-24 shrink-0 place-items-center overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm">
            <Image
              src="/images/brands/udemy.png"
              alt="Logo Udemy"
              width={1536}
              height={1024}
              sizes="96px"
              className="max-w-none w-[190%] justify-self-start object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-extrabold text-navy">{certification.name}</h3>
            <p className="mt-1 text-slate-600">{certification.issuer}</p>
            <p className="mt-3 text-sm text-slate-500">{certification.period}</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export function Projects() {
  return (
    <section id="proyek" aria-labelledby="projects-title" className="bg-mist py-16">
      <div className="page-shell">
      <div id="projects-title">
        <SectionHeading title="Proyek" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <article key={project.title} className="section-card flex flex-col p-7 sm:p-8">
            <p className="text-sm font-medium text-slate-500">{project.period}</p>
            <h3 className="mt-3 text-xl font-extrabold text-navy">{project.title}</h3>
            <p className="mt-1 font-semibold text-royal">{project.role}</p>
            <ul className="mt-5 flex-1 space-y-2 text-sm leading-6 text-slate-600">
              {project.summary.map((item) => (
                <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-[0.65rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-royal">{item}</li>
              ))}
            </ul>
            <ul aria-label={`Teknologi ${project.title}`} className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li key={technology} className="skill-pill">{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section id="kontak" aria-labelledby="contact-title" className="page-shell py-16">
      <div className="contact-panel relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center text-white shadow-soft sm:px-12">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-200">Terbuka untuk berdiskusi</p>
      <h2 id="contact-title" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Mari Terhubung</h2>
      <p className="mx-auto mt-4 max-w-2xl text-blue-100">Mari berdiskusi tentang pengembangan backend, integrasi layanan, atau peluang untuk membangun solusi digital bersama.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={`mailto:${portfolioData.contact.email}`}
          aria-label={`Kirim email ke ${portfolioData.contact.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-navy transition hover:-translate-y-0.5 hover:bg-blue-50"
        >
          <MailIcon width={20} height={20} />
          Hubungi Saya
        </a>
        <a href={portfolioData.contact.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-300/50 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
          <PhoneIcon width={20} height={20} />
          {portfolioData.contact.phone}
        </a>
      </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#061f46] py-12 text-white">
      <div className="page-shell grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-center">
      <div>
        <strong className="text-xl font-extrabold">MR<span className="text-blue-300">NRA</span></strong>
        <p className="mt-1 text-sm text-blue-200">{portfolioData.title} · Building Better Solutions</p>
      </div>
      <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-blue-100">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-white">
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href={portfolioData.contact.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn Muhammad Raihan di footer"
        className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 transition hover:bg-white/10"
      >
        <LinkedInIcon width={20} height={20} />
      </a>
      </div>
    </footer>
  );
}
