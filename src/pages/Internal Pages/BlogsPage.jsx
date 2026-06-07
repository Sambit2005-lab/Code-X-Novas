import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import Contact from "../Contact";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

import Picture from "../../assets/InternalPages/BlogsPage/Picture.png";

import frame1 from "../../assets/InternalPages/BlogsPage/Frames/Frame1.png";
import frame2 from "../../assets/InternalPages/BlogsPage/Frames/Frame2.png";
import frame3 from "../../assets/InternalPages/BlogsPage/Frames/Frame3.png";
import frame4 from "../../assets/InternalPages/BlogsPage/Frames/Frame4.png";
import frame5 from "../../assets/InternalPages/BlogsPage/Frames/Frame5.png";
import frame6 from "../../assets/InternalPages/BlogsPage/Frames/Frame6.png";
import frame7 from "../../assets/InternalPages/BlogsPage/Frames/Frame7.png";
import frame8 from "../../assets/InternalPages/BlogsPage/Frames/Frame8.png";
import frame9 from "../../assets/InternalPages/BlogsPage/Frames/Frame9.png";
import frame10 from "../../assets/InternalPages/BlogsPage/Frames/Frame10.png";
import frame11 from "../../assets/InternalPages/BlogsPage/Frames/Frame11.png";
import frame12 from "../../assets/InternalPages/BlogsPage/Frames/Frame12.png";

