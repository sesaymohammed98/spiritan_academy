export type HeroStat = {
  label: string;
  value: string;
};

export type AcademicProgram = {
  title: string;
  description: string;
  icon: "flask" | "palette" | "hands" | "shield";
};

export type CampusNewsItem = {
  id: string;
  title: string;
  summary: string;
  date: string;
  icon: "scroll" | "bot" | "praying";
};

export type ProgramTrack = {
  title: string;
  level: string;
  summary: string;
};

export type AwardItem = {
  title: string;
  year: string;
  description: string;
};

export type EventItem = {
  id: string;
  name: string;
  date: string;
  location: string;
  category: "Faith" | "Academic" | "Community";
  summary: string;
};

export type MediaItem = {
  id: string;
  title: string;
  type: "Photo Story" | "Video" | "Newsletter";
  published: string;
};

export type VerificationRecord = {
  id: string;
  studentName: string;
  credential: string;
  graduationYear: string;
  status: "Verified" | "Pending";
};

export type SchoolProfile = {
  name: string;
  tagline: string;
  institution: string;
  authority: string;
  campus: string;
  cityCountry: string;
  country: string;
  foundedDate: string;
  yearFounded: number;
  maxStudentsPerClass: number;
  motto: string;
  contactNumber: string;
};

export const schoolProfile: SchoolProfile = {
  name: "Spiritan Academy",
  tagline: "A Catholic Demonstration School",
  institution: "Bishop John Collins Teachers College, Stella Maris Polytechnic University",
  authority: "Catholic Archdiocese of Monrovia",
  campus: "St. Joseph Campus, Capitol Hill, Monrovia",
  cityCountry: "Republic of Liberia",
  country: "Liberia",
  foundedDate: "September 8, 2008",
  yearFounded: 2008,
  maxStudentsPerClass: 30,
  motto: "Ad Astra Per Aspera",
  contactNumber: "(+231)-886-539-519",
};

export const heroStats: HeroStat[] = [
  { label: "founded", value: `${schoolProfile.yearFounded}` },
  { label: "max/class", value: `${schoolProfile.maxStudentsPerClass}` },
  { label: "country", value: "Liberia" },
];

export const academics: AcademicProgram[] = [
  {
    title: "STEM",
    description:
      "Innovation lab, robotics, and demonstration science where faith and reason meet.",
    icon: "flask",
  },
  {
    title: "Liberal Arts",
    description:
      "Classical curriculum with literature, philosophy, and great books.",
    icon: "palette",
  },
  {
    title: "Service Learning",
    description:
      "Weekly service placements and mission-focused outreach opportunities.",
    icon: "hands",
  },
  {
    title: "Faith & Culture",
    description:
      "Sacramental life, theology, choir, and Catholic formation for every learner.",
    icon: "shield",
  },
];

export const campusNews: CampusNewsItem[] = [
  {
    id: "chapel-blessing",
    title: "Blessing of the New Chapel",
    summary: "Bishop celebrates this milestone with the Spiritan community.",
    date: "2026-02-10",
    icon: "scroll",
  },
  {
    id: "robotics-regional",
    title: "Robotics Team Wins Regional",
    summary:
      "Spiritan engineers claim first place in the Catholic schools innovation league.",
    date: "2026-02-01",
    icon: "bot",
  },
  {
    id: "grandparents-mass",
    title: "Grandparents Day and Mass",
    summary:
      "Families gather in red and white for worship, gratitude, and celebration.",
    date: "2026-01-25",
    icon: "praying",
  },
];

export const programTracks: ProgramTrack[] = [
  {
    title: "Early Years Faith Discovery",
    level: "Grade 1 – Grade 3",
    summary: "Foundational literacy, numeracy, and catechetical formation through guided play.",
  },
  {
    title: "Junior Scholars Academy",
    level: "Grades 3 – 6",
    summary: "Integrated STEM, arts, and service-learning with daily prayer and pastoral support.",
  },
  {
    title: "College & Vocation Pathways",
    level: "Grades 7 – 12",
    summary: "Advanced placement tracks, leadership seminars, and vocation discernment mentoring.",
  },
];

export const awards: AwardItem[] = [
  {
    title: "Catholic Schools Excellence Citation",
    year: "2025",
    description: "Recognized for integrated faith formation and high student achievement outcomes.",
  },
  {
    title: "Regional Robotics Championship",
    year: "2026",
    description: "First-place finish in the Diocese STEM league among 24 participating schools.",
  },
  {
    title: "Community Service Institution Award",
    year: "2024",
    description: "Honored for 7,500+ annual student volunteer hours across local outreach programs.",
  },
];

export const events: EventItem[] = [
  {
    id: "open-house",
    name: "Admissions Open House",
    date: "2026-11-10",
    location: "Main Quadrangle",
    category: "Community",
    summary: "Campus tour, parent Q&A, and student ambassadors welcome prospective families.",
  },
  {
    id: "founders-mass",
    name: "Founders' Day Mass",
    date: "2026-03-15",
    location: "St. Francis Chapel",
    category: "Faith",
    summary: "Celebration of Spiritan heritage with choir ministry and alumni procession.",
  },
  {
    id: "science-showcase",
    name: "Innovation & Science Showcase",
    date: "2026-04-28",
    location: "Innovation Lab",
    category: "Academic",
    summary: "Learner projects in robotics, biology, and environmental engineering.",
  },
];

export const mediaItems: MediaItem[] = [
  {
    id: "media-1",
    title: "Campus Ministry Service Documentary",
    type: "Video",
    published: "2026-01-20",
  },
  {
    id: "media-2",
    title: "Red & White Founders' Week Highlights",
    type: "Photo Story",
    published: "2026-02-08",
  },
  {
    id: "media-3",
    title: "Spiritan Academic Bulletin",
    type: "Newsletter",
    published: "2026-02-14",
  },
];

export const verificationRecords: VerificationRecord[] = [
  {
    id: "SA-2026-0004",
    studentName: "Maria Okoro",
    credential: "Senior High School Completion",
    graduationYear: "2026",
    status: "Verified",
  },
  {
    id: "SA-2025-0192",
    studentName: "Noah Adeyemi",
    credential: "Junior High Completion",
    graduationYear: "2025",
    status: "Verified",
  },
  {
    id: "SA-2026-0177",
    studentName: "Daniel Mensah",
    credential: "Transfer Transcript",
    graduationYear: "2026",
    status: "Pending",
  },
];

