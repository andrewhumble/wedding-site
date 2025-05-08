"use client"

import { useState, useEffect } from "react";
import { Burger } from '@mantine/core';
import { Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import Button from '@/ui/Button';
import NavItem from "@/components/NavItem";
import TheHumblesLogo from "./TheHumblesLogo";
import { useMediaQuery } from "@mantine/hooks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 250);
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

  // Handle navigation
  const handleNavigation = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function getButtonClassName(isScrolled: boolean, menuOpen: boolean): string {
    const baseClasses = 'relative top-[1px] font-serif-bold text-md px-4 py-2 flex items-center justify-center';
    const scrolledClasses = 'bg-stone-800 text-white hover:bg-[#4a2d33] hover:text-white';
    const defaultClasses = 'bg-secondary text-stone-800 hover:bg-slate-50 hover:text-[#3d232a]';
    const mdClasses = 'md:bg-secondary md:text-stone-800 md:hover:hover:bg-slate-50 md:hover:text-[#3d232a]';

    if (isScrolled) {
      return menuOpen
        ? `${baseClasses} ${scrolledClasses} ${mdClasses}`
        : `${baseClasses} ${scrolledClasses}`;
    }

    return menuOpen
      ? `${baseClasses} ${scrolledClasses} ${mdClasses}`
      : `${baseClasses} ${defaultClasses}`;
  }

  const getLogoOpacity = () => {
    if (isMobile) {
      return isScrolled || menuOpen ? 1 : 0;
    } else {
      return isScrolled && !menuOpen ? 1 : 0;
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 flex justify-between items-center py-4 px-6 transition-colors duration-400 ${isScrolled && !menuOpen ? 'bg-secondary' : 'bg-transparent'}`}>
        {/* Menu Button */}
        <Burger
          opened={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          size="md"
          color={menuOpen || isScrolled ? "#292524" : "white"}
          title="test"
        />

        {/* Logo Container */}
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1">
          <TheHumblesLogo pathOpacity={getLogoOpacity()} height='44px' width='w-36' fill={`${isScrolled || menuOpen ? '#000000' : ''}`} />
        </div>

        {/* RSVP Button - Only show if not on /rsvp page */}
        <Button href="/rsvp" className={`${getButtonClassName(isScrolled, menuOpen)} ${pathname === '/rsvp' ? 'hidden' : ''}`}>
          <div className="flex items-center space-x-2 p-0 m-0">
            <span className="text-lg">RSVP</span>
          </div>
        </Button>
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
          <div className="fixed top-0 left-0 w-full h-fit bg-secondary z-40 pt-24 pb-6 px-8 flex flex-col shadow-lg">
            <nav className="flex flex-col gap-2 text-center font-serif text-xl">
              <NavItem href="/" onClick={handleNavigation}>Details</NavItem>
              <div className="border-t border-gray-300 w-full"></div>
              <NavItem href="/registry" onClick={handleNavigation}>Registry</NavItem>
              <div className="border-t border-gray-300 w-full"></div>
              <NavItem href="/gallery" onClick={handleNavigation}>Gallery</NavItem>
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
          <div className="fixed top-0 left-0 w-1/5 h-full bg-secondary z-40 pt-22 pb-6 px-8 flex flex-col shadow-lg">
            <nav className="flex flex-col gap-2 text-center font-serif text-xl">
              <NavItem showActive={true} href="/" onClick={handleNavigation}>Details</NavItem>
              <div className="border-t border-gray-300 w-full"></div>
              <NavItem showActive={true} href="/registry" onClick={handleNavigation}>Registry</NavItem>
              <div className="border-t border-gray-300 w-full"></div>
              <NavItem showActive={true} href="/gallery" onClick={handleNavigation}>Gallery</NavItem>
            </nav>
          </div>
        </Transition>
      </div>
    </>
  );
}