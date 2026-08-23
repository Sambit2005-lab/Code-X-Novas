import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { School, UserCheck, BookOpen, Users, ArrowRight } from "lucide-react";

export default function ProductsBuilt() {
    const navigate = useNavigate();

    const productList = [
        {
            title: "VidyaOS 360",
            subtitle: "School OS",
            desc: "A unified digital ecosystem for schools to manage administration, teachers, students, parents, academics, fees, and communication.",
            bullets: [
                "Administration & Academics",
                "Fee & Attendance Tracking",
                "Dynamic School Website"
            ],
            icon: School,
            color: "from-blue-500 to-indigo-600",
            lightBg: "bg-blue-50/60 text-blue-600 border-blue-100",
            hoverGlow: "group-hover:shadow-blue-500/15"
        },
        {
            title: "SAS 360",
            subtitle: "AI Attendance",
            desc: "A smart attendance platform that uses AI-powered classroom recognition to automate roll calls without costly biometric hardware.",
            bullets: [
                "AI Photo Recognition",
                "Zero Hardware Required",
                "Instant Parent Notifications"
            ],
            icon: UserCheck,
            color: "from-cyan-500 to-blue-500",
            lightBg: "bg-cyan-50/60 text-cyan-600 border-cyan-100",
            hoverGlow: "group-hover:shadow-cyan-500/15"
        },
        {
            title: "Classivo 360",
            subtitle: "Coaching Platform",
            desc: "One platform to manage students, batches, fees, attendance, tests, faculty and parent communication for coaching institutes.",
            bullets: [
                "Batch & Faculty Schedules",
                "Defaulter Fee Tracking",
                "Real-Time Owner Analytics"
            ],
            icon: BookOpen,
            color: "from-indigo-500 to-purple-600",
            lightBg: "bg-indigo-50/60 text-indigo-600 border-indigo-100",
            hoverGlow: "group-hover:shadow-indigo-500/15"
        },
        {
            title: "Vrise Network",
            subtitle: "Community Portal",
            desc: "A modern community-driven platform designed to bring people together through interest-based groups, activities and connections.",
            bullets: [
                "Interest-Based Groups",
                "Engagement & Feeds",
                "Scale-Ready Infrastructure"
            ],
            icon: Users,
            color: "from-purple-500 to-pink-500",
            lightBg: "bg-purple-50/60 text-purple-600 border-purple-100",
            hoverGlow: "group-hover:shadow-purple-500/15"
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="relative w-full py-20 px-6 md:px-12 lg:px-16 bg-[#fafbfc] overflow-hidden font-sora">
            {/* Soft decorative glow */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-br from-blue-50/30 to-indigo-50/20 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-gray-200/60">
                    <div className="max-w-2xl text-left">
                        <motion.h3 
                            className="uppercase text-[#2352A5] font-semibold text-xs sm:text-sm tracking-[2px] mb-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Proprietary Ecosystem
                        </motion.h3>

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

                    <motion.div 
                        className="max-w-md text-left lg:text-right"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                            We identify real-world challenges, design practical solutions, and turn them into scalable technology products of our own.
                        </p>
                    </motion.div>
                </div>

                {/* 4-Column Card Grid Deck */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {productList.map((product, idx) => {
                        const Icon = product.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                className={`bg-white border border-gray-150 rounded-[28px] p-7 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden cursor-pointer hover:border-gray-200 hover:shadow-2xl ${product.hoverGlow}`}
                                whileHover={{ y: -6 }}
                                onClick={() => navigate("/products")}
                            >
                                {/* Glow element on hover */}
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-[0.04] blur-xl rounded-full transition-all duration-500 pointer-events-none`} />

                                <div>
                                    {/* Icon with Soft Circle Background */}
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${product.lightBg} mb-6 transition-all duration-300 group-hover:scale-110`}>
                                        <Icon className="w-5 h-5" />
                                    </div>

                                    {/* Card Text Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#2352A5] transition-colors leading-tight">
                                        {product.title}
                                    </h3>
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                        {product.subtitle}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 font-normal">
                                        {product.desc}
                                    </p>

                                    {/* Bullets lists */}
                                    <ul className="space-y-2 mb-6 border-t border-gray-50 pt-5 text-left">
                                        {product.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="text-xs text-gray-600 flex items-center gap-2">
                                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`} />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center text-xs font-bold text-[#2352A5] group-hover:text-[#02A7FD] transition-colors gap-1.5 mt-auto pt-4 border-t border-gray-50">
                                    Explore Product <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA Block */}
                <div className="border-t border-gray-200/60 pt-16 text-center max-w-2xl mx-auto flex flex-col items-center">
                    <motion.p 
                        className="text-xs sm:text-sm font-semibold text-[#2352A5] uppercase tracking-[2px] mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Built for real problems. Designed for real users.
                    </motion.p>

                    <motion.h4 
                        className="text-lg sm:text-2xl font-bold text-gray-950 mb-8 leading-snug"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        From idea to product — built, deployed, and continuously improved by Code-X-Novas.
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
                        transition={{ duration: 0.6, delay: 0.15 }}
                        whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(3, 104, 255, 0.25)" }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Explore Our Products 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
