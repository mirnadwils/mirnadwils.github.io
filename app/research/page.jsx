import publications from "../../content/publications";
import { scholar, researchgate } from "../../lib/site";

export const metadata = {
  title: "Research",
  description:
    "Publications and research activities of Mirna Dwi Lestari Salamah: journal articles and conference papers in geotechnical engineering, numerical modelling, and earthquake engineering.",
};

const HIGHLIGHT = "Salamah, M. D. L.";

/** Split an author string on HIGHLIGHT and interleave bold spans. */
function Authors({ text }) {
  const parts = text.split(HIGHLIGHT);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <b>{HIGHLIGHT}</b>}
        </span>
      ))}
    </>
  );
}

const ScholarIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ flexShrink: 0 }}
  >
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm-1 12.99L5.63 13 4 13.91l8 4.36 8-4.36L18.37 13 13 15.99V16z" />
  </svg>
);

const ResearchGateIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ flexShrink: 0 }}
  >
    <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.195 12.195 0 0 0-.39 2.869c0 .71.07 1.406.21 2.084.14.68.357 1.284.655 1.81a3.9 3.9 0 0 0 1.143 1.256 2.78 2.78 0 0 0 1.668.477c.656 0 1.207-.13 1.654-.39a2.78 2.78 0 0 0 1.04-1.098c.261-.47.448-1.02.56-1.647.113-.626.17-1.315.17-2.065 0-.703-.05-1.38-.152-2.034a5.79 5.79 0 0 0-.49-1.736 3.12 3.12 0 0 0-.936-1.215C20.795.155 20.25 0 19.586 0zm-8.41.21C7.553.21 4.872 2.36 4.872 7.222c0 4.807 2.681 6.967 6.304 6.967 1.15 0 2.145-.211 2.985-.635v1.23H9.96V17h4.201v6.67h2.985v-6.67h2.49v-2.216h-2.49v-1.703c2.268-.76 3.77-2.86 3.77-6.05C20.917 2.36 18.235.21 11.177.21zm0 2.222c1.852 0 3.22.437 4.092 1.285.862.847 1.285 2.157 1.285 3.91 0 1.75-.43 3.055-1.295 3.9-.865.847-2.232 1.27-4.082 1.27-1.862 0-3.234-.423-4.1-1.27-.863-.845-1.295-2.15-1.295-3.9 0-1.753.432-3.063 1.295-3.91.866-.848 2.238-1.285 4.1-1.285z" />
  </svg>
);

export default function Page() {
  return (
    <>
      <section>
        <h2 className="t">Publications</h2>

        {/* ── Profile buttons ──────────────────────────────── */}
        <div className="pub-buttons">
          {scholar && (
            <a
              href={scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-btn"
            >
              <ScholarIcon />
              Google Scholar
            </a>
          )}
          {researchgate && (
            <a
              href={researchgate}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-btn"
            >
              <ResearchGateIcon />
              ResearchGate
            </a>
          )}
        </div>

        {/* ── Publication list ─────────────────────────────── */}
        <ol className="pubs">
          {publications.map((pub) => (
            <li key={pub.id}>
              <span className="y">{pub.year}</span>
              <span>
                <span className="tag">{pub.type}</span>
                <Authors text={pub.authors} />{" "}
                {pub.title}.{" "}
                <i>{pub.venue}</i>
                {pub.doi && (
                  <>
                    {". "}
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOI
                    </a>
                  </>
                )}
                {!pub.doi && pub.url && (
                  <>
                    {". "}
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      Link
                    </a>
                  </>
                )}
                {pub.objective && (
                  <span className="pub-objective">
                    <span className="pub-obj-label">Objective:</span>{" "}
                    {pub.objective}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ol>

        <p>
          Technical reviewer, <i>Indonesian Geotechnical Journal</i> (2026–present).
        </p>
      </section>
    </>
  );
}
