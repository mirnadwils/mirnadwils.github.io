/**
 * Publications data.
 * Fields:
 *   id        – stable numeric id (1-indexed, chronological order from CV)
 *   slug      – URL-safe identifier (reserved for future detail pages)
 *   year      – publication year (number)
 *   type      – "Journal" | "Conference"
 *   authors   – formatted author string; "Salamah, M. D. L." triggers bold rendering
 *   title     – full paper title
 *   venue     – journal/conference name and any volume/issue/page info
 *   doi       – DOI string without "https://doi.org/" prefix, or null
 *   url       – full URL fallback when no DOI, or null
 *   objective – one-sentence research objective (draft from title; do not elaborate)
 */

/** @type {Array<{id:number,slug:string,year:number,type:string,authors:string,title:string,venue:string,doi:string|null,url:string|null,objective:string}>} */
const publications = [
  {
    id: 1,
    slug: "sensitive-volcanic-residual-soils-west-java-2026",
    year: 2026,
    type: "Journal",
    authors: "Salamah, M. D. L., Jitno, H., Lestari, I. F., Marsa, N. A. I., & Hanjani, A.",
    title: "Characterization and shear strength evaluation of sensitive volcanic residual soils in West Java",
    venue: "Indonesian Geotechnical Journal, 5(1)",
    doi: "10.56144/igj.v5i1.144",
    url: null,
    objective:
      "To characterize sensitive volcanic residual soils in West Java and evaluate their shear strength behaviour.",
  },
  {
    id: 2,
    slug: "cptu-nkt-undrained-shear-strength-soft-clays-western-java-2026",
    year: 2026,
    type: "Journal",
    authors:
      "Basarah, Y. I., Salamah, M. D. L., Irsyam, M., Apriadi, D., Susila, E., Krisnanto, S., & Marvel, J.",
    title:
      "Interpreting the undrained shear strength of soft clays using CPTu: evaluation of cone bearing factor (Nkt) and related practical soil parameters at selected sites in Western Java",
    venue: "Geotechnics, 6(1), 23",
    doi: "10.3390/geotechnics6010023",
    url: null,
    objective:
      "To evaluate the cone bearing factor (Nkt) used to interpret the undrained shear strength of soft clays from CPTu, together with related practical soil parameters, at selected sites in Western Java.",
  },
  {
    id: 3,
    slug: "mine-waste-soft-ground-seagc-2026",
    year: 2026,
    type: "Conference",
    authors: "Salamah, M. D. L., Jitno, H., Marsa, N. A. I., Lestari, I. F., & Hanjani, A.",
    title:
      "Geotechnical challenges in the design and construction of mine waste storage facilities on soft ground",
    venue: "22nd Southeast Asian Geotechnical Conference & 5th AGSSEA Conference, Philippines",
    doi: null,
    url: null,
    objective:
      "To discuss the geotechnical challenges in the design and construction of mine waste storage facilities on soft ground.",
  },
  {
    id: 4,
    slug: "dwall-penetration-hydraulic-stability-mrt-sibe-2025",
    year: 2025,
    type: "Conference",
    authors: "Salamah, M. D. L., Basarah, Y. I., & Irsyam, M.",
    title:
      "Effect of D-wall penetration depth on hydraulic stability in deep excavation for Jakarta MRT project",
    venue: "International Symposium on Infrastructure and Building Engineering 2025 (SIBE2025), ITB",
    doi: null,
    url: null,
    objective:
      "To examine how the penetration depth of diaphragm walls affects hydraulic stability in deep excavations for the Jakarta MRT project.",
  },
  {
    id: 5,
    slug: "in-pit-dump-risk-wetar-perhapi-2025",
    year: 2025,
    type: "Conference",
    authors:
      "Abdillah, K. M., Salamah, M. D. L., Adz Dzokir, A., Dwijayanto, D., Jitno, H., Najib, M., & Purnamasari, H.",
    title:
      "Geotechnical and hydrological risk assessment of an in-pit dump during the non-operational period: a case study of the Wetar copper mine, Maluku Province",
    venue: "Prosiding TPT XXXIII PERHAPI",
    doi: null,
    url: null,
    objective:
      "To assess the geotechnical and hydrological risks of an in-pit dump during the non-operational period, using the Wetar copper mine as a case study.",
  },
  {
    id: 6,
    slug: "pseudo-dynamic-seismic-dams-icold-2025",
    year: 2025,
    type: "Conference",
    authors: "Jitno, H., Salamah, M. D. L., Marsa, N. A. I., Hanjani, A., & Lestari, I. F.",
    title: "Pseudo-dynamic seismic deformation analysis of earth and rockfill dams",
    venue:
      "International Symposium \u201cCommon Challenges, Shared Future, Better Dams\u201d ICOLD-CIGB 2025, Chengdu, May 2025",
    doi: null,
    url: null,
    objective:
      "To analyse the seismic deformation of earth and rockfill dams using a pseudo-dynamic approach.",
  },
  {
    id: 7,
    slug: "seismic-methods-la-villita-large-dams-2024",
    year: 2024,
    type: "Conference",
    authors: "Salamah, M. D. L., Jitno, H., Lestari, I. F., & Marsa, N. A. I.",
    title:
      "Evaluation of seismic analysis methods on earth and rockfill dams: a case study of La Villita Dam",
    venue: "National Seminar on Large Dams 2024",
    doi: null,
    url: null,
    objective:
      "To evaluate seismic analysis methods for earth and rockfill dams, using La Villita Dam as a case study.",
  },
  {
    id: 8,
    slug: "pga-ratio-seed-ground-motion-aygec-2024",
    year: 2024,
    type: "Conference",
    authors:
      "Salamah, M. D. L., Jitno, H., Marsa, N. A. I., Fanani, M. A., Lestari, I. F., & Sulaiman, A.",
    title:
      "The effects of PGA ratio on the seed ground motion selection for spectrally matched earthquake design ground motions",
    venue: "Proceedings 10th Asian Young Geotechnical Engineers Conference",
    doi: null,
    url: null,
    objective:
      "To investigate how the PGA ratio affects the selection of seed ground motions for spectrally matched design ground motions.",
  },
  {
    id: 9,
    slug: "pseudo-static-underground-mrt-ictussd-2024",
    year: 2024,
    type: "Conference",
    authors: "Basarah, Y. I., Salamah, M. D. L., & Irsyam, M.",
    title:
      "Evaluation of pseudo-static methods on the seismic response of underground structures at MRT stations in Jakarta",
    venue:
      "Proceedings of the International Conference on Tunnelling and Underground Space for Sustainable Development",
    doi: null,
    url: null,
    objective:
      "To evaluate pseudo-static methods for estimating the seismic response of underground structures at Jakarta MRT stations.",
  },
];

export default publications;
