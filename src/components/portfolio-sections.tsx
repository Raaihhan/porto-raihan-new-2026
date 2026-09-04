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
      <div aria-hidden="true" className="hero-grid" />
      <div className="page-shell relative grid min-h-[620px] items-center gap-10 pb-0 pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:pt-10">
        <div className="relative z-10 pb-12 lg:py-14">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.36em] text-royal sm:text-sm">
          {portfolioData.title}
        </p>
        <h1
          id="hero-title"
          className="max-w-2xl text-4xl font-black leading-[1.08] tracking-[-0.045em] text-navy sm:text-5xl lg:text-6xl"
        >
          Membangun Solusi Teknologi <span className="text-royal">yang Berdampak</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          Backend Developer dengan pengalaman membangun layanan perbankan,
          integrasi sistem, dan solusi digital. Berfokus pada layanan yang
          andal, efisien, dan memberikan nilai bagi pengguna.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#kontak"
            className="button-primary group"
          >
            Hubungi Saya <ArrowIcon width={18} height={18} />
          </a>
          <a href="#proyek" className="button-secondary">
            Lihat Proyek Saya
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            aria-label={`Kirim email ke ${portfolioData.contact.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-royal"
          >
            <MailIcon width={22} height={22} />
            {portfolioData.contact.email}
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Muhammad Raihan"
            className="inline-flex items-center gap-2 transition-colors hover:text-royal"
          >
            <LinkedInIcon width={22} height={22} />
            LinkedIn
          </a>
        </div>
      </div>
        <div className="relative self-end lg:h-[570px]">
          <div aria-hidden="true" className="portrait-halo" />
          <Image
            src="/images/raihan-portrait.png"
            alt="Muhammad Raihan mengenakan setelan formal"
            width={1122}
            height={1402}
            priority
            sizes="(min-width: 1024px) 48vw, (min-width: 768px) 62vw, 92vw"
            className="relative z-10 mx-auto max-h-[510px] w-auto rounded-t-[44%] object-contain object-bottom mix-blend-multiply lg:absolute lg:bottom-0 lg:left-1/2 lg:max-h-[570px] lg:-translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
}

export function AboutAndSkills() {
  return (
    <section
      id="tentang"
      aria-label="Tentang dan keahlian"
      className="page-shell grid gap-8 py-20 lg:grid-cols-[0.88fr_1.12fr]"
    >
      <article className="section-card p-7 sm:p-8">
        <SectionHeading title="Tentang Saya" />
        <p className="leading-7 text-slate-600">
          Lulusan Informatics Engineering Universitas Negeri Semarang dengan
          pengalaman di pengembangan backend dan analisis proses bisnis
          perbankan. Berfokus pada integrasi layanan, keandalan sistem, serta
          penyampaian solusi yang selaras dengan kebutuhan operasional.
        </p>
      </article>
      <article className="section-card p-7 sm:p-8">
        <SectionHeading title="Keahlian" />
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
      className="bg-mist py-20"
    >
      <div className="page-shell">
      <div id="experience-title">
        <SectionHeading title="Pengalaman Kerja" />
      </div>
      <div className="timeline ml-5 border-l border-blue-200 pl-8 sm:ml-6 sm:pl-12">
        {portfolioData.experiences.map((experience) => (
          <article
            key={experience.company}
            className="timeline-item relative grid gap-6 border-b border-slate-200 py-9 first:pt-2 last:border-0 last:pb-0 lg:grid-cols-[140px_280px_1fr] lg:gap-8"
          >
            <div
              aria-hidden="true"
              className="grid h-20 w-32 place-items-center rounded-2xl border border-blue-100 bg-white px-4 text-center text-lg font-black text-royal shadow-sm"
            >
              {experience.shortName}
            </div>
            <div className="pt-1">
              <h3 className="text-lg font-extrabold text-navy">
                {experience.company}
              </h3>
              <p className="mt-1 font-semibold text-royal">{experience.role}</p>
              <p className="mt-2 text-sm text-slate-500">
                {experience.location} · <time>{experience.period}</time>
              </p>
            </div>
            <ul className="space-y-2 text-sm leading-6 text-slate-600 lg:pt-1">
              {experience.summary.map((item) => (
                <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-[0.65rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-royal">
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
      className="page-shell grid gap-8 py-20 lg:grid-cols-2"
    >
      <article>
        <SectionHeading title="Pendidikan" />
        <div className="section-card flex h-[calc(100%-68px)] flex-col gap-5 p-7 sm:flex-row sm:items-center sm:p-8">
          <div aria-hidden="true" className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-sky text-2xl font-black text-royal">UNNES</div>
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
          <div aria-hidden="true" className="grid h-20 w-24 shrink-0 place-items-center rounded-2xl bg-slate-950 text-xl font-black text-white">Udemy</div>
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
    <section id="proyek" aria-labelledby="projects-title" className="bg-mist py-20">
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
    <section id="kontak" aria-labelledby="contact-title" className="page-shell py-20">
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
        <strong className="text-xl font-extrabold">Muhammad <span className="text-blue-300">Raihan</span></strong>
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
