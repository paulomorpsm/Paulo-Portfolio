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
      <p className="font-helvetica font-semibold text-1xl color-click-content">
        Paulo Garcia
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-300 hover:text-blue-500">
          <FaFacebookSquare className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-300 hover:text-purple-500">
          <FaInstagram className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-300 hover:text-blue-700">
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-300 hover:text-gray-600">
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
