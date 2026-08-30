import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const [activeProduct, setActiveProduct] = useState("sas"); // "sas", "vidya" or "classivo"
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

    const sasData = {
        title: "SAS 360",
        subtitle: "Smart Attendance System",
        tagline: "AI-Powered Attendance Automation for Educational Institutions",
        bannerText: "Replace manual roll calling and costly biometric systems with a smarter, faster, and more efficient attendance management solution. SAS 360 helps schools, colleges, universities, and coaching institutes automate attendance using AI-powered classroom recognition.",
        features: [
            { title: "AI-Powered Attendance", desc: "Generate attendance automatically through classroom photographs in seconds." },
            { title: "Teacher Dashboard", desc: "Manage attendance, review records, and resolve attendance disputes with ease." },
            { title: "Student Dashboard", desc: "Allow students to view attendance records and raise correction requests when required." },
            { title: "Parent Visibility", desc: "Keep parents informed with attendance tracking and reporting features." },
            { title: "Institution Analytics", desc: "Monitor attendance trends, reports, and performance insights across departments and classes." },
            { title: "No Hardware Required", desc: "No biometric machines, fingerprint scanners, or expensive CCTV infrastructure needed." },
        ],
        why: [
            { title: "Save Classroom Time", desc: "Reduce time spent on manual roll calling and focus more on teaching." },
            { title: "Affordable for Every Institution", desc: "Starting at just ₹1 per student per month." },
            { title: "AI + Human Verification", desc: "Teachers remain in control and can review attendance before final submission." },
            { title: "Easy to Deploy", desc: "Works using existing devices and cloud infrastructure with minimal setup." },
        ],
        idealFor: ["Schools", "Colleges", "Universities", "Coaching Institutes", "Training Centers"],
        usp: "A modern attendance management platform that combines AI automation, institutional analytics, parent visibility, and administrative control without requiring costly hardware installations.",
        footerInfo: "Modern Attendance for the AI Era — Improve operational efficiency, enhance transparency, reduce paper-based processes, and provide a better experience for administrators, teachers, students, and parents.",
        link: "https://sas.codexnovas.in",
        linkText: "sas.codexnovas.in",
        exploreText: "Explore SAS 360"
    };

    const vidyaData = {
        title: "VidyaOS 360",
        subtitle: "School Digital Management Platform",
        tagline: "Complete Digital Management Platform for Educational Institutions",
        bannerText: "Transform traditional school operations into a modern, centralized, and efficient digital ecosystem with VidyaOS 360. VidyaOS 360 brings school administration, teachers, students, parents, academics, communication, reporting, and school websites together in one unified platform.",
        features: [
            { title: "Complete School Administration", desc: "Manage students, teachers, admissions, fees, salaries, leaves, classes, notices, reports, and administrative operations from one platform." },
            { title: "Student Management", desc: "Maintain student profiles, admission records, academic information, attendance, fees, examinations, documents, and other records digitally." },
            { title: "Teacher Portal", desc: "Teachers can manage students, classes, homework, attendance, notices, leave requests, reports, and other academic activities." },
            { title: "Parent Visibility", desc: "Parents can access children's academic info, attendance, notices, fees, and other relevant updates." },
            { title: "School Website", desc: "Every participating school can have a professionally managed digital presence with information, admissions, notices, achievements, and gallery." },
            { title: "Admission Management", desc: "Simplify the admission process and reduce paperwork through digital admission and enquiry management." },
            { title: "Fee Management", desc: "Manage student fees, payment records, receipts, and outstanding dues digitally." },
            { title: "Examination & Report Management", desc: "Manage examinations, marks, grades, reports, and academic records efficiently." },
            { title: "Salary & Staff Management", desc: "Manage staff records, salary information, leave management, and salary slips." },
            { title: "Notice & Communication", desc: "Share notices, circulars, homework, and important information with teachers, students, and parents." },
            { title: "Centralized Multi-School Management", desc: "Enable organizations managing multiple schools to monitor and manage their schools through a unified digital ecosystem." },
            { title: "Analytics & Reports", desc: "Generate useful reports and insights for better administrative decision-making." },
            { title: "Digital Documents", desc: "Generate professional digital documents such as fee receipts, salary slips, reports, certificates, and other school documents." },
        ],
        why: [
            { title: "Reduce Administrative Work", desc: "Automate repetitive paperwork and reduce the time spent on manual record management." },
            { title: "One Platform for the Entire School", desc: "Bring administration, teachers, students, parents, and school communication together." },
            { title: "Improve Parent Experience", desc: "Give parents easier access to important information about their child and the school." },
            { title: "Modernize School Operations", desc: "Replace fragmented registers, files, and manual processes with a centralized digital system." },
            { title: "Scalable for Multiple Schools", desc: "Designed to support organizations managing multiple schools through centralized management and reporting." },
            { title: "Long-Term Digital Ecosystem", desc: "Continuously improve the platform as the requirements of schools and educational organizations evolve." },
        ],
        idealFor: ["Schools", "School Groups", "Educational Organizations", "Saraswati Shishu Mandir Schools", "Colleges & Educational Institutions", "Coaching & Training Institutes"],
        usp: "A complete school digital ecosystem that brings administration, academics, teachers, students, parents, communication, school websites, documents, analytics, and multi-school management together in one unified platform.",
        footerInfo: "From School Administration to Parent Communication — One Platform for the Complete School Ecosystem.",
        link: "https://vidyaos.codexnovas.in",
        linkText: "vidyaos.codexnovas.in",
        exploreText: "Explore VidyaOS 360"
    };

    const classivoData = {
        title: "Classivo 360",
        subtitle: "Coaching Institute Management Platform",
        tagline: "Run Your Coaching Institute. Smarter.",
        bannerText: "A complete digital management platform for coaching institutes to manage students, batches, fees, attendance, tests, faculty, and parent communication — all in one place. Classivo 360 helps coaching institutes replace spreadsheets, registers, scattered WhatsApp messages, and manual processes with one simple, connected platform.",
        features: [
            { title: "Student Management", desc: "Manage student profiles, admissions, records, and complete student information from one dashboard." },
            { title: "Batch Management", desc: "Create and manage batches, schedules, subjects, and student assignments effortlessly." },
            { title: "Fee Management", desc: "Track fee collection, installments, pending payments, payment history, and fee defaulters." },
            { title: "Attendance Management", desc: "Mark and monitor student attendance batch-wise with complete attendance records." },
            { title: "Test & Performance Management", desc: "Conduct tests, record marks, track performance, and monitor student progress." },
            { title: "Faculty Management", desc: "Manage faculty profiles, attendance, working days, and payroll-related information." },
            { title: "Parent Communication", desc: "Keep parents informed through attendance alerts, fee reminders, test results, and important updates." },
            { title: "Owner Dashboard", desc: "Get a real-time overview of students, collections, attendance, pending fees, faculty presence, and institute activity." },
            { title: "Student Dashboard", desc: "Give students access to attendance, upcoming classes, test results, performance, fees, study material, and announcements." },
            { title: "Faculty Dashboard", desc: "Provide teachers with everything they need to manage attendance, marks, assignments, classes, and student performance." },
            { title: "Institute Website", desc: "Build a professional online presence with institute information, courses, batches, faculty, results, notices, and enquiry forms." },
        ],
        why: [
            { title: "Save Time", desc: "Reduce paperwork and manual administrative work." },
            { title: "Simple to Use", desc: "Designed specifically for coaching institutes." },
            { title: "Affordable", desc: "Professional institute management without expensive enterprise software." },
            { title: "Connected", desc: "Students, faculty, parents, and management stay connected through one ecosystem." },
            { title: "Scalable", desc: "Suitable for small coaching centres as well as growing multi-batch institutes." },
            { title: "Real-Time Insights", desc: "Know what’s happening in your institute through a centralized dashboard." },
        ],
        idealFor: ["Coaching Institutes", "Competitive Exam Coaching Centres", "Tuition Centres", "Training Institutes", "Skill Development Centres", "Multi-Batch Coaching Centres"],
        usp: "A complete Coaching Institute Management Platform that connects students, batches, fees, attendance, tests, faculty, parents, and institute management in one unified digital ecosystem. From Admission to Performance — Everything in One Place.",
        footerInfo: "Classivo 360 helps institutes reduce administrative workload, improve parent communication, track student performance, and run daily operations more efficiently.",
        link: "https://classivo.codexnovas.in/",
        linkText: "classivo.codexnovas.in",
        exploreText: "Explore Classivo 360"
    };

    const workoutData = {
        title: "4EverWorkout",
        subtitle: "Smart Gym Management & Member Retention Platform",
        tagline: "Run Your Gym. Automate Operations. Retain More Members.",
        bannerText: "4EverWorkout is a complete digital management and member retention platform designed for modern gyms and fitness businesses. Manage members, memberships, fees, attendance, leads, trainers and daily operations from one centralized platform while using smart automation to improve member engagement and retention.",
        features: [
            { title: "Member Management", desc: "Manage complete member profiles, membership details, joining records and fitness information from one centralized system." },
            { title: "Membership & Fee Management", desc: "Create membership plans, track payments, installments, pending fees and complete payment history." },
            { title: "Attendance Management", desc: "Maintain digital attendance records and monitor member activity across your gym." },
            { title: "Lead & Trial Management", desc: "Track new enquiries, trial members and follow-ups to convert more potential customers into active members." },
            { title: "Automated WhatsApp Communication", desc: "Send automated welcome messages, payment reminders, membership expiry alerts and renewal notifications." },
            { title: "Member Retention Engine", desc: "Identify inactive members through 3-day, 7-day and 14-day inactivity tracking and take action before they leave." },
            { title: "Churn Risk Detection", desc: "Detect members who may be losing engagement and help your team take proactive retention actions." },
            { title: "Fitness Progress Tracking", desc: "Track weight, fitness goals, progress updates and member transformation history." },
            { title: "Trainer Dashboard", desc: "Give trainers access to relevant member information, attendance and engagement activities." },
            { title: "Day-Wise Automation", desc: "Automate member engagement workflows from joining and onboarding to progress reminders and trainer follow-ups." },
            { title: "AI Gym Owner Assistant", desc: "Ask natural questions about your gym operations, members, attendance, revenue and renewals." },
            { title: "Business Analytics", desc: "Monitor revenue, attendance, pending payments, member retention and overall gym performance." },
            { title: "Multi-Branch Management", desc: "Manage and monitor multiple gym branches through a centralized dashboard." }
        ],
        why: [
            { title: "Reduce Administrative Work", desc: "Replace registers, spreadsheets and scattered records with one connected digital platform." },
            { title: "Improve Member Retention", desc: "Identify inactive and high-risk members before they quietly stop coming." },
            { title: "Automate Daily Follow-Ups", desc: "Reduce manual calls and repetitive follow-ups through smart automated communication." },
            { title: "Increase Renewals", desc: "Send timely membership expiry and renewal reminders." },
            { title: "Understand Your Gym Better", desc: "Get real-time visibility into members, attendance, collections and business performance." },
            { title: "Built for Growing Gyms", desc: "Start with essential management tools and upgrade as your gym grows." }
        ],
        idealFor: ["Gyms", "Fitness Centres", "Personal Training Studios", "Multi-Branch Gym Businesses", "Fitness & Wellness Centres", "Strength & Conditioning Centres"],
        usp: "A modern gym management platform that combines daily operations, fee management, automated communication, member retention intelligence, fitness progress tracking and AI-powered business insights in one unified ecosystem.",
        footerInfo: "Don’t Just Manage Your Gym. Build Members Who Stay. 4EverWorkout helps gym owners reduce manual work, automate member communication, improve renewals, identify inactive members and run their fitness business with better visibility and control.",
        link: "https://4everworkout.codexnovas.in/",
        linkText: "4everworkout.codexnovas.in",
        exploreText: "Explore 4EverWorkout",
        status: "LIVE SOON"
    };

    const currentProduct = activeProduct === "sas" ? sasData : activeProduct === "vidya" ? vidyaData : activeProduct === "classivo" ? classivoData : workoutData;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <style dangerouslySetInnerHTML={{__html: `
                .scrollbar-none::-webkit-scrollbar {
                    display: none;
                }
            `}} />
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
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                        <div>
                            <motion.h3
                                className="uppercase mb-2 text-[#2352A5] font-[600] tracking-wider"
                                style={{ fontFamily: "Sora", fontSize: "15px" }}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Products
                            </motion.h3>
                        </div>
                        
                        {/* Premium Sliding Pill Tab Switcher */}
                        <motion.div 
                            className="relative flex items-center bg-gray-50/80 backdrop-blur-md p-1.5 rounded-full border border-gray-200/60 shadow-inner self-stretch md:self-auto overflow-x-auto scrollbar-none whitespace-nowrap max-w-full"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none"
                            }}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {["sas", "vidya", "classivo", "workout"].map((tab) => {
                                const isSelected = activeProduct === tab;
                                const text = tab === "sas" ? "SAS 360" : tab === "vidya" ? "VidyaOS 360" : tab === "classivo" ? "Classivo 360" : "4EverWorkout";
                                return (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveProduct(tab)}
                                        className="relative px-6 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none z-10 font-sora shrink-0"
                                        style={{
                                            color: isSelected ? "#fff" : "#555",
                                        }}
                                    >
                                        {isSelected && (
                                            <motion.div
                                                layoutId="active-product-pill"
                                                className="absolute inset-0 bg-gradient-to-r from-[#2352A5] via-[#137DD1] to-[#02A7FD] rounded-full shadow-md z-[-1] min-w-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        {text}
                                    </button>
                                );
                            })}
                        </motion.div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProduct}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -25 }}
                            transition={{ duration: 0.45, ease: "easeInOut" }}
                        >
                            <h1
                                className="mb-2 sm:mb-5 font-[600] text-[32px] sm:text-[50px] md:text-[48px] lg:text-[65px] text-black leading-[1.15] sm:leading-[1.25]"
                                style={{ fontFamily: "Sora" }}
                            >
                                <span style={{ color: "#2352A5", letterSpacing: "1px" }}>
                                    {currentProduct.title}
                                </span> – {currentProduct.subtitle}
                            </h1>
                            <p
                                className="mb-3 md:mb-[80px] max-w-[550px] text-[#444] font-sora font-normal text-sm sm:text-lg md:text-[17px] leading-[1.8]"
                                style={{ fontFamily: "Sora", fontWeight: 400 }}
                            >
                                {currentProduct.tagline}
                            </p>
                        </motion.div>
                    </AnimatePresence>
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
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeProduct}
                                    className="text-[#222] text-[14px] sm:text-[17px] md:text-[20px] lg:text-[22px] leading-[1.4] text-start mt-[10px] sm:mt-[40px] font-normal"
                                    style={{ fontFamily: "Sora" }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {currentProduct.bannerText}
                                </motion.p>
                            </AnimatePresence>
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
                    transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
                    whileHover={{ boxShadow: "0 25px 50px rgba(35, 82, 165, 0.15)" }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProduct}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h2
                                className="text-[#2352A5] text-[30px] md:text-[35px] font-[600] mb-[20px]"
                                style={{ fontFamily: "Sora" }}
                            >
                                Key Features
                            </h2>
        
                            <ul
                                className="text-[#111] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px] leading-[1.3] md:leading-[2] list-disc pl-5 mb-[30px]"
                                style={{
                                    fontFamily: "Sora",
                                    fontWeight: 400,
                                    listStyleType: "disc",
                                }}
                            >
                                {currentProduct.features.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="mb-2.5"
                                        whileHover={{ x: 6, color: "#2352A5" }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <b>{item.title}</b> – {item.desc}
                                    </motion.li>
                                ))}
                            </ul>

                            <h2
                                className="text-[#2352A5] text-[30px] md:text-[35px] font-[600] mb-[20px]"
                                style={{ fontFamily: "Sora" }}
                            >
                                Why {currentProduct.title}?
                            </h2>
                            <ul
                                className="text-[#111] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px] leading-[1.3] md:leading-[2] list-disc pl-5 mb-[30px]"
                                style={{ fontFamily: "Sora", fontWeight: 400 }}
                            >
                                {currentProduct.why.map((item, idx) => (
                                    <li key={idx} className="mb-2.5">
                                        <b>{item.title}</b> – {item.desc}
                                    </li>
                                ))}
                            </ul>

                            <h2
                                className="text-[#2352A5] text-[26px] md:text-[28px] font-[600] mb-[15px]"
                                style={{ fontFamily: "Sora" }}
                            >
                                Ideal For
                            </h2>
                            <div className="flex flex-wrap gap-2.5 mb-[35px]">
                                {currentProduct.idealFor.map((item, idx) => (
                                    <span key={idx} className="bg-blue-50 border border-blue-200 text-[#2352A5] px-3.5 py-1.5 rounded-full font-mono text-xs sm:text-sm font-semibold">
                                        • {item}
                                    </span>
                                ))}
                            </div>
        
                            <h3
                                className="text-[#2352A5] text-[26px] md:text-[30px] font-[600] mt-[10px] mb-[10px]"
                                style={{ fontFamily: "Sora" }}
                            >
                                USP
                            </h3>
                            <p
                                className="text-[#222] text-[16px] md:text-[18px] lg:text-[19px] break-words leading-relaxed"
                                style={{ fontFamily: "Sora", fontWeight: 400 }}
                            >
                                {currentProduct.usp}
                            </p>

                            <p className="text-[#555] text-sm sm:text-base mt-6 font-mono leading-relaxed">
                                {currentProduct.footerInfo}
                            </p>
        
                            <motion.button
                                onClick={() => window.open(currentProduct.link, "_blank")}
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
                                    fontSize: "15px",
                                    padding: "12px 28px",
                                    borderRadius: "6px",
                                    marginTop: "30px",
                                    alignSelf: "flex-start",
                                }}
                                whileHover={{
                                    scale: 1.04,
                                    boxShadow: "0 10px 25px rgba(35, 82, 165, 0.35)",
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
                                {currentProduct.exploreText}
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
 
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProduct}
                        className="px-6 md:px-[2%] lg:px-[1.5%] max-w-[1300px] mx-auto text-start mb-[60px]"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="text-[#2352A5] text-base sm:text-lg font-bold font-mono uppercase tracking-widest flex items-center gap-2 mb-2">
                            <span className="flex h-2 w-2 relative">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentProduct.status === "LIVE SOON" ? "bg-amber-400" : "bg-green-400"}`}></span>
                                <span className={`relative inline-flex rounded-full h-2 w-2 ${currentProduct.status === "LIVE SOON" ? "bg-amber-500" : "bg-green-500"}`}></span>
                            </span>
                            {currentProduct.status || "LIVE NOW"}
                        </h2>
                        <a href={currentProduct.link} target="_blank" rel="noreferrer" className="text-lg sm:text-xl text-black hover:text-[#2352A5] transition-colors font-bold underline font-mono">
                            {currentProduct.linkText}
                        </a>
                    </motion.div>
                </AnimatePresence>
 
                <motion.div
                    ref={contactRef}
                    className="relative z-20 bg-white w-full"
                    style={{
                        boxShadow: "0 -10px 30px rgba(0,0,0,0.05)",
                        paddingTop: "50px",
                    }}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.0 }}
                >
                    <motion.div
                        className="-mt-16 sm:mt-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 1.2 }}
                    >
                        <Contact />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
