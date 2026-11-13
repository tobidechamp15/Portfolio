// Single source of truth for the portfolio content.
// Only claims that are backed by real work are listed here.

export const profile = {
  name: "Oluwatobiloba Oluwadare",
  shortName: "Tobiloba",
  email: "tobidechamp15@gmail.com",
  location: "Ibadan, Nigeria",
  cv: "/cv/Oluwatobiloba-Oluwadare-CV.pdf",
  roles: [
    "Full-Stack Engineer",
    "React Native Developer",
    "Fintech & Banking Apps",
    "Next.js + Node.js Builder",
  ],
  intro:
    "I build web and mobile products for banks, fintechs and startups: React and Next.js on the front end, Node.js and Java on the back end, and React Native for mobile. I care about reliable releases, clean interfaces and software people can trust with their money.",
};

export const links = {
  github: "https://github.com/tobidechamp15",
  linkedin: "https://www.linkedin.com/in/oluwatobiloba-oluwadare-ab317b365/",
  x: "https://x.com/tobidechamp15",
  instagram: "https://www.instagram.com/de_champ__/",
};

export const stats = [
  { value: "3+", label: "Years building production software" },
  { value: "May 2026", label: "Vista Bank Mozambique mobile banking go-live" },
  { value: "30%", label: "Fewer UI defects through structured testing" },
  { value: "<5 days", label: "Release cycle, down from 2 weeks" },
];

export const about = {
  paragraphs: [
    "I'm a software engineer with a Computer Science degree (Second Class Upper, CGPA 3.77/5) from Redeemer's University. For the past three years I've worked on mobile banking apps for Android and iOS, enterprise banking front ends and full-stack products of my own.",
    "At Techmaestrogroup I led front-end development of mobile banking apps on Temenos Infinity, integrated core banking and biller services through REST APIs, and shipped to Google Play and the App Store. Outside work I build full-stack products in Next.js, Node.js and React Native, and I also train and mentor learners on the side as an instructor at Aptech.",
  ],
  highlights: [
    {
      title: "Vista Bank Mozambique go-live",
      text: "Led front-end development of the Android and iOS mobile banking apps on Temenos Infinity, live in May 2026 and released on Google Play and the App Store.",
    },
    {
      title: "Education",
      text: "BSc Computer Science, Second Class Upper, Redeemer's University. NYSC completed.",
    },
    {
      title: "Certifications",
      text: "EC-Council Certified Secure Computer User, Oracle SQL and Java SE Fundamentals, The Web Developer Bootcamp 2025.",
    },
  ],
};

