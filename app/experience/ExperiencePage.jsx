"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import projects, { CATEGORY_ORDER } from "../../content/projects";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* ── Check icon (accent-colored SVG, not emoji) ──────────────── */
const CheckIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="resp-check"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/* ── Modal ───────────────────────────────────────────────────── */
function ProjectModal({ project, onClose, triggerRef }) {
  const dialogRef = useRef(null);
  const firstFocusRef = useRef(null);

  // Focus trap + Esc
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    // Lock body scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus first element
    firstFocusRef.current?.focus();

    const handleKey = (e) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab") return;
      const focusable = el.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
      // Return focus to trigger
      triggerRef.current?.focus();
    };
  }, [onClose, triggerRef]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      aria-hidden="true"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">{project.title}</h2>
          <button
            ref={firstFocusRef}
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* LEFT column */}
          <div className="modal-left">
            <div className="modal-meta-row">
              <span className="modal-meta-label">My role.</span>
              <span className="modal-meta-value">{project.role}</span>
            </div>

            <div className="modal-section-label">Project description.</div>
            <p className="modal-description">
              {project.pending
                ? `${project.client} · ${project.years}`
                : project.summary}
            </p>

            {!project.pending && project.skills.length > 0 && (
              <>
                <div className="modal-section-label">Skills and deliverables</div>
                <div className="chips modal-chips">
                  {project.skills.map((s) => <span key={s}>{s}</span>)}
                </div>
              </>
            )}

            <div className="modal-date">{project.years}</div>
          </div>

          {/* RIGHT column */}
          <div className="modal-right">
            <h3 className="modal-role-heading">Role Description</h3>
            {project.pending ? (
              <p className="modal-pending">Detailed write-up coming soon.</p>
            ) : (
              <ul className="modal-resp-list">
                {project.responsibilities.map((r, i) => (
                  <li key={i} className="modal-resp-item">
                    <span className="modal-resp-icon"><CheckIcon /></span>
                    <div>
                      <strong className="modal-resp-title">{r.title}</strong>
                      <p className="modal-resp-text">{r.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Project card ────────────────────────────────────────────── */
function ProjectCard({ project, onOpen }) {
  const btnRef = useRef(null);
  const MAX_CHIPS = 3;

  return (
    <button
      ref={btnRef}
      className="proj-card"
      onClick={() => onOpen(project, btnRef)}
      aria-haspopup="dialog"
      id={`proj-btn-${project.id}`}
    >
      <div className="proj-card-top">
        <span className="proj-years">{project.years}</span>
        {project.pending && <span className="proj-pending-tag">Details coming</span>}
      </div>
      <h3 className="proj-title">{project.title}</h3>
      <div className="proj-client">{project.client}</div>
      <div className="proj-role">{project.role}</div>
      {project.skills.length > 0 && (
        <div className="chips proj-chips">
          {project.skills.slice(0, MAX_CHIPS).map((s) => <span key={s}>{s}</span>)}
          {project.skills.length > MAX_CHIPS && (
            <span className="proj-chip-more">+{project.skills.length - MAX_CHIPS}</span>
          )}
        </div>
      )}
    </button>
  );
}

/* ── Main page ───────────────────────────────────────────────── */
export default function ExperiencePage() {
  const [activeProject, setActiveProject] = useState(null);
  const activeTriggerRef = useRef(null);

  // Open modal and update hash
  const openProject = useCallback((project, triggerRef) => {
    setActiveProject(project);
    activeTriggerRef.current = triggerRef.current;
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#project-${project.id}`);
    }
  }, []);

  // Close modal and clear hash
  const closeProject = useCallback(() => {
    setActiveProject(null);
    if (typeof window !== "undefined") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  // Deep link on load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.location.hash.match(/^#project-(\d+)$/);
    if (!m) return;
    const id = parseInt(m[1], 10);
    const p = projects.find((x) => x.id === id);
    if (p) {
      const btnEl = document.getElementById(`proj-btn-${id}`);
      activeTriggerRef.current = btnEl;
      setActiveProject(p);
    }
  }, []);

  const grouped = CATEGORY_ORDER.map((cat) => ({
    cat,
    items: projects.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      {/* ── Header with caricature ─────────────────────────── */}
      <div className="exp-header">
        <div className="exp-header-text">
          <h2 className="t">Geotechnical Experience</h2>
          <p>
            My practice combines site-based work—field investigations, construction
            supervision, and audits—with numerical analysis, so that models rest on
            real ground conditions and design assumptions are checked against what
            is built.
          </p>
        </div>
        <figure className="exp-header-img">
          <img
            src={`${base}/images/caricature.png`}
            alt="Illustration of Mirna on site"
          />
        </figure>
      </div>

      {/* ── Professional Experience ─────────────────────────── */}
      <section>
        <h2 className="t">Professional Experience</h2>

        <div className="job">
          <div className="d">2024 – Present</div>
          <div>
            <h3>Senior Geotechnical Engineer &amp; Project Manager</h3>
            <div className="o">PT Solusi Geotek Optima, Bandung</div>
            <ul>
              <li>Led and managed geotechnical engineering projects, including technical planning, analysis, design, review, and coordination with clients and project stakeholders.</li>
              <li>Performed and reviewed geotechnical analyses for dams, TSFs, mine waste facilities, slopes, foundations and excavations, covering stability, seepage, deformation and soil–structure interaction.</li>
              <li>Led FMEA and quantitative risk analyses (QRA) for dams, outlet works, tunnels and tailings facilities, including failure-mode development, event trees and tolerable-risk evaluation.</li>
              <li>Developed and reviewed 2D/3D numerical models (RS2, RS3, PLAXIS, Slide2/3, GeoStudio) and coordinated subsurface investigations, laboratory testing and data interpretation.</li>
              <li>Provided technical supervision and mentoring to junior engineers and supported communication with clients, contractors, and regulatory agencies.</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="d">2023 – 2024</div>
          <div>
            <h3>Junior Geotechnical Engineer</h3>
            <div className="o">PT Solusi Geotek Optima, Bandung</div>
            <ul>
              <li>Conducted geotechnical analyses and design for mining and infrastructure projects, including slope stability, foundations, excavations, seepage and groundwater.</li>
              <li>Developed numerical models using PLAXIS 2D/3D, RS2, RS3, Slide2, Slide3, and GeoStudio to evaluate geotechnical behaviour and support engineering design.</li>
              <li>Performed seismic hazard, site response and seismic deformation analyses (PSHA, DEEPSOIL, NONLIN) for TSFs and embankment dams.</li>
              <li>Processed and interpreted subsurface investigation and laboratory data; prepared calculations, technical reports and design recommendations.</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="d">2023 – 2025</div>
          <div>
            <h3>Academic &amp; Research Assistant</h3>
            <div className="o">Institut Teknologi Bandung (part time)</div>
            <ul>
              <li>Contributed to research on the seismic response of underground structures and on the characterisation of Indonesian soils, including CPTu interpretation and laboratory testing.</li>
              <li>Contributed to the preparation of research papers, including interpretation of soil investigation data and technical discussions.</li>
              <li>Assisted undergraduate and graduate courses: SI3121 Soil Mechanics II, SI5222 Stability in Geotechnical Engineering, SI6121 Soil Dynamics and Earthquake Engineering, and SI6222 Tunnelling &amp; Underground Structures.</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="d">2024 – 2025</div>
          <div>
            <h3>Undergraduate Academic Assistant</h3>
            <div className="o">Institut Teknologi Nasional (part time)</div>
            <ul>
              <li>Assisted teaching of SIB-113 Earth Sciences and SIB-211 Soil Mechanics I, including tutorials, course materials and assessment.</li>
            </ul>
          </div>
        </div>

        <div className="job">
          <div className="d">2022 – 2023</div>
          <div>
            <h3>Internships</h3>
            <div className="o">B. Grimm TTPY (HSSE, Vietnam, 2023) · PT PP (Persero) Tbk (Civil Engineering, Bali, 2022)</div>
          </div>
        </div>
      </section>

      {/* ── Field Experience ────────────────────────────────── */}
      <section>
        <h2 className="t">Field Experience</h2>
        <div className="grid2">
          <div className="box">
            <h3>Investigation and testing</h3>
            <ul>
              <li>Coordinated subsurface investigations and laboratory testing for design.</li>
              <li>Interpreted field and laboratory data for geotechnical characterization.</li>
              <li>Soil testing for research at ITB.</li>
            </ul>
          </div>
          <div className="box">
            <h3>Construction supervision</h3>
            <ul>
              <li>Wetar in-pit tailings construction (2024).</li>
              <li>Design review and supervision, Area 2-3 filtered tailings facility, Morowali (2025–2026).</li>
            </ul>
          </div>
          <div className="box">
            <h3>Audit and inspection</h3>
            <ul>
              <li>Mid-year audit, Toka Tindung TSF (2023).</li>
              <li>Sediment ponds and dumps safety review, Kalimantan Prima Coal (2025).</li>
            </ul>
          </div>
          <div className="box">
            <h3>Early site exposure</h3>
            <ul>
              <li>Site inspections and field testing, PT PP port project, Bali (2022).</li>
              <li>HSSE at a solar power plant, Vietnam (2023).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Numerical Modelling ─────────────────────────────── */}
      <section>
        <h2 className="t">Numerical Modelling</h2>
        <p>
          Problems I model include slope stability, foundations and excavations, seepage
          and groundwater, soil–structure interaction, seismic response and seismic
          deformation. Examples are the seismic response of Jakarta MRT stations (MSc
          thesis), retaining structures for a port reinforcement project, and earth and
          rockfill dams.
        </p>
        <div className="grid2">
          <div className="box">
            <h3>Finite element, finite difference and limit equilibrium</h3>
            <div className="chips">
              <span>RS2</span><span>RS3</span><span>Slide2</span><span>Slide3</span>
              <span>PLAXIS 2D/3D</span><span>PLAXIS LE</span><span>GeoStudio</span>
              <span>FLAC</span>
            </div>
          </div>
          <div className="box">
            <h3>Seismic and ground motion</h3>
            <div className="chips">
              <span>DEEPSOIL</span><span>NONLIN</span><span>EZ-FRISK</span><span>SeismoSignal</span>
            </div>
          </div>
          <div className="box">
            <h3>Foundations and groundwater</h3>
            <div className="chips">
              <span>RSPile</span><span>ENSOFT</span><span>MODFLOW</span>
            </div>
          </div>
          <div className="box">
            <h3>Geological modelling</h3>
            <div className="chips">
              <span>Leapfrog</span><span>Micromine</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────── */}
      <section>
        <h2 className="t">Projects</h2>
        {grouped.map(({ cat, items }) => (
          <div key={cat} className="proj-category">
            <h3 className="proj-cat-heading">{cat}</h3>
            <div className="proj-grid">
              {items.map((p) => (
                <ProjectCard key={p.id} project={p} onOpen={openProject} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── Modal ───────────────────────────────────────────── */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={closeProject}
          triggerRef={{ current: activeTriggerRef.current }}
        />
      )}
    </>
  );
}
