// Import all project images
import landmarkProject from "@/assets/projects/landmark-project.png";
import omicaBuilding from "@/assets/projects/omica-building.png";
import kimironkoCommercial from "@/assets/projects/kimironko-commercial.png";
import wintanaApartment from "@/assets/projects/wintana-apartment.png";
import worldvisionHq from "@/assets/projects/worldvision-hq.png";
import ikazeHouse from "@/assets/projects/ikaze-house.png";
import afPlaza from "@/assets/projects/af-plaza.png";
import kafamHouse from "@/assets/projects/kafam-house.png";
import laCroixDuSud from "@/assets/projects/la-croix-du-sud.png";
import yyussaCityCenter from "@/assets/projects/yyussa-city-center.png";
import bahoHospital from "@/assets/projects/baho-hospital.png";
import twigaHouse from "@/assets/projects/twiga-house.png";
import hospitalPediatriqueRemera from "@/assets/projects/hospital-pediatrique-remera.png";
import mininter from "@/assets/projects/mininter.png";
import nisr from "@/assets/projects/nisr.png";
import rwaruteneTransmission from "@/assets/projects/rwarutene-transmission.png";
import gahangaStreetLight from "@/assets/projects/gahanga-street-light.png";
import zaraApartment from "@/assets/projects/zara-apartment.png";
import villaHouse from "@/assets/projects/villa-house.png";
import kgpApartment from "@/assets/projects/kgp-apartment.png";
import victoryVilla from "@/assets/projects/victory-villa.png";
import minaffetProcurement from "@/assets/projects/minaffet-procurement.png";

export interface ProjectDetail {
  label: string;
  value: string;
}

export type ServiceCategory =
  | "Electrical"
  | "Elevator"
  | "Fire Safety"
  | "CCTV & Security"
  | "Plumbing"
  | "Transmission"
  | "Maintenance";

export type ProjectLocation = "Kigali" | "Eastern Province" | "Other";

export interface Project {
  title: string;
  image: string;
  details?: ProjectDetail[];
  activities: string[];
  categories: ServiceCategory[];
  location: ProjectLocation;
  status: "completed" | "ongoing";
}

// Old Projects (Legacy Portfolio) - sorted by scale/complexity
export const oldProjects: Project[] = [
  {
    title: "LANDMARK PROJECT",
    image: landmarkProject,
    categories: ["Electrical", "Elevator", "Fire Safety", "CCTV & Security"],
    location: "Kigali",
    status: "completed",
    details: [
      { label: "Project Location", value: "Kigali – Nyarugenge District – Nyarugenge" },
      { label: "Project Name", value: "Landmark One" },
      { label: "Project Owner", value: "Kayumba Eudes" },
      { label: "Owner Contact", value: "+250 788 305 191" },
      { label: "Period of Installation", value: "2023–2024" },
      { label: "Number of Floors", value: "B, G, 1, 2, 3, 4, 5, 6, 7, 8 (Ten floors)" },
    ],
    activities: [
      "Supply and installation of electrical activities",
      "Supply and installation of two elevators (lifts)",
      "Fire alarm system",
      "CCTV cameras",
      "IP telephone system",
      "Internet network",
      "Generator installation",
      "Firefighting system",
    ],
  },
  {
    title: "OMICA BUILDING",
    image: omicaBuilding,
    categories: ["Electrical", "Elevator", "Fire Safety"],
    location: "Kigali",
    status: "completed",
    activities: [
      "Supply and installation of electrical activities",
      "Elevator (lift)",
      "Fire alarm system",
      "Generator installation",
      "Firefighting system",
      "Switchgear",
      "Transformer",
      "MV line cables",
    ],
  },
  {
    title: "KIMIRONKO COMMERCIAL BUILDING",
    image: kimironkoCommercial,
    categories: ["Electrical", "Elevator", "Fire Safety"],
    location: "Kigali",
    status: "completed",
    activities: [
      "Supply and installation of electrical activities",
      "Elevator (lift)",
      "Fire alarm system",
      "Generator installation",
      "Firefighting system",
      "Switchgear",
      "Transformer",
      "MV line cable",
    ],
  },
  {
    title: "WINTANA APARTMENT",
    image: wintanaApartment,
    categories: ["Electrical", "Elevator"],
    location: "Kigali",
    status: "completed",
    activities: [
      "Supply and installation of electrical activities",
      "Elevator (lift)",
    ],
  },
  {
    title: "WORLDVISION HEADQUARTERS RWANDA",
    image: worldvisionHq,
    categories: ["Elevator"],
    location: "Kigali",
    status: "completed",
    activities: ["Elevator supply and installation"],
  },
];

