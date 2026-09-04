import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </IconBase>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" />
    </IconBase>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4-1-1.4 2.1a15.8 15.8 0 0 1-9.7-9.7L8 7 7 3Z" />
    </IconBase>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3a8.5 8.5 0 1 1 15.6-4.6Z" />
      <path d="M8.1 7.7c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.2.7l-.5.6c-.2.2-.1.4 0 .6.6 1 1.4 1.8 2.4 2.4.2.1.4.2.6 0l.7-.8c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .4-.2 1.2-.6 1.6-.4.5-1.2.8-1.9.8-1.1 0-2.8-.6-4.5-2.1-1.3-1.2-2.4-2.8-2.7-4.1-.3-1.1 0-1.9.4-2.5Z" />
    </IconBase>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7" />
    </IconBase>
  );
}

export function SectionIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </IconBase>
  );
}
