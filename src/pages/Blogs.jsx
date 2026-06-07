import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import Big1 from "../assets/Blogs/big1.png";
import Blog1 from "../assets/Blogs/1st.png";
import Blog2 from "../assets/Blogs/2nd.png";
import Blog3 from "../assets/Blogs/3rd.png";

const Blogs = () => {
    const defaultPosts = [
        {
            id: 0,
            img: Big1,
            title: "Building a Culture of Innovation in Tech Teams",
            desc:
                "Discover how fostering creativity, collaboration, and ownership can transform your development team into a powerhouse of innovation and product excellence.",
        },
        {
            id: 1,
            img: Blog1,
            title: "Powering the Future with Smart Engineering",
            desc:
                "From microchips to machine learning, explore how modern engineering drives automation, eﬃciency, and the next generation of intelligent digital solutions.",
        },
        {
            id: 2,
            img: Blog2,
            title: "How Data-Driven Decisions Shape Smarter Businesses",
            desc:
                "Learn how AI and analytics empower companies to predict trends, optimize operations, and create personalized customer experiences in today’s fast-paced digital economy.",
        },
        {
            id: 3,
            img: Blog3,
            title: "Immersive Tech: The Future of User Experience",
            desc:
                "Discover how VR and AR are redefining engagement — blending innovation and design to create immersive digital experiences that inspire, educate, and entertain.",
        },
    ];

    const [posts, setPosts] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const snap = await getDocs(collection(db, "blogs"));
                const list = snap.docs.map((doc, idx) => ({ id: doc.id, ...doc.data() }));
                if (list.length > 0) {
                    setPosts(list);
                    setSelectedId(list[0].id);
                } else {
                    setPosts(defaultPosts);
                    setSelectedId(0);
                }
            } catch (err) {
                console.error("Error loading blogs: ", err);
                setPosts(defaultPosts);
                setSelectedId(0);
            }
        };
        fetchBlogs();
    }, []);

    if (posts.length === 0 || selectedId === null) {
        return null;
    }

    return (
        <section
            id="blogs"
            className="w-full lg:py-20 px-6 md:px-12 bg-gradient-to-b from-[#fdfdfd] to-[#f5f9ff]"
        >
            <motion.div 
                className="text-center mb-12"
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
                    <span className="text-black">Our Latest </span>
                    <span className="text-blue-600">Blogs</span>
                </motion.h2>
            </motion.div>

            <motion.div 
                className="block lg:hidden mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <motion.div 
                    className="mr-6 relative mb-6"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div 
                        className="absolute -top-6 -right-6 left-5 w-full h-full bg-gray-200"
                        initial={{ x: 20, y: 20, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    />
                    <motion.img
                        src={posts.find((p) => p.id === selectedId).img}
                        loading="lazy"
                        alt="Featured blog mobile"
                        className="relative w-full h-[230px] object-cover z-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    />
                </motion.div>

                <motion.h3 
                    className="text-xl font-bold text-black mb-4 leading-snug"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {posts
                        .find((p) => p.id === selectedId)
                        .title.split("\n")
                        .map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i <
                                    posts
                                        .find((p) => p.id === selectedId)
                                        .title.split("\n").length -
                                    1 && <br />}
                            </React.Fragment>
                        ))}
                </motion.h3>
                <motion.p 
                    className="text-gray-600 text-md leading-relaxed mb-6"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {posts.find((p) => p.id === selectedId).desc}
                </motion.p>
            </motion.div>

            <motion.div 
                className="hidden lg:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <motion.h3 
                            className="text-2xl font-bold text-black mb-4 leading-snug"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {posts[0].title}
                        </motion.h3>
                        <motion.p 
                            className="text-gray-600 text-lg leading-relaxed"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {posts[0].desc}
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className="relative"
                        initial={{ x: 50, opacity: 0, rotateY: -10 }}
                        whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div 
                            className="absolute -top-6 -right-6 w-full h-full bg-gray-200"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        />
                        <motion.img
                            src={Big1}
                            loading="lazy"
                            alt="Featured blog"
                            className="relative w-full h-[350px] object-cover z-10"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                        />
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
                className="block lg:hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, staggerChildren: 0.15 }}
            >
                <div className="space-y-4">
                    {posts
                        .filter((p) => p.id !== selectedId)
                        .map((blog, index) => (
                            <motion.button
                                key={blog.id}
                                onClick={() => {
                                    setSelectedId(blog.id);
                                    const el = document.getElementById("blogs");
                                    if (el && typeof el.scrollIntoView === "function") {
                                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                                    } else {
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }
                                }}
                                className="w-full flex items-center gap-3 bg-white shadow-sm overflow-hidden"
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="w-1/2 h-[110px] flex-shrink-0">
                                    <img
                                        src={blog.img}
                                        loading="lazy"
                                        alt={`Blog ${blog.id}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-1/2 px-3 py-2 text-left flex flex-col justify-center">
                                    <h4 className="text-sm font-semibold text-black leading-tight mb-1">
                                        {blog.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 leading-snug line-clamp-3">
                                        {blog.desc}
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                </div>
            </motion.div>

            <motion.div 
                className="hidden lg:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(1).map((blog, index) => (
                        <motion.div 
                            key={blog.id} 
                            className="flex flex-col"
                            initial={{ y: 50, opacity: 0, rotateX: -10 }}
                            whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                            whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                        >
                            <motion.img
                                src={blog.img}
                                loading="lazy"
                                alt={`Blog ${blog.id}`}
                                className="w-full h-[220px] object-cover mb-4"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            />
                            <motion.h4 
                                className="text-lg font-semibold text-black leading-snug mb-2"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                            >
                                {blog.title}
                            </motion.h4>
                            <motion.p 
                                className="text-gray-600 text-base leading-relaxed"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                            >
                                {blog.desc}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Blogs;
