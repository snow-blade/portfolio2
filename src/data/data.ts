import NaLogo from "assets/images/logos/Na.png";
import LLTLogo from "assets/images/logos/LLT.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import postgres from "assets/images/skills/postgresql.png";
import mysql from "assets/images/skills/mysql.png";
import heroku from "assets/images/skills/heroku.png";
import nginx from "assets/images/skills/nginx.png";

export const companies = [
  {
    title: "Nuyu agency",
    alt: "PS image",
    role: "Software Engineer",
    skills: ["python", "flask", "typescript", "javascript", "react", "django"],
    period: "2020 - Present",
    logo: NaLogo
  }
];

export const institutes = [
  {
    short_title: "LLT",
    title: "Lycee Du Lac Tanganyika",
    alt: "LLT image",
    role: "Graduating In Maths-Physics-IT",
    skills: ["MAths", "Physics", "IT and scientific drawing"],
    period: "2015 - 2021",
    startingYear: "2021",
    logo: LLTLogo,
    awards: [
      {
        title: "Genie Du Lac",
        description:
          "Nominated as one of the highest achieving students in both general knowledge and academic achievement",
        date: "April 1, 2021"
      },
      {
        title: "Highest Scorer In Quizzbowl Competition",
        description:
          "I won this prize duing the 'Genies en Herbe' national Quizzbowl competition in which I was the highest scorer during the entire season",
        date: "May 15, 2021"
      },
      {
        title: "Golden Medal During Quizzbowl Competition + National Trophy",
        description:
          "My team and I won the nationnal quizzbowl chamionship hile representing our school: LLT",
        date: "May 15, 2021"
      },
      {
        title: "'Plumes du Lac' runner-up ",
        description: "A poem I wrote was nominated as a runner-up for the 'plumes du lac' poetry competition",
        date: "May 26, 2021"
      }
    ]
  }
];

export const skills = [
  
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku
  },
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginx
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];
