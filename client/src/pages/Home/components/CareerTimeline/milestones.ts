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
import nodejsIcon from "/icons/nodejs.webp";

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
  discipline: "education" | "analytics" | "engineering";
  date: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: Technology[];
}

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    discipline: "education",
    date: "Aug 2016",
    title: "IT Pathway Student",
    subtitle: "John Overton High School",
    description:
      "I've always been into computers, but growing up, it was mostly about playing games and building PCs. When I heard my high school was starting a new IT Pathway, I wanted in. The only problem was that I didn't read the class descriptions closely enough. I meant to take Hardware Systems and ended up in Programming I instead. Looking back, that was probably one of the best mistakes I could've made.\n\nI started learning Java and making little games, and realized I enjoyed writing the code just as much as playing the finished thing. It gave me that same feeling I got from building a computer: putting pieces together, figuring out why something wasn't working, and finally getting it to do what I wanted.\n\nI also got to compete in programming competitions and a web design competition where we were asked to come up with a new car brand and build a website for it. My site placed third in the state. I stuck with programming and eventually took AP Computer Science, although COVID cut into that experience. What started as signing up for the wrong class ended up being how I found out I wanted to keep building software.",
    techStack: [java, html, css],
  },
  {
    discipline: "education",
    date: "Aug 2020",
    title: "Computer Science Major",
    subtitle: "Belmont University",
    description:
      "Following the love for programming in highschool, declaring a major for college was a no brainer, Computer Science. I was ready to take the lessons I've learned and skills I've developed to the next level, and that is exactly what Belmont was able to offer me. Taking courses such as Data Structures & Algorithms, Artifical Intelligence, System Design and Operating Systems not only showed me how much there is to learn in this field, but it also showed me how to step out of my comfort zone and just try new things.\n\nThere wasn't one project I worked on that stood out to me, but if I had to choose one that defined my career, it would be [Clippy](). Clippy was an independent project apart of my Artifical Intelligence course. The project revolved around users inputting a PDF and spitting out a 50 word summarary about the file. Essentially, ChatGPT before ChatGPT.\n\nI say this project defined my career because, for the first time, I really struggled. I didn't have a set of instructions to follow or a clear idea of where to start. I had to figure out how to break the project down, what I needed to learn, and how to keep moving when something didn't work. Getting Clippy to produce a summary was exciting, but learning how to work through that uncertainty was what stayed with me.",
    techStack: [sql, python, java],
  },
  {
    discipline: "engineering",
    date: "May 2021",
    title: "Software Engineer Intern",
    subtitle: "Jackson National Life Insurance Company",
    description:
      "After a successful freshman year at Belmont University, I was fortunate to secure an internship at Jackson National Life as a software engineering intern. I didn't know what to expect. Was I supposed to be a programming genius at this point? Was I expected to solve everything they threw at me? All I knew was that I was going to give it my best, and that's what I did.\n\nI worked mostly independently, with guidance from my manager, on a project to solve an internal problem. Employees needed a way to see what equipment, like laptops, desktops, and monitors, was in the system. At the time, all of that information was maintained in an Excel file stored on SharePoint.\n\nThis gave me a different kind of challenge than the projects I had worked on in school. There was an existing process, people who depended on it, and a reason they needed something better. Before I could figure out what to build, I had to understand what they were trying to find and where the spreadsheet was falling short. I came into the internship worried about whether I knew enough programming. What I started to realize was that asking questions and understanding the problem were just as much a part of the job as writing the code.\n\nBy the end of the internship, I was able to build a web app where certain users could add equipment, and everyone could view what was in the system. It felt pretty cool to take something that had been living in an Excel file and turn it into an actual application. I was able to take what I had learned during my first year and build something that solved a real problem. I still had plenty to learn, but this experience gave me more confidence that I could figure things out as I went.",
    techStack: [sql, java, html, css],
  },
  {
    discipline: "education",
    date: "Aug 2022",
    title: "Dual Economics Major",
    subtitle: "Belmont University",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [sql, python, excel],
  },
  {
    discipline: "analytics",
    date: "Aug 2022",
    title: "Junior Data Analyst",
    subtitle: "Belmont Data Collaborative",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [excel, python, sql],
  },
  {
    discipline: "analytics",
    date: "May 2023",
    title: "Data Analyst Intern",
    subtitle: "Urban Science",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [powerbi, sql, python, excel],
  },
  {
    discipline: "education",
    date: "Aug 2023",
    title: "CSC/MTH Tutor",
    subtitle: "Belmont University",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [java, python],
  },
  {
    discipline: "engineering",
    date: "Oct 2023",
    title: "Software Engineer Intern",
    subtitle: "HCA Healthcare",
    description:
      "Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making. Analyzed and interpreted data to provide insights and support decision-making.",
    techStack: [gcp, docker, python, react],
  },
  {
    discipline: "engineering",
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
