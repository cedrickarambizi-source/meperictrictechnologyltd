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

export interface ProjectDetail {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  image: string;
  details?: ProjectDetail[];
  activities: string[];
}

// Old Projects (Legacy Portfolio)
export const oldProjects: Project[] = [
  {
    {
  
  title: "LANDMARK PROJECT",
  image: landmarkProject,
  details: [
    { label: "Project Location", value: "Kigali – Nyarugenge District – Nyarugenge" },
    { label: "Project Name", value: "Landmark One" },
    { label: "Project Owner", value: "Kayumba Eudes" },
    { label: "Owner Contact", value: "+250 788 305 191" },
    { label: "Period of Installation", value: "2023–2024" },
    { label: "Number of Floors", value: "B, G, 1, 2, 3, 4, 5, 6, 7, 8 (Ten floors)" }
  ],
  activities: [
    "Supply and installation of electrical activities",
    "Supply and installation of two elevators (lifts)",
    "Fire alarm system",
    "CCTV cameras",
    "IP telephone system",
    "Internet network",
    "Generator installation",
    "Firefighting system"
  ]
},
  {
    title: "OMICA BUILDING",
    image: omicaBuilding,
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
    activities: [
      "Supply and installation of electrical activities",
      "Elevator (lift)",
    ],
  },
  {
    title: "WORLDVISION HEADQUARTERS RWANDA",
    image: worldvisionHq,
    activities: [
      "Elevator supply and installation",
    ],
  },
];

// New & Recent Projects
export const newProjects: Project[] = [
  {
    title: "IKAZE HOUSE",
    image: ikazeHouse,
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
    title: "A&F PLAZA",
    image: afPlaza,
    details: [
      { label: "Project Name", value: "A&F Plaza" },
      { label: "Period of Installation", value: "2023" },
    ],
    activities: [
      "Supply and installation of 2 elevators (lifts)",
    ],
  },
  {
    title: "KAFAM HOUSE",
    image: kafamHouse,
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
    title: "LA CROIX DU SUD – Kwa Nyirinkwaya",
    image: laCroixDuSud,
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
    title: "YYUSSA CITY CENTER",
    image: yyussaCityCenter,
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
    title: "BAHO INTERNATIONAL HOSPITAL",
    image: bahoHospital,
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
    title: "TWIGA HOUSE ACCOMMODATION",
    image: twigaHouse,
    details: [
      { label: "Project Location", value: "Kigali – Gasabo District, Remera Sector" },
      { label: "Period of Installation", value: "2024 (Completed)" },
      { label: "Number of Floors", value: "B2, B1, G, 1, 2, 3 (Six floors)" },
    ],
    activities: [
      "Supply and Installation of Elevator (Lift)",
    ],
  },
  {
    title: "HOSPITAL PÉDIATRIQUE DE REMERA",
    image: hospitalPediatriqueRemera,
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
    title: "MININTER",
    image: mininter,
    details: [
      { label: "Project Location", value: "Kigali – Kacyiru" },
      { label: "Project Owner", value: "MININTER" },
      { label: "Period of Installation", value: "2019 – 2023" },
      { label: "Number of Floors", value: "G, 1, 2, 3, 4 (Five floors)" },
    ],
    activities: [
      "Elevator (Lift) Supply and Installation",
    ],
  },
  {
    title: "NATIONAL INSTITUTE OF STATISTICS OF RWANDA (NISR)",
    image: nisr,
    details: [
      { label: "Project Location", value: "Kigali – Gasabo District, Remera Sector" },
      { label: "Project Owner", value: "NISR" },
      { label: "Period of Installation", value: "2024 (Completed)" },
      { label: "Number of Floors", value: "B2, B1, G, 1, 2, 3 (Six floors)" },
    ],
    activities: [
      "Supply and Installation of Elevator (Lift)",
    ],
  },
  {
    title: "RWARUTENE 30KV TRANSMISSION LINE",
    image: rwaruteneTransmission,
    details: [
      { label: "Project Location", value: "Ngoma – Rwarutene" },
      { label: "Project Owner", value: "ELOHIM" },
      { label: "Managing Director", value: "Charlotte Nishimwe" },
      { label: "Owner Contact", value: "+250 788 308 203" },
      { label: "Distance", value: "1.6 km" },
      { label: "Period of Installation", value: "06/2021 – 07/2021" },
    ],
    activities: [
      "Electrical Transmission Line Construction Activities",
    ],
  },
  {
    title: "GAHANGA STREET LIGHT",
    image: gahangaStreetLight,
    details: [
      { label: "Project Location", value: "Kicukiro – Gahanga" },
      { label: "Project Name", value: "Gahanga Street Light" },
      { label: "Project Owner", value: "ECOJEC" },
      { label: "Managing Director", value: "Didas Twagirayezu" },
      { label: "Owner Contact", value: "+250 788 305 638" },
      { label: "Distance", value: "2.8 km" },
      { label: "Period of Installation", value: "05/2022 – 08/2022" },
    ],
    activities: [
      "Electrical Street Light Installation Activities",
    ],
  },
];

// All projects combined
export const allProjects: Project[] = [...oldProjects, ...newProjects];
