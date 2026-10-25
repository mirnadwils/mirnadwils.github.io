import researchIdeas from "../../content/researchIdeas";

export const metadata = {
  title: "Research Ideas",
  description:
    "Working research directions that Mirna Dwi Lestari Salamah is interested in exploring in doctoral research — geotechnical engineering, numerical modelling, and related fields.",
};

const STATUS_COLORS = {
  Draft:      "idea-badge--draft",
  Developing: "idea-badge--developing",
};

/** Single collapsible research idea card rendered via <details>/<summary>. */
function ResearchIdeaCard({ idea }) {
  const anchorId = `idea-${idea.id}`;
  return (
    <details className="idea-card" id={anchorId}>
      <summary className="idea-summary">
        <div className="idea-summary-main">
          <span className={`idea-badge ${STATUS_COLORS[idea.status] || ""}`}>
            {idea.status}
          </span>
          <h3 className="idea-title">{idea.title}</h3>
        </div>
        {idea.keywords && idea.keywords.length > 0 && (
          <div className="chips idea-keywords">
            {idea.keywords.map((k) => (
              <span key={k}>{k}</span>
            ))}
          </div>
        )}
        <span className="idea-chevron" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </summary>

      <div className="idea-body">
        {idea.background && (
          <div className="idea-section">
            <h4 className="idea-section-heading">Background</h4>
            <p>{idea.background}</p>
          </div>
        )}
        {idea.problemStatement && (
          <div className="idea-section">
            <h4 className="idea-section-heading">Problem statement</h4>
            <p>{idea.problemStatement}</p>
          </div>
        )}
        {idea.researchQuestions && idea.researchQuestions.length > 0 && (
          <div className="idea-section">
            <h4 className="idea-section-heading">Research questions</h4>
            <ol className="idea-list">
              {idea.researchQuestions.map((q, i) => <li key={i}>{q}</li>)}
            </ol>
          </div>
        )}
        {idea.objectives && idea.objectives.length > 0 && (
          <div className="idea-section">
            <h4 className="idea-section-heading">Objectives</h4>
            <ul className="idea-list">
              {idea.objectives.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
          </div>
        )}
        {idea.methodology && (
          <div className="idea-section">
            <h4 className="idea-section-heading">Methodology</h4>
            <p>{idea.methodology}</p>
          </div>
        )}
        {idea.expectedContribution && (
          <div className="idea-section">
            <h4 className="idea-section-heading">Expected contribution</h4>
            <p>{idea.expectedContribution}</p>
          </div>
        )}
        {idea.relatedWork && idea.relatedWork.length > 0 && (
          <div className="idea-section">
            <h4 className="idea-section-heading">Related work</h4>
            <ul className="idea-list">
              {idea.relatedWork.map((r, i) => (
                <li key={i}>
                  <a href={r.href} target="_blank" rel="noopener noreferrer">
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="idea-permalink">
          <a href={`#${anchorId}`} className="idea-permalink-link">
            # permalink
          </a>
        </p>
      </div>
    </details>
  );
}

/** Empty-state card shown when no ideas are defined yet. */
function EmptyState() {
  return (
    <div className="idea-empty">
      <svg aria-hidden="true" focusable="false" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6L15 17H9l-.7-2C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7z" />
      </svg>
      <p className="idea-empty-text">
        Research ideas are being developed. Please check back soon.
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <section>
        <h2 className="t">Research Ideas</h2>
        <p className="idea-intro">
          Directions I am interested in exploring in doctoral research. These
          notes are working drafts and will develop into research proposals.
        </p>

        {researchIdeas.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="idea-list-outer">
            {researchIdeas.map((idea) => (
              <ResearchIdeaCard key={idea.id} idea={idea} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
