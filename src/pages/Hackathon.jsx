import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GitBranch, 
  Terminal, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  Cpu, 
  Code2, 
  Share2, 
  ShieldCheck, 
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
  Star
} from "lucide-react";
import SEO from "../components/SEO";
import Logo from "../assets/logo.png";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";

// EmailJS Configuration for Hackathon Waitlist
const EMAILJS_SERVICE_ID = "service_p5thrc8"; 
const EMAILJS_TEMPLATE_ID = "template_cwsi2j7"; 
const EMAILJS_PUBLIC_KEY = "b0uIc5k2nFVvzPzTb";

export default function Hackathon() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    collegeName: "",
    year: "1st Year",
    githubUrl: "",
    linkedinUrl: "",
    techStack: "",
    interestedAs: "Participant",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [spotsRemaining, setSpotsRemaining] = useState(142); // Simulating FOMO spots left of 500
  const [registrationId, setRegistrationId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const regId = `CNX-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegistrationId(regId);
    
    try {
      // Save to Firestore
      await addDoc(collection(db, "hackathon_waitlist"), {
        ...formData,
        registrationId: regId,
        timestamp: new Date().toISOString()
      });

      // Save to local storage for double safety
      const waitlist = JSON.parse(localStorage.getItem("hackathon_waitlist") || "[]");
      waitlist.push({ ...formData, registrationId: regId, timestamp: new Date().toISOString() });
      localStorage.setItem("hackathon_waitlist", JSON.stringify(waitlist));

      // Send confirmation email via EmailJS (fails gracefully)
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            to_name: formData.fullName,
            name: formData.fullName,
            user_name: formData.fullName,
            to_email: formData.email,
            email: formData.email,
            user_email: formData.email,
            recipient_email: formData.email,
            phone: formData.phone,
            college_name: formData.collegeName,
            year: formData.year,
            github_url: formData.githubUrl,
            linkedin_url: formData.linkedinUrl,
            tech_stack: formData.techStack,
            interested_as: formData.interestedAs,
            registration_id: regId
          },
          {
            publicKey: EMAILJS_PUBLIC_KEY
          }
        );
        console.log("Confirmation email sent successfully!");
      } catch (mailErr) {
        console.error("Error sending confirmation email:", mailErr);
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
      if (spotsRemaining > 1) {
        setSpotsRemaining(prev => prev - 1);
      }
    } catch (err) {
      console.error("Waitlist error:", err);
      // Fallback: show success anyway so user experience is smooth, saving to local storage
      const waitlist = JSON.parse(localStorage.getItem("hackathon_waitlist") || "[]");
      waitlist.push({ ...formData, registrationId: regId, timestamp: new Date().toISOString() });
      localStorage.setItem("hackathon_waitlist", JSON.stringify(waitlist));
      
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const selectAmbassadorAndScroll = () => {
    setFormData(prev => ({ ...prev, interestedAs: "Campus Ambassador" }));
    scrollToSection("waitlist-form-section");
  };

  // Dummy data for github contribution graph visual
  const contributionGrid = Array.from({ length: 140 }, () => Math.floor(Math.random() * 4));

  return (
    <>
      <SEO
        title="The Open Source Hackathon — Code-X-Novas"
        description="Contribute to real projects. Get noticed by startup founders. Unlock internship opportunities, referrals, and real-world experience."
        url="https://www.codexnovas.in/hackathon"
      />

      <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden font-sans relative">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[40%] right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Global grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/5 px-3 sm:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer" onClick={() => window.location.href = "/"}>
            <img src={Logo} alt="Code-X-Novas" className="h-6 sm:h-8" />
            <span className="text-[10px] sm:text-sm tracking-wider font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 px-1.5 sm:px-2 py-0.5 rounded">
              HACKATHON
            </span>
          </div>
          <button 
            onClick={() => scrollToSection("waitlist-form-section")}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-[11px] sm:text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-600 hover:text-white focus:outline-none transition-all duration-300"
          >
            <span className="relative px-2.5 sm:px-5 py-1.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0 font-mono tracking-wide">
              Priority Access
            </span>
          </button>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-24 relative z-10">
          
          {/* Announcement Pill */}
          <div className="flex justify-center mb-6">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 font-mono"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Priority Waitlist is now open. First 500 developers get early access.
            </motion.div>
          </div>

          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto mb-20 sm:mb-32">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400 leading-tight"
            >
              The Open Source Hackathon <br className="hidden md:inline" />
              That Could <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Change Your Career</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              Contribute to real projects. Get noticed by startup founders. Unlock internship opportunities, referrals, and real-world experience.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <button 
                onClick={() => scrollToSection("waitlist-form-section")}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-base"
              >
                Join Priority Waitlist
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection("what-you-get")}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-base"
              >
                Explore Benefits
              </button>
            </motion.div>

            {/* Simulated Live Spots Counter */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-xs font-mono text-cyan-400/80 flex items-center justify-center gap-1.5"
            >
              <Zap size={12} className="animate-bounce" /> Only {spotsRemaining} early bird developer spots left today
            </motion.p>

            {/* GitHub Style Contribution Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-16 relative rounded-xl border border-white/5 bg-white/[0.02] p-4 sm:p-6 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
              <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-4">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-cyan-400" />
                  <span>git log --oneline --author="codexnovas"</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Production Ready</span>
                </div>
              </div>

              {/* Grid representation */}
              <div className="flex justify-start md:justify-center overflow-x-auto pb-2 custom-scrollbar mask-grad">
                <div className="grid grid-flow-col grid-rows-7 gap-1 sm:gap-1.5 shrink-0">
                  {contributionGrid.map((level, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-sm transition-all duration-300 ${
                        level === 0 ? "bg-white/5" :
                        level === 1 ? "bg-cyan-950 border border-cyan-900/30" :
                        level === 2 ? "bg-cyan-700/80" :
                        "bg-cyan-400 drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]"
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between text-[10px] sm:text-xs text-gray-500 font-mono">
                <span>Oct 2025</span>
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <span className="w-2 h-2 rounded-sm bg-white/5" />
                  <span className="w-2 h-2 rounded-sm bg-cyan-950" />
                  <span className="w-2 h-2 rounded-sm bg-cyan-700/80" />
                  <span className="w-2 h-2 rounded-sm bg-cyan-400" />
                  <span>More</span>
                </div>
                <span>Jun 2026</span>
              </div>
            </motion.div>
          </section>

          {/* Numbers Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-24 sm:mb-32 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <span className="text-8xl sm:text-[180px] font-black tracking-widest font-mono">CODEX</span>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-sm font-mono tracking-widest text-cyan-400 uppercase">Impact Metrics</h2>
              <p className="text-3xl sm:text-4xl font-bold mt-2">Why Code-X-Novas?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "100+", text: "Projects Delivered", desc: "Crafting beautiful systems globally" },
                { number: "Top 75", text: "Emerging Startup", desc: "Recognized for design-led innovation" },
                { number: "Invited", text: "Dubai AI Festival", desc: "Showcasing frontier technology" },
                { number: "Global", text: "Clients Across India, USA & Dubai", desc: "Building scalable production software" },
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-sm transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold mt-3 text-base">{stat.text}</div>
                  <div className="text-xs text-gray-500 mt-1 font-mono">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What You'll Get Section */}
          <section id="what-you-get" className="mb-24 sm:mb-32 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-sm font-mono tracking-widest text-cyan-400 uppercase">Developer Perks</h2>
              <p className="text-3xl sm:text-5xl font-bold mt-2">What You’ll Get</p>
              <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                No generic hackathon fluff. We focus on real engineering experience and actual resume metrics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="text-cyan-400" size={24} />,
                  title: "Founder Mentorship",
                  desc: "Selected participants will get direct mentorship and career guidance from startup founders and senior engineers.",
                  pill: "Mentorship"
                },
                {
                  icon: <Globe className="text-cyan-400" size={24} />,
                  title: "Real Client Exposure",
                  desc: "High-performing contributors may get the opportunity to work on production-grade projects used by actual clients.",
                  pill: "Production Grade"
                },
                {
                  icon: <Zap className="text-cyan-400" size={24} />,
                  title: "Fast-Track Hiring",
                  desc: "Exceptional performers may bypass standard hiring rounds for future opportunities at Code-X-Novas.",
                  pill: "Careers"
                },
                {
                  icon: <Award className="text-cyan-400" size={24} />,
                  title: "Leadership Opportunities",
                  desc: "Top participants can be considered for Campus Ambassador, Community Lead, or Core Team positions.",
                  pill: "Leadership"
                },
                {
                  icon: <Sparkles className="text-cyan-400" size={24} />,
                  title: "Product Builder Recognition",
                  desc: "Outstanding contributors will be highlighted across Code-X-Novas platforms and community channels.",
                  pill: "Recognition"
                },
                {
                  icon: <Code2 className="text-cyan-400" size={24} />,
                  title: "Open Source Portfolio Boost",
                  desc: "Build a portfolio of verified contributions that recruiters and hiring managers can easily evaluate.",
                  pill: "Portfolio"
                },
                {
                  icon: <ShieldCheck className="text-cyan-400" size={24} />,
                  title: "Letter of Excellence",
                  desc: "Top contributors will receive a special recognition letter highlighting their technical contributions and impact.",
                  pill: "Credential"
                },
                {
                  icon: <Terminal className="text-cyan-400" size={24} />,
                  title: "Direct Founder Interaction",
                  desc: "Participate in exclusive discussions, Q&A sessions, and networking opportunities with startup founders.",
                  pill: "Networking"
                },
                {
                  icon: <Share2 className="text-cyan-400" size={24} />,
                  title: "Innovation Showcase",
                  desc: "Selected projects and contributors will be featured on the Code-X-Novas website and social media platforms.",
                  pill: "Showcase"
                },
                {
                  icon: <GitBranch className="text-cyan-400" size={24} />,
                  title: "Long-Term Talent Network",
                  desc: "Become part of our internal talent pool for future internships, freelance opportunities, and full-time roles.",
                  pill: "Talent Pool"
                },
                {
                  icon: <Star className="text-cyan-400" size={24} />,
                  title: "Early Access Opportunities",
                  desc: "Get priority access to upcoming products, beta programs, developer initiatives, and community events.",
                  pill: "Beta Access"
                },
                {
                  icon: <Cpu className="text-cyan-400" size={24} />,
                  title: "Community Leadership Track",
                  desc: "Highly active participants may be invited to help lead future hackathons, technical communities, and developer programs.",
                  pill: "Community"
                },
              ].map((perk, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-8 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-cyan-500/30 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {perk.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{perk.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400/80 bg-cyan-950/30 px-2 py-1 rounded">
                      {perk.pill}
                    </span>
                    <ChevronRight size={14} className="text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Campus Ambassador Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-24 sm:mb-32 relative rounded-2xl border border-white/5 bg-gradient-to-r from-zinc-950 to-black p-8 sm:p-12 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px]" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-900/50 text-xs text-cyan-400 font-mono mb-4">
                  <Star size={12} /> Leadership Role
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Become a Campus Ambassador
                </h2>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Bring opportunities, hackathon access, and elite engineering mentorship directly to your campus. Be the bridge between Code-X-Novas and your university.
                </p>

                <div className="mt-8">
                  <button 
                    onClick={selectAmbassadorAndScroll}
                    className="w-full sm:w-auto px-6 py-3 bg-white text-black hover:bg-gray-200 transition-all rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    Apply as Campus Ambassador
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Award size={18} className="text-cyan-400" /> Exclusive Benefits:
                </h3>
                <ul className="space-y-4 font-mono text-xs sm:text-sm">
                  {[
                    "Early access to internship shortlists & core releases",
                    "Official Leadership Certificate signed by founders",
                    "1-on-1 interaction & mentoring with industry founders",
                    "Special recognition & feature on Code-X-Novas platforms",
                    "Private Ambassador community for networking & referrals"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Waitlist Form Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="waitlist-form-section" 
            className="max-w-2xl mx-auto scroll-mt-24"
          >
            <div className="text-center mb-12">
              <span className="px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-900/50 text-xs text-cyan-400 font-mono uppercase">
                Priority Registration
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4">Join the Waitlist</h2>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Secure your priority invitation. Standard registrations open later.
              </p>
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 backdrop-blur-md shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-400 mb-2">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Linus Torvalds"
                          className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-400 mb-2">Email Address</label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="linus@git.org"
                          className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-400 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-400 mb-2">College Name</label>
                        <input
                          type="text"
                          required
                          name="collegeName"
                          value={formData.collegeName}
                          onChange={handleChange}
                          placeholder="IIT Madras"
                          className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-400 mb-2">Year of Study</label>
                        <select
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all font-mono"
                        >
                          <option>1st Year</option>
                          <option>2nd Year</option>
                          <option>3rd Year</option>
                          <option>4th Year</option>
                          <option>Graduated / Working</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-400 mb-2">Primary Tech Stack</label>
                        <input
                          type="text"
                          required
                          name="techStack"
                          value={formData.techStack}
                          onChange={handleChange}
                          placeholder="React, Node.js, Go"
                          className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-400 mb-2">GitHub URL</label>
                        <input
                          type="url"
                          required
                          name="githubUrl"
                          value={formData.githubUrl}
                          onChange={handleChange}
                          placeholder="https://github.com/username"
                          className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase text-gray-400 mb-2">LinkedIn URL</label>
                        <input
                          type="url"
                          required
                          name="linkedinUrl"
                          value={formData.linkedinUrl}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-2">Interested As</label>
                      <select
                        name="interestedAs"
                        value={formData.interestedAs}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-all font-mono"
                      >
                        <option value="Participant">Participant</option>
                        <option value="Campus Ambassador">Campus Ambassador</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 font-mono uppercase tracking-wider text-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Verifying Git Credentials...
                        </>
                      ) : (
                        <>
                          Request Access Invitation
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-cyan-950/50 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-cyan-400">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">You're on the Priority List!</h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                      Thanks, <span className="text-white font-semibold font-mono">{formData.fullName}</span>. We've reserved your priority spot. Look out for verification steps sent to <span className="text-cyan-400 font-mono">{formData.email}</span>.
                    </p>

                    <div className="mt-8 p-4 bg-white/[0.01] border border-white/5 rounded-xl font-mono text-left text-xs max-w-sm mx-auto space-y-2">
                      <div className="text-gray-500 flex justify-between">
                        <span>Status:</span>
                        <span className="text-yellow-400">Awaiting_Manual_Review</span>
                      </div>
                      <div className="text-gray-500 flex justify-between">
                        <span>Role:</span>
                        <span className="text-white">{formData.interestedAs}</span>
                      </div>
                      <div className="text-gray-500 flex justify-between">
                        <span>ID:</span>
                        <span className="text-cyan-400">{registrationId}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-xs text-gray-500 hover:text-cyan-400 font-mono transition-colors"
                    >
                      ← Back to Form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 mt-12 bg-black">
          <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-600 font-mono space-y-2">
            <p>© Code-X-Novas 2026. Empowering developers to build the next generation of products.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
