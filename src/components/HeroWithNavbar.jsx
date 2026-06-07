import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";

import ellipse from "../assets/Home/Ellipse.png";

import brand1 from "../assets/About/brand1.png";
import brand2 from "../assets/About/brand2.png";
import brand3 from "../assets/About/brand3.png";
import brand4 from "../assets/About/brand4.png";

import R1_1 from "../assets/Home/Rectangles2/Rectangle1big.png";
import R1_2 from "../assets/Home/Rectangles2/Rectangle2small.png";
import R2_1 from "../assets/Home/Rectangles3/Rectangle3big.png";
import R2_2 from "../assets/Home/Rectangles3/Rectangle4small.png";

const layouts = [
    {
        rectangles: [
            { src: R1_1, style: { top: "95px", left: "50%", width: "300px", height: "400px" } },
            { src: R1_2, style: { top: "400px", left: "68%", width: "270px", height: "250px" } },
        ],
    },
    {
        rectangles: [
            { src: R2_1, style: { top: "95px", left: "50%", width: "300px", height: "400px" } },
            { src: R2_2, style: { top: "400px", left: "68%", width: "270px", height: "250px" } },
        ],
    },
];

const topics = [
    "Custom Website Development",
    "App Development",
    "Graphics Designing",
    "Website Audit",
    "Google My Business",
];

