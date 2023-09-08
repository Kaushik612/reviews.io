"use client";
import Link from "next/link";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";

interface IProps {
  isScrolling: boolean;
}

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const NavbarScroll = ({ isScrolling }: IProps) => {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="hidden md:flex fixed bg-secondary text-primary z-10 justify-between px-8 py-2 rounded-full left-1/2 top-10"
    >
      {/* Center Nav Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className="font-bold text-xl md:text-2xl hover:text-gray-400 transition ease-in"
              href={link.href}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

export default NavbarScroll;
