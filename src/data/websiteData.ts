export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  slug: string;
  path: string;
  features: string[];
}

export interface HousingProject {
  id: string;
  name: string;
  scope: string;
  location: string;
  sft?: string | null;
  status: 'Completed' | 'Ongoing';
  brochureUrl?: string;
}

export interface InfrastructureProject {
  id: string;
  name: string;
  scope: string;
  location?: string | null;
  clientName?: string | null;
  status: 'Completed' | 'Ongoing';
  brochureUrl?: string;
}

export interface LayoutProject {
  id: string;
  name: string;
  scope: string;
  location: string;
  acres?: string | null;
  duration?: string | null;
  status: 'Ongoing' | 'Completed';
  note?: string | null;
  brochureUrl?: string;
}

export interface InteriorProject {
  id: string;
  name: string;
  location: string;
  scope?: string | null;
  hasImages: boolean;
  imageSlides?: string[];
  category: 'Residential' | 'Commercial';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
  featured?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const COMPANY_CONTACT = {
  companyName: "August Infra",
  phoneDisplay: "+91 91606 66776",
  phoneRaw: "9160666776",
  phoneTel: "tel:+919160666776",
  email: "info.augustinfra@gmail.com",
  address: "MIG-47, Sector-1, MVP Colony, Visakhapatnam-530017",
  website: "www.augustinfra.com",
  instagram: "augustinfravizag",
  instagramUrl: "https://instagram.com/augustinfravizag",
  facebook: "augustinfravizag",
  facebookUrl: "https://facebook.com/augustinfravizag",
  whatsappUrl: "https://wa.me/919160666776?text=Hi%20August%20Infra%2C%20I%20would%20like%20to%20inquire%20about%20a%20project.",
  brochureUrl: "/August_Infra_Brochure.pdf",
};

export const COMPANY_ABOUT = {
  heading: "About August Infra",
  paragraph: "August Infra Is A Building Construction Company Established By A Passionate Team Of Engineers With Expertise In Different Sectors. We Offer General Contracting, Construction Management And Design Build Services For Projects Of All Sizes.",
  mission: "Deliver innovative, high-quality engineering solutions on time, with a strong focus on customer satisfaction and uncompromising safety.",
  vision: "To become a leading infrastructure and real estate brand through continuous innovation and advanced construction technology.",
  coreValues: "We uphold integrity, embrace innovation, foster collaboration, and prioritize client satisfaction through quality, transparency, and excellence."
};

export const WHAT_SETS_US_APART = [
  {
    id: "quality",
    title: "Quality",
    description: "Our Commitment To Top-Class Quality Has Been The Cornerstone Of Our Leadership Position For Over 8 Years."
  },
  {
    id: "on-time",
    title: "On Time Delivery",
    description: "We Approach Each Project With Enthusiasm, Seeking Innovative Solutions And Pushing Boundaries Of Traditional Construction."
  },
  {
    id: "passionate",
    title: "Passionate Construction",
    description: "A Deep Love For Our Work Drives Us To Leave A Mark Of Excellence In Every Endeavor."
  }
];

export const HERO_SCROLL_ITEMS = [
  "A Decade Of Experience",
  "40+ Projects Handovered",
  "Interiors",
  "Layout Development",
  "Infrastructure Development",
  "Apartments & Villas"
];

export const SERVICES_HEADER = {
  eyebrow: "What We Build",
  heading: "Four Disciplines, One Accountable Team",
  intro: "From Housing To Infrastructure, Layouts To Interiors - Every Project Is Managed Turn-Key, Including Approvals, Execution, And Handover."
};

export const CAPABILITIES = [
  {
    title: "Turn-Key Execution",
    description: "Architectural Planning, Engineering, And Permitting Handled Under One Roof From Site Prep To Final Handover."
  },
  {
    title: "Government Approvals",
    description: "In-House Coordination Of All Municipal Permissions."
  },
  {
    title: "On-Site Supervision",
    description: "Dedicated Project Managers Ensure Strict Safety, Timeline Control, And Quality Assurance On Every Site."
  }
];

export const SERVICES: Service[] = [
  {
    id: "01",
    number: "HOUSING PROJECTS",
    title: "Housing Projects",
    description: "Villas And Apartment Construction, From Individual Homes To Premium Gated Community Residential Developments",
    image: "https://framerusercontent.com/images/oafRCVUQGnAVcrazH2e9aiXkLHo.png",
    tag: "Housing",
    slug: "housing-projects",
    path: "/housing",
    features: [
      "Villas And Apartment Construction",
      "Gated Community Residential Developments",
      "Structural Design & Quality Material Selection",
      "Turn-Key Execution & Site Development"
    ]
  },
  {
    id: "02",
    number: "INTERIORS",
    title: "Interiors",
    description: "End-To-End Design And Execution For Residential And Commercial Interiors, With Customized Budgets And Constant On-Site Supervision.",
    image: "https://framerusercontent.com/images/RdkdBAWSNBfI4AW1vPZRASDFmHM.png",
    tag: "Interiors",
    slug: "interiors",
    path: "/interiors",
    features: [
      "End-To-End Design & Execution",
      "Residential & Commercial Interiors",
      "Customized Budgets & Fit-Outs",
      "Constant On-Site Supervision"
    ]
  },
  {
    id: "03",
    number: "LAYOUT DEVELOPMENT",
    title: "Layout Development",
    description: "Turn-Key Site Development - Roads, Drainage, Boundary Walls, Clubhouses, Electrification, And Landscaping, With All Government Approvals Handled In-House.",
    image: "https://framerusercontent.com/images/DQVamAn9loVUm5n5xSmiYwiu3E.png",
    tag: "Layouts",
    slug: "layout-development",
    path: "/layout",
    features: [
      "Turn-Key Site Development",
      "Roads, Drainage & Boundary Walls",
      "Clubhouses, Electrification & Landscaping",
      "Government Approvals Handled In-House"
    ]
  },
  {
    id: "04",
    number: "INFRASTRUCTURE",
    title: "Infrastructure",
    description: "Bridges, Culverts, Roads, Railway Station Works, Government Schools, And Hospital Construction.",
    image: "https://framerusercontent.com/images/xbN5xqmFFxGu1JkojY4TrTgfVBM.png",
    tag: "Infrastructure",
    slug: "infrastructure",
    path: "/infrastructure",
    features: [
      "Bridges, Culverts & Roads",
      "Railway Station Works & Upgrades",
      "Government Schools & Hospital Construction",
      "Project Management Consultancy (PMC)"
    ]
  }
];

export const HOUSING_PROJECTS: HousingProject[] = [
  // COMPLETED
  {
    id: "house-comp-1",
    name: "Hill City",
    scope: "Gated community - site development, duplex villas, triplex villas, independent houses, G+1 houses. Phase 1: 50 houses. Clubhouse, EV charging, parks, amphitheatre.",
    location: "Pernametta, Ongole",
    sft: "1600 sft (Independent) / 2681 sft (Duplex/Triplex)",
    status: "Completed",
    brochureUrl: "/brochures/hill-city-housing-brochure.pdf"
  },
  {
    id: "house-comp-2",
    name: "Sri Ramachandra Residency",
    scope: "Gated community apartment - G+5, premium 2490 sft flats. EV charging, CCTV, solar fencing, 6-passenger lift, power backup, wide driveway parking.",
    location: "Srinagar, Kakinada",
    sft: "2490 sft",
    status: "Completed"
  },
  {
    id: "house-comp-3",
    name: "Triplex House",
    scope: "Residential triplex villa construction",
    location: "Ongole",
    sft: null,
    status: "Completed"
  },
  {
    id: "house-comp-4",
    name: "Kakinada Duplex House",
    scope: "Residential duplex house construction",
    location: "Kakinada",
    sft: null,
    status: "Completed"
  },
  // ONGOING
  {
    id: "house-ong-1",
    name: "Ananda Heights",
    scope: "Residential apartment development",
    location: "Rayudupalem, Kakinada",
    sft: null,
    status: "Ongoing"
  },
  {
    id: "house-ong-2",
    name: "Proposed Apartment at Ramaraopeta",
    scope: "Proposed residential apartment development",
    location: "Ramaraopeta, Kakinada",
    sft: null,
    status: "Ongoing"
  }
];

export const INFRASTRUCTURE_PROJECTS: InfrastructureProject[] = [
  // ONGOING
  {
    id: "infra-ong-1",
    name: "Bridge & CC Road - Vegavathi River",
    scope: "56 piles, sub & super structure, 2km approach CC road, 1 minor bridge, 7 culverts on river Vegavathi",
    location: "Bobbili",
    clientName: "AP Panchayat Raj Department",
    status: "Ongoing"
  },
  {
    id: "infra-ong-2",
    name: "Railway Station Renovation",
    scope: "Construction of waiting rooms and toilet blocks",
    location: "Kakinada & Anakapalli railway stations",
    clientName: "Indian Railways",
    status: "Ongoing"
  },
  {
    id: "infra-ong-3",
    name: "Primary Health Centres",
    scope: "Construction of PHCs at Dodleru and Madipadu",
    location: "Guntur district",
    clientName: "Government of Andhra Pradesh",
    status: "Ongoing"
  },
  // COMPLETED
  {
    id: "infra-comp-1",
    name: "9 Major Bridges - Karnataka",
    scope: "Project Management Consultancy for EPC of 9 major bridges across Hemavathi, Kaveri, Bhadra, Shamisha and Yagachi rivers. State highways across Bangalore, Mandya, Hassan, Chikkamagalur districts.",
    location: "Bangalore, Mandya, Hassan, Chikkamagalur, Karnataka",
    clientName: "[withheld]",
    status: "Completed"
  },
  {
    id: "infra-comp-2",
    name: "Underground Electrical Cabling",
    scope: "Survey, excavation, underground cable laying, feeder connection and road restoration works",
    location: "Visakhapatnam",
    clientName: "APEPDCL",
    status: "Completed"
  },
  {
    id: "infra-comp-3",
    name: "Minor Bridges & Structures",
    scope: "Engineering supervision and manpower supply for minor bridges and pipe culvert structures on state highway - Maharajupeta to Padmanabham",
    location: "Visakhapatnam district",
    clientName: "R&B, Government of Andhra Pradesh",
    status: "Completed"
  },
  {
    id: "infra-comp-4",
    name: "12 School Buildings",
    scope: "Construction of 12 school buildings across Visakhapatnam (Anakapalli, Yelamanchili, Bheemili, Munchingput, Madugula) and Vizianagaram (Jonnada, Govindapuram, Pasupam, Ompalli, Jami, Saripalli, Sathuvada)",
    location: "Visakhapatnam & Vizianagaram districts",
    clientName: "Sarva Siksha Abhiyan, Government of AP",
    status: "Completed"
  }
];

export const LAYOUT_PROJECTS: LayoutProject[] = [
  // ONGOING
  {
    id: "layout-ong-1",
    name: "Icon Nest",
    scope: "Infrastructure & overall site development - BT/CC roads, drainages, boundary walls, clubhouse, electrification, landscaping. Turnkey basis.",
    location: "Near Bhogapuram, Visakhapatnam",
    acres: "40 Acres",
    status: "Completed"
  },
  {
    id: "layout-ong-2",
    name: "Red Carpet",
    scope: "Infrastructure & overall site development. Turnkey basis.",
    location: "Near Bhogapuram, Visakhapatnam",
    acres: "27 Acres",
    status: "Completed"
  },
  {
    id: "layout-ong-3",
    name: "Dallars Layout",
    scope: "Infrastructure & overall site development. Turnkey basis.",
    location: "Near Bhogapuram, Visakhapatnam",
    acres: "44 Acres",
    status: "Ongoing"
  },
  {
    id: "layout-ong-4",
    name: "PSR Green City",
    scope: "Infrastructure & overall site development. Turnkey basis.",
    location: "LAM, Guntur",
    acres: "29 Acres",
    status: "Completed"
  },
  {
    id: "layout-ong-5",
    name: "PSR Temple City",
    scope: "Infrastructure & site development including box culvert and retaining wall (500 metres). Turnkey.",
    location: "Ponekkal, Guntur",
    acres: "25 Acres",
    status: "Completed"
  },
  {
    id: "layout-ong-6",
    name: "Layout at Ongole",
    scope: "Infrastructure & overall site development",
    location: "Ongole",
    acres: null,
    note: "Project name to be updated by client",
    status: "Ongoing"
  },
  // COMPLETED
  {
    id: "layout-comp-1",
    name: "PCR Harivillu",
    scope: "Site development, clubhouse construction, model villas",
    location: "Near Vizianagaram",
    acres: "25 Acres",
    duration: "Oct 2017 - Jan 2019",
    status: "Completed"
  },
  {
    id: "layout-comp-2",
    name: "Sai Brundavanam",
    scope: "Infrastructure & overall site development",
    location: "Near Dakamarri",
    acres: "12 Acres",
    duration: "Oct 2016 - Apr 2017",
    status: "Completed"
  },
  {
    id: "layout-comp-3",
    name: "Brundavanam",
    scope: "Infrastructure & overall site development",
    location: "Near Nellimarla, Vizianagaram",
    acres: "25 Acres",
    duration: "Sep 2017 - Apr 2018",
    status: "Completed"
  },
  {
    id: "layout-comp-4",
    name: "Golden Bird",
    scope: "Infrastructure & overall site development",
    location: "Near Nathavalasa, Visakhapatnam",
    acres: "24 Acres",
    duration: "Jan 2018 - Oct 2018",
    status: "Completed"
  }
];

export const INTERIORS_PROJECTS: InteriorProject[] = [
  {
    id: "int-1",
    name: "Aparna Luxor",
    location: "Kondapur, Hyderabad",
    scope: "Full home interiors - Drawing room, Living room, Dining, 4 Bedrooms, Kitchen",
    category: "Residential",
    hasImages: true,
    imageSlides: [
      "/interiors/aparna-luxor/APARNA LUXOR_page-0002.jpg",
      "/interiors/aparna-luxor/APARNA LUXOR_page-0003.jpg",
      "/interiors/aparna-luxor/APARNA LUXOR_page-0004.jpg",
      "/interiors/aparna-luxor/APARNA LUXOR_page-0005.jpg",
      "/interiors/aparna-luxor/APARNA LUXOR_page-0006.jpg"
    ]
  },
  {
    id: "int-2",
    name: "Aparna Serenity",
    location: "Kompalli, Hyderabad",
    scope: "Full flat interiors - Drawing room, Dining, Kitchen, Master Bedroom, Bedroom, Study room, Pooja unit, Crockery unit",
    category: "Residential",
    hasImages: true,
    imageSlides: [
      "/interiors/aparna-serenity/APARNA SERINITY PROPOSED INTERIORS_page-0002.jpg",
      "/interiors/aparna-serenity/APARNA SERINITY PROPOSED INTERIORS_page-0003.jpg",
      "/interiors/aparna-serenity/APARNA SERINITY PROPOSED INTERIORS_page-0004.jpg",
      "/interiors/aparna-serenity/APARNA SERINITY PROPOSED INTERIORS_page-0005.jpg",
      "/interiors/aparna-serenity/APARNA SERINITY PROPOSED INTERIORS_page-0006.jpg"
    ]
  },
  {
    id: "int-3",
    name: "Omcon Reign Forest",
    location: "Visakhapatnam",
    scope: "Full flat interiors - Drawing room, Dining, Pooja room, Master Bedroom with dressing unit, Bedroom, Guest Bedroom",
    category: "Residential",
    hasImages: true,
    imageSlides: [
      "/interiors/aparna-omicon/PROPOSED INTERIORS AT APARNA OMICON_page-0002.jpg",
      "/interiors/aparna-omicon/PROPOSED INTERIORS AT APARNA OMICON_page-0003.jpg",
      "/interiors/aparna-omicon/PROPOSED INTERIORS AT APARNA OMICON_page-0004.jpg",
      "/interiors/aparna-omicon/PROPOSED INTERIORS AT APARNA OMICON_page-0005.jpg",
      "/interiors/aparna-omicon/PROPOSED INTERIORS AT APARNA OMICON_page-0006.jpg"
    ]
  },
  {
    id: "int-4",
    name: "MVV Greenfield",
    location: "Visakhapatnam",
    scope: "Full home interiors",
    category: "Residential",
    hasImages: true,
    imageSlides: [
      "/interiors/mvv-greenfield/PROPOSED INTERIORS AT MVV_page-0004.jpg",
      "/interiors/mvv-greenfield/PROPOSED INTERIORS AT MVV_page-0005.jpg",
      "/interiors/mvv-greenfield/PROPOSED INTERIORS AT MVV_page-0006.jpg",
      "/interiors/mvv-greenfield/PROPOSED INTERIORS AT MVV_page-0007.jpg",
      "/interiors/mvv-greenfield/PROPOSED INTERIORS AT MVV_page-0008.jpg"
    ]
  },
  {
    id: "int-5",
    name: "Pranith & Pranav",
    location: "Hyderabad",
    scope: "Residential Flat Interiors",
    category: "Residential",
    hasImages: false
  },
  {
    id: "int-6",
    name: "18 East",
    location: "Sagarnagar, Visakhapatnam",
    scope: "Commercial Interior Fit-Out & Office Spaces",
    category: "Commercial",
    hasImages: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    featured: true,
    quote: "August Infra managed our layout development with complete turn-key accountability. From permissions to final road laying, their engineering precision was remarkable.",
    author: "K. Satyanarayana",
    role: "Property Developer",
    location: "Visakhapatnam",
    avatar: "https://framerusercontent.com/images/opvcPm1ikfvhmfT7XwGVWgDsNY.jpg"
  },
  {
    id: "test-2",
    featured: false,
    quote: "Their project management consultancy on our 3-year bridge project in Karnataka ensured strict timeline compliance and zero quality compromises.",
    author: "R. V. Prasad",
    role: "Infrastructure Consultant",
    location: "Karnataka",
    avatar: "https://framerusercontent.com/images/Cw8Vdfho5YTBQvlIeFKOfSFAyJ8.jpg"
  },
  {
    id: "test-3",
    featured: false,
    quote: "August Infra renovated our healthcare facility in record time while adhering to strict standards. The engineering team kept us informed every day.",
    author: "Dr. P. Ramesh",
    role: "Medical Director",
    location: "Visakhapatnam",
    avatar: "https://framerusercontent.com/images/F8ur4MxzltB6kcNMHbY8uVKQbg.jpg"
  }
];

export const FAQ_HEADER = {
  eyebrow: "Before You Reach Out",
  heading: "Common Questions, Answered"
};

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What services does August Infra provide?",
    answer: "General contracting, construction management, and design-build services across housing projects, interiors, layout development, and civic infrastructure."
  },
  {
    id: "faq-2",
    question: "Do you handle government approvals for layout projects?",
    answer: "Yes - our layout work is turn-key, including all approvals and permissions from relevant government agencies."
  },
  {
    id: "faq-3",
    question: "What kind of infrastructure projects have you completed?",
    answer: "Bridges, CC roads, railway station renovations, school buildings, health centres, and underground electrical cabling across Andhra Pradesh and Karnataka."
  },
  {
    id: "faq-4",
    question: "Can you manage a project without being the primary contractor?",
    answer: "Yes - we've provided project management consultancy (PMC) and engineering supervision for major projects, including a 3-year, 9-bridge EPC consultancy in Karnataka."
  },
  {
    id: "faq-5",
    question: "How long has August Infra been operating?",
    answer: "Established in 2016 in Visakhapatnam by four partners with engineering expertise across sectors."
  },
  {
    id: "faq-6",
    question: "Where are you based, and what areas do you serve?",
    answer: "Headquartered in MVP Colony, Visakhapatnam, with active projects across Visakhapatnam, Vizianagaram, Kakinada, Guntur, Ongole, and Karnataka."
  }
];
