import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import TextHover from "../../components/TextHover";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
const Synchrotask = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811311/codexnovas/hbsrqbqnrchliutvrfp6.png";
const SkillLoop = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811650/codexnovas/fapho2uecxflb36rc2ej.png";
const UrbanPilgrim = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811641/codexnovas/nc7tvhwqkitkpxmk0vkp.png";
const Ecommerce = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811488/codexnovas/lxycwmo9x5efbhgsfmm6.png";
const TakshilaFM = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811758/codexnovas/kwzwkydevd5s0baxua7f.png";
const Animation1 = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811755/codexnovas/udx6lmctkoouw9y66khr.gif";
const Animation2 = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811659/codexnovas/y54tplbgb4ou0mr1gyb8.gif";
const Animation3 = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811719/codexnovas/vbo84bopb2ln3l1rxjmz.gif";
const Animation4 = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811678/cpdjkbvbowpmgs5zgm5i.gif"; // wait, check mapping: cpdjkbvbowpmgs5zgm5i
const Animation5 = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811695/codexnovas/qwfko9hy1ren11o8dsol.gif";
const CohesiveMinds = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811552/codexnovas/c0v3z8aegpgkr3qcngjq.png";
const Shagun = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811630/codexnovas/ripwd9ergvhv7pzb5mfd.png";
const ShoeWebsite = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811556/codexnovas/nugdfc8nwxgnsnsrzyvc.png";
const TravelandTours = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811600/codexnovas/kjv7bumz1u5pepcjsno2.png";
const WinzInfotech = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811639/codexnovas/jbj6p0nhehf51bewcrbw.png";
const ECommerceWebsite1 = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811566/codexnovas/xohjdfoxgig2lg8dkd0w.png";
const ECommerceWebsite2 = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811562/codexnovas/pmgawehaisg76xz89vr1.png";
const GenLokalApp = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811421/codexnovas/vy2fulzlpnwbscsnivid.png";
const GymApp = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811335/codexnovas/sgyk4jwumotfqzkflhce.png";
const VicinaCustomerApp = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811481/codexnovas/ugro3hfsjd851hdgdcfz.png";
const VicinaDeliveryApp = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811441/codexnovas/g5r8ymjeece1rb0bfhc2.png";
const VicinaShopApp = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811359/codexnovas/au7z7hnsdyrnhspjwgcp.png";
import curve from "../../assets/Works/curve-glow.png";
import corner from "../../assets/Works/corner-glow.png";
import Contact from "../Contact";
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

const getWorkImg = (imgName) => {
    if (!imgName) return "";
    if (typeof imgName !== "string") return imgName;
    const lower = imgName.toLowerCase();
    if (lower.includes("synchrotask")) return Synchrotask;
    if (lower.includes("skillloop") || lower.includes("skill loop")) return SkillLoop;
    if (lower.includes("urbanpilgrim") || lower.includes("urban pilgrim")) return UrbanPilgrim;
    if (lower.includes("ecommerce") && !lower.includes("1") && !lower.includes("2")) return Ecommerce;
    if (lower.includes("takshilafm") || lower.includes("takshila fm")) return TakshilaFM;
    if (lower.includes("animation5") || lower.includes("water")) return Animation5;
    if (lower.includes("animation3") || lower.includes("smoky")) return Animation3;
    if (lower.includes("animation1") || lower.includes("loading")) return Animation1;
    if (lower.includes("animation2") || lower.includes("button")) return Animation2;
    if (lower.includes("animation4") || lower.includes("jumping")) return Animation4;
    if (lower.includes("cohesiveminds") || lower.includes("cohesive minds")) return CohesiveMinds;
    if (lower.includes("shagun")) return Shagun;
    if (lower.includes("shoewebsite") || lower.includes("shoe website")) return ShoeWebsite;
    if (lower.includes("travelandtours") || lower.includes("travel and tours")) return TravelandTours;
    if (lower.includes("winzinfotech") || lower.includes("winz infotech")) return WinzInfotech;
    if (lower.includes("ecommercewebsite1") || lower.includes("ecommerce store") || lower.includes("ecommerce website")) return ECommerceWebsite1;
    if (lower.includes("ecommercewebsite2") || lower.includes("ecommerce platform")) return ECommerceWebsite2;
    if (lower.includes("genlokal") || lower.includes("gen lokal")) return GenLokalApp;
    if (lower.includes("gymapp") || lower.includes("gym app")) return GymApp;
    if (lower.includes("vicinacustomer") || lower.includes("vicina customer")) return VicinaCustomerApp;
    if (lower.includes("vicinadelivery") || lower.includes("vicina delivery")) return VicinaDeliveryApp;
    if (lower.includes("vicinashop") || lower.includes("vicina shop")) return VicinaShopApp;
    return imgName;
};

