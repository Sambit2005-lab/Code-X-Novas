import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import Picture1 from "../../assets/InternalPages/AboutPage/Picture1.png";
import Picture2 from "../../assets/InternalPages/AboutPage/Picture2.png";
import Picture3 from "../../assets/InternalPages/AboutPage/Picture3.png";
import Picture4 from "../../assets/InternalPages/AboutPage/Picture4.png";
import Contact from "../Contact";

import frame1 from "../../assets/InternalPages/AboutPage/Frames/Frame1.png";
import frame2 from "../../assets/InternalPages/AboutPage/Frames/Frame2.png";
import frame3 from "../../assets/InternalPages/AboutPage/Frames/Frame3.png";
import frame4 from "../../assets/InternalPages/AboutPage/Frames/Frame4.png";
import frame5 from "../../assets/InternalPages/AboutPage/Frames/Frame5.png";
import frame6 from "../../assets/InternalPages/AboutPage/Frames/Frame6.png";
import frame7 from "../../assets/InternalPages/AboutPage/Frames/Frame7.png";
import frame8 from "../../assets/InternalPages/AboutPage/Frames/Frame8.png";
import frame9 from "../../assets/InternalPages/AboutPage/Frames/Frame9.png";
import frame10 from "../../assets/InternalPages/AboutPage/Frames/Frame10.png";
import frame11 from "../../assets/InternalPages/AboutPage/Frames/Frame11.png";
import frame12 from "../../assets/InternalPages/AboutPage/Frames/Frame12.png";

