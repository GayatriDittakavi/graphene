"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconCode, IconHome, IconPackage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "#about",
      icon: <IconUser className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <IconPackage className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Technology",
      link: "#technology",
      icon: <IconCode className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },

  ];
  return (
    (<div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>)
  );
}
