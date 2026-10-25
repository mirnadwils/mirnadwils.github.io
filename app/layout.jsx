import "./globals.css";
import Nav from "./Nav";
import { name, role, email, linkedin, scholar, researchgate } from "../lib/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: { default: "Mirna Dwi Lestari Salamah – Geotechnical Engineer", template: "%s | Mirna Dwi Lestari Salamah" },
  description: "Academic portfolio of Mirna Dwi Lestari Salamah: geotechnical engineering, numerical modelling and applied research.",
};

/* ── Inline SVG icons (aria-hidden, purely decorative) ───────── */
const EmailIcon = () => (
  <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const LinkedInIcon = () => (
  <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ScholarIcon = () => (
  <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm-1 12.99L5.63 13 4 13.91l8 4.36 8-4.36L18.37 13 13 15.99V16z" />
  </svg>
);

const ResearchGateIcon = () => (
  <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.195 12.195 0 0 0-.39 2.869c0 .71.07 1.406.21 2.084.14.68.357 1.284.655 1.81a3.9 3.9 0 0 0 1.143 1.256 2.78 2.78 0 0 0 1.668.477c.656 0 1.207-.13 1.654-.39a2.78 2.78 0 0 0 1.04-1.098c.261-.47.448-1.02.56-1.647.113-.626.17-1.315.17-2.065 0-.703-.05-1.38-.152-2.034a5.79 5.79 0 0 0-.49-1.736 3.12 3.12 0 0 0-.936-1.215C20.795.155 20.25 0 19.586 0zm-8.41.21C7.553.21 4.872 2.36 4.872 7.222c0 4.807 2.681 6.967 6.304 6.967 1.15 0 2.145-.211 2.985-.635v1.23H9.96V17h4.201v6.67h2.985v-6.67h2.49v-2.216h-2.49v-1.703c2.268-.76 3.77-2.86 3.77-6.05C20.917 2.36 18.235.21 11.177.21zm0 2.222c1.852 0 3.22.437 4.092 1.285.862.847 1.285 2.157 1.285 3.91 0 1.75-.43 3.055-1.295 3.9-.865.847-2.232 1.27-4.082 1.27-1.862 0-3.234-.423-4.1-1.27-.863-.845-1.295-2.15-1.295-3.9 0-1.753.432-3.063 1.295-3.91.866-.848 2.238-1.285 4.1-1.285z" />
  </svg>
);

const socialLinks = [
  { href: `mailto:${email}`, label: "Email", Icon: EmailIcon, show: true },
  { href: linkedin, label: "LinkedIn", Icon: LinkedInIcon, show: !!linkedin },
  { href: scholar, label: "Google Scholar", Icon: ScholarIcon, show: !!scholar },
  { href: researchgate, label: "ResearchGate", Icon: ResearchGateIcon, show: !!researchgate },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        <div className="wrap">
          <aside>
            <img src={`${base}/photo.jpg`} alt="Head-and-shoulders portrait of Mirna Dwi Lestari Salamah" />
            <h2>{name}</h2>
            <p>{role}</p>
            <ul>
              {socialLinks.filter(l => l.show).map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="sidebar-link"
                  >
                    <Icon />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          <main>{children}</main>
        </div>
        <footer>© 2026 {name} · Geotechnical engineering</footer>
      </body>
    </html>
  );
}
