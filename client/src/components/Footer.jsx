import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className=" px-4  flex justify-between items-center mt-32"
      style={{
        maxWidth: "47.5rem",
      }}
    >
      <a href="#">
        <p className="font-helvetica font-semibold text-1xl color-click-content hover:text-blue-400 transition-colors duration-300 ease-in-out">
          Paulo Garcia
        </p>
      </a>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com/june.tala.5"
          target="_blank"
          className="text-gray-300 hover:text-blue-500"
        >
          <FaFacebookSquare className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/paulomorphism/"
          target="_blank"
          className="text-gray-300 hover:text-purple-500"
        >
          <FaInstagram className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/paulo-garcia-18322a250/"
          target="_blank"
          className="text-gray-300 hover:text-blue-700"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/paulomorpsm"
          target="_blank"
          className="text-gray-300 hover:text-gray-600"
        >
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
