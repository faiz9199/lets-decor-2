"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { FaFacebookSquare, FaInstagram, FaSearch } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="flex flex-col">
      <div className="border border-b-slate-200 p-2">
        <p className="text-xs">example@gmail.com | +91 91XXXXXXX</p>
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="hidden md:flex items-center gap-4">
          <FaFacebookSquare size={20} color="#F59CB4" />
          <CgMail size={26} color="#F59CB4" />
          <FaInstagram size={20} color="#F59CB4" />
        </div>
        <div>
          <Link href="/">
            <Image src={logo} width={100} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:block">
          <FaSearch size={20} color="#F59CB4" />
        </div>
        <div className="md:hidden p-2 z-20" onClick={toggleMenu}>
          {isMenuOpen ? (
            <MdClose
              size={35}
              color="#F59CB4"
              className="bg-slate-300 p-1 rounded-full"
            />
          ) : (
            <FiMenu size={25} color="#F59CB4" />
          )}
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="flex bg-sky-200 p-4 items-center gap-12 justify-center">
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <a href="/">Services</a>
          </li>
          <li className="nav-item">
            <a href="/">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="/">Lets Talk</a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed z-10 top-0 right-0 h-full w-64 bg-slate-100 p-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 mt-12 font-semibold">
          <li className="uppercase border-b border-gray-200 pb-2" onClick={closeMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className="uppercase border-b border-gray-200 pb-2" onClick={closeMenu}>
            <Link href="/about">About Us</Link>
          </li>
          <li className="uppercase border-b border-gray-200 pb-2" onClick={closeMenu}>
            <a href="/">Services</a>
          </li>
          <li className="uppercase border-b border-gray-200 pb-2" onClick={closeMenu}>
            <a href="/">Pricing</a>
          </li>
          <li className="uppercase border-b border-gray-200 pb-2" onClick={closeMenu}>
            <a href="/">Lets Talk</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
