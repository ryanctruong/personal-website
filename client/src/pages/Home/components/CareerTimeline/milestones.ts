import javaIcon from "/icons/java.png";
import pythonIcon from "/icons/python.png";
import sqlIcon from "/icons/sql.png";
import htmlIcon from "/icons/html.webp";
import cssIcon from "/icons/css.svg";
import excelIcon from "/icons/excel.webp";
import powerbiIcon from "/icons/powerbi.webp";
import reactIcon from "/icons/react.webp";
import gcpIcon from "/icons/gcp.webp";
import dockerIcon from "/icons/docker.webp";
import nodejsIcon from "/icons/nodejs.webp"

interface Technology {
  name: string;
  icon: string;
}

const java: Technology = { name: "Java", icon: javaIcon };
const python: Technology = { name: "Python", icon: pythonIcon };
const sql: Technology = { name: "SQL", icon: sqlIcon };
const html: Technology = { name: "HTML", icon: htmlIcon };
const css: Technology = { name: "CSS", icon: cssIcon };
const excel: Technology = { name: "Excel", icon: excelIcon };
const powerbi: Technology = { name: "Power BI", icon: powerbiIcon };
const react: Technology = { name: "React", icon: reactIcon };
const gcp: Technology = { name: "GCP", icon: gcpIcon };
const docker: Technology = { name: "Docker", icon: dockerIcon };
const nodejs: Technology = { name: "Node.js", icon: nodejsIcon };

interface CareerMilestone {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: Technology[];
}

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    date: "Aug 2018",
    title: "IT Pathway Student",
    subtitle: "John Overton High School",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [java],
  },
  {
    date: "Aug 2020",
    title: "Computer Science Major",
    subtitle: "Belmont University",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [sql, python, java],
  },
  {
    date: "May 2021",
    title: "Software Engineer Intern",
    subtitle: "Jackson National Life Insurance Company",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [java, html, css],
  },
  {
    date: "Aug 2022",
    title: "Dual Economics Major",
    subtitle: "Belmont University",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [sql, python, excel],
  },
  {
    date: "Aug 2022",
    title: "Junior Data Analyst",
    subtitle: "Belmont Data Collaborative",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [excel, python, sql],
  },
  {
    date: "May 2023",
    title: "Data Analyst Intern",
    subtitle: "Urban Science",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [powerbi, sql, python, excel],
  },
  {
    date: "Aug 2023",
    title: "CSC/MTH Tutor",
    subtitle: "Belmont University",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [java, python],
  },
  {
    date: "Oct 2023",
    title: "Software Engineer Intern",
    subtitle: "HCA Healthcare",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [gcp, docker, python, react],
  },
  {
    date: "May 2024 - Present",
    title: "Software Engineer",
    subtitle: "HCA Healthcare",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [react, python, docker, gcp, nodejs],
  },
];

// date: "Date",
// title: "Title",
// subtitle: "Subtitle",
// description: "Description",
// techStack: [icons, ...]