// New & Recent Projects - sorted by scale/complexity (largest first)
export const newProjects: Project[] = [
  {
    title: "KGP APARTMENT",
    image: kgpApartment,
    categories: ["Electrical", "Elevator"],
    location: "Kigali",
    status: "ongoing" as const,
    details: [
      { label: "Project Location", value: "Kigali – Gasabo District, Remera Sector / Kacyiru" },
      { label: "Period of Installation", value: "2023 – Ongoing" },
    ],
    activities: [
      "Supply and installation of electrical works",
      "Elevator systems (6 lifts)",
      "Generator installation",
      "Switchgear installation",
      "Transformer installation",
      "MV Line Cables",
      "Supply and installation of 6 elevators",
    ],
  },
  {
    title: "KAFAM HOUSE",
    image: kafamHouse,
    categories: ["Electrical", "Elevator", "Fire Safety", "CCTV & Security"],
    location: "Kigali",
    status: "completed",
    details: [
      { label: "Project Location", value: "Kigali – Nyarutarama – Gishushu" },
      { label: "Project Name", value: "Kafam Commercial Building" },
      { label: "Project Owner", value: "Karagwa Joseph" },
      { label: "Owner Contact", value: "+250 782 419 496" },
      { label: "Period of Installation", value: "2018 – 2022" },
      { label: "Number of Floors", value: "B1, B2, B3, G, 1, 2, 3, 4, 5, 6 (Ten floors)" },
    ],
    activities: [
      "Electrical works",
      "Fire alarm system",
      "CCTV cameras",
      "IP telephone system",
      "Internet installation",
      "Elevator (lift) supply and installation",
      "Generator installation",
      "Firefighting system",
    ],
  },
  {
    title: "BAHO INTERNATIONAL HOSPITAL",
    image: bahoHospital,
    categories: ["Electrical", "Elevator", "Fire Safety", "CCTV & Security", "Plumbing"],
    location: "Kigali",
    status: "completed",
    details: [
      { label: "Project Location", value: "Nyarutarama" },
      { label: "Project Name", value: "Baho International Hospital" },
      { label: "Project Owner", value: "Kayibanda Joseph" },
      { label: "Owner Contact", value: "+250 788 306 805" },
      { label: "Period of Installation", value: "2016 – 2021" },
      { label: "Number of Floors", value: "B1, G, 1, 2, 3, 4 (Six floors)" },
    ],
    activities: [
      "Electrical works",
      "Fire alarm system",
      "CCTV cameras",
      "IP telephone system",
      "Internet installation",
      "Elevator (lift) access door control",
      "Firefighting system",
      "Plumbing works",
      "Nursing signalization",
      "Bed head installation",
      "Air conditioning system",
    ],
  },
  {
    title: "IKAZE HOUSE",
    image: ikazeHouse,
    categories: ["Electrical", "Elevator", "Fire Safety", "CCTV & Security", "Plumbing"],
    location: "Kigali",
    status: "completed",
    details: [
      { label: "Project Location", value: "Kigali – Remera-Gisiment" },
      { label: "Project Name", value: "Ikaze House Commercial Building" },
      { label: "Project Owner", value: "Nkeramihigo Jean Bosco" },
      { label: "Owner Contact", value: "+250 788 304 600" },
      { label: "Period of Installation", value: "2018 – 2020" },
      { label: "Number of Floors", value: "B, G, 1, 2, 3, 4, 5, 6 (Eight floors)" },
    ],
    activities: [
      "Electrical works",
      "Fire alarm system",
      "CCTV cameras",
      "IP telephone system",
      "Internet installation",
      "Elevator (lift) access door control",
      "Firefighting system",
      "Plumbing works",
    ],
  },
  {
    title: "YYUSSA CITY CENTER",
    image: yyussaCityCenter,
    categories: ["Elevator", "Maintenance"],
    location: "Kigali",
    status: "ongoing",
    details: [
      { label: "Service Type", value: "Maintenance and Repair" },
      { label: "Period", value: "2025 – Ongoing" },
    ],
    activities: [
      "Maintenance and repair of 7 elevators",
      "Maintenance and repair of 2 escalators",
    ],
  },
  {
    title: "LA CROIX DU SUD – Kwa Nyirinkwaya",
    image: laCroixDuSud,
    categories: ["Electrical", "Elevator", "Fire Safety"],
    location: "Kigali",
    status: "ongoing",
    details: [
      { label: "Period of Installation", value: "2024 – Ongoing" },
      { label: "Number of Floors", value: "B, G, 1, 2, 3, 4 (Six floors)" },
    ],
    activities: [
      "Supply and installation of electrical works",
      "Elevator (lift) supply and installation",
      "Fire alarm system",
      "Generator installation",
      "Firefighting system",
      "Switchgear installation",
      "Transformer installation",
      "MV line cables",
    ],
  },
  {
    title: "VICTORY VILLA",
    image: victoryVilla,
    categories: ["Electrical", "Elevator", "Fire Safety", "CCTV & Security"],
    location: "Kigali",
    status: "completed" as const,
    details: [
      { label: "Project Location", value: "Kigali – Gacuriro" },
      { label: "Project Owner", value: "Karegeya Jean" },
      { label: "Owner Contact", value: "+250 788 500 391" },
      { label: "Period of Installation", value: "2018 – 2019" },
      { label: "Number of Floors", value: "B, G, 1, 2, 3 (Five Steps)" },
    ],
    activities: [
      "Electrical installation",
      "Fire alarm systems",
      "CCTV cameras",
      "IP telephone",
      "Internet infrastructure",
      "Elevator (Lift) supply and installation",
      "Access door control systems",
    ],
  },
  {
    title: "ZARA APARTMENT",
    image: zaraApartment,
    categories: ["Elevator", "Electrical"],
    location: "Kigali",
    status: "ongoing" as const,
    details: [
      { label: "Project Location", value: "Kigali – Gasabo District, Kacyiru" },
      { label: "Period of Installation", value: "2025 – 2026" },
      { label: "Number of Floors", value: "G, 1, 2, 3, 4, 5, 6 (8 Steps)" },
    ],
    activities: [
      "Installation of Mechanical and Electrical activities for Elevator (Lift)",
    ],
  },
  {
    title: "MINAFFET PROCUREMENT OFFICE",
    image: minaffetProcurement,
    categories: ["Elevator"],
    location: "Kigali",
    status: "completed" as const,
    details: [
      { label: "Project Location", value: "Kigali – Gasabo District, Kimihurura" },
      { label: "Project Name", value: "MINAFFET Procurement Office" },
      { label: "Client Representative", value: "Jean Bosco Rukundo" },
      { label: "Owner Contact", value: "+250 788 308 045" },
      { label: "Period of Installation", value: "January 2023 – February 2023" },
      { label: "Number of Floors", value: "B, G, 1, 2, 3, 4, 5 (7 Levels)" },
    ],
    activities: ["Elevator (Lift) Installation"],
  },
  {
    title: "NATIONAL INSTITUTE OF STATISTICS OF RWANDA (NISR)",
    image: nisr,
    categories: ["Elevator"],
    location: "Kigali",
    status: "completed",
    details: [
      { label: "Project Location", value: "Kigali – Gasabo District, Remera Sector" },
      { label: "Project Owner", value: "NISR" },
      { label: "Period of Installation", value: "2024 (Completed)" },
      { label: "Number of Floors", value: "B2, B1, G, 1, 2, 3 (Six floors)" },
    ],
    activities: ["Supply and Installation of Elevator (Lift)"],
  },
  {
    title: "TWIGA HOUSE ACCOMMODATION",
    image: twigaHouse,
    categories: ["Elevator"],
    location: "Kigali",
    status: "completed",
    details: [
      { label: "Project Location", value: "Kigali – Gasabo District, Remera Sector" },
      { label: "Period of Installation", value: "2024 (Completed)" },
      { label: "Number of Floors", value: "B2, B1, G, 1, 2, 3 (Six floors)" },
    ],
    activities: ["Supply and Installation of Elevator (Lift)"],
  },
  {
    title: "MININTER",
    image: mininter,
    categories: ["Elevator"],
    location: "Kigali",
    status: "completed",
    details: [
      { label: "Project Location", value: "Kigali – Kacyiru" },
      { label: "Project Owner", value: "MININTER" },
      { label: "Period of Installation", value: "2019 – 2023" },
      { label: "Number of Floors", value: "G, 1, 2, 3, 4 (Five floors)" },
    ],
    activities: ["Elevator (Lift) Supply and Installation"],
  },
  {
    title: "HOSPITAL PÉDIATRIQUE DE REMERA",
    image: hospitalPediatriqueRemera,
    categories: ["Electrical", "Elevator"],
    location: "Kigali",
    status: "completed",
    details: [
      { label: "Period of Installation", value: "2024" },
      { label: "Number of Floors", value: "G, 1, 2, 3 (Four floors)" },
    ],
    activities: [
      "Supply and Installation of Electrical Activities",
      "Elevator (Lift) Installation",
      "Scanner Installation",
    ],
  },
  {
    title: "A&F PLAZA",
    image: afPlaza,
    categories: ["Elevator"],
    location: "Kigali",
    status: "completed",
    details: [
      { label: "Project Name", value: "A&F Plaza" },
      { label: "Period of Installation", value: "2023" },
    ],
    activities: ["Supply and installation of 2 elevators (lifts)"],
  },
  {
    title: "VILLA HOUSE",
    image: villaHouse,
    categories: ["Elevator", "Electrical"],
    location: "Kigali",
    status: "completed" as const,
    details: [
      { label: "Project Location", value: "Kigali – Gasabo District, Gacuriro" },
      { label: "Period of Installation", value: "2024 – 2025" },
      { label: "Number of Floors", value: "G, 1, 2, 3, 4 (5 Steps)" },
    ],
    activities: [
      "Installation of Mechanical and Electrical activities for Elevator (Lift)",
    ],
  },
  {
    title: "RWARUTENE 30KV TRANSMISSION LINE",
    image: rwaruteneTransmission,
    categories: ["Transmission", "Electrical"],
    location: "Eastern Province",
    status: "completed",
    details: [
      { label: "Project Location", value: "Ngoma – Rwarutene" },
      { label: "Project Owner", value: "ELOHIM" },
      { label: "Managing Director", value: "Charlotte Nishimwe" },
      { label: "Owner Contact", value: "+250 788 308 203" },
      { label: "Distance", value: "1.6 km" },
      { label: "Period of Installation", value: "06/2021 – 07/2021" },
    ],
    activities: ["Electrical Transmission Line Construction Activities"],
  },
  {
    title: "GAHANGA STREET LIGHT",
    image: gahangaStreetLight,
    categories: ["Electrical"],
    location: "Kigali",
    status: "completed",
    details: [
      { label: "Project Location", value: "Kicukiro – Gahanga" },
      { label: "Project Name", value: "Gahanga Street Light" },
      { label: "Project Owner", value: "ECOJEC" },
      { label: "Managing Director", value: "Didas Twagirayezu" },
      { label: "Owner Contact", value: "+250 788 305 638" },
      { label: "Distance", value: "2.8 km" },
      { label: "Period of Installation", value: "05/2022 – 08/2022" },
    ],
    activities: ["Electrical Street Light Installation Activities"],
  },
];

// All projects combined
export const allProjects: Project[] = [...oldProjects, ...newProjects];

// Unique categories for filtering
export const allCategories: ServiceCategory[] = [
  "Electrical",
  "Elevator",
  "Fire Safety",
  "CCTV & Security",
  "Plumbing",
  "Transmission",
  "Maintenance",
];

export const allLocations: ProjectLocation[] = ["Kigali", "Eastern Province", "Other"];