export default function WorkPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const [scrollY, setScrollY] = useState(0);
    const [showBlur, setShowBlur] = useState(true);
    const [currentFrame, setCurrentFrame] = useState(0);
    const contactRef = useRef(null);
    const [projectList, setProjectList] = useState([]);

    const workData = [
        { title: "Synchrotask", subtitle: "AI-Powered Productivity with Human Precision", img: "synchrotask", category: "Website" },
        { title: "Skill Loop", subtitle: "AI-Powered Productivity with Human Precision", img: "skillloop", category: "Website" },
        { title: "Urban Pilgrim", subtitle: "Urban Wellness Rooted in Indian Wisdom", img: "urbanpilgrim", category: "Website" },
        { title: "Ecommerce Website", subtitle: "AI-Powered Productivity", img: "ecommerce", category: "Website" },
        { title: "Takshila FM", subtitle: "AI-Powered Productivity", img: "takshilafm", category: "Website" },
        { title: "Water filling Animation", subtitle: "Smooth water filling effect", img: "animation5", category: "Animation" },
        { title: "Smoky Animation", subtitle: "Dynamic smoke effect", img: "animation3", category: "Animation" },
        { title: "Loading Animation", subtitle: "Engaging loading indicator", img: "animation1", category: "Animation" },
        { title: "Button animation", subtitle: "Interactive button effects", img: "animation2", category: "Animation" },
        { title: "Jumping Animation", subtitle: "Playful jumping motion", img: "animation4", category: "Animation" },
        { title: "ECommerce Store", subtitle: "Modern E-commerce Solution", img: "ecommercewebsite1", category: "Website" },
        { title: "Cohesive Minds", subtitle: "Corporate website design", img: "cohesiveminds", category: "Website" },
        { title: "Shagun", subtitle: "Traditional meets digital", img: "shagun", category: "Website" },
        { title: "Shoe Website", subtitle: "E-commerce footwear store", img: "shoewebsite", category: "Website" },
        { title: "Travel and Tours", subtitle: "Travel booking platform", img: "travelandtours", category: "Website" },
        { title: "Winz Infotech", subtitle: "Tech company portfolio", img: "winzinfotech", category: "Website" },
        { title: "ECommerce Platform", subtitle: "Online shopping platform", img: "ecommercewebsite2", category: "Website" },
        { title: "Gen Lokal App", subtitle: "Local community app", img: "genlokal", category: "App Design" },
        { title: "Gym App", subtitle: "Fitness tracking application", img: "gymapp", category: "App Design" },
        { title: "Vicina Customer App", subtitle: "Customer-facing mobile app", img: "vicinacustomer", category: "App Design" },
        { title: "Vicina Delivery App", subtitle: "Delivery management system", img: "vicinadelivery", category: "App Design" },
        { title: "Vicina Shop App", subtitle: "Shop owner dashboard", img: "vicinashop", category: "App Design" },
    ];

    const filteredProjects = projectList.filter(project => {
        const matchesCategory = activeCategory === "All" || project.category === activeCategory;
        
        const matchesSearch = debouncedSearchTerm.trim() === "" || 
            project.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim()) ||
            project.subtitle.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim()) ||
            project.category.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim());
        
        return matchesCategory && matchesSearch;
    });

    // Dynamic layout: first 2 projects are large, rest are small
    const largeProjects = filteredProjects.slice(0, 2);
    const smallProjects = filteredProjects.slice(2);

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
        const fetchProjects = async () => {
            try {
                const snap = await getDocs(collection(db, "works"));
                const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                if (list.length > 0) {
                    setProjectList(list);
                } else {
                    setProjectList(workData);
                }
            } catch (err) {
                console.error("Error loading works: ", err);
                setProjectList(workData);
            }
        };
        fetchProjects();
    }, []);

    const handleProjectClick = (project) => {
        if (project.link) {
            window.open(project.link, "_blank");
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

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

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <SEO
                title="Our Work — Code X Novas | Portfolio & Case Studies"
                description="View our portfolio of web apps, mobile solutions, and digital products. See how we've helped businesses scale with innovative technology."
                url="https://codexnovas.in/works"
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
                                    "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 100%)",
                            }}
                        />
                        {frames.map((f, i) => (
                            <img
                                key={i}
                                loading="lazy"
                                src={f}
                                alt={`blur-${i}`}
                                className="absolute top-0 right-0 w-full h-full object-contain transition-opacity duration-[6000ms] ease-[cubic-bezier(0.45,0.05,0.2,0.95)]"
                                style={{
                                    opacity: i === currentFrame ? 1 : i === nextFrame ? 0.6 : 0,
                                    objectPosition: "right center",
                                    transform: "translateZ(0)",
                                    backfaceVisibility: "hidden",
                                }}
                            />
                        ))}
                    </div>
                )}

                <img
                    src={curve}
                    loading="lazy"
                    alt="curve"
                    className="hidden lg:block absolute top-0 right-0 w-[420px] opacity-80 pointer-events-none -z-10"
                />
                <img
                    loading="lazy"
                    src={corner}
                    alt="corner"
                    className="hidden lg:block absolute bottom-0 left-0 w-[380px] opacity-70 pointer-events-none -z-10"
                />

                <section className="relative z-10 pt-[95px] sm:pt-[120px] pb-[10px] px-6 md:px-[5%] max-w-[1400px] mx-auto text-left">
                    <motion.h3
                        className="uppercase mb-[10px] text-[#2352A5] font-[600] text-[13px] sm:text-[14px] md:text-[16px]"
                        style={{ fontFamily: "Sora", letterSpacing: "1px" }}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Our Works
                    </motion.h3>
                    <motion.h1
                        className="font-[700] text-black leading-[1.15] sm:leading-[1.05] mb-3 text-[30px] sm:text-[42px] md:text-[48px] lg:text-[56px]"
                        style={{ fontFamily: "Sora" }}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        Designed. Developed.
                        <br />
                        <motion.span 
                            className="text-[#0B74D1]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Delivered.
                        </motion.span>
                    </motion.h1>
                    <motion.p 
                        className="text-[#333] font-[400] text-[14px] sm:text-[16px] leading-[1.6] max-w-[820px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                    >
                        Every project we deliver blends creativity with technology — built
                        to solve problems, inspire users, and push possibilities forward.
                    </motion.p>
                </section>

                <section className="relative w-full py-6 px-6 md:px-[5%] bg-white text-left z-10">
                    <div className="max-w-[1400px] mx-auto">
                        <motion.div 
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        >
                            <motion.div 
                                className="w-full sm:w-auto flex-1"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                            >
                                <div className="bg-white/40 backdrop-blur-md border border-white/40 rounded-2xl shadow-md px-8 py-3">
                                    <div className="overflow-x-auto scrollbar-none">
                                        <div className="flex items-center gap-5 min-w-max">
                                            {[
                                                "All",
                                                "Animation",
                                                "Development",
                                                "Illustration",
                                                "Social Media",
                                                "Website",
                                                "App Design",
                                            ].map((c, idx) => (
                                                <motion.button
                                                    key={c}
                                                    onClick={() => setActiveCategory(c)}
                                                    aria-pressed={activeCategory === c}
                                                    className={`px-4 py-2 text-[13px] sm:text-[14px] rounded-lg font-medium transition-all ${activeCategory === c
                                                            ? "bg-gradient-to-r from-[#2352A5] to-[#3CA9E2] text-white shadow-md"
                                                            : "bg-white/70 text-[#08306F] hover:bg-white"
                                                        }`}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.4, delay: 0.9 + (idx * 0.05) }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    {c}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="w-full sm:w-[300px] md:w-[340px]"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                            >
                                <div
                                    className="flex items-center justify-between gap-3 bg-white/50 backdrop-blur-lg border border-[#D6D6D6]/60 rounded-[9999px] px-6 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_4px_18px_rgba(0,0,0,0.08)]"
                                    style={{ minHeight: "56px" }}
                                >
                                    <input
                                        placeholder="Search projects..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="flex-1 outline-none bg-transparent text-sm placeholder:text-gray-500"
                                        aria-label="Search projects"
                                    />
                                    {searchTerm && (
                                        <button
                                            onClick={() => setSearchTerm("")}
                                            aria-label="Clear search"
                                            className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-white/60 transition"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    )}
                                    <button
                                        aria-label="Search"
                                        className="p-2 rounded-full text-[#2352A5] hover:bg-white/60 transition"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#2352A5"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="11" cy="11" r="6" />
                                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>

                        {filteredProjects.length > 0 ? (
                            <>
                                {largeProjects.length > 0 && (
                                    <motion.div 
                                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
                                        key={`large-${activeCategory}-${debouncedSearchTerm}`}
                                    >
                                        {largeProjects.map((project, idx) => (
                                            <motion.div
                                                key={project.title}
                                                onClick={() => handleProjectClick(project)}
                                                className={`relative bg-white rounded-lg overflow-hidden shadow-md border border-transparent hover:border-[#2352A5] transition ${project.link ? "cursor-pointer" : ""}`}
                                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                transition={{ duration: 0.7, delay: 1.2 + (idx * 0.2) }}
                                                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                                            >
                                                <img
                                                    loading="lazy"
                                                    src={getWorkImg(project.img)}
                                                    alt={project.title}
                                                    className={`w-full h-[200px] md:h-[300px] lg:h-[320px] ${project.category === "App Design" ? "object-fill object-[center_30%]" : "object-cover"} rounded-t-lg`}
                                                />
                                                <div className="p-6 flex items-center justify-between">
                                                    <div className="pr-3">
                                                        <h3 className="text-[20px] md:text-[22px] font-[600] text-[#0B1730]">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-[13px] text-[#6B7280] mt-2">
                                                            {project.subtitle || project.desc}
                                                        </p>
                                                    </div>
                                                    <motion.button
                                                        aria-label={`Open ${project.title}`}
                                                        className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-gray-100 bg-[#F6F5F8]"
                                                        whileHover={{ scale: 1.2, rotate: -45 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <span className="text-[#2352A5] text-xl transform -rotate-45" aria-hidden>
                                                            →
                                                        </span>
                                                    </motion.button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}

                                {smallProjects.length > 0 && (
                                    <motion.div 
                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ staggerChildren: 0.15, delayChildren: 0.4 }}
                                        key={`small-${activeCategory}-${debouncedSearchTerm}`}
                                    >
                                        {smallProjects.map((project, idx) => (
                                            <motion.div
                                                key={project.title}
                                                onClick={() => handleProjectClick(project)}
                                                className={`relative bg-white rounded-lg overflow-hidden shadow-sm border border-transparent hover:border-[#2352A5] transition ${project.link ? "cursor-pointer" : ""}`}
                                                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                                transition={{ duration: 0.7, delay: 1.6 + (idx * 0.15) }}
                                                whileHover={{ y: -10, scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
                                            >
                                                <motion.img
                                                    src={getWorkImg(project.img)}
                                                    alt={project.title}
                                                    loading="lazy"
                                                    className={`w-full h-[180px] sm:h-[200px] md:h-[220px] ${project.category === "App Design" ? "object-fill object-[center_30%]" : "object-cover"} rounded-t-lg`}
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.4 }}
                                                />
                                                <div className="p-4 flex items-center justify-between">
                                                    <div>
                                                        <h4 className="text-[16px] font-[600]">{project.title}</h4>
                                                        <p className="text-[12px] text-[#6B7280] mt-1">
                                                            {project.subtitle || project.desc}
                                                        </p>
                                                    </div>
                                                    <motion.button
                                                        aria-label={`Open ${project.title}`}
                                                        className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-gray-100 bg-[#F6F5F8]"
                                                        whileHover={{ scale: 1.2, rotate: -45 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <span className="text-[#2352A5] text-xl transform -rotate-45" aria-hidden>
                                                            →
                                                        </span>
                                                    </motion.button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </>
                        ) : (
                            <motion.div 
                                className="text-center py-16"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                <div className="max-w-md mx-auto">
                                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.058 0-3.9.748-5.332 1.968M6.343 6.343A8 8 0 1017.657 17.657 8 8 0 006.343 6.343z" />
                                    </svg>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
                                    <p className="text-gray-500 text-sm">
                                        {debouncedSearchTerm ? (
                                            <>No projects match "<span className="font-medium text-[#2352A5]">{debouncedSearchTerm}</span>" in the {activeCategory === "All" ? "selected" : activeCategory} category.</>
                                        ) : (
                                            <>No projects available in the {activeCategory} category.</>
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
                                        >
                                            Clear filters
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 2.2 }}
                        >
                            <motion.button 
                                className="px-6 py-2 md:py-3.5 sm:py-2.5 rounded-md bg-gradient-to-r from-[#2352A5] to-[#3CA9E2] text-white text-lg shadow-md"
                                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(35, 82, 165, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <TextHover 
                                    text="Load More"
                                    customClass="text-white"
                                    noPadding={true}
                                />
                            </motion.button>
                        </motion.div>
                    </div>
                </section>

                <div ref={contactRef} className="mt-6 sm:mt-[40px]">
                    <motion.div 
                        className="w-full border-t border-gray-300 opacity-70 relative z-[5]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
                    />
                    <Contact />
                </div>
            </div>
        </motion.div>
    );
}
