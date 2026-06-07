import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import Client1 from "../assets/Products/Client1.png";
import Client2 from "../assets/Products/Client2.png";
import Client3 from "../assets/Products/Client3.png";
const animation1 = "https://res.cloudinary.com/dnbqbzens/video/upload/v1780811280/codexnovas/febfwuncuzwk6daakhhb.mp4";

const testimonials = [Client1, Client2, Client3];

const Products = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const handlePrev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="relative w-full py-11 sm:py-6 px-6 md:px-12 bg-white text-center overflow-hidden">
            <motion.h2
                className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold -mb-12 md:mb-12"
                style={{ fontFamily: "Sora" }}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <span className="text-black">What Our </span>
                <span className="text-blue-600">Clients Say</span>
            </motion.h2>

            <motion.div 
                className="hidden sm:flex items-center justify-center max-w-6xl mx-auto relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <DesktopProducts
                    index={index}
                    direction={direction}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            </motion.div>

            {/* Mobile */}
            <motion.div 
                className="flex sm:hidden items-center justify-center max-w-md mx-auto relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <MobileProducts
                    index={index}
                    direction={direction}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            </motion.div>
        </section>
    );
};

const DesktopProducts = ({ index, direction, handlePrev, handleNext }) => {
    return (
        <div className="relative flex items-center justify-center w-full">
            <motion.button
                onClick={handlePrev}
                className="absolute -left-5 sm:-left-6 lg:-left-10 z-20 
                    w-4 h-4 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center 
                    border border-blue-800 rounded-full text-blue-800 
                    hover:bg-blue-800 hover:text-white transition"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
            >
                <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </motion.button>

            {/* Background Video */}
            <motion.video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <source src={animation1} type="video/mp4" />
            </motion.video>

            <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center perspective-[2000px]">
                <motion.div 
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[100%] h-7 bg-black/60 rounded-xl blur-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                />

                <motion.img
                    src={testimonials[(index + 2) % testimonials.length]}
                    loading="lazy"
                    alt="third stacked"
                    className="absolute w-[80%] h-[80%] object-contain -top-14 z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                />

                <motion.img
                    src={testimonials[(index + 1) % testimonials.length]}
                    loading="lazy"
                    alt="second stacked"
                    className="absolute w-[90%] h-[90%] object-contain -top-8 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                />

                <AnimatePresence mode="wait">
                    <motion.img
                        loading="lazy"
                        key={index}
                        src={testimonials[index]}
                        alt="Client"
                        initial={{ opacity: 1, scale: 1, y: 0, zIndex: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0, zIndex: 30 }}
                        exit={{
                            opacity: 1,
                            scale: 0.85,
                            y: 100,
                            rotateX: direction === 1 ? 25 : -25,
                            zIndex: 5,
                        }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute w-[100%] h-[100%] object-contain"
                        style={{ transformOrigin: "center bottom" }}
                    />
                </AnimatePresence>
            </div>

            <motion.button
                onClick={handleNext}
                className="absolute -right-5 sm:-right-6 lg:-right-10 z-20 
                    w-4 h-4 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center 
                    border border-blue-800 rounded-full text-blue-800 
                    hover:bg-blue-800 hover:text-white transition"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
            >
                <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </motion.button>
        </div>
    );
};

const MobileProducts = ({ index, direction, handlePrev, handleNext }) => {
    return (
        <div className="relative w-full flex flex-col items-center justify-center">

            {/* Background Video */}
            <motion.video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <source src={animation1} type="video/mp4" />
            </motion.video>

            <div className="relative w-full max-w-sm h-[400px] flex items-center justify-center perspective-[2000px]">

                <motion.div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-5 bg-black/60 rounded-xl blur-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                />

                <motion.img
                    src={testimonials[(index + 2) % testimonials.length]}
                    loading="lazy"
                    alt="third stacked"
                    className="absolute w-[78%] h-[78%] object-contain -top-0 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                />

                <motion.img
                    src={testimonials[(index + 1) % testimonials.length]}
                    loading="lazy"
                    alt="second stacked"
                    className="absolute w-[88%] h-[88%] object-contain -top-0 z-20"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                />

                <AnimatePresence mode="wait">
                    <motion.img
                        loading="lazy"
                        key={index}
                        src={testimonials[index]}
                        alt="Client"
                        initial={{ opacity: 1, scale: 1, y: 0, zIndex: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0, zIndex: 30 }}
                        exit={{
                            opacity: 1,
                            scale: 0.85,
                            y: 100,
                            rotateX: direction === 1 ? 25 : -25,
                            zIndex: 5,
                        }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute w-[100%] h-[100%] object-contain"
                        style={{ transformOrigin: "center bottom" }}
                    />
                </AnimatePresence>
            </div>

            <motion.div 
                className="absolute bottom-[50px] left-1/2 -translate-x-1/2 flex gap-4 z-30"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.8 }}
            >
                <motion.button
                    onClick={handlePrev}
                    className="w-8 h-8 flex items-center justify-center border border-blue-800 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white transition"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FiChevronLeft className="w-4 h-4" />
                </motion.button>

                <motion.button
                    onClick={handleNext}
                    className="w-8 h-8 flex items-center justify-center border border-blue-800 rounded-full text-blue-800 hover:bg-blue-800 hover:text-white transition"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FiChevronRight className="w-4 h-4" />
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Products;
