"use client"

import { useState, useEffect } from "react";
import { Burger } from '@mantine/core';
import { Transition } from '@headlessui/react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed w-full z-50 flex justify-between items-center py-6 px-6 transition-colors duration-400 ${isScrolled && !menuOpen ? 'bg-[#FAF5F1]' : 'bg-transparent'}`}>
        {/* Menu Button */}
        <Burger
          opened={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          size="md"
          color={menuOpen || isScrolled ? "#58373E" : "#FAF5F1"}
          title="test"
        />

        {/* RSVP Button */}
        <button
          className={`
            font-sans-bold px-4 pt-2 pb-1 rounded-sm transition-colors duration-500 focus:outline-none shadow-md cursor-pointer pointer-events-auto
            ${menuOpen || isScrolled
              ? 'bg-[#58373E] text-[#FAF5F1] hover:bg-[#4a2d33] hover:text-white'
              : 'bg-[#FAF5F1] text-[#58373E] hover:bg-[#e8d8bf] hover:text-[#3d232a]'
            }
            hover:shadow-lg
          `}
          aria-label="RSVP"
        >
          RSVP
        </button>
      </nav>

      <Transition
        show={menuOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      </Transition>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Transition
          show={menuOpen}
          enter="transition ease-out duration-300"
          enterFrom="transform -translate-y-full opacity-0"
          enterTo="transform translate-y-0 opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform translate-y-0 opacity-100"
          leaveTo="transform -translate-y-full opacity-0"
        >
          <div className="fixed top-0 left-0 w-full h-fit bg-[#FAF5F1] z-40 pt-22 pb-6 px-8 flex flex-col shadow-lg">
            <nav className="flex flex-col gap-2 text-center">
              <a href="#" className="text-xl font-sans font-medium text-gray-800 hover:text-[#58373E] transition-colors duration-200">Home</a>
              <div className="border-t border-gray-300 w-full"></div>
              <a href="#" className="text-xl font-sans font-medium text-gray-800 hover:text-[#58373E] transition-colors duration-200">Details</a>
              <div className="border-t border-gray-300 w-full"></div>
              <a href="#" className="text-xl font-sans font-medium text-gray-800 hover:text-[#58373E] transition-colors duration-200">Registry</a>
            </nav>
          </div>
        </Transition>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Transition
          show={menuOpen}
          enter="transition ease-out duration-300"
          enterFrom="transform -translate-x-full opacity-0"
          enterTo="transform translate-x-0 opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform translate-x-0 opacity-100"
          leaveTo="transform -translate-x-full opacity-0"
        >
          <div className="fixed top-0 left-0 w-1/5 h-full bg-[#FAF5F1] z-40 pt-22 pb-6 px-8 flex flex-col shadow-lg">
            <nav className="flex flex-col gap-2 text-center">
              <a href="#" className="text-xl font-sans font-medium text-gray-800 hover:text-[#58373E] transition-colors duration-200">Home</a>
              <div className="border-t border-gray-300 w-full"></div>
              <a href="#" className="text-xl font-sans font-medium text-gray-800 hover:text-[#58373E] transition-colors duration-200">Details</a>
              <div className="border-t border-gray-300 w-full"></div>
              <a href="#" className="text-xl font-sans font-medium text-gray-800 hover:text-[#58373E] transition-colors duration-200">Registry</a>
            </nav>
          </div>
        </Transition>
      </div>
    </>
  );
}