export default function BlogsPage() {
  const [showBlur, setShowBlur] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const sectionRef = useRef(null);
  const contactRef = useRef(null);

  const fallbackBlogs = [
    {
      category: "Artificial Intelligence",
      mappedCategory: "AI & Automation",
      color: "#2352A5",
      date: "Oct 19 · 10 min read",
      title: "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers",
      image: Picture,
    },
    {
      category: "The Future of Work",
      mappedCategory: "Startups & Business",
      color: "#2352A5",
      date: "Nov 5 · 8 min read",
      title: "Embracing Remote Teams: Strategies for Success in a Hybrid Environment",
      image: Picture,
    },
    {
      category: "UX Design Trends",
      mappedCategory: "Design & Development",
      color: "#2352A5",
      date: "Dec 12 · 15 min read",
      title: "Top 10 UX Design Trends to Watch in 2024",
      image: Picture,
    },
    {
      category: "Artificial Intelligence",
      mappedCategory: "AI & Automation",
      color: "#2352A5",
      date: "Oct 19 · 10 min read",
      title: "AI-Powered Customer Service: Transforming Business Operations",
      image: Picture,
    },
    {
      category: "Machine Learning Trends",
      mappedCategory: "AI & Automation",
      color: "#2352A5",
      date: "Nov 5 · 15 min read",
      title: "Top 5 Machine Learning Trends to Watch in 2023",
      image: Picture,
    },
    {
      category: "Data Privacy",
      mappedCategory: "Startups & Business",
      color: "#2352A5",
      date: "Dec 12 · 8 min read",
      title: "Navigating Data Privacy Regulations: Essential Tips for Businesses",
      image: Picture,
    },
  ];

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const snap = await getDocs(collection(db, "blogs"));
        const list = snap.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            category: data.category || "AI & Automation",
            mappedCategory: data.category || "AI & Automation",
            color: "#2352A5",
            date: data.date || "Oct 19 · 10 min read",
            title: data.title,
            image: data.img || data.image || Picture
          };
        });
        if (list.length > 0) {
          setBlogs(list);
        } else {
          setBlogs(fallbackBlogs);
        }
      } catch (err) {
        console.error("Error fetching blogs: ", err);
        setBlogs(fallbackBlogs);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === "All" || blog.mappedCategory === activeCategory;
    
    const matchesSearch = debouncedSearchTerm.trim() === "" || 
      blog.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim()) ||
      blog.category.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim()) ||
      blog.mappedCategory.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim()) ||
      blog.date.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim());
    
    return matchesCategory && matchesSearch;
  });

  const frames = [
    frame1,
    frame2,
    frame3,
    frame4,
    frame5,
    frame6,
    frame7,
    frame8,
    frame9,
    frame10,
    frame11,
    frame12,
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBlur(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [frames.length]);

  const blurLevel = 6;
  const opacityLevel = 1;

  const nextFrame = (currentFrame + 1) % frames.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SEO
        title="Blogs — Code X Novas | Tech Insights & Industry Trends"
        description="Read the latest articles on web development, AI, design, and digital transformation. Expert insights and best practices from the Code X Novas team."
        url="https://codexnovas.in/blogs"
      />
      <Navbar />

      <div className="relative w-full bg-white overflow-hidden min-h-screen">
        {showBlur && (
          <div
            className="fixed top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-[1]"
            style={{
              opacity: opacityLevel,
              filter: `blur(${blurLevel}px)`,
              transition: "opacity 1s ease-out",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
                zIndex: 2,
              }}
            />
            {frames.map((f, i) => (
              <img
                key={i}
                src={f}
                loading="lazy"
                alt={`blog-frame-${i}`}
                className="absolute top-0 right-0 w-full h-full object-contain transition-opacity duration-[6000ms] ease-[cubic-bezier(0.45,0.05,0.2,0.95)]"
                style={{
                  opacity:
                    i === currentFrame ? 1 : i === nextFrame ? 0.6 : 0,
                  objectPosition: "right center",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                  zIndex: 1,
                }}
              />
            ))}
          </div>
        )}

        <section
          ref={sectionRef}
          className="relative z-10 pt-[95px] sm:pt-[130px] pb-[40px] text-left px-6 md:px-12 max-w-[1400px] mx-auto"
        >
          <motion.h3
            className="px-0 sm:px-6 uppercase mb-2 text-[#2352A5] font-[600]"
            style={{ fontFamily: "Sora", fontSize: "16px" }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Blogs
          </motion.h3>
          <motion.h1
            className="px-0 sm:px-6 text-[28px] sm:text-[52px] md:text-[62px] font-[600] text-black leading-[1.12] mb-[6px]"
            style={{ fontFamily: "Sora" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Insights, <br className="block sm:hidden" /> Trends & Tips
          </motion.h1>
          <motion.p
            className="px-0 sm:px-6 text-[#333] text-[13px] sm:text-[17px] max-w-[750px] mb-[32px] sm:mb-[40px]"
            style={{ fontFamily: "Sora", fontWeight: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Stay updated with the latest in tech, AI, and business growth
            strategies.
          </motion.p>

          <motion.div
            className="grid px-0 sm:px-4 grid-cols-1 md:grid-cols-2 gap-10 items-center mb-[24px] sm:mb-[40px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div
              className="w-full flex justify-start sm:justify-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={blogs.length > 0 ? blogs[0].image : Picture}
                loading="lazy"
                alt="Featured Blog"
                className="rounded-lg shadow-md w-full max-w-[640px] sm:w-[85%] sm:max-w-[640px] h-[200px] sm:h-[300px] object-cover"
              />
            </motion.div>

            <motion.div
              className="flex flex-col justify-start mt-0 md:ml-[-30px] md:mt-[8px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.span
                className="inline-flex items-center gap-2 px-2 py-[3px] text-[11px] font-[500] rounded-full bg-white text-[#2352A5] mb-3 shadow-sm w-auto"
                style={{
                  fontFamily: "Sora",
                  display: "inline-flex",
                  width: "fit-content",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <span className="w-[12px] h-[12px] bg-[#2352A5] rounded-full inline-block" />
                {blogs.length > 0 ? blogs[0].category : "Artificial Intelligence"}
              </motion.span>

              <motion.h2
                className="
                  text-[20px] sm:text-[30px] md:text-[34px] lg:text-[36px]
                  font-[600] text-[#111]
                  leading-[1.2]
                  mb-2
                  max-w-[600px]
                "
                style={{ fontFamily: "Sora" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.9 }}
              >
                {blogs.length > 0 ? blogs[0].title : "Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing Managers"}
              </motion.h2>

              <motion.p
                className="text-[#444] text-[13px] sm:text-[15.5px] max-w-[520px] mb-2 sm:mb-4"
                style={{ fontFamily: "Sora", fontWeight: 400 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.1 }}
              >
                Mastering ChatGPT Blog Creation: Do&apos;s and Don&apos;ts for
                SaaS <br />
                Marketing Managers
              </motion.p>

              <motion.p
                className="text-gray-500 text-[12px] sm:text-[14px] mb-1"
                style={{ fontFamily: "Sora" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.3 }}
              >
                Oct 19 · 10 min read
              </motion.p>

              <motion.p
                className="text-[#2352A5] text-[14px] sm:text-[15px] font-[600] hover:underline cursor-pointer"
                style={{ fontFamily: "Sora" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                whileHover={{ x: 10 }}
              >
                Read more →
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        <section className="relative z-10 px-6 md:px-0 pb-[40px] sm:pb-[80px] max-w-[1300px] mx-auto text-left -mt-[45px] sm:-mt-[25px]">
          <motion.div
            className="flex md:pl-4 justify-between items-center mb-5 px-0 sm:px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.7 }}
          >
            <motion.h2
              className="text-[18px] sm:text-[20px] md:text-[22px] font-[600] text-black"
              style={{ fontFamily: "Sora" }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.9 }}
            >
              Top Reads
            </motion.h2>

            <motion.div
              className="flex space-x-3 mr-[2%]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 3.1 }}
            >
              <motion.button
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#08306F] text-[#08306F] hover:bg-[#2352A5] hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl transition-transform duration-300 group-hover:-translate-x-[3px]">
                  ‹
                </span>
              </motion.button>
              <motion.button
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#08306F] text-[#08306F] hover:bg-[#2352A5] hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-[3px]">
                  ›
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              gap-3 sm:gap-8 md:gap-12 
              px-0 sm:px-6 md:px-[1%] 
              w-full"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 3.3,
                },
              },
            }}
          >
            {[1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -15 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.img
                  src={Picture}
                  alt={`Blog ${idx}`}
                  loading="lazy"
                  className="w-full h-[160px] sm:h-[200px] object-cover rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[8px] rounded-b-xl transition-opacity duration-300 group-hover:opacity-90" />

                <div className="absolute bottom-6 left-4 right-4 text-white">
                  <span
                    className="inline-flex items-center gap-2 px-2 py-[2px] text-[10.5px] font-[500] rounded-full bg-white/90 text-[#2352A5] mb-2"
                    style={{ fontFamily: "Sora" }}
                  >
                    <span className="w-[8px] h-[8px] bg-[#2352A5] rounded-full inline-block" />
                    Artificial Intelligence
                  </span>

                  <h3
                    className="text-[18px] sm:text-[22px] font-[600] leading-[1.2] mb-[-12px]"
                    style={{ fontFamily: "Sora" }}
                  >
                    Mastering ChatGPT Blog Creation: Dos and Don&apos;ts for
                    SaaS Marketing Managers
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="relative z-10 w-full pt-[15px] pb-[50px] sm:pt-[70px] sm:pb-[70px] px-6 md:px-12 mt-[0px] overflow-hidden">
          <motion.h2
            className="px-0 sm:px-14 text-[18px] sm:text-[22px] md:text-[24px] font-[600] text-black mb-8"
            style={{ fontFamily: "Sora" }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 4.0 }}
          >
            Browse By Categories
          </motion.h2>

          <motion.div
            className="px-0 sm:px-12 flex flex-col items-center gap-4 mb-10 md:flex-row md:items-center md:justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.3 }}
          >
            <motion.div
              className="flex items-center gap-3 rounded-xl px-6 py-2 overflow-x-auto whitespace-nowrap md:flex-wrap md:justify-start 
                border border-[#ccc] 
                md:rounded-full 
                sm:px-6 md:px-8 sm:py-2.5 
                w-full md:w-auto bg-white/80 backdrop-blur-sm"
              style={{
                transition: "all 0.3s ease-in-out",
                WebkitOverflowScrolling: "touch",
              }}
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 4.6,
                  },
                },
              }}
            >
              {[
                "All",
                "AI & Automation",
                "Startups & Business",
                "Design & Development",
                "Productivity Hacks",
              ].map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-block px-4 sm:px-6 py-[8px] rounded-full text-[14px] sm:text-[15px] font-[500] transition-all duration-300 whitespace-nowrap md:whitespace-normal ${
                    activeCategory === cat
                      ? "text-black"
                      : "text-black hover:border-[#2352A5]"
                  } ${activeCategory === cat ? "border-0" : "border"}`}
                  style={{
                    fontFamily: "Sora",
                    background:
                      activeCategory === cat
                        ? "linear-gradient(90deg, #D7FFFE 0%, #3EB9FF 100%)"
                        : "transparent",
                    borderColor: "transparent",
                    boxShadow: activeCategory === cat ? "none" : "none",
                  }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center border border-[#ccc] rounded-full px-6 md:px-4 py-2 md:py-4 w-full sm:w-[240px] md:w-[280px] bg-white/80 backdrop-blur-sm relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 5.4 }}
            >
              <input
                type="text"
                placeholder="Search Blogs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[13px] sm:text-[15px] text-gray-700 placeholder-black"
                style={{ fontFamily: "Sora" }}
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setDebouncedSearchTerm("");
                  }}
                  className="mr-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ✕
                </button>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Search Results Counter */}
          {(debouncedSearchTerm || activeCategory !== "All") && (
            <motion.div 
              className="mb-6 flex items-center justify-between px-0 sm:px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-sm text-gray-600" style={{ fontFamily: "Sora" }}>
                {filteredBlogs.length > 0 ? (
                  <span>
                    Showing <span className="font-semibold text-[#2352A5]">{filteredBlogs.length}</span> blog{filteredBlogs.length !== 1 ? 's' : ''}
                    {debouncedSearchTerm && <span> matching "<span className="font-medium">{debouncedSearchTerm}</span>"</span>}
                    {activeCategory !== "All" && <span> in {activeCategory}</span>}
                  </span>
                ) : (
                  <span className="text-gray-500">No blogs found</span>
                )}
              </div>
              {(debouncedSearchTerm || activeCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setDebouncedSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="text-xs text-[#2352A5] hover:text-[#1e4694] font-medium transition-colors"
                  style={{ fontFamily: "Sora" }}
                >
                  Clear all filters
                </button>
              )}
            </motion.div>
          )}

          {filteredBlogs.length === 0 ? (
            <motion.div
              className="flex flex-col items-center justify-center py-16 px-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[60px] mb-4">📝</div>
              <h3
                className="text-[24px] font-[600] text-gray-800 mb-2"
                style={{ fontFamily: "Sora" }}
              >
                No blogs found
              </h3>
              <p
                className="text-[16px] text-gray-600 text-center max-w-[400px]"
                style={{ fontFamily: "Sora" }}
              >
                {debouncedSearchTerm ? (
                  <>No blogs match "<span className="font-medium text-[#2352A5]">{debouncedSearchTerm}</span>" in the {activeCategory === "All" ? "selected" : activeCategory} category.</>
                ) : (
                  <>No blogs available for the "{activeCategory}" category. Try selecting a different category.</>
                )}
              </p>
              {(debouncedSearchTerm || activeCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setDebouncedSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="mt-4 px-4 py-2 text-sm bg-[#2352A5] text-white rounded-lg hover:bg-[#1e4694] transition-colors"
                  style={{ fontFamily: "Sora" }}
                >
                  Clear filters
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key={`${activeCategory}-${debouncedSearchTerm}`} // Re-animate when category or search changes
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 px-0 sm:px-6 md:px-[4.0%] w-full mt-[30px]"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {filteredBlogs.map((blog, idx) => (
              <motion.div
                key={idx}
                className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.7 }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                }}
              >
                <motion.img
                  src={blog.image}
                  alt={`Blog ${idx}`}
                  loading="lazy"
                  className="w-full h-[180px] sm:h-[230px] object-cover rounded-lg"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[8px] rounded-b-xl transition-opacity duration-300 group-hover:opacity-90" />

                <div className="absolute bottom-6 left-4 right-4 text-white">
                  <span
                    className="inline-flex items-center gap-2 px-2 py-[2px] text-[10.5px] font-[500] rounded-full bg-white/90 mb-2"
                    style={{ color: blog.color, fontFamily: "Sora" }}
                  >
                    <span
                      className="w-[8px] h-[8px] rounded-full inline-block"
                      style={{ backgroundColor: blog.color }}
                    />
                    {blog.category}
                  </span>

                  <p
                    className="text-gray-300 text-[12px] sm:text-[13px] mb-[3px]"
                    style={{ fontFamily: "Sora" }}
                  >
                    {blog.date}
                  </p>

                  <h3
                    className="text-[14px] sm:text-[16px] font-[600] leading-[1.3]"
                    style={{ fontFamily: "Sora" }}
                  >
                    {blog.title}
                  </h3>
                </div>
              </motion.div>
            ))}
            </motion.div>
          )}

          <motion.div
            className="flex justify-center items-center mt-6 sm:mt-12 space-x-2 sm:space-x-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 6.8 }}
          >
            {[1, 2, 3, "...", 5].map((num, i) => (
              <motion.button
                key={i}
                disabled={num === "..."}
                className={`${
                  num === "..."
                    ? "text-[#2352A5] text-[18px] font-[600] cursor-default px-2"
                    : `w-8 h-8 flex items-center justify-center rounded-full text-[15px] font-[500] border ${
                        num === 1
                          ? "bg-[#2352A5] text-white border-[#2352A5]"
                          : "border-[#2352A5] text-[#2352A5] hover:bg-[#2352A5] hover:text-white"
                      }`
                }`}
                style={{ fontFamily: "Sora" }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 6.8 + i * 0.1,
                }}
                whileHover={num !== "..." ? { scale: 1.15 } : {}}
                whileTap={num !== "..." ? { scale: 0.9 } : {}}
              >
                {num}
              </motion.button>
            ))}
          </motion.div>
        </section>
      </div>

      <motion.div
        ref={contactRef}
        className="relative z-20 bg-white w-full"
        style={{
          boxShadow: "0 -10px 30px rgba(0,0,0,0.05)",
        }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 7.4 }}
      >
        <motion.div
          className="-mt-[20px] sm:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 7.7 }}
        >
          <Contact />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
