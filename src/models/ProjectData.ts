export type ProjectEntry = {
  name: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  liveUrl?: string; // Optional: If defined, the project has a live version
};
