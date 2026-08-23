import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { School, UserCheck, BookOpen, Users, ArrowRight } from "lucide-react";

export default function ProductsBuilt() {
    const navigate = useNavigate();

    const productList = [
        {
            title: "VidyaOS 360",
            subtitle: "School Digital Management Platform",
            desc: "A unified digital ecosystem for schools to manage administration, teachers, students, parents, academics, fees, and communication.",
            icon: School,
            color: "from-blue-500 to-indigo-600",
            lightBg: "bg-blue-50 text-blue-600 border-blue-100",
            shadow: "shadow-blue-500/5"
        },
        {
            title: "SAS 360",
            subtitle: "AI-Powered Attendance Automation",
            desc: "A smart attendance platform that uses AI classroom recognition to automate attendance without expensive biometric hardware.",
            icon: UserCheck,
            color: "from-cyan-500 to-blue-500",
            lightBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
            shadow: "shadow-cyan-500/5"
        },
        {
            title: "Classivo 360",
            subtitle: "Coaching Institute Management Platform",
            desc: "One platform to manage students, batches, fees, attendance, tests, faculty and parent communication for coaching institutes.",
            icon: BookOpen,
            color: "from-indigo-500 to-purple-600",
            lightBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
            shadow: "shadow-indigo-500/5"
        },
        {
            title: "Vrise Network",
            subtitle: "Community & Social Engagement Platform",
            desc: "A modern community platform designed to bring people together through interest-based groups, participation and connections.",
            icon: Users,
            color: "from-purple-500 to-pink-500",
            lightBg: "bg-purple-50 text-purple-600 border-purple-100",
            shadow: "shadow-purple-500/5"
        }
    ];

    // Triple list for infinite scrolling track loop
    const scrollCards = [...productList, ...productList, ...productList];

    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50/40 overflow-hidden font-sora">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-50/30 rounded-full blur-[140px] pointer-events-none z-0" />

            <div className="w-full relative z-10">
                
                {/* Header Section */}
                <div className="max-w-4xl mx-auto mb-14 px-6 text-center">
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
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 mb-6 leading-tight"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        Products Built by <span className="bg-gradient-to-r from-[#2352A5] to-[#02A7FD] bg-clip-text text-transparent">Code-X-Novas</span>
                    </motion.h2>

                    <motion.p 
                        className="text-base sm:text-lg text-gray-700 font-medium mb-3 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        We don’t just build technology for clients. We build products of our own.
                    </motion.p>

                    <motion.p 
                        className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        At Code-X-Novas, we identify real-world problems, design practical solutions, and turn them into scalable technology products. Our products are built to solve challenges across education, productivity, attendance, communities, and digital operations.
                    </motion.p>
                </div>

                {/* Infinite Horizontal Cards Scroll Track */}
                <div className="relative w-full py-8 overflow-hidden bg-white/30 border-y border-gray-200/50 backdrop-blur-[1px]">
                    {/* Shadow overlay gradient left */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
                    
                    {/* Shadow overlay gradient right */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

                    {/* Marquee Card container */}
                    <div className="flex gap-6 animate-infinite-card-scroll w-max px-8">
                        {scrollCards.map((product, idx) => {
                            const Icon = product.icon;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => navigate("/products")}
                                    className={`w-[290px] h-[250px] bg-white border border-gray-150 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-pointer select-none group shrink-0`}
                                >
                                    {/* Accent blur shine on hover */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-[0.03] blur-lg rounded-full transition-all duration-500 pointer-events-none`} />

                                    <div>
                                        {/* Icon Badge */}
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${product.lightBg} mb-4 transition-all duration-300 group-hover:scale-105`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        {/* Content */}
                                        <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2352A5] transition-colors leading-tight mb-0.5">
                                            {product.title}
                                        </h3>
                                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                            {product.subtitle}
                                        </p>
                                        <p className="text-xs text-gray-500 leading-relaxed font-normal">
                                            {product.desc}
                                        </p>
                                    </div>

                                    <div className="flex items-center text-[11px] font-bold text-[#2352A5] group-hover:text-[#02A7FD] transition-colors gap-1 mt-auto pt-3 border-t border-gray-50">
                                        Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA Block */}
                <div className="max-w-2xl mx-auto px-6 pt-14 text-center flex flex-col items-center">
                    <motion.div 
                        className="w-1.5 h-10 bg-gradient-to-b from-[#2352A5] to-transparent rounded-full mb-6"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    />

                    <motion.p 
                        className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        From idea to product — built, deployed, and continuously improved by Code-X-Novas.
                    </motion.p>

                    <motion.h4 
                        className="text-lg sm:text-2xl font-bold text-gray-950 mb-8 leading-snug"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Built for real problems. Designed for real users. Scaled for the future.
                    </motion.h4>

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

            {/* Custom keyframes injected via style tag for infinite card marquee scroll */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes infinite-card-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-infinite-card-scroll {
                    animation: infinite-card-scroll 38s linear infinite;
                }
                .animate-infinite-card-scroll:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
}
