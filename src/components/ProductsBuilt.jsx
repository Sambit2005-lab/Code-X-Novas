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
            desc: "A unified digital ecosystem for schools to manage administration, teachers, students, parents, academics, fees, examinations, communication and more.",
            icon: School,
            color: "from-blue-600 to-indigo-600",
            lightColor: "bg-blue-50/50 text-blue-600 border-blue-100",
            glow: "shadow-blue-500/10"
        },
        {
            title: "SAS 360",
            subtitle: "AI-Powered Attendance Automation",
            desc: "A smart attendance platform that uses AI-powered classroom recognition to automate attendance without expensive biometric hardware.",
            icon: UserCheck,
            color: "from-cyan-500 to-blue-600",
            lightColor: "bg-cyan-50/50 text-cyan-600 border-cyan-100",
            glow: "shadow-cyan-500/10"
        },
        {
            title: "Classivo 360",
            subtitle: "Coaching Institute Management Platform",
            desc: "One platform to manage students, batches, fees, attendance, tests, faculty and parent communication for coaching institutes.",
            icon: BookOpen,
            color: "from-indigo-500 to-purple-600",
            lightColor: "bg-indigo-50/50 text-indigo-600 border-indigo-100",
            glow: "shadow-indigo-500/10"
        },
        {
            title: "Vrise Network",
            subtitle: "Community & Social Engagement Platform",
            desc: "A modern community-driven platform designed to bring people together through interest-based communities, participation and meaningful connections.",
            icon: Users,
            color: "from-purple-500 to-pink-500",
            lightColor: "bg-purple-50/50 text-purple-600 border-purple-100",
            glow: "shadow-purple-500/10"
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden font-sora">
            {/* Top background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h3 
                        className="uppercase text-[#2352A5] font-semibold text-xs sm:text-sm tracking-[2px] mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Proprietary Technology
                    </motion.h3>

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
                        className="text-base sm:text-lg text-gray-600 font-medium mb-4 leading-relaxed"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        We don’t just build technology for clients. We build products of our own.
                    </motion.p>

                    <motion.p 
                        className="text-sm sm:text-base text-gray-500 leading-relaxed"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        At Code-X-Novas, we identify real-world problems, design practical solutions, and turn them into scalable technology products. Our products are built to solve challenges across education, productivity, attendance, communities, and digital operations.
                    </motion.p>
                </div>

                {/* Product Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16"
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
                                className={`bg-white border border-gray-100 rounded-3xl p-8 hover:border-gray-200 shadow-sm hover:shadow-xl ${product.glow} transition-all duration-300 group flex flex-col justify-between relative overflow-hidden`}
                                whileHover={{ y: -8 }}
                            >
                                {/* Active corner gradient shine */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-[0.03] blur-xl rounded-full transition-all duration-500 pointer-events-none`} />

                                <div>
                                    {/* Icon Badge */}
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${product.lightColor} mb-6 transition-all duration-300 group-hover:scale-110`}>
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    {/* Card Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#2352A5] transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                        {product.subtitle}
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                                        {product.desc}
                                    </p>
                                </div>

                                <div className="border-t border-gray-50 pt-4 flex items-center text-xs font-bold text-[#2352A5] group-hover:text-[#02A7FD] transition-colors gap-1.5 cursor-pointer" onClick={() => navigate("/products")}>
                                    Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Closing Line & CTA */}
                <div className="border-t border-gray-100 pt-16 text-center max-w-2xl mx-auto flex flex-col items-center">
                    <motion.div 
                        className="w-1.5 h-10 bg-gradient-to-b from-[#2352A5] to-transparent rounded-full mb-6"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    />

                    <motion.p 
                        className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        From idea to product — built, deployed, and continuously improved by Code-X-Novas.
                    </motion.p>

                    <motion.h4 
                        className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 leading-snug"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        Built for real problems. Designed for real users. Scaled for the future.
                    </motion.h4>

                    <motion.button
                        onClick={() => navigate("/products")}
                        className="relative overflow-hidden px-8 py-3.5 rounded-full font-bold text-white text-sm tracking-wider shadow-lg flex items-center gap-2 group"
                        style={{
                            background: "linear-gradient(90deg, #2352A5 0%, #137DD1 40%, #02A7FD 100%)"
                        }}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(3, 104, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Our Products 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
