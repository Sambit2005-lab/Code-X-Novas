import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";

import frame1 from "../../assets/InternalPages/ProductsPage/Frames/Frame1.png";
import frame2 from "../../assets/InternalPages/ProductsPage/Frames/Frame2.png";
import frame3 from "../../assets/InternalPages/ProductsPage/Frames/Frame3.png";
import frame4 from "../../assets/InternalPages/ProductsPage/Frames/Frame4.png";
import frame5 from "../../assets/InternalPages/ProductsPage/Frames/Frame5.png";
import frame6 from "../../assets/InternalPages/ProductsPage/Frames/Frame6.png";
import frame7 from "../../assets/InternalPages/ProductsPage/Frames/Frame7.png";
import frame8 from "../../assets/InternalPages/ProductsPage/Frames/Frame8.png";
import frame9 from "../../assets/InternalPages/ProductsPage/Frames/Frame9.png";
import frame10 from "../../assets/InternalPages/ProductsPage/Frames/Frame10.png";
import frame11 from "../../assets/InternalPages/ProductsPage/Frames/Frame11.png";
import frame12 from "../../assets/InternalPages/ProductsPage/Frames/Frame12.png";

import BackgroundPicture from "../../assets/InternalPages/ProductsPage/BackgroundPicture.png";
import Contact from "../Contact";

