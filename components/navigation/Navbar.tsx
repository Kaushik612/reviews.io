"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { UserButton } from "@clerk/nextjs";

import { Button } from "../ui/button";
import { ModeToggle } from "../theme/theme-toggle";

import { MdRestaurantMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import { motion, AnimatePresence } from "framer-motion";
import { containerVars, menuVars, mobileLinkVars } from "../motion/variants";
import MobileNavLink from "./MobileNavLink";
import NavbarScroll from "./NavbarScroll";

type NavbarProps = {
  userId: string | undefined;
};

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar({ userId }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll isScrolling />
        ) : (
          <header className="sticky top-0 inset-x-0 z-50 bg-secondary w-full flex items-center justify-between h-16 px-4 md:px-0">
            {/* Left Side */}
            <div className="flex">
              <Link href="/">
                <h1 className="block text-3xl md:text-4xl font-bold text-primary">
                  reviews.io
                </h1>
              </Link>
            </div>
            {/* Center Nav Links */}
            <ul className="hidden md:flex md:static items-center gap-8">
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

            {/* Mobile Menu */}

            <AnimatePresence>
              {open && (
                <motion.div
                  variants={menuVars}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="fixed left-0 top-0 w-full h-screen origin-top bg-secondary text-primary p-10"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex justify-between">
                      <AiOutlineClose onClick={toggleMenu} size={30} />

                      <div className="flex gap-2">
                        {!userId ? (
                          <Link href={"/sign-in"} onClick={toggleMenu}>
                            <Button size={"sm"}>Login</Button>
                          </Link>
                        ) : (
                          <Link href={"/create"} onClick={toggleMenu}>
                            <Button size={"sm"}>Create</Button>
                          </Link>
                        )}
                        <ModeToggle />
                        <UserButton afterSignOutUrl="/" />
                      </div>
                    </div>
                    <motion.div
                      variants={containerVars}
                      initial="initial"
                      animate="open"
                      exit="initial"
                      className="flex flex-col h-full justify-center items-center gap-20"
                    >
                      {navLinks.map((link, index) => {
                        return (
                          <div
                            key={index}
                            className="overflow-hidden"
                            onClick={toggleMenu}
                          >
                            <MobileNavLink
                              key={index}
                              title={link.title}
                              href={link.href}
                            />
                          </div>
                        );
                      })}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right Side */}
            <div className="hidden md:flex  items-center">
              {!userId ? (
                <Link href={"/sign-in"}>
                  <Button size={"sm"} className="text-lg">
                    Login
                  </Button>
                </Link>
              ) : (
                <Link href={"/create"}>
                  <Button size={"sm"} className="text-lg">
                    Create
                  </Button>
                </Link>
              )}
              <ModeToggle />
              <UserButton afterSignOutUrl="/" />
            </div>
            <div
              className="flex md:hidden px-4 transition delay-500 ease-out"
              onClick={toggleMenu}
            >
              <MdRestaurantMenu size={30} />
            </div>
          </header>
        )}
      </AnimatePresence>
    </>
  );
}
