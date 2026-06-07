import React from "react";
import { FiMonitor, FiSmartphone } from "react-icons/fi";
import { motion } from "framer-motion";
import RightElement from "../assets/Services/RightElement.png";
import MapImage from "../assets/Services/Map.png";

const servicesData = [
    {
        icon: FiMonitor,
        title: "Web Development",
        desc: "We design fast, scalable, and secure websites using Next.js, React, and Spring Boot — ensuring SEO optimization, responsive layouts, and a smooth user experience tailored to your business goals",
    },
    {
        icon: FiSmartphone,
        title: "App Development",
        desc: "We build cross-platform apps with React Native, Flutter, and Kotlin — combining sleek UI, powerful performance, and real-time backend integration for smooth, high-quality user experiences across devices.",
    },
    {
        icon: FiMonitor,
        title: "AI & Machine Learning Solutions",
        desc: "We create AI-driven automation, predictive analytics, and intelligent assistants that improve efficiency, personalize user experiences, and enable data-driven decision-making for businesses across industries.",
    },
    {
        icon: FiMonitor,
        title: "UI/UX Design",
        desc: "We design intuitive, visually engaging interfaces that enhance usability, accessibility, and engagement — delivering prototypes and final designs that ensure every user interaction feels effortless.",
    },
    {
        icon: FiMonitor,
        title: "Custom LMS & E-Learning Platforms",
        desc: "We develop scalable, interactive LMS platforms with live sessions, analytics, and digital certificates — using React, Firebase, and Node.js for seamless education experiences across web and mobile.",
    },
    {
        icon: FiMonitor,
        title: "E-Commerce Solutions",
        desc: "We build custom, secure, and high-performance e-commerce platforms using Next.js, Stripe, and Firebase — enabling smooth shopping, payment, and inventory management experiences for your customers.",
    },
];

const PulseDot = ({ left, top }) => (
    <div
        className="absolute"
        style={{
            left: `${left}%`,
            top: `${top}%`,
            width: "20px",
            height: "20px",
        }}
    >
        <span className="absolute inset-0 rounded-full bg-sky-500 opacity-60 animate-ping"></span>
        <span className="absolute rounded-full bg-sky-500 inset-[8px] sm:hidden"></span>
        <span className="absolute rounded-full bg-sky-500 hidden sm:block inset-[6px]"></span>
    </div>
);

const MapWithDots = () => (
    <div className="relative w-full max-w-[638px] aspect-[638/614] -ml-0 lg:-ml-24">
        <img src={MapImage} loading="lazy" alt="World map" className="w-full h-full object-contain" />
        <PulseDot left={48} top={34} />
        <PulseDot left={55} top={35} />
        <PulseDot left={56} top={38} />
        <PulseDot left={59} top={40} />
        <PulseDot left={59} top={35} />
        <PulseDot left={63} top={40} />
        <PulseDot left={82} top={60} />
        <PulseDot left={57} top={33} />
        <PulseDot left={30} top={26} />
        <PulseDot left={9} top={58} />
        <PulseDot left={1} top={36} />
        <PulseDot left={1} top={27} />
    </div>
);

