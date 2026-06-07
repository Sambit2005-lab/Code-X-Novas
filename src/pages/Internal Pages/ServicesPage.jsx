import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import frame1 from "../../assets/InternalPages/ServicesPage/Frames/Frame1.png";
import frame2 from "../../assets/InternalPages/ServicesPage/Frames/Frame2.png";
import frame3 from "../../assets/InternalPages/ServicesPage/Frames/Frame3.png";
import frame4 from "../../assets/InternalPages/ServicesPage/Frames/Frame4.png";
import frame5 from "../../assets/InternalPages/ServicesPage/Frames/Frame5.png";
import frame6 from "../../assets/InternalPages/ServicesPage/Frames/Frame6.png";
import frame7 from "../../assets/InternalPages/ServicesPage/Frames/Frame7.png";
import frame8 from "../../assets/InternalPages/ServicesPage/Frames/Frame8.png";
import frame9 from "../../assets/InternalPages/ServicesPage/Frames/Frame9.png";
import frame10 from "../../assets/InternalPages/ServicesPage/Frames/Frame10.png";
import frame11 from "../../assets/InternalPages/ServicesPage/Frames/Frame11.png";
import frame12 from "../../assets/InternalPages/ServicesPage/Frames/Frame12.png";

import picture from "../../assets/InternalPages/ServicesPage/Picture.png";
import WebAppDeveloper from "../../assets/InternalPages/ServicesPage/WebAppDeveloper.png";
import AIDeveloper from "../../assets/InternalPages/ServicesPage/AIDeveloper.png";
import UXDesigner from "../../assets/InternalPages/ServicesPage/UXDesigner.png";
import CustomLMSDeveloper from "../../assets/InternalPages/ServicesPage/CustomLMSDeveloper.png";
import ECommerceSolution from "../../assets/InternalPages/ServicesPage/ECommerceSolution.png";
import Contact from "../Contact";

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [textOffset, setTextOffset] = useState(0);
  const [showBlur, setShowBlur] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const sectionRef = useRef(null);
  const contactRef = useRef(null);

  const frames = [
    frame1, frame2, frame3, frame4, frame5, frame6,
    frame7, frame8, frame9, frame10, frame11, frame12
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceFromTop = Math.max(0, windowHeight - rect.top);
        setTextOffset(distanceFromTop * 0.1);
      }

      if (contactRef.current) {
        const contactTop = contactRef.current.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        const isContactVisible = contactTop < screenHeight * 0.9;
        setShowBlur(!isContactVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 9000); 
    return () => clearInterval(interval);
  }, [frames.length]);

  const blurLevel = Math.min(scrollY / 200, 3);
  const opacityLevel = Math.max(0.3, 1 - scrollY / 700);
  const nextFrame = (currentFrame + 1) % frames.length;
  const technologies = ["React.js", "Spring Boot", "Kotlin", "Flutter", "Node.js"];

  const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M6.854 4.646a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L9.793 8 6.854 5.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );

  const services = [
    { title: "Web Development", description: "We design fast, scalable, and secure websites using Next.js, React, and Spring Boot — ensuring SEO optimization, responsive layouts, and a smooth user experience tailored to your business goals.", image: picture },
    { title: "App Development", description: "We build cross-platform apps with React Native, Flutter, and Kotlin — combining sleek UI, powerful performance, and real-time backend integration for smooth, high-quality user experiences across devices.", image: WebAppDeveloper },
    { title: "AI & Machine Learning Solutions", description: "We create AI-driven automation, predictive analytics, and intelligent assistants that improve efficiency, personalize user experiences, and enable data-driven decision-making for businesses across industries.", image: AIDeveloper },
    { title: "UI/UX Design", description: "We design intuitive, visually engaging interfaces that enhance usability, accessibility, and engagement — delivering prototypes and final designs that ensure every user interaction feels effortless.", image: UXDesigner },
    { title: "Custom LMS & E-Learning Platforms", description: "We develop scalable, interactive LMS platforms with live sessions, analytics, and digital certificates — using React, Firebase, and Node.js for seamless education experiences across web and mobile.", image: CustomLMSDeveloper },
    { title: "E-commerce Solutions", description: "We build custom, secure, and high-performance e-commerce platforms using Next.js, Stripe, and Firebase — enabling smooth shopping, payment, and inventory management experiences for your customers.", image: ECommerceSolution },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SEO
        title="Our Services — Code X Novas | Web, App & AI Development"
        description="Expert web development, mobile apps, AI solutions, UI/UX design, custom LMS platforms, and e-commerce services. We build digital products that drive results."
        url="https://codexnovas.in/services"
      />
      <Navbar />

      <div className="relative w-full bg-white overflow-hidden">
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
        background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 100%)",
        zIndex: 2,
        pointerEvents: "none",
      }}
    />

    {frames.map((f, i) => (
      <img
        key={i}
        src={f}
        loading="lazy"
        alt={`blur-${i}`}
        className="absolute top-0 right-0 w-full h-full object-contain transition-opacity duration-[6000ms] ease-[cubic-bezier(0.45,0.05,0.2,0.95)]"
        style={{
          opacity:
            i === currentFrame
              ? 1
              : i === nextFrame
              ? 0.6
              : 0,
          objectPosition: "right center",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          zIndex: 1,
        }}
      />
    ))}
  </div>
)}
        <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-28 pt-[95px] sm:pt-[130px] max-w-[1000px]">
          <motion.h3 
            className="uppercase mb-2 text-[#2352A5] font-[600]" 
            style={{ fontFamily: "Sora", fontSize: "16px" }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Services
          </motion.h3>
          <motion.h1 
            className="mb-5 font-[600] text-[30px] sm:text-[50px] md:text-[56px] lg:text-[62px] text-black leading-[1.25]" 
            style={{ fontFamily: "Sora" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Our Expertise, <br /> Your Growth
          </motion.h1>
          <motion.p
            className="mb-3 max-w-[520px] text-[#555] font-sora font-normal text-sm sm:text-lg md:text-[16px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            At Code-X-Novas - a product and service based tech company, we believe that technology
            is more than just code-it's a catalyst for innovation, growth, and meaningful impact. We are
            a passionate team of developers, designers, and thinkers driven by curiosity, creativity,
            and a commitment to excellence.
          </motion.p>

          <motion.button
            className="relative overflow-hidden mt-1 px-6 py-3 rounded-md font-poppins text-[15px] text-white shadow-md group"
            style={{
              background:
                "linear-gradient(90deg, #2352A5 0%, #137DD1 11%, #02A7FD 26%, #7DE2FF 44%, #42ACEF 72%, #B7F1FF 100%)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.25)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Our Products</span>
            <span
              className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[130%] transition-all duration-[1.2s] ease-in-out"
              style={{ transform: "skewX(-20deg)" }}
            ></span>
          </motion.button>
        </div>

        {services.map((s, i) => (
          <React.Fragment key={i}>
            <motion.section 
              className="relative z-10 -mt-[10px] sm:mt-[80px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            >
              <div
                ref={sectionRef}
                className={`hidden md:flex px-6 md:px-16 lg:px-28 items-start justify-between ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <motion.div
                  className="w-1/2 overflow-visible"
                  style={{
                    marginTop: "-5vh",
                    transform:
                      i === services.length - 1 ? "none" : `translateY(${textOffset * 0.6}px)`,
                    transition: "transform 0.1s linear",
                  }}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, rotateY: i % 2 === 0 ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.05, rotateY: i % 2 === 0 ? -5 : 5 }}
                >
                  <img src={s.image} loading="lazy" alt={s.title} className="mt-0 sm:mt-7 w-full h-auto lg:h-[500px] object-cover" />
                </motion.div>

                <motion.div
                  className={`w-1/2 flex flex-col justify-start text-left ${
                    i % 2 === 0 ? "md:pl-10" : "md:pr-10"
                  }`}
                  style={{
                    marginTop: "-40px",
                    transform:
                      i === services.length - 1 ? "none" : `translateY(${textOffset * 0.6}px)`,
                    transition: "transform 0.1s linear",
                  }}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.h2
                    className="mb-4 text-[32px] sm:text-[42px] md:text-[50px] lg:text-[60px] text-black font-[600]"
                    style={{ fontFamily: "Sora", lineHeight: "1.25" }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {s.title}
                  </motion.h2>
                  <motion.p
                    className="mb-6 max-w-[560px] text-[#555]"
                    style={{ fontFamily: "Sora", fontWeight: 400, fontSize: "16px" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {s.description}
                    <br />
                    <span style={{ fontWeight: 400 }}>Technologies:</span>
                  </motion.p>

                  <motion.div 
                    className="space-y-3 w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
                  >
                    {technologies.map((t, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center justify-between border-b border-gray-200 pb-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
                      >
                        <div className="flex items-center space-x-4">
                          <span style={{ fontFamily: "Sora", fontSize: "15px", color: "#444" }}>
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span
                            style={{
                              fontFamily: "Sora",
                              fontSize: "16px",
                              fontWeight: 500,
                              color: "#000",
                            }}
                          >
                            {t}
                          </span>
                        </div>

                        <motion.button
                          className="p-1.5 rounded-full border border-[#08306F] hover:bg-[#2352A5] transition-all duration-300 group flex items-center justify-center"
                          style={{ width: "30px", height: "30px" }}
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <span className="text-[#2352A5] transition-transform duration-300 group-hover:text-white group-hover:translate-x-[4px]">
                            <ArrowIcon />
                          </span>
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              <motion.div 
                className="flex flex-col md:hidden px-6 mt-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <motion.div 
                  className="w-full text-left mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="mb-2 text-[24px] font-[600] text-black" style={{ fontFamily: "Sora", lineHeight: "1.15" }}>
                    {s.title}
                  </h2>
                  <p className="text-[#555] text-sm" style={{ fontFamily: "Sora", lineHeight: "1.5" }}>
                    {s.description}
                  </p>
                </motion.div>
                <motion.div 
                  className="w-full mb-6 flex justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-[220px] max-h-[220px] object-cover rounded-lg"
                  />
                </motion.div>
              </motion.div>
            </motion.section>

            <motion.div 
              className="w-full border-t border-gray-300 opacity-70 mt-6 md:mt-[60px] relative z-[5]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </React.Fragment>
        ))}

        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </motion.div>
  );
}