export default function AboutPage() {
    const [currentFrame, setCurrentFrame] = useState(0);
    const frames = [
        frame1, frame2, frame3, frame4, frame5, frame6,
        frame7, frame8, frame9, frame10, frame11, frame12,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % frames.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [frames.length]);

    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const docHeight = document.body.scrollHeight;
            const windowHeight = window.innerHeight;

            if (scrollY + windowHeight >= docHeight - 500) {
                setShowAnimation(false);
            } else {
                setShowAnimation(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const nextFrame = (currentFrame + 1) % frames.length;

    return (
        <motion.div 
            className="w-full overflow-x-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <SEO
                title="About Us — Code X Novas | Digital Product Studio"
                description="Learn about Code X Novas: our mission, values, team, and approach to building exceptional digital products. We create websites and apps that make a difference."
                url="https://codexnovas.in/about"
            />
            <Navbar />

            {showAnimation && (
                <div
                    className="fixed top-0 right-0 pointer-events-none z-[-1]"
                    style={{
                        width: "100vw",
                        height: "100vh",
                        overflow: "hidden",
                        opacity: 1,
                        transition: "opacity 1s ease-in-out",
                    }}
                >
                    {frames.map((f, i) => (
                        <img
                            key={i}
                            src={f}
                            loading="lazy"
                            alt={`frame-${i}`}
                            className="absolute top-0 right-0 h-full object-cover transition-opacity duration-[6000ms] ease-in-out"
                            style={{
                                width: "auto",
                                minWidth: "60vw",
                                opacity: i === currentFrame ? 1 : i === nextFrame ? 0.6 : 0,
                                objectPosition: "right top",
                                transform: "translateZ(0)",
                            }}
                        />
                    ))}
                </div>
            )}

            <section
                className="relative w-full overflow-hidden min-h-[500px] flex flex-col justify-center -pt-2 pb-8 md:pt-[120px] md:pb-[250px] bg-transparent"
                style={{
                    // keep left/right paddings exactly as before for all sizes
                    paddingLeft: "5%",
                    paddingRight: "0",
                }}
            >
                <div className="w-full text-left text-black">
                    <motion.h3
                        className="uppercase font-semibold mb-2 text-[13px] sm:text-[14px] md:text-[15px] text-center md:text-left"
                        style={{
                            letterSpacing: "1px",
                            color: "#2352A5",
                            fontFamily: "Sora",
                        }}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        About Us
                    </motion.h3>

                    <motion.h1
                        className="font-[600] leading-tight mb-3 text-[28px] sm:text-[32px] md:text-[40px] lg:text-[65px] text-center md:text-left"
                        style={{
                            color: "#000",
                            fontFamily: "Sora",
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Get to Know Us
                    </motion.h1>

                    <motion.p
                        className="text-[14px] md:text-[17px] font-[400] text-[#333] leading-[1.7]"
                        style={{
                            fontFamily: "Sora",
                            width: "100%",
                            textAlign: "left",
                            marginLeft: "0",
                            marginRight: "0",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        At Code-X-Novas, we believe in transforming ideas into impactful
                        digital solutions. Our focus is on delivering high-quality,
                        innovative, and budget-friendly technology products while building
                        long-term relationships with our clients.
                    </motion.p>
                </div>
            </section>

            <section className="relative w-full hidden md:flex justify-center px-[5%] md:px-[4%] my-[100px]" style={{ marginTop: "-160px", zIndex: 2 }}>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-[1250px]"
                    style={{
                        background: "rgba(255, 255, 255, 0.88)",
                        borderRadius: "30px",
                        padding: "30px 25px",
                        boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                    }}
                    initial={{ opacity: 0, y: 80, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div 
                        className="relative flex justify-center items-center"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.img
                            src={Picture1}
                            loading="lazy"
                            alt="Proven Track Record"
                            className="w-[90%] sm:w-[420px] md:w-[500px] lg:w-[550px] h-auto object-contain mx-auto"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>

                    <motion.div
                        className="flex flex-col justify-center text-center md:text-left px-4 md:px-6"
                        style={{ color: "#002C6C", fontFamily: "Sora" }}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <motion.h2 
                            className="text-[32px] sm:text-[40px] md:text-[54px] font-[600] mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            Proven Track <br className="hidden md:block" /> Record
                        </motion.h2>
                        <motion.ul 
                            className="space-y-4 text-[15px] sm:text-[16px] md:text-[17px] text-[#333] leading-[1.7]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 1.1,
                                    },
                                },
                            }}
                        >
                            {[
                                "Successfully delivered 100+ projects in web, app, AI, and custom solutions.",
                                "Trusted by leading brands and startups across India, Dubai, USA, and beyond.",
                                "Recognized as one of India’s Top 75 Emerging Startups for digital innovation.",
                            ].map((item, i) => (
                                <motion.li 
                                    key={i} 
                                    className="flex items-start gap-3 justify-center md:justify-start"
                                    variants={{
                                        hidden: { opacity: 0, x: -30 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 md:w-7 md:h-7 mt-[3px] flex-shrink-0"
                                    >
                                        <defs>
                                            <linearGradient id={`tickGradient-${i}`} x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stopColor="#2352A5" />
                                                <stop offset="11%" stopColor="#137DD1" />
                                                <stop offset="26%" stopColor="#02A7FD" />
                                                <stop offset="44%" stopColor="#7DE2FF" />
                                                <stop offset="72%" stopColor="#42ACEF" />
                                                <stop offset="83%" stopColor="#127CD1" />
                                                <stop offset="99%" stopColor="#2352A5" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            fill={`url(#tickGradient-${i})`}
                                            fillRule="evenodd"
                                            d="M9 16.17l-3.88-3.88a1 1 0 10-1.42 1.42l4.59 4.59a1 1 0 001.42 0l9.59-9.59a1 1 0 10-1.42-1.42L9 16.17z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="max-w-[500px]">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </motion.div>


            </section>

            <section
                className="relative w-full flex justify-center px-[6%] flex-col md:hidden"
                style={{
                    zIndex: 2,
                    // reduce negative margin on mobile so the card doesn't overlap the hero text
                    marginTop: "-90px",
                    marginBottom: "60px",
                }}
            >

                <div
                    className="-mt-8 sm:mt-0 flex flex-col items-center w-full max-w-[1250px]"
                    style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "25px",
                        padding: "25px 20px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                    }}
                >
                    <h2
                        className="text-[24px] sm:text-[30px] font-[600] mb-3 text-center"
                        style={{ color: "#002C6C", fontFamily: "Sora" }}
                    >
                        Proven Track Record
                    </h2>

                    <img
                        src={Picture1}
                        loading="lazy"
                        alt="Proven Track Record"
                        className="w-[85%] sm:w-[90%] h-auto object-contain rounded-[12px] mb-4"
                    />

                    <ul className="space-y-2 text-[14px] sm:text-[15px] text-[#333] leading-[1.6] font-[400] text-left">
                        {[
                            "Successfully delivered 50+ projects in web, app, AI, and custom solutions.",
                            "Trusted by leading brands and startups across India, Dubai, USA, and beyond.",
                            "Recognized as one of India’s Top 75 Emerging Startups for digital innovation.",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 flex-shrink-0 mt-[2px]"
                                >
                                    <defs>
                                        <linearGradient id={`tickGradientMobile-${i}`} x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#2352A5" />
                                            <stop offset="11%" stopColor="#137DD1" />
                                            <stop offset="26%" stopColor="#02A7FD" />
                                            <stop offset="44%" stopColor="#7DE2FF" />
                                            <stop offset="72%" stopColor="#42ACEF" />
                                            <stop offset="83%" stopColor="#127CD1" />
                                            <stop offset="99%" stopColor="#2352A5" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        fill={`url(#tickGradientMobile-${i})`}
                                        fillRule="evenodd"
                                        d="M9 16.17l-3.88-3.88a1 1 0 10-1.42 1.42l4.59 4.59a1 1 0 001.42 0l9.59-9.59a1 1 0 10-1.42-1.42L9 16.17z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="relative w-full hidden md:flex justify-center px-[5%] md:px-[4%] my-[100px]" style={{ zIndex: 2 }}>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-[1250px]"
                    style={{
                        background: "rgba(255, 255, 255, 0.88)",
                        borderRadius: "30px",
                        padding: "30px 25px",
                        boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                    }}
                >
                    <div
                        className="flex flex-col justify-center text-center md:text-left px-4 md:px-6 order-2 md:order-1"
                        style={{ color: "#002C6C", fontFamily: "Sora" }}
                    >
                        <h2 className="text-[32px] sm:text-[40px] md:text-[54px] font-[600] mb-6">
                            Recognized <br className="hidden md:block" /> Excellence
                        </h2>
                        <p className="text-[16px] md:text-[17px] text-[#333] leading-[1.7] mb-3">
                            Represented India at the Dubai AI Festival.
                        </p>
                        <p className="text-[16px] md:text-[17px] text-[#333] leading-[1.7]">
                            Invited to India’s biggest tech conference at Jio World Convention Centre, Mumbai.
                        </p>
                    </div>

                    <motion.div 
                        className="relative flex justify-center items-center order-1 md:order-2"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.img
                            src={Picture2}
                            loading="lazy"
                            alt="Recognized Excellence"
                            className="w-[90%] sm:w-[420px] md:w-[500px] lg:w-[550px] h-auto object-contain mx-auto"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>
                </div>
            </section>

            <section
                className="flex md:hidden relative w-full justify-center px-[6%] my-[80px]"
                style={{ zIndex: 2 }}
            >
                <div
                    className="-mt-8 sm:mt-0 flex flex-col items-center w-full max-w-[1250px]"
                    style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "25px",
                        padding: "25px 20px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                    }}
                >
                    <h2
                        className="text-[24px] sm:text-[30px] font-[600] mb-3 text-center"
                        style={{ color: "#002C6C", fontFamily: "Sora" }}
                    >
                        Recognized Excellence
                    </h2>

                    <img
                        src={Picture2}
                        loading="lazy"
                        alt="Recognized Excellence"
                        className="w-[85%] sm:w-[90%] h-auto object-contain rounded-[12px] mb-4"
                    />

                    <ul className="space-y-2 text-[14px] sm:text-[15px] text-[#333] leading-[1.6] font-[400] text-left">
                        {[
                            "Represented India at the Dubai AI Festival.",
                            "Invited to India’s biggest tech conference at Jio World Convention Centre, Mumbai.",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 flex-shrink-0 mt-[2px]"
                                >
                                    <defs>
                                        <linearGradient id={`tickGradientRecog-${i}`} x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#2352A5" />
                                            <stop offset="11%" stopColor="#137DD1" />
                                            <stop offset="26%" stopColor="#02A7FD" />
                                            <stop offset="44%" stopColor="#7DE2FF" />
                                            <stop offset="72%" stopColor="#42ACEF" />
                                            <stop offset="83%" stopColor="#127CD1" />
                                            <stop offset="99%" stopColor="#2352A5" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        fill={`url(#tickGradientRecog-${i})`}
                                        fillRule="evenodd"
                                        d="M9 16.17l-3.88-3.88a1 1 0 10-1.42 1.42l4.59 4.59a1 1 0 001.42 0l9.59-9.59a1 1 0 10-1.42-1.42L9 16.17z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="relative w-full hidden md:flex justify-center px-[5%] md:px-[4%] my-[100px]" style={{ zIndex: 2 }}>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-[1250px]"
                    style={{
                        background: "rgba(255, 255, 255, 0.88)",
                        borderRadius: "30px",
                        padding: "30px 25px",
                        boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                    }}
                >
                    <motion.div 
                        className="relative flex justify-center items-center"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.img
                            src={Picture3}
                            loading="lazy"
                            alt="What Sets Us Apart"
                            className="w-[90%] sm:w-[420px] md:w-[500px] lg:w-[550px] h-auto object-contain mx-auto"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>

                    <div
                        className="flex flex-col justify-center text-center md:text-left px-4 md:px-6"
                        style={{ color: "#002C6C", fontFamily: "Sora" }}
                    >
                        <h2 className="text-[32px] sm:text-[40px] md:text-[54px] font-[600] mb-6">
                            What Sets Us <br className="hidden md:block" /> Apart
                        </h2>
                        <ul className="space-y-4 text-[16px] text-[#333] leading-[1.7]">
                            {[
                                "Agile & transparent development process.",
                                "UX-first design philosophy for seamless user experiences.",
                                "24x7 communication and dedicated client support.",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 justify-center md:justify-start">
                                    <span className="max-w-[500px]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section
                className="flex md:hidden relative w-full justify-center px-[6%] my-[80px]"
                style={{ zIndex: 2 }}
            >
                <div
                    className="-mt-6 sm:mt-0 flex flex-col items-center w-full max-w-[1250px]"
                    style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "25px",
                        padding: "25px 20px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                    }}
                >
                    <h2
                        className="text-[24px] sm:text-[30px] font-[600] mb-3 text-center"
                        style={{ color: "#002C6C", fontFamily: "Sora" }}
                    >
                        What Sets Us Apart
                    </h2>

                    <img
                        src={Picture3}
                        loading="lazy"
                        alt="What Sets Us Apart"
                        className="w-[85%] sm:w-[90%] h-auto object-contain rounded-[12px] mb-4"
                    />

                    <ul className="space-y-2 text-[14px] sm:text-[15px] text-[#333] leading-[1.6] font-[400] text-left">
                        {[
                            "Agile & transparent development process.",
                            "UX-first design philosophy for seamless user experiences.",
                            "24x7 communication and dedicated client support.",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 flex-shrink-0 mt-[2px]"
                                >
                                    <defs>
                                        <linearGradient id={`tickGradientWhat-${i}`} x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#2352A5" />
                                            <stop offset="11%" stopColor="#137DD1" />
                                            <stop offset="26%" stopColor="#02A7FD" />
                                            <stop offset="44%" stopColor="#7DE2FF" />
                                            <stop offset="72%" stopColor="#42ACEF" />
                                            <stop offset="83%" stopColor="#127CD1" />
                                            <stop offset="99%" stopColor="#2352A5" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        fill={`url(#tickGradientWhat-${i})`}
                                        fillRule="evenodd"
                                        d="M9 16.17l-3.88-3.88a1 1 0 10-1.42 1.42l4.59 4.59a1 1 0 001.42 0l9.59-9.59a1 1 0 10-1.42-1.42L9 16.17z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="relative w-full hidden md:flex justify-center px-[5%] md:px-[4%] my-[100px]" style={{ zIndex: 2 }}>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-[1250px]"
                    style={{
                        background: "rgba(255, 255, 255, 0.88)",
                        borderRadius: "30px",
                        padding: "30px 25px",
                        boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
                    }}
                >
                    <div
                        className="flex flex-col justify-center text-center md:text-left px-4 md:px-6 order-2 md:order-1"
                        style={{ color: "#002C6C", fontFamily: "Sora" }}
                    >
                        <h2 className="text-[32px] sm:text-[40px] md:text-[54px] font-[600] mb-6">
                            Our Expertise
                        </h2>
                        <p className="text-[16px] md:text-[17px] text-[#333] leading-[1.7] mb-3">
                            Represented India at the Dubai AI Festival.
                        </p>
                        <p className="text-[16px] md:text-[17px] text-[#333] leading-[1.7]">
                            Invited to India’s biggest tech conference at Jio World Convention Centre, Mumbai.
                        </p>
                    </div>

                    <motion.div 
                        className="relative flex justify-center items-center order-1 md:order-2"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.img
                            src={Picture4}
                            loading="lazy"
                            alt="Our Expertise"
                            className="w-[90%] sm:w-[420px] md:w-[500px] lg:w-[550px] h-auto object-contain mx-auto"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>
                </div>
            </section>
            
            <section
                className="flex md:hidden relative w-full justify-center px-[6%] my-[80px]"
                style={{ zIndex: 2 }}
            >
                <div
                    className="-mt-8 sm:mt-0 flex flex-col items-center w-full max-w-[1250px]"
                    style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "25px",
                        padding: "25px 20px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                    }}
                >
                    <h2
                        className="text-[24px] sm:text-[30px] font-[600] mb-3 text-center"
                        style={{ color: "#002C6C", fontFamily: "Sora" }}
                    >
                        Our Expertise
                    </h2>

                    <img
                        src={Picture4}
                        loading="lazy"
                        alt="Our Expertise"
                        className="w-[85%] sm:w-[90%] h-auto object-contain rounded-[12px] mb-4"
                    />

                    <ul className="space-y-2 text-[14px] sm:text-[15px] text-[#333] leading-[1.6] font-[400] text-left">
                        {[
                            "Represented India at the Dubai AI Festival.",
                            "Invited to India’s biggest tech conference at Jio World Convention Centre, Mumbai.",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 flex-shrink-0 mt-[2px]"
                                >
                                    <defs>
                                        <linearGradient id={`tickGradientExp-${i}`} x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#2352A5" />
                                            <stop offset="11%" stopColor="#137DD1" />
                                            <stop offset="26%" stopColor="#02A7FD" />
                                            <stop offset="44%" stopColor="#7DE2FF" />
                                            <stop offset="72%" stopColor="#42ACEF" />
                                            <stop offset="83%" stopColor="#127CD1" />
                                            <stop offset="99%" stopColor="#2352A5" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        fill={`url(#tickGradientExp-${i})`}
                                        fillRule="evenodd"
                                        d="M9 16.17l-3.88-3.88a1 1 0 10-1.42 1.42l4.59 4.59a1 1 0 001.42 0l9.59-9.59a1 1 0 10-1.42-1.42L9 16.17z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <motion.section
                className="-mt-8 sm:mt-0 relative w-full flex justify-center"
                style={{
                    background: "rgba(255, 255, 255, 0.98)",
                    backdropFilter: "blur(8px)",
                    padding: "80px 6%",
                    boxShadow: "0 -5px 25px rgba(0,0,0,0.05)",
                }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9 }}
            >
                <div
                    className="w-full max-w-[1500px] -mt-8 sm:mt-0 text-center md:text-left -mb-8 sm:mb-0"
                    style={{ fontFamily: "Sora" }}
                >
                    <motion.h2
                        className="font-[600] leading-[1.2] mb-3 
                        text-[28px] sm:text-[36px] md:text-[48px] lg:text-[55px]"
                        style={{ color: "#002C6C", whiteSpace: "nowrap" }}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Our Commitment
                    </motion.h2>

                    <motion.p
                        className="text-[15px] sm:text-[16px] md:text-[17px] text-[#333] leading-[1.7] mx-auto md:mx-0"
                        style={{ maxWidth: "900px" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        We don't just deliver projects — we partner for growth. From ideation to
                        launch and beyond, we ensure continuous improvements, maintenance, and
                        upgrades that create lasting value for your business.
                    </motion.p>
                </div>
            </motion.section>

            <Contact />

        </motion.div>
    );
}
