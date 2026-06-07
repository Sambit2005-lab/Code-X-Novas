import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UIUX from "../assets/Career/uiux.png";
import Backend from "../assets/Career/backend.png";
import AI from "../assets/Career/ai.png";
import Community from "../assets/Career/community.png";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const defaultCareers = [
    { title: "UI/ UX Designer", img: UIUX },
    { title: "Backend Developer", img: Backend },
    { title: "AI Prompt Engineer", img: AI },
    { title: "Community Evangelist", img: Community },
];

const getCareerImg = (imgName) => {
    if (!imgName) return UIUX;
    if (typeof imgName !== "string") return imgName;
    const lower = imgName.toLowerCase();
    if (lower.includes("uiux") || lower.includes("ui/ux")) return UIUX;
    if (lower.includes("backend")) return Backend;
    if (lower.includes("ai")) return AI;
    if (lower.includes("community")) return Community;
    return imgName;
};

const Careers = () => {
    const navigate = useNavigate();
    const [careerList, setCareerList] = useState([]);

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const snap = await getDocs(collection(db, "careers"));
                const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                if (list.length > 0) {
                    setCareerList(list);
                } else {
                    setCareerList(defaultCareers);
                }
            } catch (err) {
                console.error("Error loading careers: ", err);
                setCareerList(defaultCareers);
            }
        };
        fetchCareers();
    }, []);

    return (
        <section className="relative w-full py-10 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#fdfdfd] to-[#f5f9ff] text-center overflow-hidden">
            <span className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-br from-blue-200 to-transparent opacity-5 rounded-full blur-2xl pointer-events-none"></span>
            <span className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-blue-200 to-transparent opacity-5 rounded-full blur-2xl pointer-events-none"></span>

            <motion.h2
                className="text-2xl sm:text-4xl md:text-4xl font-bold mb-3 relative z-10 leading-tight"
                style={{ fontFamily: "Sora" }}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <span className="text-black">Join Our Product </span>
                <span className="text-blue-600">Team / Careers</span>
            </motion.h2>
            
            <motion.p 
                className="text-black mb-12 text-base md:text-lg relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Talent Recruitment
            </motion.p>

            <motion.div 
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 relative z-10"
                initial="hidden"
                whileInView="visible"
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
                {careerList.map((career, idx) => (
                    <motion.div
                        key={idx}
                        onClick={() => navigate("/career")}
                        className="relative group overflow-hidden cursor-pointer rounded-none md:rounded-md"
                        variants={{
                            hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
                            visible: { 
                                scale: 1, 
                                opacity: 1, 
                                rotateY: 0,
                                transition: { duration: 0.7, ease: "easeOut" } 
                            }
                        }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <motion.img
                            src={getCareerImg(career.img)}
                            loading="lazy"
                            alt={career.title}
                            className="w-full h-54 md:h-auto md:aspect-square object-cover transition-transform duration-500 group-hover:scale-105 rounded-none md:rounded-md"
                        />

                        <div
                            className="absolute w-full flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out bottom-4 md:bottom-6 md:group-hover:bottom-1/2 md:group-hover:translate-y-1/2 p-3"
                        >
                            <h3 className="text-white text-sm md:text-lg font-semibold drop-shadow-md transition-all duration-500 leading-tight">
                                {career.title}
                            </h3>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate("/career");
                                }}
                                className="hidden md:inline-flex mt-3 px-4 py-2 bg-white text-gray-800 font-medium rounded-md shadow-lg transition-all duration-300 md:opacity-0 md:group-hover:opacity-100"
                            >
                                Join Now
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div 
                className="flex justify-center relative z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                <motion.button 
                    onClick={() => navigate("/career")}
                    className="relative flex items-center overflow-hidden rounded-md transition-all group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#016FAE] to-[#4FA3FF] w-0 group-hover:w-full transition-all duration-300 rounded-md"></span>

                    <span className="relative z-10 flex items-center justify-center w-12 h-10 rounded-sm bg-blue-600 text-white font-bold mr-3 transition-all duration-300">
                        &gt;
                    </span>

                    <span className="relative z-10 pr-6 font-medium text-gray-800 md:group-hover:text-white transition-all duration-300">
                        Join the Build Force
                    </span>
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Careers;
