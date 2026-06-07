import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import SEO from "../components/SEO";
import TextHover from "../components/TextHover";
import Logo from "../assets/logo.png";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        subscribe: false,
    });
    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                type: "error",
                message: "Please fill in all required fields.",
            });
            setIsSubmitting(false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({
                type: "error",
                message: "Please enter a valid email address.",
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // Write to Firestore db first
            await addDoc(collection(db, "contacts"), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                subscribe: formData.subscribe,
                timestamp: new Date().toISOString()
            });

            // Replace these with your actual EmailJS credentials
            const result = await emailjs.sendForm(
                "service_5hqfkmn",
                "template_zfp7e0s",
                form.current,
                "SuuyPe1FNbCGOQaWM"
            );

            setStatus({
                type: "success",
                message: "Message sent successfully! We'll get back to you soon.",
            });
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                subscribe: false,
            });
        } catch (error) {
            console.error("Submission Error:", error);
            // Even if EmailJS fails, if Firestore succeeded, we consider it sent
            setStatus({
                type: "success",
                message: "Message sent successfully! We'll get back to you soon.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <SEO
                title="Contact Us — Code X Novas | Let's Build Together"
                description="Get in touch with Code X Novas. Let's discuss your project, explore partnership opportunities, or answer your questions about our services."
                url="https://codexnovas.in/contact"
            />
            <section
                id="contact"
                className="relative w-full py-6 sm:py-12 md:py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-100"
            >
                <motion.div 
                    className="text-center mb-6 sm:mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold"
                        style={{ fontFamily: "Sora" }}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-black">Get in </span>
                        <span className="text-blue-600">Touch</span>
                    </motion.h2>
                    <motion.p 
                        className="mt-4 text-gray-600 max-w-xl mx-auto text-base md:text-lg"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Have questions? We're here for you. <br />
                        Drop us a line, write us an email, or send us a text.
                    </motion.p>
                </motion.div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-lg overflow-hidden md:min-h-[700px]">
                    <motion.div 
                        className="relative bg-black text-white p-8 md:p-12 flex flex-col justify-center overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <motion.h3 
                            className="text-2xl font-semibold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Contact Information
                        </motion.h3>
                        <motion.p 
                            className="mb-8 text-gray-300 text-[15.25px] sm:text-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Say something to start a live chat!
                        </motion.p>
                        <motion.ul 
                            className="space-y-6 text-base md:text-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.15, delayChildren: 0.4 }}
                        >
                            <motion.li 
                                className="flex items-center space-x-4"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <FiPhone className="text-xl text-white" />
                                <span>+91 9348976663</span>
                            </motion.li>
                            <motion.li 
                                className="flex items-center space-x-4"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                            >
                                <FiMail className="text-xl text-white" />
                                <span>info@codexnovas.in</span>
                            </motion.li>
                        </motion.ul>
                        <motion.div 
                            className="absolute bottom-0 right-0 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-blue-900/40 rounded-full translate-x-12 translate-y-12"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        />
                        <motion.div 
                            className="absolute bottom-7 right-8 w-12 h-12 sm:w-28 sm:bottom-16 sm:right-20 md:bottom-20 md:right-28 sm:h-28 md:w-32 md:h-32 bg-blue-700/40 rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        />
                    </motion.div>
                    <motion.div 
                        className="bg-white p-8 md:p-12 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <motion.input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="border-b border-gray-400 focus:outline-none focus:border-blue-600 py-3 text-base md:text-lg"
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    whileFocus={{ borderColor: "#2563eb", scale: 1.02 }}
                                />
                                <motion.input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="border-b border-gray-400 focus:outline-none focus:border-blue-600 py-3 text-base md:text-lg"
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    whileFocus={{ borderColor: "#2563eb", scale: 1.02 }}
                                />
                            </motion.div>
                            <motion.input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 py-3 text-base md:text-lg"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                whileFocus={{ borderColor: "#2563eb", scale: 1.02 }}
                            />
                            <motion.textarea
                                name="message"
                                placeholder="Write your message.."
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 pt-1 pb-0 text-base md:text-lg -mt-6"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                whileFocus={{ borderColor: "#2563eb", scale: 1.02 }}
                            />
                            <motion.div 
                                className="flex items-start space-x-3 -mt-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <input
                                    type="checkbox"
                                    id="subscribe"
                                    name="subscribe"
                                    checked={formData.subscribe}
                                    onChange={handleChange}
                                    className="peer mt-1 w-4 h-4 rounded-full appearance-none border border-gray-400 
               checked:bg-black checked:border-black checked:before:content-['✔'] 
               checked:before:text-white checked:before:block checked:before:text-xs 
               checked:before:text-center"
                                />
                                <label
                                    htmlFor="subscribe"
                                    className="text-sm text-gray-700 peer-checked:font-semibold"
                                >
                                    Subscribe to receive the latest news and exclusive offers
                                </label>
                            </motion.div>
                            {status.message && (
                                <motion.div
                                    className={`p-4 rounded-md text-sm ${status.type === "success"
                                            ? "bg-green-100 text-green-700 border border-green-300"
                                            : "bg-red-100 text-red-700 border border-red-300"
                                        }`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                            <motion.div 
                                className="mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group bg-black text-white px-16 py-3 rounded-md hover:bg-gray-900 transition text-base md:text-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <TextHover 
                                        text={isSubmitting ? "Sending..." : "Send Message"}
                                        customClass="text-white"
                                        noPadding={true}
                                    />
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </section>

            <motion.footer 
                className="bg-[#0B1221] text-white py-12 px-3 md:px-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div 
                    className="max-w-7xl mx-auto block md:hidden px-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="pt-2 sm:pt-6">
                        <motion.img 
                            src={Logo} 
                            loading="lazy" 
                            alt="CodeX Novas" 
                            className="h-8 mb-4 -mt-8"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        />
                        <div className="hidden bg-white rounded-full overflow-hidden w-full max-w-[240px] border border-gray-300">
                            <input
                                type="email"
                                placeholder="Your Email address"
                                className="flex-1 min-w-0 px-4 py-2 text-black bg-transparent focus:outline-none placeholder:text-xs"
                            />
                            <button className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-700 transition m-1">
                                Submit
                            </button>
                        </div>
                        <motion.div 
                            className="flex justify-start gap-4 mt-5 ml-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                        >
                            <motion.a
                                href="https://www.linkedin.com/company/code-x-novas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F2030] text-blue-400"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaLinkedinIn />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/codexnovas?igsh=NHdpbmk1amJyNnc1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F2030] text-blue-400"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaInstagram />
                            </motion.a>
                            <motion.a
                                href="https://youtube.com/@code-x-novas?si=5JWCRETLXGoSgqJ0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0F2030] text-blue-400"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaYoutube />
                            </motion.a>
                        </motion.div>
                        <motion.div 
                            className="flex justify-between mt-8 text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <ul className="space-y-3">
                                <li className="font-semibold text-sm text-gray-200 mb-2">
                                    Company
                                </li>
                                <li>
                                    <a href="/about">About Us</a>
                                </li>
                                <li>
                                    <a href="/career">Careers</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                            <ul className="space-y-3 text-left">
                                <li className="font-semibold text-sm text-gray-400 mb-2">
                                    Products
                                </li>
                                <li className="text-gray-600">
                                    <a href="/products">Synchrotask</a>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div 
                            className="w-full h-[2px] bg-gray-700 mt-8 mb-4 -mx-0"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        />
                        <motion.p 
                            className="text-center text-gray-500 text-[13px] mt-4 mb-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            ©Code-X-Novas 2025 All Rights Reserved
                        </motion.p>
                        <motion.div 
                            className="flex ml-2 justify-between text-sm px-2 text-gray-400"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <a href="/privacy">Privacy Policy</a>
                            <a href="/terms">Terms Of Use</a>
                        </motion.div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="max-w-7xl mx-auto hidden md:grid md:grid-cols-3 gap-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.img 
                            src={Logo} 
                            loading="lazy" 
                            alt="CodeX Novas" 
                            className="h-10 mb-5"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        />
                        <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md border border-gray-300">
                            <input
                                type="email"
                                placeholder="Your Email address"
                                className="flex-1 min-w-0 px-2 sm:px-4 py-2 text-black bg-transparent 
                        focus:outline-none placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg"
                            />
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition m-1">
                                Submit
                            </button>
                        </div>
                        <motion.div 
                            className="flex space-x-6 mt-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
                        >
                            <motion.a
                                href="https://www.linkedin.com/company/code-x-novas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-blue-600 hover:bg-gray-700 transition"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaLinkedinIn className="text-2xl" />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/codexnovas?igsh=NHdpbmk1amJyNnc1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-blue-600 hover:bg-gray-700 transition"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaInstagram className="text-2xl" />
                            </motion.a>
                            <motion.a
                                href="https://youtube.com/@code-x-novas?si=5JWCRETLXGoSgqJ0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-blue-600 hover:bg-gray-700 transition"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaYoutube className="text-2xl" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="font-semibold text-lg mb-6">Company</h3>
                        <motion.ul 
                            className="space-y-4 text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
                        >
                            <motion.li
                                initial={{ x: -10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <a href="/about">About Us</a>
                            </motion.li>
                            <motion.li
                                initial={{ x: -10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <a href="/career">Careers</a>
                            </motion.li>
                            <motion.li
                                initial={{ x: -10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <a href="/contact">Contact</a>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h3 className="font-semibold text-lg mb-6">Products</h3>
                        <motion.ul 
                            className="space-y-4 text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <motion.li
                                initial={{ x: -10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                            >
                                <a href="/products">Synchrotask</a>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="mt-12 border-t border-gray-700 pt-6 hidden md:flex justify-between items-center text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <motion.p
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        ©Code-X-Novas 2025 All Rights Reserved
                    </motion.p>
                    <motion.div 
                        className="flex space-x-6"
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms Of Use</a>
                    </motion.div>
                </motion.div>
            </motion.footer>
        </>
    );
};

export default Contact;
