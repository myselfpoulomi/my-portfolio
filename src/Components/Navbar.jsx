import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Sun, Moon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-white/80 dark:bg-[#161513]/90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-6">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold theme-gradient-text">
          {"<Poulomi/>"}
        </div>

        {/* Mobile Controls: Theme toggle + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            aria-pressed={isDark}
            className="relative w-14 h-8 rounded-full bg-neutral-200 dark:bg-zinc-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
          >
            <span
              className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white dark:bg-black transition-transform duration-300 shadow-sm flex items-center justify-center ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
            >
              {isDark ? (
                <Moon size={16} className="text-neutral-200" />
              ) : (
                <Sun size={16} className="text-neutral-800" />
              )}
            </span>
          </button>
          <button
            className="block md:hidden text-neutral-800 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links (Hidden in Mobile, Visible in Desktop) */}
        <ul className="hidden md:flex list-none justify-evenly space-x-6">
          {["home", "about", "techs", "portfolio", "contact"].map((item) => (
            <li key={item} className="relative cursor-pointer">
              <Link
                to={item}
                smooth={true}
                duration={800}
                className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:left-0 after:bottom-[-2px] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:[background-image:linear-gradient(90deg,var(--color-primary-muted),var(--color-primary),var(--color-primary-dark))]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle + Button (Desktop Only) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            aria-pressed={isDark}
            className="relative w-14 h-8 rounded-full bg-neutral-200 dark:bg-zinc-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
          >
            <span
              className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white dark:bg-black transition-transform duration-300 shadow-sm flex items-center justify-center ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
            >
              {isDark ? (
                <Moon size={16} className="text-neutral-200" />
              ) : (
                <Sun size={16} className="text-neutral-800" />
              )}
            </span>
          </button>
          <Link to="contact" smooth={true} duration={800}>
            <button className="rounded-xl py-2 px-6 transition-transform transform hover:scale-105 duration-200 ease-linear theme-gradient-bg text-white">
              Connect With Me
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Visible when Open) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white/90 dark:bg-[#111110]/80">
          {["home", "about", "techs", "portfolio", "contact"].map((item) => (
            <li key={item} className="cursor-pointer text-lg">
              <Link
                to={item}
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-lg after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:[background-image:linear-gradient(90deg,var(--color-primary-muted),var(--color-primary),var(--color-primary-dark))]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
          
          <Link to="contact" smooth={true} duration={800} onClick={() => setIsOpen(false)}>
            <button className="theme-gradient-bg text-white rounded-xl p-2 px-6">
              Connect With Me
            </button>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
