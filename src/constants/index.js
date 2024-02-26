import { bittele, carrier, seneca } from "../assets/images";
import {
  contact,
  css,
  daisyui,
  etsy,
  express,
  git,
  github,
  go,
  heart,
  house,
  html,
  javascript,
  linkedin,
  mongodb,
  mood,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  sensor,
  sponsorarc,
  tailwindcss,
  typescript,
  workflow,
} from "../assets/icons";

export const projects = [
  {
    iconUrl: sponsorarc,
    theme: "icon-card-back-black",
    name: "SponsorArc",
    description:
      "Web application that lets content creators connect with sponsor brands. Brands will have the ability to showcase their products to the correct audience though creators.  Creators can marker their experience to obtains brand deals/pratnerships.",
    link: "https://github.com/JuanVMaya/sponsorarc",
  },
  {
    iconUrl: etsy,
    theme: "icon-card-back-orange",
    name: "Etsy Shop - The One TCG",
    description:
      "Live Etsy shop specializes in 3D printed items, offering a range of custom-designed product for TCG (Trading Card Games) items, that blend modern engineering desing technology with personal touch. Basically, overengineered  accesories for card gamers.",
    link: "https://theonetcg.etsy.com",
    hasLiveLink: true,
  },
  {
    iconUrl: house,
    theme: "icon-card-back-blue",
    name: "Conmetodo S.A.S.",
    description:
      "This is a live website designed using Svelte and Tailwind for a Colombian company dedicated to appraisals of real estate, machinery, infrastructure and company assets.",
    link: "https://conmetodo.netlify.app/",
    hasLiveLink: true,
  },
  {
    iconUrl: mood,
    theme: "icon-card-back-green",
    name: "Google Moods",
    description:
      "Google Moods was a front-end application inspired by the 'How might we' increase access to mental health resources so that people can feel supported and improve their wellbeing? Hackathon - BrainStation x Google",
    link: "https://github.com/JuanVMaya/google-moods",
  },
  {
    iconUrl: workflow,
    theme: "icon-card-back-yellow",
    name: "WorkFlow App",
    description:
      "Web application that lets you manage projects every step of the way from initiation and closing. You can breakdown your project into tasks with descriptions and assign them to different stages such as 'Not complete', 'Planning', 'Executing' and 'Completed'. This was was done in a partnership in under 24 hours.",
    link: "https://github.com/JuanVMaya/workflow-app",
  },
  {
    iconUrl: heart,
    theme: "icon-card-back-pink",
    name: "The One Love",
    description:
      "This is a web app made in React + Vite SPA with Javascript. This was made specifically for my fiance for 2024 valentine's day. The web app is visually optimized for her phone and was meant to highlight a few relationship goals through a series of fun challenges and questions.",
    link: "https://github.com/JuanVMaya/TheOneLove",
  },
  {
    iconUrl: sensor,
    theme: "icon-card-back-orange",
    name: "Robotic Autonomous Driver",
    description:
      "Collaborated with Cyberwrok within Seneca Innovation and the School of Electronics & Mechanical Engineering Technology, to develop an electromechanical design for the autonomous drive module compatible with multiple machines.",
    link: "https://www.senecapolytechnic.ca/news-and-events/seneca-news/robotic-floor-cleaner-soon-to-drive-itself-at-seneca.html",
    hasLiveLink: true,
  },
];

export const skills = [
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: go,
    name: "Go",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: daisyui,
    name: "Daisy UI",
    type: "Frontend",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/JuanVMaya",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/juanvmaya/",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Carrier - Supra Systems/Brokerbay",
    icon: carrier,
    iconBg: "#a2d2ff",
    date: "Sept 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Typescript, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design, API endpoints and ensuring compatibility for our mobile app.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Electronics Sales Account Manager",
    company_name: "Bittele Electronics",
    icon: bittele,
    iconBg: "#ffffff",
    date: "Jan 2020 - May 2022",
    points: [
      "Leader and contributor to the online ordering system, demonstrated success by surpassing the annual sales target by 35% with a record all-time high sales of 1.75M in annual 2021 revenue",
      "Created quickly and iteratively user flows, wireframes, prototypes",
      "Developed high-fidelity mock-ups for internal and external sales tools",
      "Surpassed the sales target by closing 750 sales (45.5% above estimate) resulting in 3.15M in revenue from Dec 2020 to May 2022",
    ],
  },
  {
    title: "Senior Research Assistant",
    company_name: "Seneca",
    icon: seneca,
    iconBg: "#DA291C",
    date: "Jul 2019 - Oct 2020",
    points: [
      "Investigated with research project manager and professors in the planning, designing, and prototyping of two research projects:",
      "Universal retrofit system for autonomous control of robotic wet/dry cleaners for client Cyberworks Robotics Inc. (Sept 2019 – Oct 2020).",
      "Eco-Friendly, Automatic Equine Water Trough System for Lenka Equestrian Centre. (July 2019 – December 2019)",
      "Engineered the electronics system design and accomplished physical movement output logic by using Arduino (C/C++), Linux, ROS (Robot Operating System) and solar panel technology",
    ],
  },
];
