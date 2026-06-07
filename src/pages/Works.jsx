import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TextHover from "../components/TextHover";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
const Synchrotask = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811311/codexnovas/hbsrqbqnrchliutvrfp6.png";
const SkillLoop = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811650/codexnovas/fapho2uecxflb36rc2ej.png";
const UrbanPilgrim = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811641/codexnovas/nc7tvhwqkitkpxmk0vkp.png";
const Ecommerce = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811488/codexnovas/lxycwmo9x5efbhgsfmm6.png";
const TakshilaFM = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811758/codexnovas/kwzwkydevd5s0baxua7f.png";
import CurveGlow from "../assets/Works/curve-glow.png";
import CornerGlow from "../assets/Works/corner-glow.png";
const Animation1 = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811755/codexnovas/udx6lmctkoouw9y66khr.gif";
const Animation2 = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811659/codexnovas/y54tplbgb4ou0mr1gyb8.gif";
const Animation3 = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811719/codexnovas/vbo84bopb2ln3l1rxjmz.gif";
const Animation4 = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811678/codexnovas/cpdjkbvbowpmgs5zgm5i.gif";
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

/**Works Section*/
const projectsData = [
    { title: "Synchrotask", desc: "AI-Powered Productivity with Human Precision", img: "synchrotask", category: "Website" },
    { title: "Skill Loop", desc: "AI-Powered Productivity with Human Precision", img: "skillloop", category: "Website" },
    { title: "Urban Pilgrim", desc: "Urban Wellness Rooted in Indian Wisdom", img: "urbanpilgrim", category: "Website" },
    { title: "Ecommerce Website", desc: "AI-Powered Productivity", img: "ecommerce", category: "Website" },
    { title: "Takshila FM", desc: "AI-Powered Productivity", img: "takshilafm", category: "Website" },
    { title: "Water filling Animation", img: "animation5", category: "Animation" },
    { title: "Smoky Animation", img: "animation3", category: "Animation" },
    { title: "Loading Animation", img: "animation1", category: "Animation" },
    { title: "Button animation", img: "animation2", category: "Animation" },
    { title: "Jumping Animation", img: "animation4", category: "Animation" },
    { title: "ECommerce Website", img: "ecommercewebsite1", category: "Website" },
    { title: "Cohesive Minds", img: "cohesiveminds", category: "Website" },
    { title: "Shagun", img: "shagun", category: "Website" },
    { title: "Shoe Website", img: "shoewebsite", category: "Website" },
    { title: "Travel and Tours", img: "travelandtours", category: "Website" },
    { title: "Winz Infotech", img: "winzinfotech", category: "Website" },
    { title: "ECommerce Website", img: "ecommercewebsite2", category: "Website" },
    { title: "Gen Lokal App", img: "genlokal", category: "App Design" },
    { title: "Gym App", img: "gymapp", category: "App Design" },
    { title: "Vicina Customer App", img: "vicinacustomer", category: "App Design" },
    { title: "Vicina Delivery App", img: "vicinadelivery", category: "App Design" },
    { title: "Vicina Shop App", img: "vicinashop", category: "App Design" },
];

/**Categories- Various options as mentioned in the figma protoype */
const categories = ["All", "Animation", "Development", "Illustration", "Social Media", "Website", "App Design"];

