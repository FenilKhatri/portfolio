"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";
import logoDark from "@/public/logo_dark.png";
import NavLinks from "@/constants/links";
import { useState, useEffect } from "react";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleTheme } from "@/store/features/themeSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full flex justify-center sticky top-0 z-50 border-b border-b-slate-500 bg-background/30 backdrop-blur-lg">
      <nav className="w-full max-w-400 mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            width={70}
            height={70}
            alt="Logo"
            className="dark:hidden"
          />

          <Image
            src={logoDark}
            width={70}
            height={70}
            alt="Logo"
            className="hidden dark:block"
          />
        </Link>

        {/* desktop links */}
        <div className="font-code hidden md:flex items-center gap-8">
          {NavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={link.href}
              className="text-lg text-black dark:text-white hover:text-orange-500 dark:hover:text-emerald-500 transition-colors tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {mounted && (
            <button onClick={() => dispatch(toggleTheme())} className="text-black dark:text-white hover:text-orange-500 dark:hover:text-emerald-500 cursor-pointer">
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          )}

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile navLinks */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full border-b border-slate-500 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col py-4">
              {NavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-6 py-3 hover:text-emerald-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
