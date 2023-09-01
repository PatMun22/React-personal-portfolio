import ELW from "../images/E-learningApp.PNG";
import Cart from "../images/CartApp.PNG";
import CV from "../images/CVApp.PNG";
import Calculator from "../images/AgeClculatorApp.PNG";
import form from "../images/Loginform.PNG";
import notes from "../images/NotesApp.PNG";

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
    projectName: "E-learning website",
    imageLink: ELW,
    github: "https://github.com/PatMun22/E-Learning-website",
    githubIcon: "AiFillGithub",
    live: "https://patmun22.github.io/E-Learning-website/",
    liveLink: "FiExternalLink",
    techStacks: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 2,
    projectName: "React Note App",
    imageLink: notes,
    github: "https://github.com/PatMun22/react-note-app",
    githubIcon: "AiFillGithub",
    live: "https://chinookz-react-notes-app.netlify.app/",
    liveLink: "FiExternalLink",
    techStacks: ["Sass", "React.js"],
  },
  {
    id: 3,
    projectName: "React Cart App",
    imageLink: Cart,
    github: "https://github.com/PatMun22/React-cart-app",
    githubIcon: "AiFillGithub",
    live: "https://first-react-cart-app.netlify.app/",
    liveLink: "FiExternalLink",
    techStacks: ["Bootstrap", "React.js"],
  },
  {
    id: 4,
    projectName: "Login/Registration Form",
    imageLink: form,
    github: "https://github.com/PatMun22/Registration-Login-form-with-JS",
    githubIcon: "AiFillGithub",
    live: "https://registration-login-form-with-js.netlify.app/",
    liveLink: "FiExternalLink",
    techStacks: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 5,
    projectName: "Age Calculator",
    imageLink: Calculator,
    github: "https://github.com/PatMun22/Age-Calculator",
    githubIcon: "AiFillGithub",
    live: "https://patmun22.github.io/Age-Calculator/",
    liveLink: "FiExternalLink",
    techStacks: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 6,
    projectName: "Resume App",
    imageLink: CV,
    github: "https://github.com/PatMun22/CV-using-Sass-and-Js",
    githubIcon: "AiFillGithub",
    live: "https://patmun22.github.io/CV-using-Sass-and-Js/",
    liveLink: "FiExternalLink",
    techStacks: ["HTML5", "Sass", "JavaScript"],
  },
];

export const skills = [
  {
    skillIcon: "AiFillHtml5",
    skillName: "HTML5",
    experienceRating: "",
  },
  {
    skillIcon: "BiLogoCss3",
    skillName: "CSS3",
    experienceRating: "",
  },
  {
    skillIcon: "FaBootstrap",
    skillName: "BOOTSRAP",
    experienceRating: "",
  },
  {
    skillIcon: "SiTailwindcss",
    skillName: "TAILWIND CSS",
    experienceRating: "",
  },
  {
    skillIcon: "DiSass",
    skillName: "SASS",
    experienceRating: "",
  },
  {
    skillIcon: "BiLogoJavascrip",
    skillName: "JAVASCRIPT",
    experienceRating: "",
  },
  {
    skillIcon: "BiLogoJquery",
    skillName: "JQUERY",
    experienceRating: "",
  },
  {
    skillIcon: "BiLogoReact",
    skillName: "REACT.JS",
    experienceRating: "",
  },
];
