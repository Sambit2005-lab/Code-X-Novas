import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProductsBuilt() {
    const navigate = useNavigate();

    const products = [
        { name: "VidyaOS 360", color: "from-blue-600 via-indigo-500 to-blue-400" },
        { name: "SAS 360", color: "from-cyan-500 via-blue-500 to-indigo-600" },
        { name: "Classivo 360", color: "from-indigo-600 via-purple-600 to-pink-500" },
        { name: "Vrise Network", color: "from-purple-500 via-pink-500 to-red-500" }
    ];

    // Double the list to create a seamless infinite scrolling loop
    const tickerItems = [...products, ...products, ...products];

    return (
        <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50/40 overflow-hidden font-sora">
            {/* Soft decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-50/30 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                
                {/* Header Section */}
                <div className="max-w-3xl mx-auto mb-16 text-center">
                    <motion.span 
                        className="uppercase text-[#2352A5] font-semibold text-xs sm:text-sm tracking-[2.5px] mb-3 block"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Proprietary Ecosystem
                    </motion.span>
                    <motion.h2 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 leading-tight"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Products Built by <span className="bg-gradient-to-r from-[#2352A5] to-[#02A7FD] bg-clip-text text-transparent">Code-X-Novas</span>
                    </motion.h2>
                </div>

                {/* Highly Stylish Horizontal Scroll Marquee */}
                <div className="relative w-full py-10 my-8 overflow-hidden bg-white/40 border-y border-gray-200/50 backdrop-blur-[2px] flex items-center">
                    {/* Shadow overlay gradient left */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    
                    {/* Shadow overlay gradient right */}
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Marquee sliding track */}
                    <div className="flex gap-16 md:gap-24 animate-infinite-scroll w-max py-2">
                        {tickerItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-center gap-6 cursor-pointer select-none group"
                                onClick={() => navigate("/products")}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            >
                                <span className={`text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:drop-shadow-[0_0_20px_rgba(3,104,255,0.25)] transition-all duration-300`}>
                                    {item.name}
                                </span>
                                <span className="text-2xl sm:text-4xl text-gray-200 group-hover:text-blue-500 transition-colors font-bold">•</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-16 max-w-2xl mx-auto flex flex-col items-center">
                    <motion.div 
                        className="w-1.5 h-10 bg-gradient-to-b from-[#2352A5] to-transparent rounded-full mb-6"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    />

                    <motion.h4 
                        className="text-xl sm:text-3xl font-bold text-gray-950 mb-3 leading-snug"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Built for real problems. Designed for real users.
                    </motion.h4>

                    <motion.p 
                        className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8 max-w-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        From idea to product — built, deployed, and continuously improved by Code-X-Novas.
                    </motion.p>

                    <motion.button
                        onClick={() => navigate("/products")}
                        className="relative overflow-hidden px-8 py-3.5 rounded-full font-bold text-white text-sm tracking-wider shadow-md flex items-center gap-2 group"
                        style={{
                            background: "linear-gradient(90deg, #2352A5 0%, #137DD1 40%, #02A7FD 100%)"
                        }}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(3, 104, 255, 0.25)" }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Explore Our Products 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </div>

            </div>

            {/* Custom keyframes injected via style tag for infinite horizontal scroll */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes infinite-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 25s linear infinite;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
}
