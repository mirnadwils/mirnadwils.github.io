// Static-export compatible redirect from /field/ to /experience/
// Uses meta-refresh (works without JS) + visible link.
export const metadata = {
  title: "Redirecting…",
  description: "This page has moved to Geotechnical Experience.",
};

export default function FieldRedirect() {
  return (
    <>
      {/* Meta refresh works in static HTML served by GitHub Pages */}
      <meta httpEquiv="refresh" content="0; url=../experience/" />
      <section>
        <h2 className="t">Page moved</h2>
        <p>
          This page has moved.{" "}
          <a href="../experience/">Go to Geotechnical Experience →</a>
        </p>
      </section>
    </>
  );
}
