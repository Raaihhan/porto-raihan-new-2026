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
    <div>
      <SectionIcon width={24} height={24} />
      <h2>{title}</h2>
    </div>
  );
}

export function Hero() {
  return (
    <section id="beranda" aria-labelledby="hero-title">
      <div>
        <p>{portfolioData.title}</p>
        <h1 id="hero-title">Membangun Solusi Teknologi yang Berdampak</h1>
        <p>
          Backend Developer dengan pengalaman membangun layanan perbankan,
          integrasi sistem, dan solusi digital yang andal.
        </p>
        <div>
          <a href="#kontak">
            Hubungi Saya <ArrowIcon width={18} height={18} />
          </a>
          <a href="#proyek">Lihat Proyek Saya</a>
        </div>
        <div>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            aria-label={`Kirim email ke ${portfolioData.contact.email}`}
          >
            <MailIcon width={22} height={22} />
            {portfolioData.contact.email}
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Muhammad Raihan"
          >
            <LinkedInIcon width={22} height={22} />
            LinkedIn
          </a>
        </div>
      </div>
      <Image
        src="/images/raihan-portrait.png"
        alt="Muhammad Raihan mengenakan setelan formal"
        width={1122}
        height={1402}
        priority
      />
    </section>
  );
}

export function AboutAndSkills() {
  return (
    <section id="tentang" aria-label="Tentang dan keahlian">
      <article>
        <SectionHeading title="Tentang Saya" />
        <p>
          Lulusan Informatics Engineering Universitas Negeri Semarang dengan
          pengalaman di pengembangan backend dan analisis proses bisnis
          perbankan. Berfokus pada integrasi layanan, keandalan sistem, serta
          penyampaian solusi yang selaras dengan kebutuhan operasional.
        </p>
      </article>
      <article>
        <SectionHeading title="Keahlian" />
        <ul>
          {portfolioData.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export function Experience() {
  return (
    <section id="pengalaman" aria-labelledby="experience-title">
      <div id="experience-title">
        <SectionHeading title="Pengalaman Kerja" />
      </div>
      <div>
        {portfolioData.experiences.map((experience) => (
          <article key={experience.company}>
            <div aria-hidden="true">{experience.shortName}</div>
            <div>
              <h3>{experience.company}</h3>
              <p>{experience.role}</p>
              <p>
                {experience.location} · <time>{experience.period}</time>
              </p>
            </div>
            <ul>
              {experience.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EducationAndCertification() {
  const { education, certification } = portfolioData;

  return (
    <section id="pendidikan" aria-label="Pendidikan dan sertifikasi">
      <article>
        <SectionHeading title="Pendidikan" />
        <h3>{education.institution}</h3>
        <p>{education.degree}</p>
        <p>{education.period}</p>
        <p>{education.gpa}</p>
        <strong>{education.honor}</strong>
      </article>
      <article>
        <SectionHeading title="Sertifikasi" />
        <h3>{certification.name}</h3>
        <p>{certification.issuer}</p>
        <p>{certification.period}</p>
      </article>
    </section>
  );
}

export function Projects() {
  return (
    <section id="proyek" aria-labelledby="projects-title">
      <div id="projects-title">
        <SectionHeading title="Proyek" />
      </div>
      <div>
        {portfolioData.projects.map((project) => (
          <article key={project.title}>
            <p>{project.period}</p>
            <h3>{project.title}</h3>
            <p>{project.role}</p>
            <ul>
              {project.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul aria-label={`Teknologi ${project.title}`}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section id="kontak" aria-labelledby="contact-title">
      <p>Terbuka untuk berdiskusi dan membangun solusi digital bersama.</p>
      <h2 id="contact-title">Mari Terhubung</h2>
      <div>
        <a
          href={`mailto:${portfolioData.contact.email}`}
          aria-label={`Kirim email ke ${portfolioData.contact.email}`}
        >
          <MailIcon width={20} height={20} />
          Hubungi Saya
        </a>
        <a href={portfolioData.contact.phoneHref}>
          <PhoneIcon width={20} height={20} />
          {portfolioData.contact.phone}
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div>
        <strong>{portfolioData.shortName}</strong>
        <p>{portfolioData.title}</p>
      </div>
      <nav aria-label="Navigasi footer">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href={portfolioData.contact.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn Muhammad Raihan di footer"
      >
        <LinkedInIcon width={20} height={20} />
      </a>
    </footer>
  );
}
