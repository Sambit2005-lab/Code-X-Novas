import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import Contact from "../Contact";

import UIUX from "../../assets/Career/uiux.png";
import Backend from "../../assets/Career/backend.png";
import AI from "../../assets/Career/ai.png";
import Community from "../../assets/Career/community.png";
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

import frame1 from "../../assets/InternalPages/CareerPage/Frames/Frame1.png";
import frame2 from "../../assets/InternalPages/CareerPage/Frames/Frame2.png";
import frame3 from "../../assets/InternalPages/CareerPage/Frames/Frame3.png";
import frame4 from "../../assets/InternalPages/CareerPage/Frames/Frame4.png";
import frame5 from "../../assets/InternalPages/CareerPage/Frames/Frame5.png";
import frame6 from "../../assets/InternalPages/CareerPage/Frames/Frame6.png";
import frame7 from "../../assets/InternalPages/CareerPage/Frames/Frame7.png";
import frame8 from "../../assets/InternalPages/CareerPage/Frames/Frame8.png";
import frame9 from "../../assets/InternalPages/CareerPage/Frames/Frame9.png";
import frame10 from "../../assets/InternalPages/CareerPage/Frames/Frame10.png";
import frame11 from "../../assets/InternalPages/CareerPage/Frames/Frame11.png";
import frame12 from "../../assets/InternalPages/CareerPage/Frames/Frame12.png";

const getCareerImg = (imgName) => {
    if (!imgName) return UIUX;
    if (typeof imgName !== "string") return imgName;
    const lower = imgName.toLowerCase();
    if (lower.includes("uiux") || lower.includes("ui/ux")) return UIUX;
    if (lower.includes("backend")) return Backend;
    if (lower.includes("ai") || lower.includes("frontend")) return AI;
    if (lower.includes("community") || lower.includes("business")) return Community;
    return imgName;
};