export default function HeroWithNavbar() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("up");
    const [offset, setOffset] = useState(0);
    const [boxHeight, setBoxHeight] = useState(0);
    const [groupWidth, setGroupWidth] = useState(0);
    const [open, setOpen] = useState(false);

    const boxRef = useRef(null);
    const measureRefs = useRef({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (id, path) => {
        if (location.pathname === "/") {
            if (id === "contact") {
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
                return;
            }
            navigate(path);
        } else {
            navigate(path);
        }
    };

    useEffect(() => {
        if (boxRef.current) setBoxHeight(boxRef.current.offsetHeight + 18);
    }, []);

    useEffect(() => {
        const group = ["App Development", "Graphics Designing", "Google My Business"];
        let maxWidth = 0;
        for (const topic of group) {
            const width = measureRefs.current[topic]?.offsetWidth || 0;
            if (width > maxWidth) maxWidth = width;
        }
        if (maxWidth) setGroupWidth(maxWidth + 80);
    }, []);

    useEffect(() => {
        if (!boxHeight) return;
        const interval = setInterval(() => {
            setOffset(direction === "up" ? -boxHeight : 0);
            setIndex((prev) => (prev + 1) % layouts.length);
            setDirection((d) => (d === "up" ? "down" : "up"));
        }, 3000);
        return () => clearInterval(interval);
    }, [direction, boxHeight]);

    const current = layouts[index];
    const activeIndex = offset === 0 ? 0 : 1;

    return (
        <section
            id="hero"
            className="relative overflow-hidden mb-4 sm:mb-6 md:mb-8"
            style={{
                width: "100%",
                background: "#ffffff",
                minHeight: "auto",
            }}
        >
            {/* Top gradient layer - responsive height */}
            <div
                aria-hidden
                className="absolute top-0 left-0 w-full z-0"
                style={{
                    height: "50vh",
                    background: "linear-gradient(180deg, #e6f6ff 0%, #d7f0ff 35%, rgba(255,255,255,0.95) 100%)",
                    borderBottomLeftRadius: "30% 15%",
                    borderBottomRightRadius: "30% 15%",
                    pointerEvents: "none",
                }}
            />

            {/* Right-side atmospheric gradient (desktop only) */}
            <div
                aria-hidden
                className="absolute top-0 right-0 h-full z-0 hidden xl:block"
                style={{
                    width: '45%',
                    background: 'linear-gradient(90deg, rgba(230,246,255,0) 0%, rgba(213,238,255,0.6) 25%, rgba(135,195,235,0.6) 55%, rgba(52,138,217,0.9) 100%)',
                    opacity: 1,
                    filter: 'blur(18px)',
                    transform: 'translateX(2%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Navbar */}
            <nav
                className="flex items-center justify-between px-4 sm:px-6 md:px-8 h-[60px] sm:h-[70px] md:h-[80px] lg:h-[85px] fixed top-0 left-0 z-50"
                style={{
                    width: "100%",
                    background: "#FFFFFFB5",
                    boxShadow: "0px 4px 62.9px 0px #00000026",
                    backdropFilter: "blur(10px)",
                }}
            >
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        loading="lazy"
                        alt="Code X Novas"
                        className="h-[32px] sm:h-[40px] md:h-[48px] lg:h-[56px] w-auto transition-all duration-300"
                    />
                </Link>

                <div className="hidden lg:flex items-center gap-4 xl:gap-6 absolute left-1/2 transform -translate-x-1/2">
                    <button onClick={() => handleNavClick("services", "/services")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">Services</button>
                    <button onClick={() => handleNavClick("works", "/works")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">Works</button>
                    <button onClick={() => handleNavClick("products", "/products")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">Products</button>
                    <button onClick={() => handleNavClick("blogs", "/blogs")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">Blogs</button>
                    <button onClick={() => handleNavClick("about", "/about")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">About</button>
                    <button onClick={() => handleNavClick("career", "/career")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">Career</button>
                </div>

                <div className="hidden lg:flex items-center">
                    <button
                        onClick={() => handleNavClick("contact", "/contact")}
                        className="relative overflow-hidden px-5 xl:px-6 py-2 xl:py-2.5 rounded-md font-poppins text-[14px] xl:text-[16px] text-white hover:opacity-90 transition-all"
                        style={{
                            background: `linear-gradient(90deg, #2352A5 0%, #137DD1 20%, #02A7FD 45%, #42ACEF 70%, #7DE2FF 92%, #B7F1FF 100%)`,
                            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
                        }}
                    >
                        Contact us
                    </button>
                </div>

                <div className="flex items-center lg:hidden">
                    <button
                        className="text-gray-700 p-1"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close menu" : "Open menu"}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {open && (
                <div
                    className="fixed left-0 w-full bg-white shadow-lg flex flex-col p-5 sm:p-6 space-y-4 sm:space-y-5 lg:hidden z-[9999]"
                    style={{
                        top: "60px",
                    }}
                >
                    <button onClick={() => { handleNavClick("services", "/services"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">Services</button>
                    <button onClick={() => { handleNavClick("works", "/works"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">Works</button>
                    <button onClick={() => { handleNavClick("products", "/products"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">Products</button>
                    <button onClick={() => { handleNavClick("blogs", "/blogs"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">Blogs</button>
                    <button onClick={() => { handleNavClick("about", "/about"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">About</button>
                    <button onClick={() => { handleNavClick("career", "/career"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">Career</button>
                    <button
                        onClick={() => { handleNavClick("contact", "/contact"); setOpen(false); }}
                        className="w-full text-center px-6 py-2.5 sm:py-3 rounded-md font-poppins text-[15px] sm:text-[16px] text-white transition-all hover:opacity-90"
                        style={{
                            background: "linear-gradient(90deg, #2352A5 0%, #137DD1 50%, #3CA9E2 100%)",
                        }}
                    >
                        Contact us
                    </button>
                </div>
            )}

            <div className="relative flex flex-col lg:flex-row items-center justify-between sm:px-6 md:px-12 lg:px-16 xl:px-20 z-10 min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] lg:gap-8">

                <img
                    loading="lazy"
                    src={ellipse}
                    alt="background ellipse"
                    className="absolute left-[-2px] top-20 w-[500px] lg:w-[600px] opacity-90 z-0 hidden lg:block"
                />

                {/* Mobile/Tablet View (below lg breakpoint) */}
                <div className="w-full lg:hidden pt-36 sm:pt-20 pb-5 bg-gradient-to-b from-[#E6F4FF] to-white">
                    <div className="text-center">
                        {/* Heading */}
                        <motion.h1
                            className="font-sora font-semibold text-black mb-4 text-[26px] sm:text-[32px] leading-[120%]"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            We Build <span className="text-[#2352A5]">Products</span> <br /> that Work – <span className="text-[#2352A5]">Fast.</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="font-sora py-4 px-5 text-black text-[14px] sm:text-[15px] leading-[150%] max-w-md mx-auto mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            From startup tools to enterprise systems – Code-X-Novas crafts scalable, AI-powered solutions that redefine productivity.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            {/* Explore Button */}
                            <button
                                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                                className="min-w-[220px] px-6 py-3 rounded-md font-semibold text-white text-[14px]"
                                style={{
                                    background: `linear-gradient(90deg,#2352A5 0%,#137DD1 20%,#02A7FD 45%,#42ACEF 70%,#7DE2FF 92%,#B7F1FF 100%)`,
                                    boxShadow: "0px 4px 15px rgba(0,0,0,0.15)",
                                }}
                            >
                                Explore Our Products
                            </button>

                            {/* Partner Button */}
                            <button
                                className="min-w-[180px] px-6 py-3 rounded-md text-[#1E5FB3] font-semibold text-[14px] border-[2px] border-[#1E5FB3] hover:bg-sky-50 transition-all bg-transparent"
                            >
                                Partner With Us
                            </button>
                        </motion.div>

                        {/* Trusted Brands */}
                        <motion.div
                            className="w-full bg-white pt-6 flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <h3 className="text-[#2352A5] font-semibold tracking-wide text-[12px] mb-10 px-4">
                                TRUSTED BY CURRENT AND SOON TO BE WORLD-CLASS BRANDS
                            </h3>
                            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap px-4">
                                <img loading="lazy" src={brand1} alt="Urban Pilgrim" className="h-8 sm:h-9 md:h-10 object-contain" />
                                <img loading="lazy" src={brand2} alt="TakshaFM" className="h-8 sm:h-9 md:h-10 object-contain" />
                                <img loading="lazy" src={brand3} alt="Shagun" className="h-8 sm:h-9 md:h-10 object-contain" />
                                <img loading="lazy" src={brand4} alt="SkillLoop" className="h-8 sm:h-9 md:h-10 object-contain" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Desktop View (lg and above) - Left Side */}
                <motion.div
                    className="w-full lg:w-[48%] z-10 flex-shrink-0 text-left hidden lg:block mt-16 xl:mt-20"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="font-sora font-semibold text-black mb-6 text-[40px] xl:text-[52px] 2xl:text-[60px] leading-[120%]"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We Build 
                        <motion.span
                            className="text-[#2352A5]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            {" "} Products
                        </motion.span> 
                        <br /> that Work – 
                        <motion.span
                            className="text-[#2352A5]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            Fast.
                        </motion.span>
                    </motion.h1>
                    
                    <motion.p
                        className="font-sora text-black mb-8 text-[16px] xl:text-[19px] 2xl:text-[21px] leading-[140%] font-normal"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        From startup tools to enterprise systems – Code-X-Novas crafts scalable, AI-powered solutions that redefine productivity
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4 lg:gap-5 xl:gap-6 mt-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        <motion.button
                            onClick={() => {
                                const section = document.getElementById("products");
                                if (section) section.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="px-5 lg:px-6 xl:px-7 py-2.5 lg:py-3 xl:py-3.5 rounded-md font-semibold text-white text-[14px] lg:text-[15px] xl:text-[16px]"
                            style={{
                                background: `linear-gradient(90deg,#2352A5 0%,#137DD1 20%,#02A7FD 45%,#42ACEF 70%,#7DE2FF 92%,#B7F1FF 100%)`,
                                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
                            }}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.25)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Our Products
                        </motion.button>

                        <motion.button
                            className="px-5 lg:px-6 xl:px-7 py-2.5 lg:py-3 xl:py-3.5 rounded-md text-[#1E5FB3] font-medium text-[14px] lg:text-[15px] xl:text-[16px] hover:bg-sky-50 border-[#1E5FB3] border-[2.5px] text-center bg-transparent transition-all"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Partner With Us
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Desktop Interface - Right Side (lg and above) */}
                <motion.div
                    className="relative w-full lg:w-[48%] z-10 hidden lg:flex items-center justify-center mt-16"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="relative w-full h-[500px] lg:h-[550px] xl:h-[600px]">
                        {current.rectangles.map((rect, i) => (
                            <motion.img
                                key={i}
                                src={rect.src}
                                loading="lazy"
                                alt={`Rectangle ${i + 1}`}
                                className="absolute"
                                style={{
                                    ...rect.style,
                                    top: i === 0 ? '70px' : '370px',
                                    left: i === 0 ? '15%' : '45%',
                                    width: i === 0 ? '280px' : '240px',
                                    height: i === 0 ? '380px' : '220px',
                                }}
                                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 + (i * 0.2) }}
                                whileHover={{ scale: 1.05, rotateY: -5 }}
                            />
                        ))}
                        <div
                            className="absolute left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                            style={{ height: boxHeight * 3.5 }}
                        >
                            <motion.div animate={{ y: offset }} transition={{ duration: 0.5, ease: "easeInOut" }} className="flex flex-col space-y-[8px]">
                                {topics.map((topic, i) => {
                                    const isActive = i === activeIndex;
                                    const group = ["App Development", "Graphics Designing", "Google My Business"];
                                    let widthStyle = "fit-content";
                                    if (group.includes(topic) && groupWidth) widthStyle = `${groupWidth - 40}px`;
                                    if (topic === "Custom Website Development" && measureRefs.current[topic]) {
                                        const cWidth = measureRefs.current[topic]?.offsetWidth || 0;
                                        const capped = Math.min(cWidth + 40, 340);
                                        widthStyle = `${capped}px`;
                                    }
                                    return (
                                        <div
                                            key={i}
                                            ref={(el) => {
                                                if (el) measureRefs.current[topic] = el;
                                                if (i === 0) boxRef.current = el;
                                            }}
                                            className="relative flex items-start bg-white"
                                            style={{
                                                transform: "scale(0.75)",
                                                width: widthStyle,
                                                padding: "16px 32px 12px 20px",
                                                minHeight: "45px",
                                                boxSizing: "border-box",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontFamily: "Sora",
                                                    fontWeight: 500,
                                                    fontSize: "18px",
                                                    color: isActive ? "#2352A5" : "#000000",
                                                }}
                                            >
                                                {topic}
                                            </span>
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="absolute top-3 right-3 transform rotate-90"
                                            >
                                                <path d="M20 4H8V16" stroke={isActive ? "#2352A5" : "#000000"} strokeWidth="2" />
                                            </svg>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Tablet Interface (md to lg) - Removed as content now handled by mobile/desktop views */}
                <motion.div
                    className="hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.2, delayChildren: 0.7 }}
                    >
                        {current.rectangles.map((rect, i) => (
                            <motion.img
                                key={i}
                                loading="lazy"
                                src={rect.src}
                                alt={`Rectangle ${i + 1}`}
                                className="w-[220px] sm:w-[110px] h-auto rounded shadow"
                                initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 + (i * 0.2) }}
                                whileHover={{ scale: 1.1, rotateY: -5 }}
                            />
                        ))}
                    </motion.div>


                    <motion.div
                        animate={{ y: offset }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-3 mt-6 ml-3"
                    >
                        {topics.map((topic, i) => {
                            const isActive = i === activeIndex;
                            return (
                                <div
                                    key={i}
                                    className="relative flex items-start bg-white shadow px-6 py-3 rounded"
                                >
                                    <span
                                        style={{
                                            fontFamily: "Sora",
                                            fontWeight: 200,
                                            fontSize: "16px",
                                            color: isActive ? "#2352A5" : "#000000",
                                        }}
                                    >
                                        {topic}
                                    </span>
                                </div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Mobile Rectangle Interface - Hidden for cleaner layout */}
                <motion.div
                    className="hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <motion.div
                        className="relative w-[85%] sm:w-[70%] max-w-[220px] flex flex-col items-center"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                    >
                        <motion.img
                            src={current.rectangles[0].src}
                            loading="lazy"
                            alt="Big Rectangle"
                            className="w-full rounded shadow"
                            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        />

                        <motion.img
                            src={current.rectangles[1].src}
                            alt="Small Rectangle"
                            loading="lazy"
                            className="w-[65%] sm:w-[60%] max-w-[120px] rounded shadow absolute bottom-[-12px] right-[-12px]"
                            initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        />

                        <motion.div
                            animate={{ y: offset }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 flex flex-col justify-center items-center gap-[-12px]"
                        >
                            {topics.map((topic, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <div
                                        key={i}
                                        className="relative flex items-center justify-center bg-white shadow rounded"
                                        style={{
                                            transform: "scale(0.55)",
                                            padding: "12px 24px",
                                            minHeight: "40px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "Sora",
                                                fontWeight: 500,
                                                fontSize: "14px",
                                                color: isActive ? "#2352A5" : "#000000",
                                            }}
                                        >
                                            {topic}
                                        </span>

                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute top-1 right-1 transform rotate-90"
                                        >
                                            <path
                                                d="M20 4H8V16"
                                                stroke={isActive ? "#2352A5" : "#000000"}
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
