"use client"; // Ensure this file is treated as a client component in Next.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code,
  Monitor,
  Smartphone,
  Briefcase,
  User,
  Award,
  MessageSquare,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react"; // Importing icons from lucide-react, including Sun and Moon for theme toggle
import Nav from "./components/nav";
import Image from "next/image";

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [darkTheme, setDarkTheme] = useState(true);
  const [isMounted, setIsMounted] = useState(false); // To track if the component has mounted on the client

  useEffect(() => {
    setIsMounted(true); // Mark component as mounted
    const savedDarkTheme = localStorage.getItem("darkModeTheme");
    if (savedDarkTheme !== null) {
      setDarkTheme(savedDarkTheme);
    }
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    setDarkTheme((darkTheme) => !darkTheme);
    localStorage.setItem("darkModeTheme", darkTheme);
  };

  // Function to handle smooth scrolling (simulated navigation)
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    // In a real Next.js app, you'd use Link or router.push here.
    // For this immersive, we just change the active section state.
  };

  // Variants for section transitions
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    // Apply theme-dependent background and text colors to the root div
    <div
      className={`min-h-screen ${
        !darkTheme ? "bg-gray-50 text-gray-900" : "bg-gray-950 text-gray-100"
      } font-inter antialiased`}
    >
      {/* Navbar */}

      <Nav
        darkTheme={darkTheme}
        isMounted={isMounted}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content Area */}
      <main className="pt-24">
        {/* Padding top to account for fixed navbar */}
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.section
              key="home"
              id="home"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`min-h-[calc(100vh-6rem)] flex items-center justify-center text-center px-4 py-16 relative overflow-hidden  ${
                !darkTheme ? "bg-gray-50 dark" : "bg-gray-950"
              }`}
            >
              {/* Background Gradient/Shapes */}
              <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto">
                <motion.h1
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 ${
                    !darkTheme ? "text-gray-900" : "dark:text-gray-50"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  Hi, I&apos;m{" "}
                  <span
                    className={`${
                      !darkTheme ? "text-purple-600" : "dark:text-purple-400"
                    }`}
                  >
                    Sanaur Rahaman
                  </span>
                </motion.h1>

                {/* Typewriter Effect */}
                <TypewriterText
                  text="A Passionate Fullstack Web & Mobile App Developer."
                  className={`text-xl sm:text-2xl md:text-3xl ${
                    !darkTheme ? "text-gray-700" : "dark:text-gray-300"
                  } mb-8 font-mono tracking-wide`}
                />

                <motion.p
                  className={`text-lg sm:text-xl ${
                    !darkTheme ? "text-gray-600" : "dark:text-gray-400"
                  } mb-10 max-w-2xl mx-auto`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.7 }}
                >
                  Crafting robust and intuitive digital experiences with a
                  strong focus on problem-solving and clean code.
                </motion.p>

                <motion.button
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 text-lg"
                  onClick={() => scrollToSection("projects")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8, duration: 0.7 }}
                >
                  View My Work{" "}
                  <ChevronRight className="inline-block ml-2" size={20} />
                </motion.button>
              </div>
            </motion.section>
          )}

          {activeSection === "about" && (
            <motion.section
              key="about"
              id="about"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`min-h-[calc(100vh-6rem)] flex items-center py-16 px-4 sm:px-8 md:px-12 ${
                !darkTheme ? "bg-gray-100" : "dark:bg-gray-900"
              }`}
            >
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* About Text */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h2
                    className={`text-4xl font-bold mb-6 flex items-center ${
                      !darkTheme ? "text-purple-600" : "dark:text-purple-400"
                    }`}
                  >
                    <User size={36} className="mr-3" /> About Me
                  </h2>
                  <p
                    className={`text-lg leading-relaxed mb-4 ${
                      !darkTheme ? "text-gray-700" : "dark:text-gray-300"
                    }`}
                  >
                    Hello! I&apos;m Sanaur Rahaman, a passionate fullstack web
                    and mobile app developer with a knack for turning complex
                    problems into elegant, user-friendly solutions. My journey
                    in programming began with a curiosity for how things work,
                    and it quickly evolved into a dedication to building
                    impactful digital products.
                  </p>
                  <p
                    className={`text-lg leading-relaxed mb-4 ${
                      !darkTheme ? "text-gray-700" : "dark:text-gray-300"
                    }`}
                  >
                    With a strong foundation in both front-end and back-end
                    technologies, I thrive on creating seamless and efficient
                    applications. I&apos;m always eager to learn new
                    technologies and embrace best practices to deliver
                    high-quality, scalable, and maintainable code.
                  </p>
                  <p
                    className={`text-lg leading-relaxed ${
                      !darkTheme ? "text-gray-700" : "dark:text-gray-300"
                    } `}
                  >
                    When I&apos;m not coding, you can find me exploring new tech
                    trends, contributing to open source, or enjoying a good
                    book. I believe in continuous growth and the power of
                    technology to make a positive difference.
                  </p>
                </motion.div>

                {/* About Image/Graphic */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="flex justify-center items-center"
                >
                  <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-2">
                    <Image
                      src="/image/me.jpg"
                      width={400}
                      height={400}
                      alt="Developer Portrait"
                      className="w-full h-full object-cover rounded-full transform scale-105 hover:scale-100 transition-transform duration-500"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-purple-400 border-opacity-50"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === "skills" && (
            <motion.section
              key="skills"
              id="skills"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`min-h-[calc(100vh-6rem)] py-16 px-4 sm:px-8 md:px-12 ${
                !darkTheme ? "bg-gray-50" : "dark:bg-gray-950"
              } `}
            >
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  className={`text-4xl font-bold mb-12 text-center flex items-center justify-center ${
                    !darkTheme ? "text-purple-600" : "dark:text-purple-400"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award size={36} className="mr-3" /> My Skills
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                  {/* Frontend Skills */}
                  <SkillCard
                    darkTheme={darkTheme}
                    title="Frontend Development"
                    description="Building engaging and responsive user interfaces."
                    icon={
                      <Monitor
                        size={48}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    }
                    skills={[
                      "React.js",
                      "Next.js",
                      "Tailwind CSS",
                      "JavaScript",
                      "HTML5",
                      "CSS3",
                    ]}
                  />
                  {/* Backend Skills */}
                  <SkillCard
                    darkTheme={darkTheme}
                    title="Backend Development"
                    description="Crafting robust and scalable server-side applications."
                    icon={
                      <Code
                        size={48}
                        className={`${
                          !darkTheme ? "text-green-600" : "dark:text-green-400"
                        }`}
                      />
                    }
                    skills={[
                      "Node.js",
                      "Express.js",
                      "Python",
                      "Django",
                      "MongoDB",
                      "PostgreSQL",
                      "Firebase",
                    ]}
                  />
                  {/* Mobile Development */}
                  <SkillCard
                    darkTheme={darkTheme}
                    title="Mobile Development"
                    description="Developing native and cross-platform mobile applications."
                    icon={
                      <Smartphone
                        size={48}
                        className={`${
                          !darkTheme ? "text-pink-600" : "dark:text-pink-400"
                        }`}
                      />
                    }
                    skills={[
                      "React Native",
                      "Java",
                      "Flutter",
                      "Kotlin (Android)",
                    ]}
                  />
                  {/* Tools & Technologies */}
                  <SkillCard
                    darkTheme={darkTheme}
                    title="Tools & Technologies"
                    description="Proficient with essential development tools and platforms."
                    icon={
                      <Briefcase
                        size={48}
                        className={`${
                          !darkTheme
                            ? "text-yellow-600"
                            : "dark:text-yellow-400"
                        }`}
                      />
                    }
                    skills={[
                      "Git",
                      "Docker",
                      "AWS",
                      "Netlify",
                      "Vercel",
                      "Render",
                      "Figma",
                    ]}
                  />
                  {/* Problem Solving */}
                  <SkillCard
                    title="Problem Solving"
                    darkTheme={darkTheme}
                    description="Analytical approach to complex challenges and debugging."
                    icon={
                      <MessageSquare
                        size={48}
                        className={`${
                          !darkTheme ? "text-red-600" : "dark:text-red-400"
                        }`}
                      />
                    }
                    skills={[
                      "Algorithms",
                      "Data Structures",
                      "System Design",
                      "Debugging",
                      "Optimization",
                    ]}
                  />
                  {/* UI/UX Design */}
                  <SkillCard
                    title="UI/UX Design Principles"
                    description="Understanding user-centered design for intuitive experiences."
                    icon={
                      <Monitor
                        size={48}
                        className={`${
                          !darkTheme ? "text-teal-600" : "dark:text-teal-400"
                        }`}
                      />
                    }
                    skills={[
                      "Figma",
                      "Wireframing",
                      "Prototyping",
                      "User Research",
                      "Usability Testing",
                    ]}
                    darkTheme={darkTheme}
                  />
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "projects" && (
            <motion.section
              key="projects"
              id="projects"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`min-h-[calc(100vh-6rem)] py-16 px-4 sm:px-8 md:px-12 ${
                !darkTheme ? "bg-gray-100" : "dark:bg-gray-900"
              }`}
            >
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  className={`text-4xl font-bold  mb-12 text-center flex items-center justify-center ${
                    !darkTheme ? "text-purple-600" : "dark:text-purple-400"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Briefcase size={36} className="mr-3" /> My Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Project 1 */}
                  <ProjectCard
                    title="ZeCommerce"
                    darkTheme={darkTheme}
                    description="A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration."
                    imageUrl="/image/zecommerce.png"
                    technologies={[
                      "Next.js",
                      "Tailwind CSS",
                      "Framer Motion",
                      "Nest.js",
                      "Node.js",
                      "MongoDB",
                      "GRPC",
                    ]}
                    githubLink="#"
                    liveLink="#"
                  />
                  {/* Project 2 */}
                  <ProjectCard
                    title="Note App"
                    darkTheme={darkTheme}
                    description="A responsive Note & Todo application with drag-and-drop functionality, real-time updates, and user collaboration features."
                    imageUrl="/image/noteapp.png"
                    technologies={["React", "Firebase", "CSS3", "JavaScript"]}
                    githubLink="#"
                    liveLink="https://noteapp-s1.web.app/"
                  />
                  {/* Project 3 */}
                  <ProjectCard
                    title="Lincwall"
                    darkTheme={darkTheme}
                    description="A cross-platform Social Media mobile application for Students of Lincoln University,Malaysia."
                    imageUrl="/image/lincwall.jpg"
                    technologies={[
                      "Flutter",
                      "Firebase",
                      "Python",
                      "Firebase Storage",
                      "Node.js",
                      "Nest.js",
                      "Cloudinary",
                      "Play-Store",
                    ]}
                    githubLink="#"
                    liveLink="https://play.google.com/store/apps/details?id=com.zero.lincwall"
                  />
                  {/* Project 4 */}
                  <ProjectCard
                    title="ZeCon"
                    darkTheme={darkTheme}
                    description="A modern cross-platform End-to-End encrypted chat application for interacting with your friends, featuring real-time high-quality voice and video calls."
                    imageUrl="/image/zecon.jpg"
                    technologies={[
                      "Nest.js",
                      "Python (Flask)",
                      "WebSockets",
                      "WebRTC",
                      "Cloud Storage",
                      "Sqlite",
                      "Firebase Authentication",
                    ]}
                    githubLink="#"
                    liveLink="#"
                  />
                  {/* Project 5 */}
                  <ProjectCard
                    title="ZeeBlog"
                    darkTheme={darkTheme}
                    description="A sleek, content-focused personal blog for both web and mobile."
                    imageUrl="/image/blogweb.png"
                    technologies={[
                      "Node.js",
                      "Firebase Storage",
                      "express js",
                      "Next.js",
                      "Flutter",
                      "Jwt",
                    ]}
                    githubLink="#"
                    liveLink="https://blog-web-azure.vercel.app/"
                  />
                  {/* Project 6 */}
                  <ProjectCard
                    title="ZeProperties"
                    darkTheme={darkTheme}
                    description="A real-estate property management application allowing categization of properties depending on their interest."
                    imageUrl="/image/zeproperties.png"
                    technologies={[
                      "Next.js",
                      "Tailwind CSS",
                      "PostgreSQL",
                      "Node.js",
                      "Directus",
                      "Vercel",
                    ]}
                    githubLink="#"
                    liveLink="https://zeproperties.vercel.app/"
                  />
                  <ProjectCard
                    title="Buraq-Oil"
                    darkTheme={darkTheme}
                    description="A tanker management and tracking application for Buraq Oil(Oil distributor company), featuring real-time tracking and management of oil tankers."
                    imageUrl="/image/buraqoil.png"
                    technologies={[
                      "Flutter",
                      "Node.js",
                      "Next.js",
                      "Tailwind CSS",
                      "PostgreSQL",
                      "Firebase Authentication",
                      "FIREBASE STORAGE",
                      "Play-Store",
                    ]}
                    githubLink="#"
                    liveLink="#"
                  />
                  <ProjectCard
                    title="OASSTS"
                    darkTheme={darkTheme}
                    description="Orang Asli School Students Transport System (OASSTS) is a transportation management and tracking application for Government School of Malaysia, featuring real-time tracking and management of school buses."
                    imageUrl="/image/oassts.png"
                    technologies={[
                      "Flutter",
                      "Node.js",
                      "Next.js",
                      "Tailwind CSS",
                      "Firebase Authentication",
                      "FIREBASE STORAGE",
                      "Rfid Reader",
                      "Play-Store",
                    ]}
                    githubLink="#"
                    liveLink="#"
                  />
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "contact" && (
            <motion.section
              key="contact"
              id="contact"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`min-h-[calc(100vh-6rem)] py-16 px-4 sm:px-8 md:px-12 ${
                !darkTheme ? "bg-gray-50" : "dark:bg-gray-950"
              }`}
            >
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  className={`text-4xl font-bold mb-12 text-center flex items-center justify-center ${
                    !darkTheme ? "text-purple-600" : "dark:text-purple-400"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail size={36} className="mr-3" /> Get In Touch
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className={`p-8 rounded-lg shadow-xl border ${
                      !darkTheme
                        ? "border-gray-200 bg-white"
                        : "dark:border-gray-700 dark:bg-gray-800"
                    }`}
                  >
                    <h3
                      className={`text-2xl font-semibold ${
                        !darkTheme ? "text-gray-900" : "dark:text-gray-100"
                      } mb-6`}
                    >
                      Send Me a Message
                    </h3>
                    <form className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className={`block text-sm font-medium mb-2 ${
                            !darkTheme ? "text-gray-700" : "dark:text-gray-300"
                          }`}
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className={`w-full px-4 py-3 rounded-md ${
                            !darkTheme
                              ? "bg-gray-100 text-gray-900 border-gray-300"
                              : "dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                          }  border focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300`}
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className={`block text-sm font-medium mb-2 ${
                            !darkTheme ? "text-gray-700" : "dark:text-gray-300"
                          }`}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`w-full px-4 py-3 rounded-md ${
                            !darkTheme
                              ? "bg-gray-100 text-gray-900 border-gray-300"
                              : "dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                          }  border focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className={`block text-sm font-medium mb-2 ${
                            !darkTheme ? "text-gray-700" : "dark:text-gray-300"
                          }`}
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          className={`w-full px-4 py-3 rounded-md ${
                            !darkTheme
                              ? "bg-gray-100 text-gray-900 border-gray-300"
                              : "dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                          }  border focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 resize-y`}
                          placeholder="Your message here..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 text-lg"
                      >
                        Send Message
                      </button>
                    </form>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className={`${
                      !darkTheme
                        ? "bg-white border-gray-200"
                        : "dark:bg-gray-800 dark:border-gray-700"
                    }p-8 rounded-lg shadow-xl border flex flex-col justify-center items-center text-center`}
                  >
                    <h3
                      className={`text-2xl font-semibold ${
                        !darkTheme ? "text-gray-900" : "dark:text-gray-100"
                      } mb-6`}
                    >
                      Connect With Me
                    </h3>
                    <p
                      className={`text-lg mb-8 ${
                        !darkTheme ? "text-gray-700" : "dark:text-gray-300"
                      }`}
                    >
                      Feel free to reach out through my social channels or
                      email. I&apos;m always open to new opportunities and
                      collaborations!
                    </p>
                    <div className="flex space-x-6">
                      <motion.a
                        href="https://github.com/sanaurr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          !darkTheme
                            ? "text-gray-700 hover:text-purple-700"
                            : "dark:text-gray-300 dark:hover:text-purple-400"
                        }transition-colors duration-300`}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={48} />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/sanaur-rahman-115350181/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          !darkTheme
                            ? "text-gray-700 hover:text-purple-700"
                            : "dark:text-gray-300 dark:hover:text-purple-400"
                        } transition-colors duration-300`}
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin size={48} />
                      </motion.a>
                      <motion.a
                        href="sanaur.sp@gmail.com"
                        className={`${
                          !darkTheme
                            ? "text-gray-700 hover:text-purple-700"
                            : "dark:text-gray-300 dark:hover:text-purple-400"
                        }transition-colors duration-300`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail size={48} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer
        className={`${
          !darkTheme
            ? "bg-gray-200 text-gray-600 border-gray-300"
            : "dark:bg-gray-900 dark:text-gray-400 dark:border-gray-800"
        } py-8 text-center text-sm border-t`}
      >
        <div className="max-w-7xl mx-auto px-4">
          &copy; {new Date().getFullYear()} Sanaur Rahaman. All rights reserved.
          <p className="mt-2">Designed with ❤️ and code.</p>
        </div>
      </footer>

      {/* Tailwind CSS CDN and Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Custom animation for background blobs */
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      {/* The Tailwind CDN script is for the immersive environment. For local Next.js, you'll use a build process. */}
      {/* <script src="https://cdn.tailwindcss.com"></script> */}
    </div>
  );
};

// Typewriter Text Component
const TypewriterText = ({ text, className }) => {
  const words = text.split(" "); // Split by words for better animation control
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // Delay between each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.h2
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

// Skill Card Component
const SkillCard = ({ title, description, icon, skills, darkTheme }) => {
  return (
    <motion.div
      className={`${
        !darkTheme
          ? "bg-white border-gray-200"
          : "dark:bg-gray-800 dark:border-gray-700"
      }p-6 rounded-xl shadow-lg border flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)", // Purple glow
        borderColor: "rgba(168, 85, 247, 0.8)",
      }}
    >
      <div className="mb-4">{icon}</div>
      <h3
        className={`text-2xl font-semibold ${
          !darkTheme ? "text-gray-900" : "dark:text-gray-100"
        } mb-3`}
      >
        {title}
      </h3>
      <p
        className={`${!darkTheme ? "text-gray-700" : "dark:text-gray-400"}mb-4`}
      >
        {description}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`${
              !darkTheme
                ? "bg-purple-200 text-purple-800"
                : "dark:bg-purple-700 dark:text-purple-100"
            }text-xs font-medium px-2.5 py-0.5 rounded-full`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({
  title,
  description,
  imageUrl,
  technologies,
  githubLink,
  liveLink,
  darkTheme,
}) => {
  return (
    <motion.div
      className={`${
        !darkTheme
          ? "bg-white border-gray-200"
          : "dark:bg-gray-800 dark:border-gray-700"
      } rounded-xl shadow-lg border overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)", // Purple glow
        borderColor: "rgba(168, 85, 247, 0.8)",
      }}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className={`w-full h-48 object-contain object-center border-b ${
          !darkTheme ? "border-gray-200" : "dark:border-b-gray-700"
        }`}
      />
      <div className="p-6">
        <h3
          className={`text-2xl font-semibold mb-3 ${
            !darkTheme ? "text-gray-900" : "dark:text-gray-100"
          }`}
        >
          {title}
        </h3>
        <p
          className={`${
            !darkTheme ? "text-gray-700" : "dark:text-gray-400"
          }mb-4 text-sm`}
        >
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`${
                !darkTheme
                  ? "bg-blue-200 text-blue-800"
                  : "dark:bg-blue-700 dark:text-blue-100"
              } text-xs font-medium px-2.5 py-0.5 rounded-full`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 text-sm"
          >
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center ${
              !darkTheme
                ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                : "dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100"
            } font-medium py-2 px-4 rounded-md transition-colors duration-300 text-sm`}
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default App;