export default function CareerPage() {
    const [scrollY, setScrollY] = useState(0);
    const [showBlur, setShowBlur] = useState(true);
    const [currentFrame, setCurrentFrame] = useState(0);
    const contactRef = useRef(null);

    // Job application modal states
    const [showApplyModal, setShowApplyModal] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState("");
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [isSubmittingApp, setIsSubmittingApp] = useState(false);
    const [appSuccess, setAppSuccess] = useState(false);

    const [appForm, setAppForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        experience: "Freshers / Entry Level",
        resumeUrl: "",
        portfolioUrl: "",
        linkedInUrl: "",
        coverNote: ""
    });

    const [customAnswers, setCustomAnswers] = useState({});

    const [careerList, setCareerList] = useState([]);

    const frames = [
        frame1, frame2, frame3, frame4, frame5, frame6,
        frame7, frame8, frame9, frame10, frame11, frame12
    ];

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const snap = await getDocs(collection(db, "careers"));
                const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                if (list.length > 0) {
                    setCareerList(list);
                } else {
                    setCareerList([
                        { title: "UI/ UX Designer", img: UIUX },
                        { title: "Backend Developer", img: Backend },
                        { title: "Frontend Developer", img: AI },
                        { title: "Business Development Executive", img: Community },
                    ]);
                }
            } catch (err) {
                console.error("Error loading careers: ", err);
                setCareerList([
                    { title: "UI/ UX Designer", img: UIUX },
                    { title: "Backend Developer", img: Backend },
                    { title: "Frontend Developer", img: AI },
                    { title: "Business Development Executive", img: Community },
                ]);
            }
        };
        fetchCareers();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
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

    const handleApplySubmit = async (e) => {
        e.preventDefault();
        setIsSubmittingApp(true);
        try {
            await addDoc(collection(db, "job_applications"), {
                ...appForm,
                customAnswers: customAnswers,
                positionApplied: selectedPosition,
                timestamp: new Date().toISOString()
            });
            setAppSuccess(true);
            setAppForm({
                fullName: "",
                email: "",
                phone: "",
                experience: "Freshers / Entry Level",
                resumeUrl: "",
                portfolioUrl: "",
                linkedInUrl: "",
                coverNote: ""
            });
            setCustomAnswers({});
        } catch (err) {
            console.error("Error submitting job app: ", err);
        } finally {
            setIsSubmittingApp(false);
        }
    };


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <SEO
                title="Careers — Code X Novas | Join Our Team"
                description="Explore career opportunities at Code X Novas. We're hiring UI/UX designers, developers, and business professionals. Build the future with us."
                url="https://codexnovas.in/career"
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
                                background:
                                    "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                                zIndex: 2,
                                pointerEvents: "none",
                            }}
                        />

                        {frames.map((f, i) => (
                            <img
                                key={i}
                                src={f}
                                loading="lazy"
                                alt={`career-frame-${i}`}
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

                <section className="relative z-10 pt-[95px] sm:pt-[140px] md:pt-[100px] lg:pt-[100px] pb-[20px] px-6 md:px-[5%] max-w-[1400px] mx-auto text-left">
                    <motion.h3
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="uppercase mb-[10px] text-[#2352A5] font-[600] text-[13px] sm:text-[14px] md:text-[16px]"
                        style={{ fontFamily: "Sora", letterSpacing: "1px" }}
                    >
                        Career
                    </motion.h3>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                        className="
      font-[600]
      text-black
      leading-[1.2]
      mb-3
      text-[30px] sm:text-[42px] md:text-[52px] lg:text-[62px]
    "
                        style={{ fontFamily: "Sora" }}
                    >
                        Join the Code-X-Novas <br className="hidden sm:block" /> Family
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        className="
      text-[#333]
      font-[400]
      text-[14px] sm:text-[16px] md:text-[17px]
      leading-[1.6]
      max-w-[750px]
      text-left
      sm:whitespace-normal whitespace-normal
    "
                        style={{ fontFamily: "Sora" }}
                    >
                        We're always on the lookout for passionate innovators, problem solvers, and creators.
                    </motion.p>
                </section>


                <section className="relative w-full py-4 px-6 md:px-12 bg-white text-center overflow-hidden -mt-[35px]">
                    <div className="flex justify-between items-center mb-5 px-[2.5%]">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-[20px] md:text-[20px] font-[600] text-black text-left mt-[25px]"
                            style={{ fontFamily: "Sora" }}
                        >
                            Open Positions
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            className="
    flex space-x-3 mr-[4%] mt-[25px] sm:mt-[0] 
    relative z-[20]
    will-change-transform
  "
                            style={{
                                transform: "translateZ(0)",
                                backfaceVisibility: "hidden",
                            }}
                        >

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#08306F] text-[#08306F] hover:bg-[#2352A5] hover:text-white transition-all duration-300 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                    className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-[3px]"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#08306F] text-[#08306F] hover:bg-[#2352A5] hover:text-white transition-all duration-300 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[3px]"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </motion.div>

                    </div>                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, staggerChildren: 0.15, delayChildren: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-1  mb-12 relative z-10"
                    >
                        {careerList.map((career, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative group overflow-hidden cursor-pointer w-[90%] md:w-[85%] lg:w-[80%] mx-auto"
                            >
                                <img
                                    src={getCareerImg(career.img)}
                                    loading="lazy"
                                    alt={career.title}
                                    className="w-full h-[220px] sm:h-[330px] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div
                                    className="absolute w-full flex flex-col items-center justify-center text-center 
                               transition-all duration-500 ease-in-out
                               bottom-6 group-hover:bottom-1/2 group-hover:translate-y-1/2"
                                >
                                    <h3 className="text-white text-lg font-semibold drop-shadow-md transition-all duration-500">
                                        {career.title}
                                    </h3>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            setSelectedPosition(career.title);
                                            setSelectedCareer(career);
                                            setAppSuccess(false);
                                            setCustomAnswers({});
                                            setShowApplyModal(true);
                                        }}
                                        className="opacity-0 group-hover:opacity-100 mt-3 px-5 py-2 bg-white text-gray-800 
                                 font-medium rounded-md shadow-lg transition-all duration-500"
                                    >
                                        Join Now
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* PREMIUM GLASSMORPHIC APPLICATION FORM MODAL */}
                <AnimatePresence>
                    {showApplyModal && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                        >
                            <motion.div 
                                initial={{ scale: 0.95, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.95, y: 20 }}
                                className="w-full max-w-lg bg-zinc-950/95 border border-white/10 rounded-2xl p-5 sm:p-8 backdrop-blur-xl shadow-2xl relative text-white max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                                
                                <button 
                                    onClick={() => setShowApplyModal(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-lg"
                                >
                                    ✕
                                </button>

                                {selectedCareer?.status === "closed" ? (
                                    <div className="text-center py-4">
                                        {/* Sleek dual-ring warning icon with animation */}
                                        <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                                            <div className="absolute inset-0 bg-red-500/10 rounded-full animate-ping opacity-30" />
                                            <div className="w-16 h-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-500/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                                                <svg 
                                                    className="w-7 h-7 text-red-400" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor" 
                                                    strokeWidth={1.8}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                </svg>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold font-sora text-white mb-3 tracking-tight">
                                            Application Closed
                                        </h3>
                                        <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed font-sora">
                                            Sorry, applications are closed. Please follow our LinkedIn to know the updates:
                                        </p>
                                        
                                        <div className="my-6">
                                            <a 
                                                href="https://www.linkedin.com/company/code-x-novas/" 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="inline-flex items-center gap-2.5 px-5 py-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 hover:border-blue-400 text-blue-400 hover:text-white rounded-xl font-medium text-xs tracking-wider transition-all duration-300 font-mono shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                                            >
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                                FOLLOW CODEXNOVAS
                                            </a>
                                        </div>

                                        <p className="text-[10px] text-zinc-500 font-mono break-all max-w-xs mx-auto">
                                            https://www.linkedin.com/company/code-x-novas/
                                        </p>

                                        <div className="mt-8 border-t border-white/5 pt-5">
                                            <button
                                                onClick={() => setShowApplyModal(false)}
                                                className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all font-mono text-xs text-gray-400"
                                            >
                                                CLOSE WINDOW
                                            </button>
                                        </div>
                                    </div>
                                ) : !appSuccess ? (
                                    <form onSubmit={handleApplySubmit} className="space-y-5">
                                        <div className="text-center mb-5">
                                            <span className="text-[10px] font-mono tracking-widest text-[#4FA3FF] uppercase bg-[#016FAE]/10 border border-[#016FAE]/30 px-2.5 py-0.5 rounded">
                                                Application Form
                                            </span>
                                            <h3 className="text-lg sm:text-xl font-bold font-sora text-white mt-3">
                                                Apply for {selectedPosition}
                                            </h3>
                                            <p className="text-xs text-gray-400 mt-1">
                                                Fill out the details to fast-track your review.
                                            </p>
                                        </div>

                                        <div className="space-y-4 font-sora text-xs">
                                            <div>
                                                <label className="block text-gray-400 mb-1.5 uppercase font-mono tracking-wider">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={appForm.fullName}
                                                    onChange={(e) => setAppForm({ ...appForm, fullName: e.target.value })}
                                                    placeholder="Linus Torvalds"
                                                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#4FA3FF]"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-gray-400 mb-1.5 uppercase font-mono tracking-wider">Email Address</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={appForm.email}
                                                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                                                        placeholder="linus@git.org"
                                                        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#4FA3FF]"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-400 mb-1.5 uppercase font-mono tracking-wider">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        required
                                                        value={appForm.phone}
                                                        onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                                                        placeholder="+91 98765 43210"
                                                        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#4FA3FF]"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-gray-400 mb-1.5 uppercase font-mono tracking-wider">Resume URL</label>
                                                    <input
                                                        type="url"
                                                        required
                                                        value={appForm.resumeUrl}
                                                        onChange={(e) => setAppForm({ ...appForm, resumeUrl: e.target.value })}
                                                        placeholder="https://drive.google.com/..."
                                                        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#4FA3FF]"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-400 mb-1.5 uppercase font-mono tracking-wider">Experience Level</label>
                                                    <select
                                                        value={appForm.experience}
                                                        onChange={(e) => setAppForm({ ...appForm, experience: e.target.value })}
                                                        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#4FA3FF]"
                                                    >
                                                        <option>Freshers / Entry Level</option>
                                                        <option>1-3 Years Experience</option>
                                                        <option>3+ Years Experience</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-gray-400 mb-1.5 uppercase font-mono tracking-wider">Portfolio URL</label>
                                                    <input
                                                        type="url"
                                                        value={appForm.portfolioUrl}
                                                        onChange={(e) => setAppForm({ ...appForm, portfolioUrl: e.target.value })}
                                                        placeholder="https://github.com/..."
                                                        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#4FA3FF]"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-400 mb-1.5 uppercase font-mono tracking-wider">LinkedIn URL</label>
                                                    <input
                                                        type="url"
                                                        required
                                                        value={appForm.linkedInUrl}
                                                        onChange={(e) => setAppForm({ ...appForm, linkedInUrl: e.target.value })}
                                                        placeholder="https://linkedin.com/in/..."
                                                        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#4FA3FF]"
                                                    />
                                                </div>
                                            </div>

                                            {/* Render custom questions if configured */}
                                            {selectedCareer?.customQuestions && selectedCareer.customQuestions.length > 0 && (
                                                <div className="space-y-4 border-t border-white/5 pt-4">
                                                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#4FA3FF]">Additional Questions</h4>
                                                    {selectedCareer.customQuestions.map((q, qidx) => (
                                                        <div key={qidx}>
                                                            <label className="block text-gray-400 mb-1.5 font-sora font-semibold">{q}</label>
                                                            <input
                                                                type="text"
                                                                required
                                                                value={customAnswers[q] || ""}
                                                                onChange={(e) => setCustomAnswers({
                                                                    ...customAnswers,
                                                                    [q]: e.target.value
                                                                })}
                                                                placeholder="Type your answer here..."
                                                                className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#4FA3FF]"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div>
                                                <label className="block text-gray-400 mb-1.5 uppercase font-mono tracking-wider">Cover Note (Optional)</label>
                                                <textarea
                                                    value={appForm.coverNote}
                                                    onChange={(e) => setAppForm({ ...appForm, coverNote: e.target.value })}
                                                    placeholder="Why do you want to join Code-X-Novas?"
                                                    rows="3"
                                                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-[#4FA3FF] resize-none"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmittingApp}
                                            className="w-full py-3 bg-gradient-to-r from-[#016FAE] to-[#4FA3FF] hover:opacity-90 text-white font-semibold rounded-lg font-mono text-xs transition-all shadow-lg flex items-center justify-center gap-2"
                                        >
                                            {isSubmittingApp ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    SUBMITTING APPLICATION...
                                                </>
                                            ) : (
                                                "SUBMIT APPLICATION"
                                            )}
                                        </button>
                                    </form>
                                ) : (
                                    <div className="text-center py-6">
                                        <div className="w-16 h-16 bg-blue-950/40 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                                            ✓
                                        </div>
                                        <h3 className="text-xl font-bold font-sora text-white mb-2">Application Submitted!</h3>
                                        <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                                            Thanks for applying, <span className="text-white font-semibold">{appForm.fullName}</span>. Our team will review your application for the <span className="text-[#4FA3FF] font-semibold">{selectedPosition}</span> role and get back to you soon.
                                        </p>
                                        <button
                                            onClick={() => setShowApplyModal(false)}
                                            className="mt-8 px-6 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all font-mono text-xs"
                                        >
                                            Close Modal
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div ref={contactRef}>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 0.7, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full border-t border-gray-300 opacity-70 sm:mt-[40px] relative z-[5]"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <Contact />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
