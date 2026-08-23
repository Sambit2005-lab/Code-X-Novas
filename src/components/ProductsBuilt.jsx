import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { School, UserCheck, BookOpen, Users, ArrowRight, ArrowLeft } from "lucide-react";

export default function ProductsBuilt() {
    const navigate = useNavigate();

    const productList = [
        {
            title: "VidyaOS 360",
            subtitle: "School Digital Management Platform",
            desc: "A unified digital ecosystem for schools to manage administration, teachers, students, parents, academics, fees, examinations, communication and more.",
            icon: School,
            color: "from-blue-600 to-indigo-600",
            textColor: "text-blue-600",
            lightColor: "bg-blue-50 text-blue-600 border-blue-100",
            shadow: "shadow-blue-500/5",
            borderHover: "hover:border-blue-400"
        },
        {
            title: "SAS 360",
            subtitle: "AI-Powered Attendance Automation",
            desc: "A smart attendance platform that uses AI-powered classroom recognition to automate attendance without expensive biometric hardware.",
            icon: UserCheck,
            color: "from-cyan-500 to-blue-600",
            textColor: "text-cyan-600",
            lightColor: "bg-cyan-50 text-cyan-600 border-cyan-100",
            shadow: "shadow-cyan-500/5",
            borderHover: "hover:border-cyan-400"
        },
        {
            title: "Classivo 360",
            subtitle: "Coaching Institute Management Platform",
            desc: "One platform to manage students, batches, fees, attendance, tests, faculty and parent communication for coaching institutes.",
            icon: BookOpen,
            color: "from-indigo-500 to-purple-600",
            textColor: "text-indigo-600",
            lightColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
            shadow: "shadow-indigo-500/5",
            borderHover: "hover:border-indigo-400"
        },
        {
            title: "Vrise Network",
            subtitle: "Community & Social Engagement Platform",
            desc: "A modern community-driven platform designed to bring people together through interest-based communities, participation and meaningful connections.",
            icon: Users,
            color: "from-purple-500 to-pink-500",
            textColor: "text-purple-600",
            lightColor: "bg-purple-50 text-purple-600 border-purple-100",
            shadow: "shadow-purple-500/5",
            borderHover: "hover:border-purple-400"
        }
    ];

    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden font-sora">
            {/* Ambient background blur */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-3xl pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-50/20 rounded-full blur-3xl pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
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
                        At Code-X-Novas, we identify real-world problems, design practical solutions, and turn them into scalable technology products.
                    </motion.p>
                </div>

                {/* Alternating Timeline Section */}
                <div className="relative w-full mb-20">
                    
                    {/* Central Axis Line (Desktop only) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#2352A5]/10 via-[#02A7FD]/40 to-[#2352A5]/10 z-0" />

                    <div className="space-y-16 md:space-y-28">
                        {productList.map((product, idx) => {
                            const Icon = product.icon;
                            const isLeft = idx % 2 === 0;

                            return (
                                <div key={idx} className="relative flex flex-col md:flex-row items-center w-full z-10">
                                    
                                    {/* Connector node circle (Desktop only) */}
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white border border-gray-200/80 shadow-md items-center justify-center z-20">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${product.lightColor}`}>
                                            <Icon className="w-5 h-5 animate-pulse" />
                                        </div>
                                    </div>

                                    {/* Left Content Side */}
                                    <div className="w-full md:w-1/2 flex justify-end px-0 md:px-12 lg:px-16">
                                        {isLeft ? (
                                            /* Card on Left */
                                            <motion.div
                                                className={`w-full max-w-[500px] bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl ${product.borderHover} transition-all duration-300 group relative flex flex-col`}
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true, amount: 0.2 }}
                                                transition={{ duration: 0.65, ease: "easeOut" }}
                                            >
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent blur-md rounded-full pointer-events-none group-hover:scale-125 transition-all duration-500" />
                                                
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className={`md:hidden p-2 rounded-xl border ${product.lightColor}`}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#2352A5] transition-colors leading-tight">
                                                            {product.title}
                                                        </h3>
                                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
                                                            {product.subtitle}
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                                                    {product.desc}
                                                </p>

                                                <div 
                                                    className="w-fit flex items-center text-xs font-bold text-[#2352A5] group-hover:text-[#02A7FD] transition-colors gap-1.5 cursor-pointer mt-auto border-t border-gray-50 pt-4"
                                                    onClick={() => navigate("/products")}
                                                >
                                                    Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </motion.div>
                                        ) : (
                                            /* Empty layout placeholder for desktop to maintain alignment */
                                            <div className="hidden md:block w-full max-w-[500px]" />
                                        )}
                                    </div>

                                    {/* Right Content Side */}
                                    <div className="w-full md:w-1/2 flex justify-start px-0 md:px-12 lg:px-16 mt-8 md:mt-0">
                                        {!isLeft ? (
                                            /* Card on Right */
                                            <motion.div
                                                className={`w-full max-w-[500px] bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl ${product.borderHover} transition-all duration-300 group relative flex flex-col`}
                                                initial={{ opacity: 0, x: 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true, amount: 0.2 }}
                                                transition={{ duration: 0.65, ease: "easeOut" }}
                                            >
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent blur-md rounded-full pointer-events-none group-hover:scale-125 transition-all duration-500" />
                                                
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className={`md:hidden p-2 rounded-xl border ${product.lightColor}`}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#2352A5] transition-colors leading-tight">
                                                            {product.title}
                                                        </h3>
                                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
                                                            {product.subtitle}
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                                                    {product.desc}
                                                </p>

                                                <div 
                                                    className="w-fit flex items-center text-xs font-bold text-[#2352A5] group-hover:text-[#02A7FD] transition-colors gap-1.5 cursor-pointer mt-auto border-t border-gray-50 pt-4"
                                                    onClick={() => navigate("/products")}
                                                >
                                                    Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </motion.div>
                                        ) : (
                                            /* Empty layout placeholder for desktop to maintain alignment */
                                            <div className="hidden md:block w-full max-w-[500px]" />
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Copy & CTA */}
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
