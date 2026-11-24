interface Faq {
    id: string
    question: string
    answer: string
}

export const FAQS: Faq[] = [
  {
    id: "faq-engaging-work",
    question: "What kind of work makes you lose track of time?",
    answer: "Work that I know will have an impact. That could be supporting a teammate on a new engineering task or building an application for thousands of users. Either way, knowing that what I’m doing matters to someone makes it easy to get invested.\n\nI get especially absorbed when there’s a problem we haven’t figured out how to solve yet. I enjoy breaking it down, trying different approaches, and following an idea to see where it leads. Each small breakthrough makes me want to keep going. It’s easy to lose track of time when I feel like I’m getting closer to a solution.",
  },
  {
    id: "faq-weekend",
    question: "What does a really good weekend look like for you?",
    answer: "A really good weekend starts with an early morning run, usually around an hour, depending on whether I’m training for a race or just staying active. I like going alone because it gives me time to reflect on the week. After that, I’m heading somewhere for a good breakfast or brunch. I run so I can eat more, haha.\n\nThe rest of the day is pretty relaxed: spending time with friends and family, watching football, shopping, or getting some cleaning done at home. At night, I’ll meet up with friends for dinner, hang out, and see where the evening takes us. I like having a few things to look forward to without planning every hour.",
  },
  {
    id: "faq-economics",
    question: "How has studying economics changed the way you build software?",
    answer: "Studying economics made me more curious about the decisions behind the software. Who would use it? What problem would it solve? Would the benefit justify the time and effort to build and maintain it? I started thinking more about the business impact and why one solution might be worth pursuing over another.\n\nIt also taught me to question my assumptions and look for evidence. An idea can sound promising, but that doesn’t automatically make it a good investment. I want to understand the tradeoffs and how we’ll know whether the solution is working.",
  },
  {
    id: "faq-childhood",
    question: "What were you like as a kid, and what hasn’t changed?",
    answer: "As a kid, I was crazy. Plain and simple. I wanted to do everything: play games, play sports, try every food in front of me. I never wanted to sit still, especially if there was something fun going on.\n\nLooking back, a lot of that was curiosity. I liked trying things and figuring out what I enjoyed, even if I didn’t stick with all of them. That part hasn’t changed. I’m still drawn to new experiences, and I’d rather give something a try than wonder whether I might’ve liked it.",
  },
  {
    id: "faq-collaboration",
    question: "What are you like to work with?",
    answer: "I’m usually quick to raise my hand when something needs to get done. I like being someone my teammates can count on, whether that means helping them get unstuck or taking on something unfamiliar.\n\nI also ask a lot of questions. I want to understand what we’re trying to accomplish, why we do things a certain way, and how the pieces fit together before I start building. If something isn’t clear to me, I’d rather ask than make an assumption. That curiosity helps me learn from the people around me and feel more confident in what I’m contributing.",
  },
  {
    id: "faq-personal-pride",
    question: "What’s something you’re proud of that has nothing to do with your career?",
    answer: "Running. Before the fall of 2024, I’d never really been a runner. Then, on a random day when the weather was nice, I felt the urge to go for a run at a park. There wasn’t a plan behind it, but I kept going back every weekend, and it became part of my routine.\n\nEventually, I signed up for a marathon and started training consistently. Nine months after that first run, I finished my debut marathon in 3:18:55. I was surprised by what I could do, both physically and mentally. I hadn’t started with much belief that I could run a marathon, but showing up week after week helped me trust the work I’d put in.\n\nIn 2026, a year after my first marathon, I ran my second in 3:00:30. I’d put more into training, never missed a workout, and learned a lot more about running. Missing my goal of breaking three hours was frustrating, especially after all that preparation. But showing up every day helped me become more patient, disciplined, and confident in myself. I wanted to become a faster runner, and along the way, I became someone I’m proud of.",
  },
  {
    id: "faq-changed-opinion",
    question: "What’s an opinion you’ve changed your mind about?",
    answer: "I used to think a lot of success came down to luck, whether that meant being naturally good at something or getting the right opportunity at the right time. I’ve come to believe that consistency and dedication matter much more than I gave them credit for.\n\nRunning gave me a clear example of how small efforts add up over time, and I’ve noticed the same thing in my career. Tasks that once felt unfamiliar became things I could take ownership of because I kept asking questions, learning, and taking on new challenges.\n\nI still think luck plays a role. I’ve had opportunities and people who believed in me, and I’m grateful for that. But I’ve learned that what I do with those opportunities and the effort I put in between them matter more than I used to think.",
  },
  {
    id: "faq-presentation",
    question: "What could you give a 30-minute presentation on with no preparation?",
    answer: "Why Topgolf has the best pizza in the world. I’ve tried hundreds of pizza places across Nashville, Chicago, and New York, and nothing hits quite like Topgolf pizza. I just can’t explain it.\n\nI’m not sure if it’s the atmosphere or what, but I feel like I could eat it for the rest of my life. And yes, I would pay the bay fee just to eat the pizza.",
  },
  {
    id: "faq-learning",
    question: "What are you learning right now just because you’re curious?",
    answer: "Right now, I’m learning more about agentic AI and how I can use it in my everyday life. I’ve been exploring different models, experimenting with how I write prompts, and figuring out which tasks I can hand off to an agent and which ones need more guidance.\n\nI’m also curious about token usage and how to get useful results with less back-and-forth. How much context does a model actually need? When does more detail help, and when am I just adding noise? I like comparing the results and figuring out what actually improved the response.",
  },
  {
    id: "faq-reputation",
    question: "What do you want to become known for?",
    answer: "I want to be known as someone who gives their best to whatever they take on. I’m competitive, and I want to be the best at what I do. But even when I fall short, I want people to see that I cared, put in the work, and gave it everything I had.\n\nThat also means being honest when something goes wrong and willing to learn from it. I won’t always get the result I want, but I want to be able to look back and know I took the responsibility seriously and gave myself every chance to succeed.",
  },
  {
    id: "faq-career-future",
    question: "What are you hoping to do more of in your career?",
    answer: "I’m hoping to grow into a senior engineering role and eventually explore management. I still really enjoy writing code, and I want to keep building my technical skills while taking on more responsibility and helping other engineers grow.\n\nI’d also like to work more directly with stakeholders. I want to be part of the conversations that define a project’s scope, understand what people need, and help turn that into a clear plan. Being closer to those decisions would help me become a stronger engineer and prepare me to lead a team down the road.",
  },
  {
    id: "faq-life-priorities",
    question: "What are you trying to make more room for in your life?",
    answer: "I’m trying to make more room for spontaneity and slowing down. That could mean taking a trip, saying yes to a last-minute plan, or having a day with nothing on the schedule. Not every day needs to be filled with something.\n\nBetween work, running, and personal goals, I’m used to having something to work toward. I enjoy that, but I also want to get better at relaxing without feeling like I should be doing more. Sometimes, I just want to enjoy where I am, who I’m with, and the moment I’m in.",
  },
];
