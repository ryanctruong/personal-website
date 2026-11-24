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
      "I've always been into computers, but growing up, it was mostly about playing games and building PCs. When my high school started a new IT Pathway, I wanted in. The only problem was that I didn't read the class descriptions closely enough. I ended up in Programming rather than a computer building class. Looking back, that was probably one of the best mistakes I could've made.\n\nI started learning Java and making little games, and realized I enjoyed writing the code just as much as playing the finished thing. It gave me the same feeling as building a computer: putting pieces together, figuring out why something wasn't working, and finally getting it to do what I wanted.\n\nI competed in programming competitions and a web design competition where my site placed third in the state. I eventually took AP Computer Science, although COVID cut into that experience. By then, I knew building software was something I wanted to keep pursuing.",
    techStack: [java, html, css],
  },
  {
    discipline: "education",
    date: "Aug 2020",
    title: "Computer Science Major",
    subtitle: "Belmont University",
    description:
      "After discovering how much I enjoyed programming in high school, choosing Computer Science at Belmont felt pretty natural. Courses like Data Structures & Algorithms, Artificial Intelligence, System Design, and Operating Systems showed me how much more there was to learn and pushed me to try things I didn't already know how to do.\n\nOne project that stayed with me was Clippy, an independent project for my Artificial Intelligence course. The idea was to take a PDF and produce a 50-word summary. It sounded straightforward, but it was the first project where I really struggled without a set of instructions or a clear place to start.\n\nI had to figure out how to break the problem down, what I needed to learn, and how to keep moving when something didn't work. Getting Clippy to produce a summary was exciting, but the bigger lesson was learning how to approach a project when I didn't have the answers yet.",
    techStack: [sql, python, java],
  },
  {
    discipline: "engineering",
    date: "May 2021",
    title: "Software Engineer Intern",
    subtitle: "Jackson National Life Insurance Company",
    description:
      "After my freshman year at Belmont, I joined Jackson National Life as a software engineering intern. I didn't know what to expect, and I wondered whether I knew enough programming to be useful.\n\nI worked mostly independently, with guidance from my manager, on an equipment tracking application. Employees needed to find information about laptops, desktops, and monitors, but everything was maintained in an Excel file on SharePoint. Before deciding what to build, I had to understand what people were trying to find and where the spreadsheet was falling short.\n\nBy the end of the internship, I'd built a web app where certain users could add equipment and everyone could view what was in the system. It felt pretty cool to turn that spreadsheet into an application, but what stood out was how different the work was from a school assignment. There was an existing process and people who depended on it. I came in focused on whether I could write the code and left with a better understanding of why asking questions and understanding the problem mattered just as much.",
    techStack: [sql, java, html, css],
  },
  {
    discipline: "education",
    date: "Aug 2022",
    title: "Dual Economics Major",
    subtitle: "Belmont University",
    description:
      "After my sophomore year at Belmont, I had to declare a minor or a second major. I'd always been curious about the business side of Computer Science. After spending so much time learning how to write code, I wanted to understand the decisions behind what gets built and why a business would invest in it. That led me to Economics.\n\nI leaned toward analytical and research-heavy classes like Econometrics, Forecasting, and Economic Development. Writing research papers was a pretty big change from programming projects. I had to use data to make an argument and explain why the results mattered.\n\nOne highlight was my research on corruption in African Growth and Opportunity Act (AGOA) countries. The paper was published, and I presented it at the Eastern Economic Association conference in Times Square, New York City, alongside my peers and professors. I hadn't expected that when I chose Economics. It gave me a different way to work through problems: looking at the evidence, building an argument, and explaining it to other people.",
    techStack: [sql, python, excel],
  },
  {
    discipline: "analytics",
    date: "Aug 2022",
    title: "Junior Data Analyst",
    subtitle: "Belmont Data Collaborative",
    description:
      "After adding Economics as a second major, I wanted to find work that brought both sides of my education together. Belmont had launched the Belmont Data Collaborative, a new program focused on data and AI, and was looking for data analysts to support its projects. It seemed like a good place to put what I was learning to use.\n\nI joined as a Junior Data Analyst on a project exploring whether there was a correlation between sidewalks and hypertension. I collected and cleaned data using Python, Excel, and SQL before passing it along to the team for analysis.\n\nThe hardest part came before the data cleaning: figuring out what we actually needed and where to find it. I spent a lot of time researching the topic before I could start working with the data. That experience taught me how much analysis depends on the questions you ask and the data you choose to work with.",
    techStack: [excel, python, sql],
  },
  {
    discipline: "analytics",
    date: "May 2023",
    title: "Data Analyst Intern",
    subtitle: "Urban Science",
    description:
      "By the time I joined Urban Science, I had a few work experiences behind me, so I came into this internship a little more relaxed and ready to learn. I worked alongside the team and got a better understanding of how dealerships use data to see where they're doing well and where they could improve.\n\nOne project explored whether we could predict dealership performance using fewer metrics. It gave me a chance to bring ideas from my Artificial Intelligence coursework into a problem the team was working through. I enjoyed seeing those concepts become useful outside the classroom, but I also found myself spending a lot of time checking and questioning the results.\n\nThe results supported using fewer metrics, but we had to be careful about overfitting. Better predictions were exciting, though they didn't automatically mean we'd found useful patterns. I had to slow down and look more closely at what the models were learning. That was what stayed with me: learning to be more careful about the conclusions I drew, even when the results looked promising.",
    techStack: [powerbi, sql, python, excel],
  },
  {
    discipline: "education",
    date: "Aug 2023",
    title: "CSC/MTH Tutor",
    subtitle: "Belmont University",
    description:
      "Sometimes I felt like I knew what I wanted to say, but couldn't get it across clearly in a meeting or in class. I wanted to get better at that, so I became a tutor for Computer Science and some Math courses at Belmont.\n\nKnowing how to solve a problem yourself is one thing, but helping someone else understand it takes a different kind of effort. I had to slow down, listen to where students were getting stuck, and find another way to explain something when the first explanation didn't click. Tutoring sharpened my programming and math skills, too. Explaining concepts I thought I already understood pushed me to think about them more carefully and adapt to how someone else was approaching the problem.",
    techStack: [java, python],
  },
  {
    discipline: "engineering",
    date: "Oct 2023",
    title: "Software Engineer Intern",
    subtitle: "HCA Healthcare",
    description:
      "After two experiences as a data analyst, I realized I wanted to spend more time building software. I still enjoyed working with data, and the internship at HCA Healthcare gave me a chance to explore engineering again.\n\nI joined HCA Healthcare as a Software Engineer Intern on the HR Transformation & Innovation team, where most of my work focused on exploring how we could use AI to help with existing HR challenges. One project was a tool to help recruiters create job descriptions in HCA's style. Previously, they had to search through a catalog of over 100,000 descriptions and combine relevant examples, spending approximately 600 hours a year on that process per recruiter. We fine-tuned a language model so they could generate a draft from scratch or use existing descriptions as a starting point.\n\nThe tool ended up becoming HCA's first AI application released internally. After spending time questioning which direction I wanted to take, it felt pretty good to help build something people could use in their day-to-day work. I got to keep exploring my interest in AI while doing more of the building I'd missed, and that helped me feel more confident about pursuing software engineering.",
    techStack: [gcp, docker, python, react],
  },
  {
    discipline: "engineering",
    date: "May 2024 - Present",
    title: "Software Engineer",
    subtitle: "HCA Healthcare",
    description:
      "After my internship, I received a full-time offer to return to HCA Healthcare as a Software Engineer. I joined Advanced Analytics, a sub-team within HR Transformation & Innovation. My focus stayed on innovation, but my work shifted toward building the data pipelines and infrastructure that support our data scientists, data architects, and Power BI dashboards.\n\nOne initiative I've been the lead engineer on is a recommendation system for job openings with low application volume. We use AI to evaluate resumes from candidates who recently applied to other roles but weren't selected, looking for other openings where they might be a good fit. Recruiters can review the top 10 potential candidates and encourage them to apply. By helping them find candidates who had already shown interest in HCA, we improved time to fill by 25%.\n\nThe biggest change from my internship has been the trust people place in me. I'm now leading the engineering work on initiatives my peers, managers, and leaders depend on. I still get to explore new ideas, but I'm also seeing more of the work that goes into keeping them useful after they're built.",
    techStack: [react, python, docker, gcp, nodejs],
  },
];

// date: "Date",
// title: "Title",
// subtitle: "Subtitle",
// description: "Description",
// techStack: [icons, ...]
