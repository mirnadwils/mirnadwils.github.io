import "./globals.css";
import Nav from "./Nav";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: { default: "Mirna Dwi Lestari Salamah – Geotechnical Engineer", template: "%s | Mirna Dwi Lestari Salamah" },
  description: "Academic portfolio of Mirna Dwi Lestari Salamah: geotechnical engineering, numerical modelling and applied research.",
};

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
<img src={`${base}/photo.jpg`} alt="Portrait of Mirna Dwi Lestari Salamah" />
<h2>Mirna Dwi Lestari Salamah</h2>
<p>Senior Geotechnical Engineer &amp; Project Manager</p>
<ul>
<li>PT Solusi Geotek Optima</li>
<li>Bandung, Indonesia</li>
<li><a href="mailto:mirnadwi67@gmail.com">Email</a></li>
<li><a href="https://www.linkedin.com/in/mirna-dwi-lestari-salamah-5b2533344/">LinkedIn</a></li>
<li><a href="https://doi.org/10.3390/geotechnics6010023">Geotechnics (MDPI) paper</a></li>
</ul>
</aside>
          <main>{children}</main>
        </div>
        <footer>© 2026 Mirna Dwi Lestari Salamah · Geotechnical engineering, Bandung, Indonesia</footer>
      </body>
    </html>
  );
}