export default function ProductsPage() {
    const [showBlur, setShowBlur] = useState(true);
    const [currentFrame, setCurrentFrame] = useState(0);
    const contactRef = useRef(null);

    const frames = [
        frame1, frame2, frame3, frame4, frame5, frame6,
        frame7, frame8, frame9, frame10, frame11, frame12,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % frames.length);
        }, 9000);
        return () => clearInterval(interval);
    }, [frames.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowBlur(!entry.isIntersecting);
            },
            { threshold: 0.15 }
        );
        if (contactRef.current) observer.observe(contactRef.current);
        return () => observer.disconnect();
    }, []);

    const blurLevel = Math.min(scrollY / 200, 3);
    const opacityLevel = Math.max(0.3, 1 - scrollY / 700);
    const nextFrame = (currentFrame + 1) % frames.length;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <SEO
                title="Our Products — Code X Novas | Digital Solutions & Platforms"
                description="Explore Code X Novas products: innovative digital platforms, SaaS solutions, and custom tools designed to accelerate your business growth."
                url="https://codexnovas.in/products"
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
                            display: showBlur ? "block" : "none",
                        }}
                    >
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 100%)",
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

                <section className="relative z-10 pt-[95px] sm:pt-[140px] px-6 md:px-[2%] lg:px-[1.5%] max-w-[1300px] mx-auto">
                    <motion.h3
                        className="uppercase mb-3 text-[#2352A5] font-[600]"
                        style={{ fontFamily: "Sora", fontSize: "16px" }}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Products
                    </motion.h3>
                    <motion.h1
                        className="mb-2 sm:mb-5 font-[600] text-[30px] sm:text-[50px] md:text-[48px] lg:text-[65px] text-black leading-[1.2] sm:leading-[1.25]"
                        style={{ fontFamily: "Sora" }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <motion.span
                            style={{ color: "#2352A5", letterSpacing: "2px" }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            SAS
                        </motion.span> – Smart Attendance <br className="hidden md:block" /> System
                    </motion.h1>
                    <motion.p
                        className="mb-3 md:mb-[80px] max-w-[550px] text-[#555] font-sora font-normal text-sm sm:text-lg md:text-[17px] leading-[2]"
                        style={{ fontFamily: "Sora", fontWeight: 400 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        AI-Powered Attendance Automation for Educational Institutions
                    </motion.p>
                </section>
 
                <section
                    className="relative z-10 w-full flex justify-center items-end overflow-hidden mt-[40px] sm:mt-[80px] h-[55vh] sm:h-[100vh]"
                    style={{
                        backgroundImage: `url(${BackgroundPicture})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute top-2 sm:top-5 sm:relative flex justify-center w-full">
                        <motion.div
                            className="shadow-lg px-8 py-2 sm:px-4 sm:py-4 flex items-center justify-center w-[90%] sm:w-[85%] max-w-[1100px] min-h-[140px] sm:min-h-[270px] mb-[80px] sm:mb-[390px]"
                            style={{
                                background: "rgba(255,255,255,0.75)",
                                WebkitBackdropFilter: "blur(14px)",
                                backdropFilter: "blur(14px)",
                                border: "1px solid rgba(255,255,255,0.25)",
                                borderRadius: "12px",
                            }}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                        >
                            <motion.p
                                className="text-[#222] text-[14px] sm:text-[17px] md:text-[24px] leading-[1.15] sm:leading-[1.3] text-start mt-[10px] sm:mt-[40px]"
                                style={{ fontFamily: "Sora", fontWeight: 500 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.5 }}
                            >
                                Replace manual roll calling and costly biometric systems with a smarter,
                                <br className="hidden md:block" /> faster, and more efficient attendance management solution.
                                <br className="hidden md:block" /> SAS helps schools, colleges, universities, and coaching institutes automate
                                <br className="hidden md:block" /> attendance using AI-powered classroom recognition.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>
 
                <motion.div
                    className="shadow-lg px-6 py-6 md:px-8 md:py-8 flex flex-col justify-center mx-auto -mt-[120px] md:-mt-[200px]"
                    style={{
                        position: "relative",
                        background: "rgba(255,255,255,0.75)",
                        WebkitBackdropFilter: "blur(14px)",
                        backdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        width: "90%",
                        maxWidth: "1100px",
                        borderRadius: "12px",
                        minHeight: "400px",
                        marginBottom: "50px",
                        zIndex: 20,
                    }}
                    initial={{ opacity: 0, y: 80, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 1.8, ease: "easeOut" }}
                    whileHover={{ boxShadow: "0 25px 50px rgba(35, 82, 165, 0.2)" }}
                >
                    <motion.h2
                        className="text-[#2352A5] text-[32px] md:text-[35px] font-[600] mb-[20px]"
                        style={{ fontFamily: "Sora" }}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 2.2 }}
                    >
                        Key Features
                    </motion.h2>
 
                    <motion.ul
                        className="text-[#111] text-[15px] sm:text-[16px] md:text-[20px] leading-[1.25] md:leading-[2.2] list-disc pl-5 mb-[30px]"
                        style={{
                            fontFamily: "Sora",
                            fontWeight: 400,
                            fontStyle: "light",
                            listStyleType: "disc",
                        }}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 2.4,
                                },
                            },
                        }}
                    >
                        {[
                            { title: "AI-Powered Attendance", desc: "Generate attendance automatically through classroom photographs in seconds." },
                            { title: "Teacher Dashboard", desc: "Manage attendance, review records, and resolve attendance disputes with ease." },
                            { title: "Student Dashboard", desc: "Allow students to view attendance records and raise correction requests when required." },
                            { title: "Parent Visibility", desc: "Keep parents informed with attendance tracking and reporting features." },
                            { title: "Institution Analytics", desc: "Monitor attendance trends, reports, and performance insights across departments and classes." },
                            { title: "No Hardware Required", desc: "No biometric machines, fingerprint scanners, or expensive CCTV infrastructure needed." },
                        ].map((item, idx) => (
                            <motion.li
                                key={idx}
                                className="mb-2 sm:mb-0"
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ x: 10, color: "#2352A5" }}
                            >
                                <b>{item.title}</b> – {item.desc}
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h2
                        className="text-[#2352A5] text-[32px] md:text-[35px] font-[600] mb-[20px]"
                        style={{ fontFamily: "Sora" }}
                    >
                        Why SAS?
                    </motion.h2>
                    <motion.ul
                        className="text-[#111] text-[15px] sm:text-[16px] md:text-[20px] leading-[1.25] md:leading-[2.2] list-disc pl-5 mb-[30px]"
                        style={{ fontFamily: "Sora", fontWeight: 400 }}
                    >
                        {[
                            { title: "Save Classroom Time", desc: "Reduce time spent on manual roll calling and focus more on teaching." },
                            { title: "Affordable for Every Institution", desc: "Starting at just ₹1 per student per month." },
                            { title: "AI + Human Verification", desc: "Teachers remain in control and can review attendance before final submission." },
                            { title: "Easy to Deploy", desc: "Works using existing devices and cloud infrastructure with minimal setup." },
                        ].map((item, idx) => (
                            <li key={idx} className="mb-2 sm:mb-0">
                                <b>{item.title}</b> – {item.desc}
                            </li>
                        ))}
                    </motion.ul>

                    <motion.h2
                        className="text-[#2352A5] text-[28px] md:text-[30px] font-[600] mb-[15px]"
                        style={{ fontFamily: "Sora" }}
                    >
                        Ideal For
                    </motion.h2>
                    <div className="flex flex-wrap gap-2.5 mb-[35px]">
                        {["Schools", "Colleges", "Universities", "Coaching Institutes", "Training Centers"].map((item, idx) => (
                            <span key={idx} className="bg-blue-50 border border-blue-200 text-[#2352A5] px-3.5 py-1.5 rounded-full font-mono text-xs sm:text-sm font-semibold">
                                • {item}
                            </span>
                        ))}
                    </div>
 
                    <motion.h3
                        className="text-[#2352A5] text-[28px] md:text-[35px] font-[600] mt-[10px] mb-[10px]"
                        style={{ fontFamily: "Sora" }}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 3.2 }}
                    >
                        USP
                    </motion.h3>
                    <motion.p
                        className="text-[#222] text-[16px] md:text-[20px] break-words"
                        style={{ fontFamily: "Sora", fontWeight: 400 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3.5 }}
                    >
                        A modern attendance management platform that combines AI automation, institutional analytics, parent visibility, and administrative control without requiring costly hardware installations.
                    </motion.p>

                    <p className="text-[#555] text-sm sm:text-base mt-6 font-mono leading-relaxed">
                        Modern Attendance for the AI Era — Improve operational efficiency, enhance transparency, reduce paper-based processes, and provide a better experience for administrators, teachers, students, and parents.
                    </p>
 
                    <motion.button
                        onClick={() => window.open("https://sas.codexnovas.in", "_blank")}
                        style={{
                            background: `
                linear-gradient(
                  90deg,
                  #2352A5 0%,
                  #137DD1 20%,
                  #02A7FD 45%,
                  #42ACEF 70%,
                  #7DE2FF 92%,
                  #B7F1FF 100%
                )
              `,
                            color: "#fff",
                            fontFamily: "Sora",
                            fontWeight: 500,
                            fontSize: "16px",
                            padding: "10px 24px",
                            borderRadius: "6px",
                            marginTop: "30px",
                            alignSelf: "flex-start",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 3.8 }}
                        whileHover={{
                            scale: 1.08,
                            boxShadow: "0 10px 25px rgba(35, 82, 165, 0.4)",
                            background: `
                linear-gradient(
                  90deg,
                  #1a3d7d 0%,
                  #0f5fa0 20%,
                  #0185c9 45%,
                  #2e8bc2 70%,
                  #5bc4e6 92%,
                  #8ed9f2 100%
                )
              `,
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore SAS
                    </motion.button>
                </motion.div>
 
                <motion.div
                    className="px-6 md:px-[2%] lg:px-[1.5%] max-w-[1300px] mx-auto text-start mb-[60px]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 4.2 }}
                >
                    <h2 className="text-[#2352A5] text-lg sm:text-xl font-bold font-mono uppercase tracking-widest flex items-center gap-2 mb-2">
                        <span className="flex h-2.5 w-2.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        LIVE NOW
                    </h2>
                    <a href="https://sas.codexnovas.in" target="_blank" rel="noreferrer" className="text-xl sm:text-2xl text-black hover:text-[#2352A5] transition-colors font-bold underline font-mono">
                        sas.codexnovas.in
                    </a>
                </motion.div>
 
                <motion.div
                    ref={contactRef}
                    className="relative z-20 bg-white w-full"
                    style={{
                        boxShadow: "0 -10px 30px rgba(0,0,0,0.05)",
                        paddingTop: "50px",
                    }}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 4.8 }}
                >
                    <motion.div
                        className="-mt-16 sm:mt-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 5.1 }}
                    >
                        <Contact />
                    </motion.div>

                </motion.div>
            </div>
        </motion.div>
    );
}