const GradientHeading = ({ children }) => (
    <h3
        className="text-2xl sm:text-3xl md:text-[27px] leading-[120%] font-normal mb-3"
        style={{
            fontFamily: "Sora",
            fontWeight: 400,
            background:
                "linear-gradient(90deg, #082F6E 0%, #2352A5 50.48%, #67AEBA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        }}
    >
        {children}
    </h3>
);

const Services = () => {
    const truncate = (s, n) => (s?.length <= n ? s : s.slice(0, n).trimEnd() + "...");

    return (
        <>
            {/* -------- MOBILE VERSION -------- */}
            <div className="block md:hidden">
                <section className="relative w-full bg-black text-white py-16 px-4 overflow-hidden">
                    <img
                        src={RightElement}
                        loading="lazy"
                        alt="Decorative element"
                        className="absolute right-0 top-[-910px] h-[150%] object-contain pointer-events-none select-none opacity-100"
                    />

                    {/* Header */}
                    <motion.div
                        className="text-center mb-12 relative z-10"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-4"
                            style={{ fontFamily: "Sora" }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-white">Our </span>
                            <span style={{ color: "#1D58F6" }}>Services</span>
                        </motion.h2>
                        <motion.p
                            className="text-base text-gray-300 leading-relaxed mx-auto max-w-[340px]"
                            style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Our service range fits together cohesively, so we can provide end-to-end service, from Startup to Scaleup.
                        </motion.p>
                    </motion.div>

                    {/* Services cards */}
                    <motion.div
                        className="grid grid-cols-1 gap-6 max-w-7xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
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
                        {servicesData.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="group relative min-h-[300px] w-[88%] flex flex-col justify-between bg-zinc-800 p-6 rounded-md shadow-md transition-all duration-[1200ms] ease-in-out mx-auto overflow-hidden hover:bg-gradient-to-tr hover:from-[#001F4D] hover:via-[#2352A5] hover:to-[#4FA3FF]"
                                    variants={{
                                        hidden: { x: -50, opacity: 0 },
                                        visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
                                    }}
                                >
                                    <div className="text-4xl mb-4">
                                        <svg width="1em" height="1em" viewBox="0 0 24 24">
                                            <defs>
                                                <linearGradient id={`grad-mobile-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="9.29%" stopColor="#7DE2FF" />
                                                    <stop offset="51.58%" stopColor="#54A1DE" />
                                                    <stop offset="93.07%" stopColor="#08367F" />
                                                </linearGradient>
                                            </defs>
                                            <Icon stroke={`url(#grad-mobile-${index})`} fill="none" size="100%" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold mt-2 mb-2">{service.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {truncate(service.desc, 140)}
                                    </p>
                                    <button className="px-6 py-2 mt-6 rounded-md border border-white/30 text-sm text-white transition-all hover:bg-white hover:text-black">
                                        Learn More
                                    </button>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </section>

                {/* Why Choose Us for Mobile */}
                <section className="relative w-full bg-white py-10 px-4 overflow-hidden">
                    <div className="flex flex-col items-center">
                        <div className="relative w-full mb-2">
                            <h2 className="text-black font-semibold text-3xl whitespace-nowrap text-center">
                                Why choose us
                            </h2>
                            {/* full-width underline with small horizontal padding */}
                            <div
                                className="absolute left-4 right-4"
                                style={{ top: "48px", borderTop: "2px solid #999999" }}
                            />
                        </div>

                        {/* Map (mobile) - full-width */}
                        <div className="w-full">
                            <MapWithDots />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 gap-6 max-w-[340px] w-full"
                        >
                            {[
                                "Proven Track Record",
                                "Recognized & Credible",
                                "Innovation-Driven Team",
                                "End-to-End Services",
                                "Agile & Transparent Process",
                                "Long-Term Partnership",
                            ].map((title, i) => (
                                <div key={i} className="pb-2">
                                    <GradientHeading>{title}</GradientHeading>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {
                                            [
                                                "We’ve successfully delivered 50+ real-world projects across web, app, AI, and custom software solutions — trusted by startups, brands, and institutions.",
                                                "Selected among India’s Top 75 Emerging Startups and proudly represented India at the Dubai AI Festival, showcasing our credibility and innovation.",
                                                "We specialize in building intelligent, scalable systems using cutting-edge tech — from AI agents to custom platforms — tailored to your needs.",
                                                "From idea to execution, we offer complete digital solutions: design, development, deployment, maintenance, and growth strategy — all under one roof.",
                                                "We follow a client-first approach with regular updates, live previews, flexible iterations, and transparent communication throughout the project.",
                                                "We believe in building lasting relationships by offering post-delivery support, affordable maintenance plans, and reliable upgrades as your business grows.",
                                            ][i]
                                        }
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* -------- DESKTOP/TABLET VERSION -------- */}
            <div className="hidden md:block">
                <section className="relative w-full bg-black text-white py-20 px-12 overflow-hidden">
                    <img
                        src={RightElement}
                        loading="lazy"
                        alt="Decorative element"
                        className="absolute right-0 top-0 h-full object-contain pointer-events-none select-none opacity-100"
                    />
                    <motion.div
                        className="text-center max-w-6xl mx-auto mb-16 z-10 relative"
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="text-5xl font-bold mb-6"
                            style={{ fontFamily: "Sora" }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <span className="text-white">Our </span>
                            <span style={{ color: "#1D58F6" }}>Services</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-300 leading-relaxed mx-auto max-w-[600px]"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Our service range fits together cohesively, so we can provide end-to-end service, from Startup to Scaleup.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-3 gap-10 max-w-7xl mx-auto pr-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.12
                                }
                            }
                        }}
                    >
                        {servicesData.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="group relative min-h-[400px] w-[360px] flex flex-col justify-between bg-black/90 backdrop-blur-lg p-6 rounded-md shadow-md transition-all duration-[1200ms] ease-in-out overflow-hidden hover:bg-gradient-to-tr hover:from-[#001F4D] hover:via-[#2352A5] hover:to-[#4FA3FF]"
                                    variants={{
                                        hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
                                        visible: {
                                            scale: 1,
                                            opacity: 1,
                                            rotateY: 0,
                                            transition: { duration: 0.7, ease: "easeOut" }
                                        }
                                    }}
                                >
                                    <div className="text-5xl mb-4 transition-colors duration-500">
                                        <svg width="1em" height="1em" viewBox="0 0 24 24">
                                            <defs>
                                                <linearGradient id={`grad-desktop-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="9.29%" stopColor="#7DE2FF" />
                                                    <stop offset="51.58%" stopColor="#54A1DE" />
                                                    <stop offset="93.07%" stopColor="#08367F" />
                                                </linearGradient>
                                            </defs>
                                            <Icon stroke={`url(#grad-desktop-${index})`} fill="none" size="100%" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mt-2 mb-2">{service.title}</h3>
                                    <p className="text-gray-300 text-base leading-relaxed">
                                        {service.desc}
                                    </p>
                                    <button className="px-6 py-2 mt-6 rounded-md border border-white/30 text-sm font-medium text-white bg-transparent transition-all duration-300 hover:bg-white hover:text-black">
                                        Learn More
                                    </button>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </section>

                {/* Why Choose Us - Desktop */}
                <section className="relative w-full bg-white py-20 px-6 overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-row items-center gap-0">
                        <motion.div
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="w-1/2 flex justify-start"
                        >
                            <MapWithDots />
                        </motion.div>

                        <div className="flex flex-col items-center justify-center px-4 relative h-full w-1/2">
                            <div
                                className="absolute left-[-35px] top-[400px] h-[320px]"
                                style={{ borderLeft: "2px solid #999999" }}
                            ></div>
                            <span className="absolute -left-[230px] top-[150px] text-black font-semibold text-5xl tracking-wide -rotate-90 whitespace-nowrap">
                                Why choose us
                            </span>

                            <motion.div
                                initial={{ x: 150, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-10"
                            >
                                {[
                                    "Proven Track Record",
                                    "Recognized & Credible",
                                    "Innovation-Driven Team",
                                    "End-to-End Services",
                                    "Agile & Transparent Process",
                                    "Long-Term Partnership",
                                ].map((title, i) => (
                                    <div key={i}>
                                        <GradientHeading>{title}</GradientHeading>
                                        <p className="text-gray-700">
                                            {
                                                [
                                                    "We’ve successfully delivered 50+ real-world projects across web, app, AI, and custom software solutions — trusted by startups, brands, and institutions.",
                                                    "Selected among India’s Top 75 Emerging Startups and proudly represented India at the Dubai AI Festival, showcasing our credibility and innovation.",
                                                    "We specialize in building intelligent, scalable systems using cutting-edge tech — from AI agents to custom platforms — tailored to your needs.",
                                                    "From idea to execution, we offer complete digital solutions: design, development, deployment, maintenance, and growth strategy — all under one roof.",
                                                    "We follow a client-first approach with regular updates, live previews, flexible iterations, and transparent communication throughout the project.",
                                                    "We believe in building lasting relationships by offering post-delivery support, affordable maintenance plans, and reliable upgrades as your business grows.",
                                                ][i]
                                            }
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Services;
