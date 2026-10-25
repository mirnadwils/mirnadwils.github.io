// Server component — exports metadata, delegates rendering to client component.
import ExperiencePage from "./ExperiencePage";

export const metadata = {
  title: "Geotechnical Experience",
  description:
    "Professional experience, field work, numerical modelling, and project portfolio of Mirna Dwi Lestari Salamah — geotechnical engineer specialising in tailings facilities, dams, and numerical analysis.",
};

export default function Page() {
  return <ExperiencePage />;
}
