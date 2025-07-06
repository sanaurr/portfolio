"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const Nav = ({
  darkTheme,
  isMounted,
  activeSection,
  scrollToSection,
  toggleTheme,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => (
  <nav
    className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg py-4 px-6 md:px-12 ${
      !darkTheme ? "bg-white/80" : "bg-gray-950/80"
    }`}
  >
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      {/* Logo/Brand Name */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-2xl font-bold ${
          !darkTheme ? "text-purple-600" : "text-purple-400"
        } cursor-pointer`}
        onClick={() => scrollToSection("home")}
      >
        &lt;Dev /&gt;
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <motion.button
            key={section}
            className={`relative text-lg font-medium hover:text-purple-700 transition-colors duration-300 ${
              !darkTheme ? "" : "dark:hover:text-purple-300 dark:text-gray-300"
            }
            ${
              activeSection === section
                ? "text-purple-600 after:scale-x-100 "
                : "text-gray-700"
            }
            after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-purple-600 dark:after:bg-purple-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300`}
            onClick={() => scrollToSection(section)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
        {/* Theme Toggle Button (Desktop) */}
        <motion.button
          onClick={toggleTheme}
          className="text-gray-700 hover:text-purple-700 focus:outline-none dark:text-gray-300 dark:hover:text-purple-400 ml-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Conditionally render icon based on theme, but only after mounted */}
          {isMounted && (darkTheme ? <Sun size={24} /> : <Moon size={24} />)}
          {!isMounted && <Moon size={24} />}{" "}
          {/* Default icon for server render */}
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        {/* Theme Toggle Button (Mobile) */}
        <motion.button
          onClick={toggleTheme}
          className="text-gray-700 hover:text-purple-700 focus:outline-none dark:text-gray-300 dark:hover:text-purple-400 mr-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Conditionally render icon based on theme, but only after mounted */}
          {isMounted && (darkTheme ? <Sun size={24} /> : <Moon size={24} />)}
          {!isMounted && <Moon size={24} />}{" "}
          {/* Default icon for server render */}
        </motion.button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-purple-700 focus:outline-none dark:text-gray-300 dark:hover:text-purple-400"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-gray-100/95 backdrop-blur-md py-4 shadow-lg dark:bg-gray-900/95"
        >
          <div className="flex flex-col items-center space-y-4">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  className={`text-xl font-medium py-2 w-full text-center hover:bg-gray-200 transition-colors duration-300 dark:hover:bg-gray-800
                ${
                  activeSection === section
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
);

export default Nav;
