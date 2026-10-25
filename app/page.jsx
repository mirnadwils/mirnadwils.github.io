import { email, linkedin } from "../lib/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Home",
  description:
    "Portfolio of Mirna Dwi Lestari Salamah, geotechnical engineer at PT Solusi Geotek Optima. MSc ITB. Specialises in tailings storage facilities, numerical modelling, and geotechnical earthquake engineering. Seeking PhD positions.",
};

export default function Page() {
  return (
    <>
      {/* ── E+F: Hero with pull-quote + caricature ─────────── */}
      <div className="hero hero-split">
        <div className="hero-quote">
          <h1 className="pull-quote">
            Being a Geotechnical Engineer is not just about logical and critical
            thinking, but also about embracing the art of understanding the
            Earth's diverse soils.
          </h1>
        </div>
        <figure className="hero-caricature">
          <img
            src={`${base}/images/caricature.png`}
            alt="Illustration of Mirna on site, standing in front of a culvert outlet structure"
          />
          <figcaption className="cap">On site</figcaption>
        </figure>
      </div>

      {/* ── G: About ────────────────────────────────────────── */}
      <section>
        <h2 className="t">About</h2>
        <p>
          I am a geotechnical engineer with experience spanning both industry
          and research. I currently work at PT Solusi Geotek Optima, focusing
          on the analysis, design, and review of tailings storage facilities,
          heap leach pads, waste dumps, and other mining infrastructure. My work
          involves numerical modelling using tools such as RS2, RS3, Slide2,
          Slide3, FLAC, PLAXIS, and GeoStudio.
        </p>
        <p>
          I completed my MSc at Institut Teknologi Bandung (ITB) in one year
          through its fast-track programme. Alongside my professional work, I
          remain engaged in independent research and have contributed to
          graduate-level teaching in geotechnical engineering at ITB.
        </p>
        <p>
          Looking ahead, I hope to pursue a PhD in geotechnical engineering to
          further explore research questions that connect engineering practice
          with scientific inquiry. I would welcome the opportunity to connect
          with prospective supervisors and scholarship committees, and to learn
          about potential pathways for further research.
        </p>
      </section>

      {/* ── Keywords ────────────────────────────────────────── */}
      <section>
        <h2 className="t">Keywords</h2>
        <div className="chips">
          <span>Numerical modelling</span>
          <span>Finite element analysis</span>
          <span>Soil–structure interaction</span>
          <span>Underground structures</span>
          <span>Geotechnical earthquake engineering</span>
          <span>Soil behaviour</span>
          <span>Constitutive modelling</span>
          <span>Slope stability</span>
          <span>Foundation and excavation</span>
          <span>Seepage and groundwater</span>
          <span>Tailings and mine waste</span>
          <span>Quantitative risk analysis</span>
          <span>Geotechnical monitoring</span>
          <span>Soft soil improvement</span>
        </div>
      </section>

      {/* ── H: Fun facts ────────────────────────────────────── */}
      <section>
        <h2 className="t">Fun facts</h2>
        <div className="fun-grid">
          <div className="fun-card">
            <span className="fun-icon" aria-hidden="true">
              {/* Guitar / music icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3a4 4 0 0 0 0 8"/>
                <path d="M9 11a4 4 0 0 0 4 4"/>
                <path d="M15 15l4.5 4.5a2.12 2.12 0 0 1-3 3L12 18"/>
                <path d="m12 18-3-3"/>
                <circle cx="9" cy="9" r="1"/>
              </svg>
            </span>
            <h3>Hobbies</h3>
            <p>
              Music &amp; playing guitar, solving Rubik's cubes, swimming,
              running, and writing — I once wrote a personal novel.
            </p>
          </div>

          <div className="fun-card">
            <span className="fun-icon" aria-hidden="true">
              {/* Fork + chopsticks / food icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                <path d="M7 2v20"/>
                <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
              </svg>
            </span>
            <h3>Favourite food</h3>
            <p>Sushi, kebab, and burgers.</p>
          </div>

          <div className="fun-card">
            <span className="fun-icon" aria-hidden="true">
              {/* Person / personality icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </span>
            <h3>Personality</h3>
            <p>ENTJ · melancholic–sanguine.</p>
          </div>
        </div>
      </section>

      {/* ── Education ────────────────────────────────────────── */}
      <section>
        <h2 className="t">Education</h2>
        <div className="job">
          <div className="d">2023 – 2024</div>
          <div>
            <h3>MSc Geotechnical Engineering, ITB</h3>
            <div className="o">GPA 3.58/4.00 · Fast-track 1-year programme, GTA50 scholarship</div>
            <ul>
              <li>Thesis: Effect of D-wall modelling on the seismic response of underground structures at Jakarta MRT stations.</li>
              <li>Supervisors: Prof. Masyhur Irsyam; Yuamar I. Basarah, PhD.</li>
            </ul>
          </div>
        </div>
        <div className="job">
          <div className="d">2019 – 2023</div>
          <div>
            <h3>BSc Civil Engineering, ITB</h3>
            <div className="o">GPA 3.27/4.00 · YBM BRI Bright Scholarship</div>
            <ul>
              <li>Final project: Effect of D-wall penetration length on the stability of retaining walls in deep excavations for Jakarta MRT.</li>
            </ul>
          </div>
        </div>

        {/* ── I: Skills chips ─────────────────────────────────── */}
        <h3>Skills</h3>
        <div className="chips">
          <span>RS2 / RS3</span>
          <span>PLAXIS 2D/3D</span>
          <span>PLAXIS LE</span>
          <span>GeoStudio</span>
          <span>Slide2 / Slide3</span>
          <span>FLAC</span>
          <span>DEEPSOIL</span>
          <span>NONLIN</span>
          <span>EZ-FRISK</span>
          <span>SeismoSignal</span>
          <span>ENSOFT</span>
          <span>MODFLOW</span>
          <span>RSPile</span>
          <span>Leapfrog</span>
          <span>Micromine</span>
          <span>AutoCAD</span>
          <span>Python (data analysis)</span>
        </div>
      </section>

      {/* ── J-1: Certification and Professional Affiliation ── */}
      <section>
        <h2 className="t">Certification and Professional Affiliation</h2>
        <ul className="plain">
          <li>Member, Indonesian Society for Geotechnical Engineering (HATTI)</li>
          <li>
            Junior Geotechnical Expert – Geotechnical and Foundation,
            Construction Services Development Board (2024)
          </li>
        </ul>
      </section>

      {/* ── J-2: Honors and Awards ───────────────────────────── */}
      <section>
        <h2 className="t">Honors and Awards</h2>
        <div className="job">
          <div className="d">July 2023</div>
          <div>Top 5 Finalist, Civil Innovation Challenge, Civil In Action UGM</div>
        </div>
        <div className="job">
          <div className="d">June 2023</div>
          <div>Awardee, USAID E4SEA (Enhancing Equality in Energy for Southeast Asia) Regional Program</div>
        </div>
        <div className="job">
          <div className="d">2022</div>
          <div>Awardee, Algoritma Data Science Academy Scholarship</div>
        </div>
        <div className="job">
          <div className="d">2021</div>
          <div>1st Winner, National Essay Competition, Journalism Week UNS</div>
        </div>
        <div className="job">
          <div className="d">2021</div>
          <div>1st Winner, National Essay Competition, FISIP HIMAKES Universitas Jember</div>
        </div>
      </section>

      {/* ── J-3: References ──────────────────────────────────── */}
      <section>
        <h2 className="t">References</h2>
        <p>Available upon request.</p>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section>
        <h2 className="t">Contact</h2>
        <p>
          I welcome conversations with prospective supervisors and scholarship
          committees. Email{" "}
          <a href={`mailto:${email}`}>{email}</a> or find me on{" "}
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </section>
    </>
  );
}