export const experience = [
  {
    role: "Technical Consultant",
    company: "Techmaestrogroup",
    period: "Jan 2026 - Present",
    current: true,
    points: [
      "Led front-end development of Android and iOS mobile banking apps on Temenos Infinity, including the Vista Bank Mozambique go-live in May 2026.",
      "Owned integration of core banking (T24) services, third-party billers and REST APIs, with Temenos Fabric for authentication flows.",
      "Cut reported UI defects by about 30% through structured testing and release management.",
      "Reduced release turnaround from two weeks to under five days.",
    ],
  },
  {
    role: "Instructor (part-time)",
    company: "Aptech Computer Education, Ibadan",
    period: "Jun 2026 - Present",
    current: true,
    points: [
      "Teach and mentor 50 to 100 students on Aptech programmes including CPISM and Office Automation.",
    ],
  },
  {
    role: "Associate Technical Consultant",
    company: "Techmaestrogroup",
    period: "Jan 2025 - Dec 2025",
    points: [
      "Built and maintained 10+ reusable front-end modules for an enterprise banking application.",
      "Integrated RESTful APIs, improving data-flow reliability and reducing data-fetching inconsistencies.",
    ],
  },
  {
    role: "Project Supervisor",
    company: "Expehi Nig Ltd.",
    period: "Aug 2024 - Dec 2024",
    points: [
      "Sole developer of a responsive corporate website and CMS for 3+ service lines, cutting manual content effort by about 50%.",
    ],
  },
  {
    role: "Software Developer Intern and Tutor",
    company: "234 Web Resources Technologies",
    period: "Jun 2022 - Jan 2024",
    points: [
      "Built core features of a full-stack e-commerce platform (React, Node.js, Firestore) including AI-assisted chat and automated PDF reports.",
      "Mentored 5+ junior developers through structured onboarding sessions.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Temenos Infinity stack",
    featured: true,
    description:
      "The platform behind the Vista Bank Mozambique mobile banking apps: front-end builds for Android and iOS, with core banking and biller services connected through Fabric.",
    items: [
      "Temenos Infinity",
      "Temenos Fabric",
      "Visualizer app builds",
      "T24 core banking integration",
      "Biller and third-party service integration",
      "Fabric authentication flows",
      "REST service orchestration",
      "Android and iOS builds",
      "Play Store and App Store releases",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "jQuery",
      "Framer Motion",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Android and iOS banking apps",
      "Native module bridging",
      "Expo push notifications",
    ],
  },
  {
    title: "Backend and data",
    items: [
      "Node.js",
      "Java",
      "REST APIs",
      "JWT, OAuth and role-based access",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Supabase",
      "Socket.io",
    ],
  },
  {
    title: "Tools and delivery",
    items: [
      "Git and GitHub",
      "GitHub Actions / CI-CD",
      "Figma",
      "Postman",
      "Jest",
      "Expo EAS",
      "Cloudinary",
      "Nodemailer",
      "Paystack and Flutterwave",
    ],
  },
];

export const services = [
  {
    title: "Web applications",
    description:
      "Fast, responsive products in React and Next.js with secure authentication, dashboards and role-based access.",
  },
  {
    title: "Mobile apps",
    description:
      "Cross-platform React Native and Expo apps with push notifications, payments and store-ready releases.",
  },
  {
    title: "APIs and integrations",
    description:
      "Node.js and Java back ends, banking and biller integrations through Temenos Fabric and T24, payment gateways and third-party services.",
  },
  {
    title: "Design to code",
    description:
      "Figma designs turned into consistent, accessible, reusable interfaces that match the brief pixel for pixel.",
  },
];

// image keys are resolved in components/Projects.jsx
export const projects = [
  {
    name: "Ventry",
    category: "Mobile",
    featured: true,
    summary:
      "A React Native and Expo mobile app backed by a Next.js and MongoDB API with JWT authentication, Expo push notifications and React Query data fetching.",
    tech: ["React Native", "Expo", "Next.js", "MongoDB", "JWT", "React Query"],
  },
  {
    name: "Church Member App",
    category: "Mobile",
    featured: true,
    summary:
      "A member app built with Expo and React Native, with a Next.js and MongoDB backend, JWT authentication, Cloudinary uploads and Nodemailer email.",
    tech: ["React Native", "Expo", "Next.js", "MongoDB", "Cloudinary", "Nodemailer"],
  },
  {
    name: "ESMS",
    category: "Full-stack",
    featured: true,
    summary:
      "Estate management platform for 100+ units with multi-role authentication, QR visitor verification and an audit trail of every verification event.",
    tech: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS"],
    image: "esms",
    href: "https://estate-management-system.vercel.app/",
  },
  {
    name: "The Legal Space",
    category: "Full-stack",
    featured: true,
    summary:
      "A legal network that connects lawyers, legal knowledge and the people who need them. I built the front end with Next.js, Supabase, Google sign-in, Socket.io and React Query.",
    tech: ["Next.js", "Supabase", "Socket.io", "React Query", "Google OAuth"],
    image: "thelegalspace",
    href: "https://thelegalspace.com/",
  },
  {
    name: "Thrift4All",
    category: "Web",
    summary:
      "Student marketplace built as a final-year project and graded A. Live on Netlify.",
    tech: ["JavaScript", "Marketplace"],
    image: "thrift4all",
    href: "https://thrift4all.netlify.app/",
  },
  {
    name: "Trend Mart",
    category: "Full-stack",
    summary:
      "E-commerce app built with Next.js, NextAuth and MongoDB.",
    tech: ["Next.js", "NextAuth", "MongoDB", "Tailwind CSS"],
    image: "trendMart",
    href: "https://trendmart-tobiloba.netlify.app/",
  },
  {
    name: "Events Pulse",
    category: "Web",
    summary: "Events interface built around Lagos events, using React and Firebase.",
    tech: ["React", "Firebase", "Tailwind CSS", "Bootstrap"],
    image: "turnUpLagos",
    href: "https://eventspulse.netlify.app/",
  },
  {
    name: "Internship Forum",
    category: "Full-stack",
    summary:
      "Marketplace with dashboards for three user types and role-based access control.",
    tech: ["Next.js", "REST API", "Clerk", "Tailwind CSS"],
  },
  {
    name: "Aptech Ibadan Website",
    category: "Full-stack",
    summary:
      "Website for Aptech Ibadan built with Next.js and MongoDB, with JWT authentication and Cloudinary image uploads.",
    tech: ["Next.js", "MongoDB", "JWT", "Cloudinary"],
  },
  {
    name: "Run-Ride",
    category: "Web",
    summary: "Landing and booking interface built with React and Firebase.",
    tech: ["React", "Firebase"],
    image: "runRide",
    href: "https://run-ride.vercel.app/",
  },
  {
    name: "Taskify",
    category: "Web",
    summary: "Task management app built with React and Firebase.",
    tech: ["React", "Firebase"],
    image: "taskify",
    href: "https://taskify-tobiloba.vercel.app/",
  },
  {
    name: "invoiceXpress",
    category: "Web",
    summary: "Invoice creation app built with React, Firebase and Bootstrap.",
    tech: ["React", "Firebase", "Bootstrap"],
    image: "invoiceXpress",
    href: "https://invoicexpress.netlify.app",
  },
  {
    name: "Alberto Clocks",
    category: "Web",
    summary:
      "Aptech CPiSM eProject: the Alberto Clocks website, built with HTML5, CSS, Bootstrap, JavaScript and jQuery, with Figma for design.",
    tech: ["HTML5", "Bootstrap", "jQuery", "Figma"],
  },
];
