import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { School, UserCheck, BookOpen, Users, ArrowRight, ShieldCheck, TrendingUp, Calendar, MessageSquare, Plus } from "lucide-react";

export default function ProductsBuilt() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);

    const products = [
        {
            title: "VidyaOS 360",
            subtitle: "School Digital Management Platform",
            desc: "A unified digital ecosystem for schools to manage administration, teachers, students, parents, academics, fees, examinations, and communication in one connected interface.",
            icon: School,
            color: "from-blue-600 to-indigo-600",
            badge: "Complete School OS",
            link: "/products",
            mockup: (
                <div className="w-full h-full bg-slate-950 p-6 flex flex-col justify-between font-mono text-xs text-slate-300">
                    {/* Header bar */}
                    <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            <span className="text-slate-400 font-semibold ml-2">VidyaOS Admin Portal v1.2</span>
                        </div>
                        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded text-[10px]">Academic Year 2026</span>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 my-4">
                        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3">
                            <div className="text-[10px] text-slate-500">TOTAL STUDENTS</div>
                            <div className="text-lg font-bold text-white mt-1">1,420</div>
                            <div className="text-[9px] text-green-400 flex items-center gap-0.5 mt-0.5"><TrendingUp size={10} /> +12% this year</div>
                        </div>
                        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3">
                            <div className="text-[10px] text-slate-500">FEE COLLECTIONS</div>
                            <div className="text-lg font-bold text-white mt-1">94.2%</div>
                            <div className="text-[9px] text-slate-400 mt-0.5">Defaulters flagged</div>
                        </div>
                        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3">
                            <div className="text-[10px] text-slate-500">TEACHERS ACTIVE</div>
                            <div className="text-lg font-bold text-white mt-1">86 / 90</div>
                            <div className="text-[9px] text-green-400 mt-0.5">4 Class substitutions active</div>
                        </div>
                    </div>

                    {/* Recent activities log */}
                    <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 flex-1 flex flex-col justify-between">
                        <span className="text-slate-400 font-semibold text-[10px] uppercase tracking-wider mb-2 block">System Log & Status</span>
                        <div className="space-y-2 text-[11px]">
                            <div className="flex justify-between text-slate-400">
                                <span>• Fee receipt generated - ID #99831</span>
                                <span className="text-slate-600">2 mins ago</span>
                            </div>
                            <div className="flex justify-between text-slate-400">
                                <span>• substituted: Grade 10 Math (Mrs. Roy)</span>
                                <span className="text-slate-600">12 mins ago</span>
                            </div>
                            <div className="flex justify-between text-slate-400">
                                <span>• Parent circular dispatched via Whatsapp</span>
                                <span className="text-slate-600">1 hr ago</span>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded transition text-[10px] flex items-center gap-1"><Plus size={12} /> Add Student</button>
                            <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-3 py-1.5 rounded transition text-[10px]">Print Report Card</button>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "SAS 360",
            subtitle: "AI-Powered Attendance Automation",
            desc: "A smart classroom attendance manager that automates student presence checkups in seconds using high-performance AI photograph recognition.",
            icon: UserCheck,
            color: "from-cyan-500 to-blue-500",
            badge: "AI Roll Call Engine",
            link: "/products",
            mockup: (
                <div className="w-full h-full bg-slate-950 p-6 flex flex-col justify-between font-mono text-xs text-slate-300">
                    {/* Header */}
                    <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            <span className="text-slate-400 font-semibold ml-2">SAS 360 Face Recognition Engine</span>
                        </div>
                        <span className="flex items-center gap-1 bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded text-[10px]"><ShieldCheck size={10} /> Active</span>
                    </div>

                    {/* Camera view screen mockup */}
                    <div className="relative border border-slate-800 rounded-xl my-4 overflow-hidden bg-slate-900/40 aspect-[2/1] flex items-center justify-center">
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_8px] pointer-events-none" />
                        
                        {/* Target Grid lines */}
                        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-500" />
                        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-500" />
                        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-500" />
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-500" />

                        <div className="text-center">
                            <div className="text-cyan-400 font-bold tracking-widest text-[11px] mb-1 animate-pulse">CLASSROOM_RECOGNITION_ACTIVE</div>
                            <div className="text-[10px] text-slate-500">Processing Photograph Frame #42...</div>
                        </div>
                    </div>

                    {/* AI Results */}
                    <div className="flex justify-between items-center bg-slate-900 border border-slate-800 rounded-xl p-3">
                        <div>
                            <div className="text-[9px] text-slate-500">MATCH ACCURACY</div>
                            <div className="text-base font-bold text-white">99.2% Correct</div>
                        </div>
                        <div>
                            <div className="text-[9px] text-slate-500">STUDENTS DETECTED</div>
                            <div className="text-base font-bold text-white">42 Present / 45 Total</div>
                        </div>
                        <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-3 py-1.5 rounded transition text-[10px]">Verify Attendance</button>
                    </div>
                </div>
            )
        },
        {
            title: "Classivo 360",
            subtitle: "Coaching Institute Management Platform",
            desc: "An all-in-one institutional operations manager that links students, batches, fees, tests, faculty schedules, and parent alerts under a centralized ecosystem.",
            icon: BookOpen,
            color: "from-indigo-500 to-purple-600",
            badge: "Coaching Dashboard",
            link: "/products",
            mockup: (
                <div className="w-full h-full bg-slate-950 p-6 flex flex-col justify-between font-mono text-xs text-slate-300">
                    {/* Header */}
                    <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            <span className="text-slate-400 font-semibold ml-2">Classivo 360 Admin</span>
                        </div>
                        <span className="text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded text-[10px]">6 Active Batches</span>
                    </div>

                    {/* Schedule block */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 my-4">
                        <span className="text-[10px] text-slate-500 block mb-3 font-semibold uppercase flex items-center gap-1.5"><Calendar size={12} /> Today's Batch Schedule</span>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center border-l-2 border-purple-500 pl-3">
                                <div>
                                    <div className="font-bold text-white">JEE Advanced Focus Batch</div>
                                    <div className="text-[10px] text-slate-500">Instructor: Prof. Verma • Physics</div>
                                </div>
                                <span className="bg-slate-800 px-2 py-1 rounded text-white text-[10px]">04:30 PM</span>
                            </div>
                            <div className="flex justify-between items-center border-l-2 border-indigo-500 pl-3">
                                <div>
                                    <div className="font-bold text-white">NEET Biology Quick Batch</div>
                                    <div className="text-[10px] text-slate-500">Instructor: Dr. Sharma • Biology</div>
                                </div>
                                <span className="bg-slate-800 px-2 py-1 rounded text-white text-[10px]">06:00 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Revenue collection tracker */}
                    <div className="flex justify-between items-center bg-slate-900/60 border border-slate-800 rounded-xl p-3">
                        <div>
                            <div className="text-[9px] text-slate-500">COLLECTED THIS MONTH</div>
                            <div className="text-base font-bold text-white">₹2.45 Lakhs</div>
                        </div>
                        <div>
                            <div className="text-[9px] text-slate-500">PENDING INVOICES</div>
                            <div className="text-base font-bold text-red-400">14 Invoices</div>
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-3.5 py-1.5 rounded transition text-[10px]">Send Reminders</button>
                    </div>
                </div>
            )
        },
        {
            title: "Vrise Network",
            subtitle: "Community & Social Engagement Platform",
            desc: "A modern interest-based social forum module designed to bring people together through digital discussions, communities, and updates.",
            icon: Users,
            color: "from-purple-500 to-pink-500",
            badge: "Engagement Portal",
            link: "/products",
            mockup: (
                <div className="w-full h-full bg-slate-950 p-6 flex flex-col justify-between font-mono text-xs text-slate-300">
                    {/* Header */}
                    <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            <span className="text-slate-400 font-semibold ml-2">Vrise Community Feed</span>
                        </div>
                        <span className="text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2 py-0.5 rounded text-[10px]">420 Members</span>
                    </div>

                    {/* Chat feed mock */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 my-4 flex-1 flex flex-col justify-between">
                        <span className="text-[10px] text-slate-500 block mb-3 font-semibold uppercase flex items-center gap-1.5"><MessageSquare size={12} /> Tech Creators Network</span>
                        <div className="space-y-3">
                            <div className="flex gap-2">
                                <span className="bg-indigo-600 text-white text-[9px] w-6 h-6 rounded-full flex items-center justify-center font-bold">SP</span>
                                <div>
                                    <span className="font-bold text-white text-[11px]">Sambit Pradhan</span>
                                    <p className="text-slate-400 text-[10px] mt-0.5">Let's coordinate the product launch next Monday at 6 PM.</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-pink-600 text-white text-[9px] w-6 h-6 rounded-full flex items-center justify-center font-bold">SS</span>
                                <div>
                                    <span className="font-bold text-white text-[11px]">Sahil Singh</span>
                                    <p className="text-slate-400 text-[10px] mt-0.5">Done, invitation dispatched to all active subdomains.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-800 pt-3 mt-4 flex items-center justify-between text-[10px] text-slate-500">
                            <span>Press enter to send message...</span>
                            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-3 py-1 rounded transition">Send</button>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const currentProd = products[activeTab];

    return (
        <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#fafbfc] to-white overflow-hidden font-sora">
            <div className="max-w-[1300px] mx-auto relative z-10">
                
                {/* Header */}
                <div className="max-w-3xl text-left mb-16">
                    <span className="uppercase text-[#2352A5] font-semibold text-xs sm:text-sm tracking-[2.5px] mb-3 block">
                        Proprietary Ecosystem
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 leading-tight">
                        Products Built by <span className="bg-gradient-to-r from-[#2352A5] via-[#137DD1] to-[#02A7FD] bg-clip-text text-transparent">Code-X-Novas</span>
                    </h2>
                </div>

                {/* Dashboard-style Interactive Tab Switcher Layout */}
                <div className="w-full bg-white border border-gray-150 rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 flex flex-col lg:flex-row items-stretch min-h-[580px]">
                    
                    {/* Left Index Sidebar (Tab controller) */}
                    <div className="w-full lg:w-[40%] bg-[#fcfdfe] border-b lg:border-b-0 lg:border-r border-gray-150 p-6 sm:p-8 flex flex-col justify-between gap-8">
                        <div className="space-y-4">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">Select Platform Preview</span>
                            {products.map((item, idx) => {
                                const Icon = item.icon;
                                const isSelected = activeTab === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className="w-full text-left p-4.5 rounded-2xl transition-all duration-300 flex items-center gap-4 relative overflow-hidden group focus:outline-none"
                                        style={{
                                            backgroundColor: isSelected ? "#fff" : "transparent",
                                            boxShadow: isSelected ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
                                            border: isSelected ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent"
                                        }}
                                    >
                                        <div className={`p-3 rounded-xl border ${isSelected ? item.lightColor : "bg-gray-100 text-gray-400 border-gray-150"} transition-all duration-300`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-base font-bold transition-colors ${isSelected ? "text-gray-950" : "text-gray-500 group-hover:text-gray-900"}`}>
                                                {item.title}
                                            </h3>
                                            <p className={`text-[11px] font-semibold tracking-wide uppercase transition-colors ${isSelected ? "text-[#2352A5]" : "text-gray-400 group-hover:text-gray-500"}`}>
                                                {item.badge}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Direct Redirection Info */}
                        <div className="bg-gradient-to-r from-blue-50 to-[#ECF7FF] rounded-2xl p-5 border border-blue-100/40 text-left">
                            <span className="font-bold text-xs text-[#2352A5] uppercase tracking-wider block mb-1">Ecosystem Navigation</span>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                Click below to access dedicated live subdomains, setup credentials, features, and platform matrices.
                            </p>
                            <button 
                                onClick={() => navigate("/products")}
                                className="text-xs font-bold text-[#2352A5] hover:text-[#02A7FD] transition-colors flex items-center gap-1.5"
                            >
                                Access Full Product Dashboard <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Right Live Preview Panel */}
                    <div className="w-full lg:w-[60%] p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white text-left relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.35 }}
                                className="h-full flex flex-col justify-between gap-8"
                            >
                                <div>
                                    <span className="bg-gray-100 border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4">
                                        Ecosystem Highlight
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-snug">
                                        {currentProd.title} – <span className="text-gray-500 font-medium">{currentProd.subtitle}</span>
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl font-normal">
                                        {currentProd.desc}
                                    </p>
                                </div>

                                {/* Mockup frame visualization wrapper */}
                                <div className="border border-slate-800 bg-slate-950 rounded-2xl overflow-hidden shadow-2xl relative w-full h-[320px]">
                                    {currentProd.mockup}
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-2">
                                    <p className="text-xs text-gray-400 tracking-wide font-normal">
                                        Click details to learn about modules, Pricing, and Subdomains.
                                    </p>
                                    <button
                                        onClick={() => navigate(currentProd.link)}
                                        className={`flex items-center gap-1.5 text-sm font-bold bg-gradient-to-r ${currentProd.color} bg-clip-text text-transparent hover:opacity-90`}
                                    >
                                        Learn More <ArrowRight size={16} className={`${currentProd.textColor}`} />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* Bottom CTA Block */}
                <div className="border-t border-gray-100 pt-16 text-center max-w-2xl mx-auto flex flex-col items-center">
                    <p className="text-xs sm:text-sm font-semibold text-[#2352A5] uppercase tracking-[2.5px] mb-3">
                        Built for real problems. Designed for real users.
                    </p>
                    <h4 className="text-lg sm:text-2xl font-bold text-gray-950 mb-8 leading-snug">
                        From idea to product — built, deployed, and continuously improved by Code-X-Novas.
                    </h4>
                    <button
                        onClick={() => navigate("/products")}
                        className="relative overflow-hidden px-8 py-3.5 rounded-full font-bold text-white text-sm tracking-wider shadow-md flex items-center gap-2 group"
                        style={{
                            background: "linear-gradient(90deg, #2352A5 0%, #137DD1 40%, #02A7FD 100%)"
                        }}
                        whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(3, 104, 255, 0.25)" }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Explore Our Products 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

            </div>
        </section>
    );
}
