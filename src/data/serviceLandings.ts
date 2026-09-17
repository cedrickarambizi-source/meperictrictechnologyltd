import elevatorInstallation from "@/assets/services/elevator-installation-new.jpg";
import electricalSystems from "@/assets/services/electrical-systems-new.jpg";
import plumbingSystems from "@/assets/services/plumbing-systems.jpg";
import mechanicalSystems from "@/assets/services/mechanical-systems.jpg";
import cctvInstallation from "@/assets/services/cctv-installation.jpg";

export interface ServiceLanding {
  slug: string;
  hero: string;
  h1: string;
  navLabel: string;
  seoTitle: string;
  seoDescription: string;
  serviceType: string;
  intro: string;
  image: string;
  imageAlt: string;
  offerings: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  process: string[];
  faqs: { question: string; answer: string }[];
}

export const serviceLandings: ServiceLanding[] = [
  {
    slug: "elevators",
    hero: "Vertical Transportation",
    navLabel: "Elevators & Lifts",
    h1: "Elevator Installation & Maintenance in Kigali, Rwanda",
    seoTitle: "Elevator Installation & Maintenance in Kigali, Rwanda | MEP Erictric",
    seoDescription:
      "Elevator supply, installation, modernization and 24/7 maintenance in Kigali, Rwanda. Passenger, freight, hospital lifts and platform lifts by certified engineers.",
    serviceType: "Elevator Installation and Maintenance",
    intro:
      "We supply, install, modernize and maintain passenger elevators, freight elevators, hospital lifts, escalators and platform lifts for buildings across Rwanda. Every installation is engineered to international safety codes, load tested and documented before handover.",
    image: elevatorInstallation,
    imageAlt: "MEP Erictric engineers installing an elevator in a Kigali building",
    offerings: [
      { title: "Supply & Installation", description: "New passenger, freight and hospital elevators from internationally certified manufacturers, including FUJIHD." },
      { title: "Modernization", description: "Controller, drive, door and cabin upgrades that extend the life of existing lifts without replacing the shaft." },
      { title: "Preventive Maintenance", description: "Monthly and annual contracts covering inspection, lubrication, safety-gear testing and parts replacement." },
      { title: "Emergency Response", description: "Under two-hour call-out for entrapments and breakdowns, on all major elevator brands." },
    ],
    specs: [
      { label: "Capacity", value: "400 kg – 5,000 kg" },
      { label: "Speed", value: "Up to 4 m/s" },
      { label: "Types", value: "Passenger, Freight, Hospital, Platform" },
      { label: "Response Time", value: "Under 2 hours" },
    ],
    process: [
      "Shaft survey and traffic analysis",
      "Specification, drawings and approvals",
      "Manufacturing and logistics",
      "Installation, alignment and wiring",
      "Safety testing, certification and handover",
    ],
    faqs: [
      {
        question: "Do you install elevators in existing buildings?",
        answer:
          "Yes. We survey the existing shaft or design a new one, then supply and install a lift sized to the building's traffic. Where a shaft already exists, modernization is usually faster and cheaper than full replacement.",
      },
      {
        question: "Which elevator brands do you maintain?",
        answer:
          "We maintain all major brands installed in Rwanda, including lifts we did not originally install, under monthly or annual maintenance contracts with emergency call-out cover.",
      },
    ],
  },
  {
    slug: "electrical",
    hero: "Power & Distribution",
    navLabel: "Electrical Systems",
    h1: "Electrical Installation & Power Distribution in Rwanda",
    seoTitle: "Electrical Contractor in Kigali, Rwanda | Power Systems | MEP Erictric",
    seoDescription:
      "Licensed electrical contractor in Kigali: LV and MV distribution, switchgear, cabling, lighting, transmission lines and testing for commercial and institutional buildings.",
    serviceType: "Electrical Installation and Power Distribution",
    intro:
      "From load studies and single-line diagrams to panels, cabling, lighting and energization, we deliver complete electrical infrastructure for commercial, institutional and industrial buildings — tested, labelled and certified to IEC standards.",
    image: electricalSystems,
    imageAlt: "High voltage power distribution infrastructure installed by MEP Erictric in Rwanda",
    offerings: [
      { title: "LV & MV Distribution", description: "Panels, switchgear, busbars and cabling from the incoming supply to every final circuit." },
      { title: "Transmission & MV Cabling", description: "Overhead and underground lines from 11 kV to 132 kV, including terminations and jointing." },
      { title: "Lighting & Small Power", description: "Interior, exterior and emergency lighting design, containment and installation." },
      { title: "Testing & Commissioning", description: "Insulation, earthing, continuity and protection testing with full documentation." },
    ],
    specs: [
      { label: "Voltage", value: "LV to 132 kV" },
      { label: "Systems", value: "Power, Lighting, UPS, Earthing" },
      { label: "Standards", value: "IEC 60364 / IEEE" },
      { label: "Documentation", value: "As-built drawings & test reports" },
    ],
    process: [
      "Load analysis and planning",
      "Single-line diagram and design",
      "Panel and switchgear installation",
      "Cable laying and termination",
      "Testing, energization and handover",
    ],
    faqs: [
      {
        question: "Do you handle both design and installation?",
        answer:
          "Yes. Our engineers prepare the load schedules, single-line diagrams and drawings, then execute the installation and commissioning with a single point of accountability.",
      },
      {
        question: "Can you work on occupied buildings?",
        answer:
          "Yes. We phase works and arrange temporary supplies so tenants and hospital or hotel operations continue while the installation or upgrade proceeds.",
      },
    ],
  },
  {
    slug: "plumbing-mechanical",
    hero: "Mechanical & Plumbing",
    navLabel: "Plumbing & Mechanical",
    h1: "Plumbing & Mechanical Engineering Services in Kigali",
    seoTitle: "Plumbing & Mechanical Contractor in Kigali, Rwanda | MEP Erictric",
    seoDescription:
      "Plumbing, drainage, HVAC, pumping and water treatment installation in Kigali, Rwanda. Mechanical systems designed, installed and maintained by certified MEP engineers.",
    serviceType: "Plumbing and Mechanical Installation",
    intro:
      "We design and install water supply, drainage, pumping, HVAC and water treatment systems for buildings of every scale — pressure tested, balanced and commissioned with full operating documentation.",
    image: plumbingSystems,
    imageAlt: "Plumbing and mechanical pipework installed by MEP Erictric engineers",
    offerings: [
      { title: "Water Supply & Drainage", description: "Cold and hot water distribution, soil and waste stacks, storm drainage and pressure testing." },
      { title: "Pumping & Storage", description: "Booster sets, transfer pumps, tanks and level controls sized to the building's demand." },
      { title: "HVAC & Ventilation", description: "Split, VRF and ducted systems with ventilation for basements, kitchens and plant rooms." },
      { title: "Water Treatment", description: "Treatment and wastewater plants engineered to REMA environmental requirements." },
    ],
    specs: [
      { label: "Pipework", value: "PPR, HDPE, uPVC, Steel" },
      { label: "Systems", value: "Water, Drainage, HVAC, Pumping" },
      { label: "Testing", value: "Pressure & flow commissioning" },
      { label: "Compliance", value: "REMA / WASAC requirements" },
    ],
    process: [
      "Demand and load calculations",
      "Layout, riser and plant room design",
      "Pipework and equipment installation",
      "Pressure testing and flushing",
      "Balancing, commissioning and training",
    ],
    faqs: [
      {
        question: "Do you cover both plumbing and HVAC?",
        answer:
          "Yes. Our mechanical division delivers water supply, drainage, pumping, ventilation and air conditioning as one coordinated package with the electrical works.",
      },
      {
        question: "Can you build a wastewater treatment plant?",
        answer:
          "Yes. We size and install primary, secondary and tertiary treatment plants to meet REMA discharge standards, then train the facility team on operation.",
      },
    ],
  },
  {
    slug: "generators",
    hero: "Standby Power",
    navLabel: "Generators & Standby Power",
    h1: "Generator Supply, Installation & Maintenance in Rwanda",
    seoTitle: "Generator Installation & Maintenance in Kigali, Rwanda | MEP Erictric",
    seoDescription:
      "Generator supply, installation, ATS synchronization and maintenance in Kigali, Rwanda. Standby power for hospitals, hotels, offices and industrial facilities.",
    serviceType: "Generator Installation and Maintenance",
    intro:
      "We size, supply, install and maintain standby generator sets with automatic transfer switching, exhaust, fuel and acoustic works — so critical loads stay live through every outage.",
    image: mechanicalSystems,
    imageAlt: "Standby generator and power plant installation by MEP Erictric in Kigali",
    offerings: [
      { title: "Sizing & Supply", description: "Generator selection based on measured load profiles, starting currents and redundancy requirements." },
      { title: "Installation & ATS", description: "Plinths, cabling, automatic transfer switches and change-over panels, fully interlocked and tested." },
      { title: "Fuel, Exhaust & Acoustics", description: "Day tanks, bulk fuel lines, exhaust routing and acoustic enclosures for noise-sensitive sites." },
      { title: "Maintenance Contracts", description: "Scheduled servicing, load-bank testing, fuel polishing and emergency response." },
    ],
    specs: [
      { label: "Ratings", value: "10 kVA – 2,000 kVA" },
      { label: "Transfer", value: "ATS / manual change-over" },
      { label: "Configuration", value: "Single set, parallel, synchronized" },
      { label: "Servicing", value: "Quarterly & annual programs" },
    ],
    process: [
      "Load survey and generator sizing",
      "Plant room, plinth and ventilation design",
      "Generator delivery and positioning",
      "Cabling, ATS and controls installation",
      "Load testing, commissioning and handover",
    ],
    faqs: [
      {
        question: "How do you size a generator for my building?",
        answer:
          "We measure or calculate the connected load, starting currents and the loads that must remain live during an outage, then select a rating with headroom for future expansion.",
      },
      {
        question: "Do you service generators you did not supply?",
        answer:
          "Yes. We take over maintenance of existing generator sets, starting with an inspection and load test before proposing a service programme.",
      },
    ],
  },
  {
    slug: "fire-security",
    hero: "Life Safety & Security",
    navLabel: "Fire & Security",
    h1: "Fire Alarm, CCTV & Security Systems in Kigali, Rwanda",
    seoTitle: "Fire Alarm & CCTV Security Systems in Kigali, Rwanda | MEP Erictric",
    seoDescription:
      "Fire detection and alarm, firefighting, CCTV, access control and network security systems installed and maintained across Rwanda by certified MEP engineers.",
    serviceType: "Fire Protection and Security System Installation",
    intro:
      "We install and maintain the systems that protect people and property: addressable fire detection and alarm, firefighting installations, CCTV surveillance, access control and intrusion detection — integrated and certified.",
    image: cctvInstallation,
    imageAlt: "CCTV and fire safety system installation by MEP Erictric technicians",
    offerings: [
      { title: "Fire Detection & Alarm", description: "Conventional and addressable panels, detectors, sounders and interfaces to lifts and ventilation." },
      { title: "Firefighting Systems", description: "Hydrants, hose reels, sprinkler pipework, pumps and extinguisher provisioning." },
      { title: "CCTV Surveillance", description: "Up to 4K cameras with NVR or hybrid cloud storage, AI motion analytics and remote viewing." },
      { title: "Access Control & Intrusion", description: "Card, PIN and biometric access, barriers, intercom and alarm monitoring." },
    ],
    specs: [
      { label: "Fire Panels", value: "Conventional & addressable" },
      { label: "CCTV Resolution", value: "Up to 4K Ultra HD" },
      { label: "Storage", value: "NVR / cloud hybrid" },
      { label: "Integration", value: "Lift homing, ventilation, access" },
    ],
    process: [
      "Fire and security risk assessment",
      "Zoning, device and camera layout design",
      "Containment, cabling and device mounting",
      "Panel, NVR and controller configuration",
      "Cause-and-effect testing, training, handover",
    ],
    faqs: [
      {
        question: "Do you integrate fire alarms with elevators?",
        answer:
          "Yes. Because we install both systems, we wire the fire alarm to home the lifts to the designated floor and shut down ventilation, then prove it in cause-and-effect testing.",
      },
      {
        question: "Can existing CCTV be extended rather than replaced?",
        answer:
          "Usually yes. We audit the recorder, cabling and camera resolution, then extend or upgrade only the parts that limit coverage or image quality.",
      },
    ],
  },
];

export const getServiceLanding = (slug: string) =>
  serviceLandings.find((service) => service.slug === slug);
