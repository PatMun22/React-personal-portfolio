import ELW from "../images/E-learningApp.PNG";
import Cart from "../images/CartApp.PNG";
import Calculator from "../images/AgeClculatorApp.PNG";
import form from "../images/Loginform.PNG";
import notes from "../images/NotesApp.PNG";
import Tolew from "../images/Tolew.PNG";
import Greenlish from "../images/greenlish.JPG";

export const linkDatas = [
  {
    id: 1,
    linkID: "home",
    linkUrl: "#home",
    linkName: "Home",
    linkIcon: "GoHome",
  },
  {
    id: 2,
    linkID: "about",
    linkUrl: "#about",
    linkName: "About",
    linkIcon: "AiOutlineUser",
  },
  {
    id: 3,
    linkID: "skills",
    linkUrl: "#skills",
    linkName: "Skills",
    linkIcon: "BsCodeSlash",
  },
  {
    id: 4,
    linkID: "projects",
    linkUrl: "#projects",
    linkName: "Projects",
    linkIcon: "AiOutlineCopy",
  },
  {
    id: 5,
    linkID: "contacts",
    linkUrl: "#contacts",
    linkName: "Contacts",
    linkIcon: "AiOutlineMessage",
  },
];

export const projects = [
  {
    id: 1,
    projectName: "GreenLish E-Commerce Store",
    imageLink: Greenlish,
    github: "https://github.com/PatMun22/GreenLish-Ecommerce",
    githubIcon: "AiFillGithub",
    live: "https://green-lish-ecommerce.vercel.app/",
    liveLink: "FiExternalLink",
    techStacks: ["HTML5", "Sass", "React.js"],
  },
  {
    id: 2,
    projectName: "Tolew Admin Dashboard",
    imageLink: Tolew,
    github: "https://github.com/PatMun22/Chinookz-admin-dashboard",
    githubIcon: "AiFillGithub",
    live: "https://tolew-admin-dashboard.vercel.app/",
    liveLink: "FiExternalLink",
    techStacks: ["HTML5", "Sass", "React.js", "MUI"],
  },
  {
    id: 3,
    projectName: "E-learning website",
    imageLink: ELW,
    github: "https://github.com/PatMun22/E-Learning-website",
    githubIcon: "AiFillGithub",
    live: "https://patmun22.github.io/E-Learning-website/",
    liveLink: "FiExternalLink",
    techStacks: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 4,
    projectName: "React Note App",
    imageLink: notes,
    github: "https://github.com/PatMun22/react-note-app",
    githubIcon: "AiFillGithub",
    live: "https://chinookz-react-notes-app.netlify.app/",
    liveLink: "FiExternalLink",
    techStacks: ["Sass", "React.js"],
  },
  {
    id: 5,
    projectName: "React Cart App",
    imageLink: Cart,
    github: "https://github.com/PatMun22/React-cart-app",
    githubIcon: "AiFillGithub",
    live: "https://first-react-cart-app.netlify.app/",
    liveLink: "FiExternalLink",
    techStacks: ["Bootstrap", "React.js"],
  },
  {
    id: 7,
    projectName: "Age Calculator",
    imageLink: Calculator,
    github: "https://github.com/PatMun22/Age-Calculator",
    githubIcon: "AiFillGithub",
    live: "https://patmun22.github.io/Age-Calculator/",
    liveLink: "FiExternalLink",
    techStacks: ["HTML5", "CSS3", "JavaScript"],
  },
];

export const skills = [
  {
    skillName: "HTML5",
    experienceRating: "90%",
  },
  {
    skillName: "CSS3",
    experienceRating: "85%",
  },
  {
    skillName: "BOOTSRAP",
    experienceRating: "70%",
  },
  {
    skillName: "TAILWIND CSS",
    experienceRating: "70%",
  },
  {
    skillName: "SASS",
    experienceRating: "80%",
  },
  {
    skillName: "JAVASCRIPT",
    experienceRating: "85%",
  },
  {
    skillName: "JQUERY",
    experienceRating: "65%",
  },
  {
    skillName: "REACT.JS",
    experienceRating: "70%",
  },
  {
    skillName: "GitHub",
    experienceRating: "80%",
  },
  {
    skillName: "Git",
    experienceRating: "70%",
  },
];