const Works = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("All");
    // mobile-only: number of visible project cards (shows 3, then +3 per Load More)
    const [mobileVisibleCount, setMobileVisibleCount] = useState(3);
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const snap = await getDocs(collection(db, "works"));
                const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                if (list.length > 0) {
                    setProjectList(list);
                } else {
                    setProjectList(projectsData);
                }
            } catch (err) {
                console.error("Error loading works: ", err);
                setProjectList(projectsData);
            }
        };
        fetchProjects();
    }, []);

    const filteredProjects =
        activeCategory === "All"
            ? projectList
            : projectList.filter((p) => p.category === activeCategory);

    // Reset mobile visible count when category changes to ensure mobile shows first 3 of new filter
    useEffect(() => {
        setMobileVisibleCount(3);
    }, [activeCategory]);

    const handleProjectClick = (project) => {
        if (project.link) {
            window.open(project.link, "_blank");
        }
    };

    // --- Mobile Glassmorphism Class ---
    // Using a class for the new glass effect: low white background, slight border, and backdrop blur.
    const glassEffectClassMobile = "bg-white/5 border border-white/10 backdrop-blur-sm";

    return (
        <section className="relative w-full py-8 px-6 md:px-12 bg-black overflow-hidden">

            <img
                src={CornerGlow}
                loading="lazy"
                alt="Glow"
                className="absolute top-0 right-0 w-[300px] md:w-[500px] pointer-events-none select-none"
            />
            <img
                src={CurveGlow}
                loading="lazy"
                alt="Glow"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] pointer-events-none select-none"
            />
            <div className="relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold"
                        style={{ fontFamily: "Sora" }}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <span className="text-white">Our </span>
                        <span className="bg-gradient-to-r from-[#0A5FFF] to-[#4FA3FF] bg-clip-text text-transparent">
                            Works
                        </span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="flex justify-center mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    {/* 1. Mobile: horizontal scroll showing only a few category chips; Updated with Glass effect for mobile */}
                    {/* Note: The desktop styling (md:bg-black border border-white/10) is now inside the md: flex-wrap to keep it separate */}
                    <motion.div
                        className={`flex items-center gap-2 rounded-xl px-2 py-2 overflow-x-auto whitespace-nowrap md:flex-wrap md:justify-center ${glassEffectClassMobile} md:bg-black md:border-gray-700 md:border md:backdrop-blur-none`}
                        style={{ WebkitOverflowScrolling: 'touch' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.08
                                }
                            }
                        }}
                    >
                        {categories.map((cat) => (
                            <motion.button
                                key={cat}
                                // inline-block + whitespace-nowrap (mobile) allow horizontal scrolling on small screens
                                // md:whitespace-normal restores wrap behavior on larger screens (no desktop change)
                                className={`inline-block px-4 sm:px-6 py-2 text-sm sm:text-base font-medium transition rounded-lg whitespace-nowrap md:whitespace-normal ${activeCategory === cat
                                    ? "bg-gradient-to-r from-[#016FAE] to-[#4FA3FF] text-white shadow-lg"
                                    : "text-white/70 hover:text-white md:text-gray-300"
                                    }`}
                                onClick={() => setActiveCategory(cat)}
                                variants={{
                                    hidden: { scale: 0.8, opacity: 0 },
                                    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } }
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* MOBILE: show limited number of project cards (single column), expand by 3 on Load More */}
                <div className="md:hidden">
                    <motion.div
                        key={activeCategory}
                        className="flex flex-col gap-6 mb-6 items-center"
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                    >
                        {filteredProjects.slice(0, mobileVisibleCount).map((project, index) => (
                            <motion.div
                                key={index}
                                onClick={() => handleProjectClick(project)}
                                className="flex flex-col w-[92%] max-w-[440px] mx-auto cursor-pointer"
                                variants={{
                                    hidden: { y: 50, opacity: 0 },
                                    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                            >
                                <motion.div
                                    className="border border-gray-800 hover:border-[#016FAE] transition aspect-[4/3] overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={getWorkImg(project.img)}
                                        loading="lazy"
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <div className="flex items-center justify-between mt-3">
                                    <div className="text-left flex-1 pr-3">
                                        {/* 3. Mobile: Ensure title and description are on separate lines and description clamps to 2 lines */}
                                        <h3 className="text-lg font-semibold text-white leading-tight mb-1">{project.title}</h3>
                                        <p
                                            className="text-sm text-white/60 leading-tight"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {project.desc}
                                        </p>
                                    </div>
                                    {/* 2. Mobile: Updated arrow button with Glass effect */}
                                    <motion.button
                                        className={`w-10 h-10 rounded-full flex items-center justify-center transition focus:outline-none ${glassEffectClassMobile} hover:bg-gradient-to-r hover:from-[#016FAE] hover:to-[#4FA3FF] active:bg-gradient-to-r active:from-[#016FAE] active:to-[#4FA3FF]`}
                                        aria-label={`Open ${project.title}`}
                                        whileHover={{ scale: 1.1, rotate: -45 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <span className="text-white text-xl transform -rotate-45">→</span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="text-center mt-4">
                        {mobileVisibleCount < filteredProjects.length ? (
                            <motion.button
                                onClick={() => navigate('/works')}
                                className="px-6 py-3 bg-gradient-to-r from-[#016FAE] to-[#4FA3FF] text-white rounded-lg hover:opacity-90 transition"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <TextHover 
                                    text="Load More"
                                    customClass="text-white"
                                    noPadding={true}
                                />
                            </motion.button>
                        ) : null}
                    </div>
                </div>

                {/* DESKTOP & TABLET: original layout preserved exactly */}
                <div className="hidden md:block">
                    <motion.div
                        key={`desktop-top-${activeCategory}`}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_40%] justify-center gap-6 lg:gap-x-4 mb-6"
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        {filteredProjects.slice(0, 2).map((project, index) => (
                            <motion.div
                                key={index}
                                onClick={() => handleProjectClick(project)}
                                className="flex flex-col w-full cursor-pointer"
                                variants={{
                                    hidden: { scale: 0.85, opacity: 0, rotateX: -10 },
                                    visible: {
                                        scale: 1,
                                        opacity: 1,
                                        rotateX: 0,
                                        transition: { duration: 0.7, ease: "easeOut" }
                                    }
                                }}
                            >
                                <motion.div
                                    className="border border-gray-800 hover:border-[#016FAE] transition aspect-[4/3] overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={getWorkImg(project.img)}
                                        loading="lazy"
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <div className="flex items-center justify-between mt-3">
                                    <div className="text-left flex-1 pr-3">
                                        <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                                        <p
                                            className="text-sm text-gray-400"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {project.desc}
                                        </p>
                                    </div>
                                    <motion.button
                                        className={`w-10 h-10 rounded-full flex items-center justify-center transition focus:outline-none ${glassEffectClassMobile} hover:bg-gradient-to-r hover:from-[#016FAE] hover:to-[#4FA3FF] active:bg-gradient-to-r active:from-[#016FAE] active:to-[#4FA3FF]`}
                                        aria-label={`Open ${project.title}`}
                                        whileHover={{ scale: 1.15, rotate: -45 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <span className="text-white text-xl transform -rotate-45">→</span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        key={`desktop-bottom-${activeCategory}`}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[27%_27%_27%] justify-center gap-6 lg:gap-x-4"
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                    >
                        {filteredProjects.slice(2).map((project, index) => (
                            <motion.div
                                key={index}
                                onClick={() => handleProjectClick(project)}
                                className="flex flex-col w-full cursor-pointer"
                                variants={{
                                    hidden: { y: 60, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { duration: 0.6, ease: "easeOut" }
                                    }
                                }}
                            >
                                <motion.div
                                    className="border border-gray-800 hover:border-[#016FAE] transition aspect-square overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={getWorkImg(project.img)}
                                        loading="lazy"
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="text-left flex-1 pr-3">
                                        <h3 className="text-md font-semibold text-white mb-1">{project.title}</h3>
                                        <p
                                            className="text-sm text-gray-400"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {project.desc}
                                        </p>
                                    </div>
                                    <motion.button
                                        className={`w-9 h-9 rounded-full flex items-center justify-center transition focus:outline-none ${glassEffectClassMobile} hover:bg-gradient-to-r hover:from-[#016FAE] hover:to-[#4FA3FF] active:bg-gradient-to-r active:from-[#016FAE] active:to-[#4FA3FF]`}
                                        aria-label={`Open ${project.title}`}
                                        whileHover={{ scale: 1.15, rotate: -45 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <span className="text-white text-lg transform -rotate-45">→</span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="text-center mt-10"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.button
                            onClick={() => navigate('/works')}
                            className="px-6 py-3 bg-gradient-to-r from-[#016FAE] to-[#4FA3FF] text-white rounded-lg hover:opacity-90 transition"
                            whileHover={{ scale: 1.05 }}
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
            </div>
        </section>
    );
};

export default Works;
