import { geovastra } from "../../lib/site";

export const metadata = {
  title: "Teaching",
  description:
    "Teaching experience of Mirna Dwi Lestari Salamah at ITB and ITENAS, covering geotechnical engineering courses and the Geovastra learning platform.",
};

/** Renders "Geovastra" as a link when the URL is set, or as styled text when empty. */
function GeovastraLink() {
  if (geovastra) {
    return (
      <a href={geovastra} target="_blank" rel="noopener noreferrer">
        Geovastra
      </a>
    );
  }
  return (
    <span
      className="geovastra-soon"
      title="Website coming soon"
      aria-label="Geovastra (website coming soon)"
      tabIndex={-1}
    >
      Geovastra
    </span>
  );
}

export default function Page() {
  return (
    <>
      <section>
        <h2 className="t">Teaching</h2>
        <p>
          I am currently building <GeovastraLink />, a geotechnical learning
          platform for young engineers in Indonesia.
        </p>
        <p>Academic assistant at ITB and ITENAS: preparing materials, answer keys and grading, and supporting students.</p>
        <ul className="plain two">
          <li>SI6222 Tunnelling &amp; Underground Structures (ITB, 2024–2025)</li>
          <li>SI6121 Soil Dynamics and Earthquake Engineering (ITB, 2024)</li>
          <li>SI5222 Stability in Geotechnical Engineering (ITB, 2024)</li>
          <li>SI3121 Soil Mechanics II (ITB, 2023)</li>
          <li>Soil Mechanics Practicum (ITB, 2023)</li>
          <li>SIB211 Soil Mechanics I (ITENAS, 2024–2025)</li>
          <li>SIB113 Earth Sciences (ITENAS, 2024)</li>
        </ul>
      </section>
    </>
  );
}
