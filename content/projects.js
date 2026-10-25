/**
 * content/projects.js
 * All project entries for the Geotechnical Experience page.
 *
 * Fields per entry:
 *   id            – stable integer
 *   slug          – URL-safe hash key (used for deep-link: #project-<id>)
 *   title         – project title
 *   client        – client / organisation
 *   years         – display string, e.g. "2025–2026"
 *   role          – role title on this project
 *   category      – one of the CATEGORY_ORDER values
 *   summary       – 1–3 sentences from the source text
 *   skills        – string[], only items explicitly named in the source text
 *   responsibilities – {title, text}[], 3–6 items from source text faithfully rewritten
 *   pending       – true if no detailed write-up exists yet (show "Coming soon")
 */

export const CATEGORY_ORDER = [
  "Tailings & Mine Waste",
  "Heap Leach",
  "Dams & Hydropower",
  "Foundations & Civil",
  "Academic",
];

/** @type {Array} */
const projects = [
  // ── Tailings & Mine Waste ──────────────────────────────────────────────────

  {
    id: 1,
    slug: "wetar-in-pit-tsf",
    title: "Wetar In-Pit Tailings Storage Facility",
    client: "PT Batutua Kharisma Permai",
    years: "2023–2025",
    role: "Geotechnical Engineer → Project Manager",
    category: "Tailings & Mine Waste",
    summary:
      "A multi-phase engagement covering the Basic Engineering Design, Detailed Engineering Design, and Construction Supervision of an in-pit tailings storage facility on Wetar Island, Maluku. Each phase built on the previous to deliver a compliant, monitored facility from concept through to construction.",
    skills: [
      "Stability Analysis",
      "Seismic Deformation Analysis",
      "Seepage Analysis",
      "Groundwater Modelling",
      "Liner System Design",
      "QA/QC Oversight",
      "Risk Assessment",
    ],
    responsibilities: [
      {
        title: "Basic Engineering Design",
        text: "Worked as part of a team to develop the design of the in-pit tailings storage facility, conducting 2D and 3D stability analysis, seismic deformation analysis, groundwater analysis, and seepage analysis to evaluate potential issues related to water flow and structural stability.",
      },
      {
        title: "Detailed Engineering Design",
        text: "Led geotechnical design focusing on stability analyses (static, pseudostatic, seismic), seepage and groundwater modelling, and hydrogeology assessments. Developed conceptual and final TSF layouts, liner systems, and surface water management designs. Delivered final design reports and presentations.",
      },
      {
        title: "Construction Supervision",
        text: "Managed construction supervision by ensuring all construction activities adhered to design specifications, safety standards, and environmental regulations. Oversaw installation of critical infrastructure, managed construction progress, and ensured compliance with geotechnical requirements. Developed technical specifications and oversaw QA/QC monitoring processes.",
      },
      {
        title: "Risk & Monitoring Planning",
        text: "Provided construction guidance, risk assessments, and monitoring plans. Ensured regulatory compliance and environmental mitigation throughout all project phases.",
      },
    ],
    pending: false,
  },

  {
    id: 2,
    slug: "taliabu-tsf-permit",
    title: "Taliabu TSF No. 1 Permit Approval",
    client: "PT Indotek Konsultan Utama",
    years: "2024",
    role: "Geotechnical Engineer",
    category: "Tailings & Mine Waste",
    summary:
      "Contributed to the permitting process of the Taliabu Tailings Storage Facility No. 1 by supporting geotechnical evaluations and ensuring compliance with dam safety regulations.",
    skills: [
      "Stability Analysis",
      "Seepage Analysis",
      "Instrumentation (Piezometers & Inclinometers)",
      "Hazard Classification",
      "ICOLD",
      "ANCOLD",
      "GISTM",
    ],
    responsibilities: [
      {
        title: "Stability & Seepage Review",
        text: "Reviewed static stability assessments and seepage control strategies to confirm compliance with applicable dam safety requirements.",
      },
      {
        title: "Performance Monitoring Support",
        text: "Supported performance monitoring through instrumentation, including piezometers and inclinometers, to track behaviour of the facility during the permitting phase.",
      },
      {
        title: "Failure Mode & Hazard Assessment",
        text: "Provided assessments related to hazard classification, overtopping risk analysis, and potential failure modes to satisfy regulatory requirements.",
      },
      {
        title: "Regulatory Compliance",
        text: "Ensured alignment with national standards (SNI) and international dam safety guidelines including ICOLD, ANCOLD, and GISTM throughout the permit approval process.",
      },
    ],
    pending: false,
  },

  {
    id: 3,
    slug: "toka-tindung-audit",
    title: "Mid-Year Audit – Toka Tindung TSF",
    client: "PT Meares Soputan Mining",
    years: "2023",
    role: "Geotechnical Engineer",
    category: "Tailings & Mine Waste",
    summary:
      "Conducted the annual mid-year audit of the Toka Tindung Tailings Storage Facility (RL 294 m – RL 296 m) in North Minahasa, North Sulawesi, evaluating structural safety and regulatory compliance.",
    skills: [
      "Seepage Analysis",
      "3D Dynamic Analysis",
      "PSHA",
      "Hazard Risk Analysis",
      "Numerical Modelling",
    ],
    responsibilities: [
      {
        title: "Groundwater Calibration",
        text: "Calibrated groundwater conditions using numerical models, which were then used for seepage analysis to identify potential issues related to water flow.",
      },
      {
        title: "3D Dynamic Analysis",
        text: "Performed 3D dynamic analysis to evaluate structural behaviour under loading conditions and vibrations that may affect the integrity of the facility.",
      },
      {
        title: "Hazard & Failure Mode Review",
        text: "Prepared hazard risk analysis and potential failure mode analysis documents to identify potential failure scenarios as part of the safety review.",
      },
      {
        title: "Seismic Hazard Assessment",
        text: "Conducted a Probabilistic Seismic Hazard Analysis (PSHA) to assess potential seismic risks that may impact the facility.",
      },
    ],
    pending: false,
  },

  {
    id: 4,
    slug: "morowali-area-2-3",
    title: "Area 2-3 Filtered Tailings Facility – Design Review & Supervision",
    client: "PT Merdeka Tsingshan Indonesia",
    years: "2025–2026",
    role: "Geotechnical Engineer",
    category: "Tailings & Mine Waste",
    summary: "Design review and supervision of the Area 2-3 filtered tailings facility, Morowali.",
    skills: [],
    responsibilities: [],
    pending: true,
  },

  {
    id: 5,
    slug: "pani-tailings-studies",
    title: "Pani Project Tailings Studies",
    client: "PT Merdeka Copper Gold",
    years: "2025–2026",
    role: "Project Manager",
    category: "Tailings & Mine Waste",
    summary:
      "Tailings technology selection, slurry and paste conceptual study, and paste TSF pre-feasibility study for the Pani Project.",
    skills: [],
    responsibilities: [],
    pending: true,
  },

  {
    id: 6,
    slug: "tsf-ultimate-ptk",
    title: "Pre-Feasibility Study & Basic Engineering Design of TSF Ultimate PTK",
    client: "PT Pelsart Tambang Kencana",
    years: "2025",
    role: "Senior Geotechnical Engineer",
    category: "Tailings & Mine Waste",
    summary: "Pre-feasibility study and basic engineering design for the ultimate TSF configuration.",
    skills: [],
    responsibilities: [],
    pending: true,
  },

  {
    id: 7,
    slug: "tujuh-bukit-tsf",
    title: "Tujuh Bukit Tailings Storage Facility",
    client: "PT Bumi Suksesindo",
    years: "2023–2025",
    role: "Geotechnical Engineer / Senior Geotechnical Engineer",
    category: "Tailings & Mine Waste",
    summary:
      "A two-phase engagement for the Tujuh Bukit TSF in Banyuwangi, East Java, covering conceptual and feasibility design followed by a Tsunami & PSHA study. The feasibility phase included geotechnical analyses for an in-pit tailings storage facility to ensure compliance with applicable standards.",
    skills: [
      "Stability Analysis",
      "Seismic Deformation Analysis",
      "Seepage Analysis",
      "Groundwater Analysis",
      "Contaminant Transport Modelling",
      "PSHA",
      "JSEA",
      "Bill of Quantities",
    ],
    responsibilities: [
      {
        title: "Conceptual & Feasibility Design",
        text: "Worked as part of a team to develop the design of an in-pit tailings storage facility. Conducted 2D and 3D stability analysis, seismic deformation analysis, groundwater analysis, seepage analysis, and contaminant transport modelling to evaluate potential issues related to water flow, structural stability, and movement of contaminants.",
      },
      {
        title: "JSEA & BoQ Preparation",
        text: "Prepared the JSEA (Job Safety and Environmental Analysis) document, performed calculations for the Bill of Quantities (BoQ), and calculated the storage curve for the TSF capacity across multiple tailings height scenarios to support decision-making and project planning.",
      },
      {
        title: "Tsunami & PSHA Study",
        text: "Conducted a Tsunami and Probabilistic Seismic Hazard Analysis (PSHA) study for the Tujuh Bukit TSF site in 2025.",
      },
    ],
    pending: false,
  },

  {
    id: 8,
    slug: "kpc-audit",
    title: "Audit – Sediment Ponds & Dumps Safety Review",
    client: "PT Kalimantan Prima Coal",
    years: "2025",
    role: "Project Manager & Geotechnical Engineer",
    category: "Tailings & Mine Waste",
    summary: "Safety review audit of sediment ponds and waste dumps.",
    skills: [],
    responsibilities: [],
    pending: true,
  },

  // ── Heap Leach ─────────────────────────────────────────────────────────────

  {
    id: 9,
    slug: "shlp-bypass-bakan",
    title: "SHLP Bypass Engineering Study – J Resources Bakan Gold Project",
    client: "J Resources Bakan Gold Project",
    years: "2025–2026",
    role: "Lead Geotechnical Engineer",
    category: "Heap Leach",
    summary:
      "Led the geotechnical engineering study for the proposed Spent Heap Leach Pad (SHLP) Bypass Facility. The work covered the full scope from site data interpretation through to design recommendations and risk evaluation.",
    skills: [
      "Site Investigation Interpretation",
      "Seepage Modelling",
      "Static Stability Analysis",
      "Seismic Stability Analysis",
      "Seismic Deformation Analysis",
      "Geotechnical Risk Evaluation",
      "FMEA / PFMA",
    ],
    responsibilities: [
      {
        title: "Site Investigation Interpretation",
        text: "Interpreted site investigation data and developed geotechnical design parameters to underpin the facility design.",
      },
      {
        title: "Stability & Seepage Analysis",
        text: "Performed seepage modelling, static and seismic stability analyses, and post-earthquake and seismic deformation assessments for the SHLP Bypass Facility.",
      },
      {
        title: "Risk & FMEA Preparation",
        text: "Conducted geotechnical risk evaluation and prepared the FMEA/PFMA and Risk Assessment documents.",
      },
      {
        title: "Design Documentation",
        text: "Prepared the Review Design Report, Interpretative Report, and Technical Specifications, providing engineering recommendations for the detailed design and construction of the SHLP facility.",
      },
    ],
    pending: false,
  },

  {
    id: 10,
    slug: "heap-leach-gorontalo",
    title: "Heap Leach Pad Design – Motomboto Basic Engineering Design",
    client: "Gorontalo Minerals",
    years: "2025–2026",
    role: "Project Manager / Geotechnical Engineer",
    category: "Heap Leach",
    summary:
      "Performed geotechnical design and numerical modelling for the Heap Leach Pad facility. Work encompassed staged construction modelling and assessment of interface behaviour under leaching operations.",
    skills: [
      "FEM",
      "Staged Construction Modelling",
      "Transient Seepage Analysis",
      "Interface Analysis",
      "Liner System Design",
    ],
    responsibilities: [
      {
        title: "Staged Construction Modelling",
        text: "Conducted staged construction modelling using FEM and transient seepage analysis to assess phreatic surface development and slope stability throughout the construction sequence.",
      },
      {
        title: "Interface & Liner Assessment",
        text: "Evaluated the impact of leaching operations on interface behaviour and liner system safety.",
      },
      {
        title: "Geometry & Drainage Recommendations",
        text: "Developed recommendations for base slope geometry, gravel drainage thickness, and interface parameters based on laboratory and field data.",
      },
      {
        title: "Construction & Monitoring Plan",
        text: "Prepared the construction methodology for ore stacking sequencing and piezometer placement strategy to support long-term monitoring and regulatory compliance.",
      },
    ],
    pending: false,
  },

  {
    id: 11,
    slug: "heap-leach-j-resources-static",
    title: "Static Heap Leach Pad Design Review – J Resources Bolaang Mongondow",
    client: "J Resources Bolaang Mongondow",
    years: "2025",
    role: "Geotechnical Engineer",
    category: "Heap Leach",
    summary: "Design review of the static heap leach pad facility.",
    skills: [],
    responsibilities: [],
    pending: true,
  },

  // ── Dams & Hydropower ──────────────────────────────────────────────────────

  {
    id: 12,
    slug: "qra-diversion-tunnel-kayan",
    title: "QRA of Diversion Tunnel Residual Failure Modes & Longevity Assessment",
    client: "PT Kayan Hydropower Nusantara",
    years: "2026",
    role: "Geotechnical Engineer",
    category: "Dams & Hydropower",
    summary:
      "Quantitative risk analysis of diversion tunnel residual failure modes during indefinite suspension and tunnel longevity assessment.",
    skills: [],
    responsibilities: [],
    pending: true,
  },

  {
    id: 13,
    slug: "qra-mentarang-dam",
    title: "QRA – MIHEP Low Level Outlet, Mentarang Dam",
    client: "PT Tata Guna Patria Consultant",
    years: "2025",
    role: "Project Manager",
    category: "Dams & Hydropower",
    summary: "Quantitative risk analysis of the MIHEP Low Level Outlet at Mentarang Dam.",
    skills: [],
    responsibilities: [],
    pending: true,
  },

  {
    id: 14,
    slug: "qra-cisokan-dam",
    title: "QRA – Bottom Outlet, Cisokan Dam",
    client: "PT PLN (State Electricity Company)",
    years: "2025",
    role: "Project Manager",
    category: "Dams & Hydropower",
    summary: "Quantitative risk analysis of the bottom outlet at Cisokan Dam.",
    skills: [],
    responsibilities: [],
    pending: true,
  },

  // ── Foundations & Civil ────────────────────────────────────────────────────

  {
    id: 15,
    slug: "sgar-filtered-red-mud-landfill",
    title: "DED – Filtered Red Mud Landfill, Slag Stockyard & Red Mud Storage Facility, SGAR Project",
    client: "PT Borneo Alumina Indonesia",
    years: "2023–2024",
    role: "Geotechnical Engineer",
    category: "Foundations & Civil",
    summary:
      "Detailed engineering design for three structures at the SGAR Project in Mempawah, West Kalimantan: the Filtered Red Mud Landfill, the Filtered Red Mud Storage Facility, and the Slag Stockyard. All three required geotechnical design on soft ground and compliance with KLHK technical requirements.",
    skills: [
      "FEM",
      "LEM",
      "Seepage Analysis",
      "Ground Improvement",
      "Soft Soil Engineering",
      "Failure Impact Assessment",
      "Groundwater Mapping",
      "Consolidation Analysis",
      "PVD Design",
    ],
    responsibilities: [
      {
        title: "Red Mud Landfill – Dike Design",
        text: "Designed dike structures tailored to project requirements and site conditions, including interpretation of soil investigation results, seepage analysis, and ground improvement design for the presence of soft soil. Ensured dike stability during construction and final conditions through FEM and LEM modelling. Prepared a failure impact assessment document and developed technical analyses to meet KLHK's technical requirements. Conducted regular site visits to monitor construction progress and address technical challenges.",
      },
      {
        title: "Red Mud Storage Facility – Seepage & Stability",
        text: "Performed seepage analysis and addressed the need for ground improvement due to the presence of soft soil. Ensured dike stability through FEM and LEM modelling. Prepared a failure impact assessment document and developed analyses to meet KLHK's requirements. Modelled groundwater mapping to determine observation well locations for design and monitoring.",
      },
      {
        title: "Slag Stockyard – Soft Soil Engineering",
        text: "Conducted slope stability analysis for embankments built on soft soil, using soft soil improvement techniques to achieve the required safety factor. Recommended construction scenarios to address soft soil issues and performed consolidation rate calculations using PVD performance and preloading during the construction phase.",
      },
      {
        title: "HDPE Pipe Analysis",
        text: "Conducted pipe analysis to ensure the safety of HDPE pipes against potential buckling and crushing and estimated possible deflection.",
      },
    ],
    pending: false,
  },

  {
    id: 16,
    slug: "great-mosque-tower-foundation",
    title: "Foundation Design Review – 199 m Tower, Great Mosque of North Sumatra",
    client: "PT Athiras Sarana Konstruksi",
    years: "2024",
    role: "Geotechnical Engineer",
    category: "Foundations & Civil",
    summary:
      "Evaluated soil conditions, foundation design, and assessed potential differential and total settlement in relation to adjacent structures for the 199-metre tower of the Great Mosque of North Sumatra.",
    skills: [
      "Soil Investigation Interpretation",
      "Foundation Bearing Capacity",
      "Soil-Structure Interaction",
      "2D FEM",
      "3D FEM",
      "Liquefaction Assessment",
    ],
    responsibilities: [
      {
        title: "Soil Parameter Interpretation",
        text: "Analysed geotechnical investigation results and interpreted soil parameters as the basis for foundation design review.",
      },
      {
        title: "Settlement Assessment",
        text: "Assessed potential differential and total settlement in relation to adjacent structures.",
      },
      {
        title: "Foundation Bearing Capacity",
        text: "Performed foundation bearing capacity calculations to verify the adequacy of the proposed foundation system.",
      },
      {
        title: "Soil-Structure Interaction Modelling",
        text: "Conducted soil-structure interaction modelling using both 2D and 3D finite element methods.",
      },
      {
        title: "Liquefaction Assessment & Recommendations",
        text: "Assessed liquefaction potential and provided recommendations to improve the structural integrity and safety of the tower, offering actionable suggestions for designing a strong and reliable foundation for long-term performance.",
      },
    ],
    pending: false,
  },

  {
    id: 17,
    slug: "main-haul-road-culvert-konawe",
    title: "Main Haul Road Culvert Design Review, Konawe",
    client: "PT Sulawesi Cahaya Mineral",
    years: "2025",
    role: "Lead Geotechnical Engineer",
    category: "Foundations & Civil",
    summary:
      "Led the geotechnical assessment for a critical culvert crossing along the mine's main haul road, covering stability under static, transient, and seismic conditions, and supporting design selection through a multi-criteria and quantitative risk analysis.",
    skills: [
      "FEM",
      "Slope Stability Analysis",
      "Seepage Analysis",
      "Seismic Deformation",
      "Multi-Criteria Analysis (MCA)",
      "Quantitative Risk Analysis (QRA)",
    ],
    responsibilities: [
      {
        title: "Static & Seismic Stability Analysis",
        text: "Led the geotechnical assessment covering stability analysis under static, transient, and seismic conditions for the culvert crossing along the mine's main haul road.",
      },
      {
        title: "Finite Element Modelling",
        text: "Conducted comprehensive finite element modelling (FEM) to evaluate slope stability, seepage, and piping risk during extreme rainfall and drawdown events.",
      },
      {
        title: "Post-Earthquake Deformation",
        text: "Assessed post-earthquake deformation using strength reduction and pseudo-static approaches.",
      },
      {
        title: "Multi-Criteria Analysis",
        text: "Performed Multi-Criteria Analysis (MCA) to support design selection of culvert configurations, balancing technical performance, hydraulic capacity, and constructability.",
      },
      {
        title: "Quantitative Risk Analysis",
        text: "Delivered a Quantitative Risk Analysis (QRA) to evaluate the probability of failure under geotechnical uncertainties and to inform decision-making under hydrologic extremes.",
      },
    ],
    pending: false,
  },

  // ── Academic ───────────────────────────────────────────────────────────────

  {
    id: 18,
    slug: "mrt-station-underground-thesis",
    title: "Final Project Thesis – Underground Structure Project (MRT Station)",
    client: "Institut Teknologi Bandung",
    years: "2025",
    role: "Geotechnical Engineer Student",
    category: "Academic",
    summary:
      "The MRT Kota Station is part of CP 203, which includes Glodok and Kota Stations, 0.69 km of tunnel, and 0.18 km of cut-and-cover tunnel (total 1.296 km). This three-level underground station spans 408.6 m in length and 20.3 m in width, with a 3.3 m overburden height. It connects Glodok Station to the south and will integrate with future MRT expansions to the north, supporting Jakarta's urban mobility and congestion reduction efforts.",
    skills: [
      "Numerical Analysis",
      "Civil Engineering",
      "Academic Writing",
      "Academic Research",
    ],
    responsibilities: [
      {
        title: "Geotechnical Evaluation & Soil Strength Assessment",
        text: "Conducted geotechnical analysis by interpreting CPTu data to determine undrained shear strength for accurate soil characterization.",
      },
      {
        title: "Retaining Wall Design Optimization",
        text: "Evaluated and recommended diaphragm wall (d-wall) length to ensure stability against boiling, upheaval, and basal heave. Provided optimized wall length recommendations of 35 m for a 22.4 m excavation and 31 m for an 18.5 m excavation, balancing structural integrity and cost-effectiveness.",
      },
      {
        title: "Excavation Stability & Deformation Analysis",
        text: "Assessed the impact of deep excavation near existing structures (4–4.5 m proximity) using Plaxis 2D modeling. Analyzed wall deflection (max 46 mm) and ground settlement (max 64 mm) to ensure compliance with safety factors.",
      },
      {
        title: "Top-Down Construction & Structural Support Evaluation",
        text: "Reviewed the top-down excavation method and strut-supported slab system to maintain structural integrity and minimize deformation in constrained urban environments.",
      },
      {
        title: "Empirical Design Development",
        text: "Developed an empirical graph-based approach to assist in preliminary design of retaining walls, ensuring compliance with safety factors and providing a reliable reference for future underground projects.",
      },
    ],
    pending: false,
  },
];

export default projects;
