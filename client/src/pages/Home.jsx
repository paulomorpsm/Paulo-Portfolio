import React from "react";
import profileImage from "../assets/images/profile.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { checkPostLength } from "../components/PostUtils";

import firstYearAtWork from "../assets/images/First_Year_At_Work.jpg";
import ProgrammingSkills from "../assets/images/Programming_Skills.jpg";
import strategySkills from "../assets/images/Strategy_Skills.jpg";

function Home() {
  const recentPostMessage =
    "In my first year of working life, I learned how to develop a website. I forced myself to learn the basic fundamentals of website development in just one week in order to keep up with my colleagues' skills. As an intern, I also learned how to collaborate with other colleagues in terms of teamwork. After three months of interning, the company absorbed me, and I became an Associate Software Engineer. Being in this role for four months wasn't easy due to heavy workloads, school outings, and graduation practice. However, my determination to grow in this career path drove me to work and study diligently. After transitioning from Associate Software Engineer to Junior Software Engineer, I'm excited to continue my journey and pursue my passion with your company as a Software Engineer. I'm confident that my skills are at a Junior to Mid level. If given the opportunity to join your company, I'll use the vast knowledge I've gathered from my education and work experience over the years.";

  const recentSkillsMessage = `During my first year of college, I lacked enthusiasm for coding and didn't find it interesting. However, circumstances changed when the pandemic hit, leaving me with limited options to switch courses. Hesitantly, I continued with my BSIT program. Recognizing the outdated learning materials provided by my school, I took it upon myself to enhance my logical thinking, creativity, and problem-solving skills through online resources. As a result, my coding skills saw significant improvement. I embarked on various mini projects, such as creating a rock-paper-scissors game, a Unity top-down game, POS systems, and checklist systems. During my OJT at Project-Alpha Marketing Inc, I delved into the fundamentals of website development, learning both front-end and back-end coding using HTML, PHP, and Javascript. Additionally, I familiarized myself with CSS libraries like Bootstrap and Tailwind for front-end development. I also MVC framework for code readability and maintainability. I also gained proficiency in jQuery and AJAX for JavaScript. Currently, I am expanding my expertise by exploring technologies like React, Next.js, Express, and MongoDB for self-growth and to broaden my knowledge in web programming. Additionally, I possess skills in creating assets such as logos and icons using Adobe Illustrator and Adobe Photoshop. As a talented artist, I can sketch basic portraits, anime, objects, and people. I pride myself on being a hardworking individual; when faced with something unfamiliar, I push myself to learn and understand it.`;

  const workingStrategyMessage = `My approach to achieving the company's goals on time is very simple, Firstly, I prioritize collaboration with colleagues to efficiently complete tasks. When faced with challenges, I always aim to solve problems independently first. If there's something I'm unsure about, I'll ask for help, but I make it a point to try and fix it on my own first, seeing it as a challenge. 
The second approach revolves around staying focused on tasks, which helps in swift completion and allows extra time for testing. Lastly, self-discipline is essential for implementing the first two strategies effectively. These methods have consistently proven beneficial in my career.  -PS. i always think outside the box and getting out of my comfort zone to improve those three strategies. `;

  const {
    shortMessage: shortPostMessage,
    fullMessage: fullPostMessage,
    isShortened: isPostShortened,
  } = checkPostLength(recentPostMessage, 30);
  const {
    shortMessage: shortSkillsMessage,
    fullMessage: fullSkillsMessage,
    isShortened: isSkillsShortened,
  } = checkPostLength(recentSkillsMessage, 30);
  const {
    shortMessage: shortWorkingStratMessage,
    fullMessage: fullStratMessage,
    isShortened: isStartShortened,
  } = checkPostLength(workingStrategyMessage, 30);

  const [showFullPostMessage, setShowFullPostMessage] = React.useState(false);
  const [showFullSkillsMessage, setShowFullSkillsMessage] =
    React.useState(false);
  const [showFullStratMessae, setShowFullStratMessage] = React.useState(false);

  return (
    <div className="px-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <img
          src={profileImage}
          alt=""
          className="w-44 h-44 rounded-full object-cover mx-auto md:mr-8 mb-4 md:mb-0 ig-gradient"
        />
        <div>
          <p className="color-click-content font-helvetica text-4xl font-bold text-left md:text-left">
            Hi, I'm Paulo. I'm a Junior Software Engineer and a Dreamer
          </p>
        </div>
      </div>
      <nav className="color-click-content font-helvetica text-2xl font-medium mt-7 flex flex-col md:flex-row md:justify-start">
        <a
          href="https://www.facebook.com/june.tala.5"
          target="_blank"
          className="ml-0 flex items-center justify-start transition-colors duration-300 ease-in-out hover:text-blue-500"
        >
          <FaFacebookSquare className="mr-2" />
          Facebook
        </a>
        <a
          href="https://www.instagram.com/paulomorphism/"
          target="_blank"
          className="ml-0 md:ml-3 flex items-center justify-start transition-colors duration-300 ease-in-out hover:text-fuchsia-400"
        >
          <AiFillInstagram className="mr-2" />
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/paulo-garcia-18322a250/"
          target="_blank"
          className="ml-0 md:ml-3 flex items-center justify-start transition-colors duration-300 ease-in-out hover:text-blue-400"
        >
          <FaLinkedin className="mr-2" />
          LinkedIn
        </a>
        <a
          href=""
          className="ml-0 md:ml-3 flex items-center justify-start transition-colors duration-300 ease-in-out hover:text-gray-700"
        >
          <FaGithub className="mr-2" />
          Github
        </a>
      </nav>
      <p className="color-click-content font-roboto text-1xl font-bold mt-10 mb-1">
        Recent Post
      </p>
      <section className="mb-10">
        <p className="color-click-content text-2xl font-helvetica">
          💼 My first 365 days of working life
        </p>
        <p className="font-helvetica text-[15px] text-gray-400 font-semibold">
          Feb 29, 2024 • 7 days • Life
        </p>
        <img
          className="max-w-full h-auto px-16 bg-black"
          src={firstYearAtWork}
          alt="First Year at Work"
        />
        <p className="text-gray-300 text-[15px]">
          {showFullPostMessage ? fullPostMessage : shortPostMessage}{" "}
          {isPostShortened && (
            <button
              className="text-blue-500"
              onClick={() => setShowFullPostMessage(!showFullPostMessage)}
            >
              {showFullPostMessage ? "see less" : "see more..."}
            </button>
          )}
        </p>
      </section>
      <section className="mb-10">
        <p className="color-click-content text-2xl font-helvetica">
          💡 My programming and other skills
        </p>
        <p className="font-helvetica text-[15px] text-gray-400 font-semibold">
          mar 1, 2024 • 6 min • Work
        </p>
        <img
          className="min-w-full h-auto px-16 bg-black"
          src={ProgrammingSkills}
          alt="First Year at Work"
        />
        <p className="text-gray-300 text-[15px]">
          {showFullSkillsMessage ? fullSkillsMessage : shortSkillsMessage}{" "}
          {isSkillsShortened && (
            <button
              className="text-blue-500"
              onClick={() => setShowFullSkillsMessage(!showFullSkillsMessage)}
            >
              {showFullSkillsMessage ? "see less" : "see more..."}
            </button>
          )}
        </p>
      </section>
      <section className="mb-10">
        <p className="color-click-content text-2xl font-helvetica">
          👨🏻‍💻 My working strategy!
        </p>
        <p className="font-helvetica text-[15px] text-gray-400 font-semibold">
          Mar 7, 2024 • 52 min • Work
        </p>
        <img
          className="min-w-full h-auto px-16 bg-black"
          src={strategySkills}
          alt="First Year at Work"
        />
        <p className="text-gray-300 text-[15px]">
          {showFullStratMessae ? fullStratMessage : shortWorkingStratMessage}{" "}
          {isStartShortened && (
            <button
              className="text-blue-500"
              onClick={() => setShowFullStratMessage(!showFullStratMessae)}
            >
              {showFullStratMessae ? "see less" : "see more..."}
            </button>
          )}
        </p>
      </section>
    </div>
  );
}

export default Home;
