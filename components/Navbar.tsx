"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "Our Story",
    "Invitation",
    "Timeline",
    "RSVP",
    "Details",
    "Contact",
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#FFF8EF]/55 backdrop-blur border-b border-[#e6d2a6]">
        <div className="mx-auto flex max-w-7xl items-center justify-between md:px-6 px-4 py-2">
          <img className="md:w-20 w-12" src="/images/logo.png" alt="Sf" />
          <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
            {links.map((link) => (
              <a
                key={link}
                className="hover:text-[#A1742D]"
                href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              >
                {link}
              </a>
            ))}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#c9963e]"
          >
            <Menu />
          </button>
        </div>
      </nav>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-[#FFF8EF] shadow-xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#e6d2a6] px-6 py-4">
          <img className="w-16" src="/images/logo.png" alt="Sf" />

          <button onClick={() => setOpen(false)} className="text-[#c9963e]">
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-8 text-sm font-semibold uppercase tracking-widest">
          {links.map((link) => (
            <a
              key={link}
              onClick={() => setOpen(false)}
              className="hover:text-[#A1742D]"
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}