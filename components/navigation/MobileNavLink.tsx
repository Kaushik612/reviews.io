"use client";
import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { mobileLinkVars } from "../motion/variants";

interface IProps {
  href: string;
  title: string;
}

const MobileNavLink = ({ href, title }: IProps) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-primary"
    >
      <Link
        className="font-bold hover:text-gray-400 transition ease-in"
        href={href}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default MobileNavLink;
