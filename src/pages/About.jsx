import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import mobileFrame from "../assets/About/MobileFrame.png";
import firstImg from "../assets/About/1st.png";
import secondImg from "../assets/About/2nd.png";
import thirdImg from "../assets/About/3rd.png";

import brand1 from "../assets/About/brand1.png";
import brand2 from "../assets/About/brand2.png";
import brand3 from "../assets/About/brand3.png";
import brand4 from "../assets/About/brand4.png";

const aboutBg = "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811766/codexnovas/lzwzkgduur32a6gyddqt.png";

const About = () => {
    const [visibleIndex, setVisibleIndex] = useState(-1);
    const sectionRef = useRef(null);
    const visibleRef = useRef(visibleIndex);
    const [visibleProgress, setVisibleProgress] = useState(-1);
    const visibleProgressRef = useRef(visibleProgress);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.innerWidth >= 768) return;

        const inSectionRef = { current: false };
        let ticking = false;

        const computeAndSetIndex = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            inSectionRef.current = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (!inSectionRef.current) {
                setVisibleIndex(-1);
                setVisibleProgress(-1);
                visibleProgressRef.current = -1;
                return;
            }

            const viewportCenter = window.innerHeight / 2;
            const offset = viewportCenter - rect.top;
            const ratio = Math.max(0, Math.min(1, offset / rect.height));
            const prog = ratio * 2;
            setVisibleProgress(prog);
            visibleProgressRef.current = prog;
            setVisibleIndex(Math.round(prog));
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    computeAndSetIndex();
                    ticking = false;
                });
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        computeAndSetIndex();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const getMobileImageStyle = (i) => {
        const prog = typeof visibleProgress === "number" ? visibleProgress : -1;
        const diff = Math.max(0, 1 - Math.abs(prog - i));
        const translateY = 40 - 64 * diff;
        const opacity = diff;
        const zIndex = diff > 0.45 ? 20 : 10;
        return {
            transform: `translateY(${translateY}px)`,
            opacity,
            transition: "transform 420ms cubic-bezier(.2,.9,.2,1), opacity 360ms ease",
            zIndex,
        };
    };

    const getLabelStyle = (i) => {
        const prog = typeof visibleProgress === "number" ? visibleProgress : -1;
        const diff = Math.max(0, 1 - Math.abs(prog - i));
        const opacity = diff;
        const translateY = (1 - diff) * 24; // moved text lower
        return {
            opacity,
            transform: `translateY(${translateY}px)`,
            transition: "transform 380ms cubic-bezier(.2,.9,.2,1), opacity 300ms ease",
        };
    };

    useEffect(() => {
        visibleRef.current = visibleIndex;
    }, [visibleIndex]);

    return (
        <div className="w-full overflow-x-hidden relative">
            <div className="hidden md:block w-full">
                <section className="flex flex-col lg:flex-row items-center justify-between w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 overflow-hidden mt-0 md:mt-6 lg:mt-2 lg:gap-8 min-h-[calc(100vh-85px)]">
                    <motion.div
                        className="w-full lg:w-[48%] justify-center items-start bg-white flex"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            src={mobileFrame}
                            loading="lazy"
                            alt="Mobile mockup"
                            className="h-[75vh] lg:h-[80vh] xl:h-[85vh] w-auto object-contain"
                        />
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-[48%] flex flex-col justify-center items-center py-6 md:py-10 lg:py-12"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="flex flex-col w-full max-w-[70%] text-left">
                            <motion.h2
                                className="text-[40px] lg:text-[48px] xl:text-[56px] leading-[110%] mb-6 lg:mb-8"
                                style={{ fontFamily: "Sora", fontWeight: 600 }}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <span style={{ color: "#000000" }}>About</span>{" "}
                                <span style={{ color: "#0368FF" }}>Us</span>
                            </motion.h2>

                            <motion.p
                                style={{
                                    fontFamily: "Sora",
                                    fontWeight: 300,
                                    color: "#6b6b6b",
                                    lineHeight: "1.6",
                                    letterSpacing: "0.2px",
                                }}
                                className="text-[16px] lg:text-[18px] xl:text-[20px] mb-3 md:mb-4"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                We're not an agency. We're a product-driven innovation studio.
                                <br />
                                <br />
                                Code-X-Novas is a team of full-stack engineers, designers, and
                                strategists building impactful digital platforms like SyncroTask
                                and more.
                            </motion.p>
                        </div>
                    </motion.div>
                </section>

                <section className="relative min-h-[100vh] w-screen overflow-hidden">
                    <div
                        className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover grayscale"
                        style={{ backgroundImage: `url(${aboutBg})` }}
                    ></div>
                    <div className="absolute inset-0 w-full h-full bg-black/40"></div>
                    <div className="relative z-10 flex flex-col items-center justify-start pt-32 md:pt-48 lg:pt-60 pb-16 md:pb-28 lg:pb-40 space-y-16 md:space-y-20 w-full">
                        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8 md:gap-8 lg:gap-20">
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            >
                                <img
                                    src={firstImg}
                                    loading="lazy"
                                    alt="Product Engineering"
                                    className="shadow-lg w-full max-w-[160px] md:max-w-[200px] lg:max-w-[300px] h-auto object-contain mb-6"
                                />
                                <p className="text-white mt-2 text-sm md:text-base lg:text-lg">
                                    Product Engineering
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex flex-col items-center md:mt-6 lg:mt-20"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            >
                                <img
                                    src={secondImg}
                                    loading="lazy"
                                    alt="AI Integrations"
                                    className="shadow-lg w-full max-w-[180px] md:max-w-[220px] lg:max-w-[320px] h-auto object-contain mb-6"
                                />
                                <p className="text-white mt-2 text-sm md:text-base lg:text-lg">
                                    AI Integrations
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            >
                                <img
                                    src={thirdImg}
                                    loading="lazy"
                                    alt="SaaS Infrastructure"
                                    className="shadow-lg w-full max-w-[160px] md:max-w-[200px] lg:max-w-[300px] h-auto object-contain mb-6"
                                />
                                <p className="text-white mt-2 text-sm md:text-base lg:text-lg">
                                    Scalable SaaS Infrastructure
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="relative flex flex-col items-center justify-center w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
                    <motion.h2
                        className="text-center text-lg md:text-xl lg:text-2xl font-bold mb-8 md:mb-10"
                        style={{
                            fontFamily: "Sora",
                            background:
                                "linear-gradient(90.23deg, #082F6E -4.75%, #2352A5 48.42%, #02A2FD 100.57%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        TRUSTED BY CURRENT AND SOON TO BE WORLD-CLASS BRANDS
                    </motion.h2>

                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                    >
                        <motion.img
                            loading="lazy"
                            src={brand1}
                            alt="Brand 1"
                            className="w-[100px] md:w-[120px] lg:w-[150px] h-auto"
                            variants={{
                                hidden: { y: 30, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                            }}
                        />
                        <motion.img
                            loading="lazy"
                            src={brand2}
                            alt="Brand 2"
                            className="w-[100px] md:w-[120px] lg:w-[150px] h-auto"
                            variants={{
                                hidden: { y: 30, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                            }}
                        />
                        <motion.img
                            loading="lazy"
                            src={brand3}
                            alt="Brand 3"
                            className="w-[100px] md:w-[120px] lg:w-[150px] h-auto"
                            variants={{
                                hidden: { y: 30, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                            }}
                        />
                        <motion.img
                            loading="lazy"
                            src={brand4}
                            alt="Brand 4"
                            className="w-[100px] md:w-[120px] lg:w-[150px] h-auto"
                            variants={{
                                hidden: { y: 30, opacity: 0 },
                                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                            }}
                        />
                    </motion.div>
                </section>
            </div>

            <div className="block md:hidden w-full">
                <section className="flex flex-col items-center justify-center w-full px-4 mt-6">
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="text-[28px] sm:text-[32px] leading-[110%] mb-6"
                            style={{ fontFamily: "Sora", fontWeight: 600 }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span style={{ color: "#000000" }}>About</span>{" "}
                            <span style={{ color: "#0368FF" }}>Us</span>
                        </motion.h2>

                        <motion.p
                            style={{
                                fontFamily: "Sora",
                                fontWeight: 300,
                                color: "#6b6b6b",
                                maxWidth: "650px",
                                margin: "0 auto",
                                lineHeight: "1.6",
                                letterSpacing: "0.2px",
                            }}
                            className="text-[15px] sm:text-[18px] mb-3"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            We're not an agency. We're a product-driven innovation studio.
                            <br />
                            Code-X-Novas is a team of full-stack engineers, designers, and
                            strategists building impactful digital platforms like SyncroTask
                            and more.
                        </motion.p>

                        <motion.img
                            src={mobileFrame}
                            loading="lazy"
                            alt="Mobile mockup"
                            className="h-[40vh] w-auto object-contain mt-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                        />
                    </motion.div>
                </section>

                <section ref={sectionRef} className="relative h-[45vh] w-screen overflow-hidden mt-10">
                    <div
                        className="absolute inset-0 w-full h-full bg-center bg-cover grayscale"
                        style={{ backgroundImage: `url(${aboutBg})` }}
                    ></div>
                    <div className="absolute inset-0 w-full h-full bg-black/40"></div>

                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            src={firstImg}
                            loading="lazy"
                            alt="Product Engineering"
                            className="absolute w-[70%] h-auto object-contain"
                            style={getMobileImageStyle(0)}
                        />
                        <img
                            src={secondImg}
                            loading="lazy"
                            alt="AI Integrations"
                            className="absolute w-[70%] h-auto object-contain"
                            style={getMobileImageStyle(1)}
                        />
                        <img
                            src={thirdImg}
                            loading="lazy"
                            alt="SaaS Infrastructure"
                            className="absolute w-[70%] h-auto object-contain"
                            style={getMobileImageStyle(2)}
                        />

                        <p
                            className="absolute bottom-8 text-white text-center w-full"
                            style={{ ...getLabelStyle(0), fontFamily: "Sora", fontWeight: 500 }}
                        >
                            Product Engineering
                        </p>

                        <p
                            className="absolute bottom-8 text-white text-center w-full"
                            style={{ ...getLabelStyle(1), fontFamily: "Sora", fontWeight: 500 }}
                        >
                            AI Integrations
                        </p>

                        <p
                            className="absolute bottom-8 text-white text-center w-full"
                            style={{ ...getLabelStyle(2), fontFamily: "Sora", fontWeight: 500 }}
                        >
                            Scalable SaaS Infrastructure
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
