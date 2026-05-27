import { ProjectEntry } from "../models/ProjectData";

const ProjectEntries: ProjectEntry[] = [
  {
    name: "ACT Advisor",
    description:
      "An offline-first Acceptance and Commitment Therapy tool with local IndexedDB storage, data export/import, and interactive rating sliders.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Dexie.js"],
    repoUrl: "https://github.com/sidbans/act-advisor",
    liveUrl: "https://sidbans.github.io/act-advisor",
  },
  {
    name: "FLASH Beeper",
    description: "A random beeper for the Flash therapy technique",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/sidbans/flash-beeper"
  }
];

export default ProjectEntries;
