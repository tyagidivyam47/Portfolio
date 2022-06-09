import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white">
      <div>
        <img src={logo} alt="logo" style={{ width: "120px" }} />
      </div>

      <span className="grow" />

      <div className="mr-2">
        <ul className="hidden md:flex space-x-8 font-mono text-lg ">
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:hidden cursor-pointer" onClick={handleNav}>
        <FaBars />
      </div>

      {nav && (
        <div>
          <ul className="md:hidden absolute left-0 top-20 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center ">
            <li className="space-y-4 py-3 text-2xl cursor-pointer hover:text-orange-500">
              Home
            </li>
            <li className="space-y-4 py-3 text-2xl cursor-pointer hover:text-orange-500">
              About
            </li>
            <li className="space-y-4 py-3 text-2xl cursor-pointer hover:text-orange-500">
              Skills
            </li>
            <li className="space-y-4 py-3 text-2xl cursor-pointer hover:text-orange-500">
              Work
            </li>
            <li className="space-y-4 py-3 text-2xl cursor-pointer hover:text-orange-500">
              Contact
            </li>
          </ul>
        </div>
      )}

      <div className="hidden md:flex flex-col fixed top-[35%] left-0">
        <ul className="space-y-6">
          <li className="flex">
            <a
              href="https://www.linkedin.com/in/divyam-tyagi-546311202/"
              target="_blank"
              className="text-blue-500 flex text-lg px-2 ml-[-68px]  hover:ml-[1px] duration-300"
            >
              <p>Linkidin</p>
              <FaLinkedin size={28} />
            </a>
          </li>

          <li className="flex">
            <a
              href="https://github.com/tyagidivyam47"
              className="text-white flex text-lg px-2 ml-[-62px]  hover:ml-[1px] duration-300"
              target="_blank"
            >
              Github
              <FaGithub size={28} className="pl-1" />
            </a>
          </li>

          <li className="flex">
            <a
              href="mailto:tyagidivyam47@gmail.com"
              className="text-red-500 flex text-lg px-2 ml-[-42px]  hover:ml-[1px] duration-300"
              target="_blank"
            >
              Mail
              <HiOutlineMail size={28} />
            </a>
          </li>

          <li className="flex">
            <a
              href="/"
              className="text-green-500 flex text-lg px-2 ml-[-70px]  hover:ml-[1px] duration-300"
              target="_blank"
            >
              Resume
              <BsFillPersonLinesFill size={28} className="pl-1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
