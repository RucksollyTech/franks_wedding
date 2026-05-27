"use client";

import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const links = ["Home", "Our Story", "Invitation", "Timeline", "RSVP", "Details", "FAQ", "Contact"];

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#FFF8EF]/55 backdrop-blur border-b border-[#e6d2a6]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <img
            className="w-20"
        //     {/* Image
        // width={24}
        // height={24}  */}
        src="/images/logo.png" alt="Sf" />

        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
          {links.map((link) => (
            <a key={link} className="hover:text-[#A1742D]" href={`#${link.toLowerCase().replaceAll(" ", "-")}`}>
              {link}
            </a>
          ))}
        </div>

        <button className="md:hidden text-[#c9963e]">
          <Menu />
        </button>
      </div>
    </nav>
  );
}