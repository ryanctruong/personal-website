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
      "After my sophomore year at Belmont, I had to declare a minor or a second major. I could have played it safe and gone with Math, like many Computer Science students, but I wanted to try something different. I'd always been interested in the business side of Computer Science. After spending so much time learning how to write code, I wanted to understand the decisions behind what gets built and why a business would invest in it. That curiosity led me to declare a second major in Economics.\n\nI leaned toward analytical and research-heavy classes like Econometrics, Forecasting, and Economic Development. I ended up writing a lot of research papers, which was a pretty big change from the programming projects I was used to. I was still working through problems, but now I had to use data to make an argument and explain why the results mattered.\n\nOne paper that stood out was my research on corruption in African Growth and Opportunity Act (AGOA) countries. It was published, and I had the opportunity to present it at the Eastern Economic Association conference in Times Square, New York City, alongside my peers and professors. When I picked Economics, I was mostly looking for a different perspective on what I was already studying. I didn't expect it to lead to presenting my own research in NYC, but that ended up being one of the highlights of my time at Belmont.",
    techStack: [sql, python, excel],
  },
  {
    discipline: "analytics",
    date: "Aug 2022",
    title: "Junior Data Analyst",
    subtitle: "Belmont Data Collaborative",
    description:
      "After declaring a second major in Economics, I wanted to find work that brought both sides of my education together. Around that time, Belmont launched the Belmont Data Collaborative, a new program focused on data and AI, and they were looking for data analysts to support their projects. It seemed like a good opportunity to put both my programming skills and what I was learning in Economics to use.\n\nI joined as a Junior Data Analyst and helped with a project exploring whether there was a correlation between sidewalks and hypertension. My role was to collect and clean data using Python, Excel, and SQL before passing it along to the team for analysis. The biggest challenge was figuring out what data we actually needed and where to find it. I spent a lot of time researching the topic before I could even start working with the data.\n\nThe biggest lesson I took away was the importance of data storytelling. Coming from Computer Science, I was used to focusing on getting things to work. Here, I started learning how much it mattered to explain what the data was showing and why someone should care.",
    techStack: [excel, python, sql],
  },
  {
    discipline: "analytics",
    date: "May 2023",
    title: "Data Analyst Intern",
    subtitle: "Urban Science",
    description:
      "Taking the Economics and Computer Science route seriously, I wanted to keep exploring what it meant to be a data analyst. By the time I joined Urban Science, I had a few work experiences behind me, so I came into this internship a little more relaxed and ready to learn. I worked alongside the team, supporting their work and getting a better understanding of how dealerships use data to see where they're doing well and where they could improve.\n\nOne project I enjoyed explored the metrics used to evaluate dealership performance. The team combined several metrics to determine whether a dealership was exceeding expectations, meeting expectations, or underperforming. Those metrics took time to calculate, so we wanted to see whether some had more predictive value than others. Could we get a useful prediction of dealership performance without having to calculate every metric?\n\nI started with scatter plots and lines of best fit to look for relationships in the data. There were some signs of correlation, but the R² values were too low to give us much confidence in those models. That was when I started bringing concepts from my Artificial Intelligence coursework into the project. I tried machine learning methods like KNN, regression trees, support vector regression, and random forests to see whether they could pick up relationships that the simpler models were missing.\n\nThe results supported our idea that we could use fewer metrics, but we also had to be careful about overfitting. It was exciting to see better predictions, but we needed to know whether the models were learning useful patterns or just fitting the data we already had. That meant spending a lot of time tuning the models and checking the results. This was one of the first times I got to bring both of my majors into the same project, and I enjoyed being able to take something I had learned in class and try it on a problem the team was actually working through.",
    techStack: [powerbi, sql, python, excel],
  },
  {
    discipline: "education",
    date: "Aug 2023",
    title: "CSC/MTH Tutor",
    subtitle: "Belmont University",
    description:
      "I've always struggled with communication, whether it was speaking up in meetings or explaining an idea in class. Sometimes I felt like I knew what I wanted to say, but couldn't get it across in a way that made sense to everyone else. I wanted to get better at that, so I became a tutor for Computer Science and some Math courses at Belmont.\n\nTutoring gave me a chance to work on my communication while also sharpening my programming and math skills. Knowing how to solve a problem yourself is one thing, but helping someone else understand it takes a different kind of effort. I had to slow down, listen to where they were getting stuck, and find another way to explain something when the first explanation didn't click. It pushed me to think more carefully about concepts I thought I already understood and how to make them easier for someone else to follow.",
    techStack: [java, python],
  },
  {
    discipline: "engineering",
    date: "Oct 2023",
    title: "Software Engineer Intern",
    subtitle: "HCA Healthcare",
    description:
      "After two experiences as a data analyst, I found myself wondering whether it was the right fit for me. At Urban Science, I kept coming up with engineering solutions to the problems we were working on, and my manager pointed that out. I enjoyed working with data, but I also wanted to spend more time building things. That pushed me to give software engineering another try.\n\nI joined HCA Healthcare as a Software Engineer Intern on the HR Transformation & Innovation team, which builds software to support HR processes. Alongside exploring new ideas, I helped support and maintain an application serving over 300,000 users. I worked on bug fixes, performance improvements, and updates to make the application easier to use. I had to get familiar with the existing code, figure out what was causing issues, and think through how my changes might affect other parts of the application.\n\nMost of my work leaned toward the innovation side, exploring how we could use AI to help with existing HR challenges. One project I worked on was a tool to help recruiters create job descriptions in HCA's style. Previously, recruiters had to search through a catalog of over 100,000 job descriptions, find relevant examples, and combine them into what they needed. Each recruiter spent approximately 600 hours a year on this process.\n\nWe fine-tuned a language model to generate job descriptions that included the details recruiters needed and followed HCA’s preferred style and format. Recruiters could generate a description from scratch, provide their own description as a starting point, or search the catalog and select as many existing descriptions as they needed to combine into a new draft.\n\nThe tool ended up becoming HCA's first AI application released internally. After spending time questioning which direction I wanted to take, it felt pretty good to help build something that people could actually use in their day-to-day work. I got to keep exploring my interest in AI while doing more of the building that I had missed, and that helped me feel more confident about pursuing software engineering.",
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
