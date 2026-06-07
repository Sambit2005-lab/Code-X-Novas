import React, { useState, useEffect } from "react";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "firebase/auth";
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy 
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { 
  Lock, 
  Mail, 
  LogOut, 
  LayoutDashboard, 
  Briefcase, 
  BookOpen, 
  Inbox, 
  FolderGit2, 
  Plus, 
  Trash2, 
  Edit3, 
  Search, 
  Filter, 
  CheckCircle,
  FileText,
  User,
  Users,
  Eye,
  Link as LinkIcon
} from "lucide-react";
import Logo from "../assets/logo.png";

// Import career assets for dynamic display in admin
import UIUX from "../assets/Career/uiux.png";
import Backend from "../assets/Career/backend.png";
import AI from "../assets/Career/ai.png";
import Community from "../assets/Career/community.png";

// Import blog assets for dynamic display in admin
import Big1 from "../assets/Blogs/big1.png";
import Blog1 from "../assets/Blogs/1st.png";
import Blog2 from "../assets/Blogs/2nd.png";
import Blog3 from "../assets/Blogs/3rd.png";

// Image mapping functions
const getWorkImg = (imgName) => {
  if (!imgName) return "";
  if (typeof imgName !== "string") return imgName;
  const lower = imgName.toLowerCase();
  if (lower.includes("synchrotask")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811311/codexnovas/hbsrqbqnrchliutvrfp6.png";
  if (lower.includes("skillloop") || lower.includes("skill loop")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811650/codexnovas/fapho2uecxflb36rc2ej.png";
  if (lower.includes("urbanpilgrim") || lower.includes("urban pilgrim")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811641/codexnovas/nc7tvhwqkitkpxmk0vkp.png";
  if (lower.includes("ecommerce") && !lower.includes("1") && !lower.includes("2")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811488/codexnovas/lxycwmo9x5efbhgsfmm6.png";
  if (lower.includes("takshilafm") || lower.includes("takshila fm")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811758/codexnovas/kwzwkydevd5s0baxua7f.png";
  if (lower.includes("animation5") || lower.includes("water")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811695/codexnovas/qwfko9hy1ren11o8dsol.gif";
  if (lower.includes("animation3") || lower.includes("smoky")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811719/codexnovas/vbo84bopb2ln3l1rxjmz.gif";
  if (lower.includes("animation1") || lower.includes("loading")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811755/codexnovas/udx6lmctkoouw9y66khr.gif";
  if (lower.includes("animation2") || lower.includes("button")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811659/codexnovas/y54tplbgb4ou0mr1gyb8.gif";
  if (lower.includes("animation4") || lower.includes("jumping")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811678/codexnovas/cpdjkbvbowpmgs5zgm5i.gif";
  if (lower.includes("cohesiveminds") || lower.includes("cohesive minds")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811552/codexnovas/c0v3z8aegpgkr3qcngjq.png";
  if (lower.includes("shagun")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811630/codexnovas/ripwd9ergvhv7pzb5mfd.png";
  if (lower.includes("shoewebsite") || lower.includes("shoe website")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811556/codexnovas/nugdfc8nwxgnsnsrzyvc.png";
  if (lower.includes("travelandtours") || lower.includes("travel and tours")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811600/codexnovas/kjv7bumz1u5pepcjsno2.png";
  if (lower.includes("winzinfotech") || lower.includes("winz infotech")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811639/codexnovas/jbj6p0nhehf51bewcrbw.png";
  if (lower.includes("ecommercewebsite1") || lower.includes("ecommerce store") || lower.includes("ecommerce website")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811566/codexnovas/xohjdfoxgig2lg8dkd0w.png";
  if (lower.includes("ecommercewebsite2") || lower.includes("ecommerce platform")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811562/codexnovas/pmgawehaisg76xz89vr1.png";
  if (lower.includes("genlokal") || lower.includes("gen lokal")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811421/codexnovas/vy2fulzlpnwbscsnivid.png";
  if (lower.includes("gymapp") || lower.includes("gym app")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811335/codexnovas/sgyk4jwumotfqzkflhce.png";
  if (lower.includes("vicinacustomer") || lower.includes("vicina customer")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811481/codexnovas/ugro3hfsjd851hdgdcfz.png";
  if (lower.includes("vicinadelivery") || lower.includes("vicina delivery")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811441/codexnovas/g5r8ymjeece1rb0bfhc2.png";
  if (lower.includes("vicinashop") || lower.includes("vicina shop")) return "https://res.cloudinary.com/dnbqbzens/image/upload/v1780811359/codexnovas/au7z7hnsdyrnhspjwgcp.png";
  return imgName;
};

const getCareerImg = (imgName) => {
  if (!imgName) return UIUX;
  if (typeof imgName !== "string") return imgName;
  const lower = imgName.toLowerCase();
  if (lower.includes("uiux") || lower.includes("ui/ux")) return UIUX;
  if (lower.includes("backend")) return Backend;
  if (lower.includes("ai") || lower.includes("frontend") || lower.includes("prompt")) return AI;
  if (lower.includes("community") || lower.includes("business") || lower.includes("evangelist")) return Community;
  return imgName;
};

const getBlogImg = (imgName) => {
  if (!imgName) return Big1;
  if (typeof imgName !== "string") return imgName;
  const lower = imgName.toLowerCase();
  if (lower.includes("big1")) return Big1;
  if (lower.includes("1st")) return Blog1;
  if (lower.includes("2nd")) return Blog2;
  if (lower.includes("3rd")) return Blog3;
  return imgName;
};

export default function Admin() {
  const [user, setUser] = useState(null);
  const [authChecking, setAuthChecking] = useState(true);
  
  // Auth Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Tab State
  const [activeTab, setActiveTab] = useState("works");

  // Data States
  const [works, setWorks] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [careers, setCareers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [jobApps, setJobApps] = useState([]);
  const [hackathonList, setHackathonList] = useState([]);

  // Loading States
  const [loadingData, setLoadingData] = useState(false);

  // Search/Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Modal / Form States
  const [showFormModal, setShowFormModal] = useState(false);
  const [modalType, setModalType] = useState("work"); // work, blog, career
  const [editId, setEditId] = useState(null); // null if adding new

  // Work Form Data
  const [workForm, setWorkForm] = useState({
    title: "",
    desc: "",
    category: "Website",
    img: "",
    link: ""
  });

  // Blog Form Data
  const [blogForm, setBlogForm] = useState({
    title: "",
    desc: "",
    category: "AI & Automation",
    img: "",
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " · 5 min read"
  });

  // Career Form Data
  const [careerForm, setCareerForm] = useState({
    title: "",
    img: "",
    desc: "Join our team to build high-performance tools.",
    requirements: "",
    status: "open",
    customQuestions: []
  });

  // Submission Detail Modal
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  // Listen to Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecking(false);
      if (currentUser) {
        fetchAllData();
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError("");
    setIsLoggingIn(true);

    if (email !== "code.x.novas@gmail.com") {
      setAuthError("Unauthorized email. Please use the official admin email: code.x.novas@gmail.com");
      setIsLoggingIn(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      // If user doesn't exist, auto-register them to save manual setup time
      if (err.code === "auth/user-not-found" || err.code === "auth/invalid-credential") {
        try {
          // Attempt registration
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (regErr) {
          setAuthError(regErr.message);
        }
      } else {
        setAuthError(err.message);
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  // Fetch All Database Data
  const fetchAllData = async () => {
    setLoadingData(true);
    try {
      // Works
      const worksSnap = await getDocs(collection(db, "works"));
      let worksList = worksSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      const defaultWorks = [
        { title: "Synchrotask", desc: "AI-Powered Productivity with Human Precision", img: "synchrotask", category: "Website", link: "https://synchrotask.com" },
        { title: "Skill Loop", desc: "AI-Powered Productivity with Human Precision", img: "skillloop", category: "Website", link: "https://skillloop.co" },
        { title: "Urban Pilgrim", desc: "Urban Wellness Rooted in Indian Wisdom", img: "urbanpilgrim", category: "Website", link: "https://urbanpilgrim.in" },
        { title: "Ecommerce Website", desc: "AI-Powered Productivity", img: "ecommerce", category: "Website", link: "https://codexnovas.in" },
        { title: "Takshila FM", desc: "AI-Powered Productivity", img: "takshilafm", category: "Website", link: "https://takshila.fm" },
        { title: "Water filling Animation", desc: "Creative water filling loader animation", img: "animation5", category: "Animation" },
        { title: "Smoky Animation", desc: "Elegant smoky canvas text reveal animation", img: "animation3", category: "Animation" },
        { title: "Loading Animation", desc: "Smooth modern page loader animation", img: "animation1", category: "Animation" },
        { title: "Button animation", desc: "Micro-interactive button state transitions", img: "animation2", category: "Animation" },
        { title: "Jumping Animation", desc: "Playful character jumping physics animation", img: "animation4", category: "Animation" },
        { title: "ECommerce Website", desc: "Sleek and responsive online store design", img: "ecommercewebsite1", category: "Website" },
        { title: "Cohesive Minds", desc: "Collaborative agency and team landing platform", img: "cohesiveminds", category: "Website" },
        { title: "Shagun", desc: "Premium custom wedding invitation platform", img: "shagun", category: "Website" },
        { title: "Shoe Website", desc: "Immersive 3D interactive shoe collection showcase", img: "shoewebsite", category: "Website" },
        { title: "Travel and Tours", desc: "Dynamic agency booking and planning site", img: "travelandtours", category: "Website" },
        { title: "Winz Infotech", desc: "Professional IT services portfolio website", img: "winzinfotech", category: "Website" },
        { title: "ECommerce Website", desc: "Robust multipurpose digital shop template", img: "ecommercewebsite2", category: "Website" },
        { title: "Gen Lokal App", desc: "Hyperlocal service and vendor locator mobile application", img: "genlokal", category: "App Design" },
        { title: "Gym App", desc: "Fitness routine and workout tracker mobile interface", img: "gymapp", category: "App Design" },
        { title: "Vicina Customer App", desc: "Hyperlocal on-demand customer delivery mobile application", img: "vicinacustomer", category: "App Design" },
        { title: "Vicina Delivery App", desc: "Real-time delivery driver tracking and logistics application", img: "vicinadelivery", category: "App Design" },
        { title: "Vicina Shop App", desc: "Seller/Store management dashboard and order system app", img: "vicinashop", category: "App Design" }
      ];

      // If database is empty or has fewer than 15 items, sync missing default portfolio items
      if (worksList.length < 15) {
        const existingTitles = new Set(worksList.map(w => w.title ? w.title.toLowerCase().trim() : ""));
        const toAdd = defaultWorks.filter(w => !existingTitles.has(w.title.toLowerCase().trim()));
        if (toAdd.length > 0) {
          const promises = toAdd.map(async (w) => {
            const docRef = await addDoc(collection(db, "works"), w);
            return { id: docRef.id, ...w };
          });
          const added = await Promise.all(promises);
          worksList = [...worksList, ...added];
        }
      }
      setWorks(worksList);

      // Blogs
      const blogsSnap = await getDocs(collection(db, "blogs"));
      let blogsList = blogsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (blogsList.length === 0) {
        const defaultBlogs = [
          {
            img: "big1",
            category: "AI & Automation",
            title: "Building a Culture of Innovation in Tech Teams",
            desc: "Discover how fostering creativity, collaboration, and ownership can transform your development team into a powerhouse of innovation and product excellence.",
            date: "Oct 19 · 10 min read"
          },
          {
            img: "1st",
            category: "Design & Development",
            title: "Powering the Future with Smart Engineering",
            desc: "From microchips to machine learning, explore how modern engineering drives automation, eﬃciency, and the next generation of intelligent digital solutions.",
            date: "Nov 5 · 8 min read"
          },
          {
            img: "2nd",
            category: "AI & Automation",
            title: "How Data-Driven Decisions Shape Smarter Businesses",
            desc: "Learn how AI and analytics empower companies to predict trends, optimize operations, and create personalized customer experiences in today’s fast-paced digital economy.",
            date: "Dec 12 · 15 min read"
          },
          {
            img: "3rd",
            category: "Design & Development",
            title: "Immersive Tech: The Future of User Experience",
            desc: "Discover how VR and AR are redefining engagement — blending innovation and design to create immersive digital experiences that inspire, educate, and entertain.",
            date: "Oct 19 · 10 min read"
          }
        ];
        const promises = defaultBlogs.map(async (b) => {
          const docRef = await addDoc(collection(db, "blogs"), b);
          return { id: docRef.id, ...b };
        });
        blogsList = await Promise.all(promises);
      }
      setBlogs(blogsList);

      // Careers
      const careersSnap = await getDocs(collection(db, "careers"));
      let careersList = careersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (careersList.length === 0) {
        const defaultCareers = [
          { title: "UI/ UX Designer", img: "uiux", desc: "Design outstanding modern visual assets and user interfaces.", requirements: "Figma, UI design, prototyping", status: "open" },
          { title: "Backend Developer", img: "backend", desc: "Build highly scaleable APIs, database structures and servers.", requirements: "Node.js, Firebase, Firestore, REST APIs", status: "open" },
          { title: "AI Prompt Engineer", img: "ai", desc: "Design and optimize prompts for LLMs and automated workflows.", requirements: "Prompt Engineering, Python, LLM knowledge", status: "open" },
          { title: "Community Evangelist", img: "community", desc: "Grow our community, manage social platforms, engage developers.", requirements: "Public speaking, content creation, social media", status: "open" }
        ];
        const promises = defaultCareers.map(async (c) => {
          const docRef = await addDoc(collection(db, "careers"), c);
          return { id: docRef.id, ...c };
        });
        careersList = await Promise.all(promises);
      }
      setCareers(careersList);

      // Contacts
      const contactsSnap = await getDocs(collection(db, "contacts"));
      const contactsList = contactsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContacts(contactsList);

      // Job Applications
      const jobAppsSnap = await getDocs(collection(db, "job_applications"));
      const jobAppsList = jobAppsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobApps(jobAppsList);

      // Hackathon Waitlist
      const hackathonSnap = await getDocs(collection(db, "hackathon_waitlist"));
      const hackathonList = hackathonSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setHackathonList(hackathonList);

    } catch (err) {
      console.error("Error fetching admin data:", err);
    } finally {
      setLoadingData(false);
    }
  };

  // Generic Save Handler for Forms
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (modalType === "work") {
        if (editId) {
          await updateDoc(doc(db, "works", editId), workForm);
        } else {
          await addDoc(collection(db, "works"), workForm);
        }
      } else if (modalType === "blog") {
        if (editId) {
          await updateDoc(doc(db, "blogs", editId), blogForm);
        } else {
          await addDoc(collection(db, "blogs"), blogForm);
        }
      } else if (modalType === "career") {
        if (editId) {
          await updateDoc(doc(db, "careers", editId), careerForm);
        } else {
          await addDoc(collection(db, "careers"), careerForm);
        }
      }
      setShowFormModal(false);
      setEditId(null);
      fetchAllData();
    } catch (err) {
      console.error("Error saving document: ", err);
    }
  };

  // Delete Handler
  const handleDelete = async (type, id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await deleteDoc(doc(db, type === "work" ? "works" : type === "blog" ? "blogs" : "careers", id));
      fetchAllData();
    } catch (err) {
      console.error("Error deleting document: ", err);
    }
  };

  // Edit Trigger Helpers
  const openEditWork = (item) => {
    setModalType("work");
    setEditId(item.id);
    setWorkForm({
      title: item.title || "",
      desc: item.desc || "",
      category: item.category || "Website",
      img: item.img || "",
      link: item.link || ""
    });
    setShowFormModal(true);
  };

  const openAddWork = () => {
    setModalType("work");
    setEditId(null);
    setWorkForm({ title: "", desc: "", category: "Website", img: "", link: "" });
    setShowFormModal(true);
  };

  const openEditBlog = (item) => {
    setModalType("blog");
    setEditId(item.id);
    setBlogForm({
      title: item.title || "",
      desc: item.desc || "",
      category: item.category || "AI & Automation",
      img: item.img || "",
      date: item.date || new Date().toLocaleDateString() + " · 5 min read"
    });
    setShowFormModal(true);
  };

  const openAddBlog = () => {
    setModalType("blog");
    setEditId(null);
    setBlogForm({ title: "", desc: "", category: "AI & Automation", img: "", date: new Date().toLocaleDateString() + " · 5 min read" });
    setShowFormModal(true);
  };

  const openEditCareer = (item) => {
    setModalType("career");
    setEditId(item.id);
    setCareerForm({
      title: item.title || "",
      img: item.img || "",
      desc: item.desc || "Join our team to build high-performance tools.",
      requirements: item.requirements || "",
      status: item.status || "open",
      customQuestions: item.customQuestions || []
    });
    setShowFormModal(true);
  };

  const openAddCareer = () => {
    setModalType("career");
    setEditId(null);
    setCareerForm({ title: "", img: "", desc: "Join our team to build high-performance tools.", requirements: "", status: "open", customQuestions: [] });
    setShowFormModal(true);
  };

  if (authChecking) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          <span>Verifying Admin Authorization...</span>
        </div>
      </div>
    );
  }

  // Not logged in -> Show Login Page
  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-sans relative overflow-hidden px-4">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />

        <div className="w-full max-w-md bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-md relative z-10 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <img src={Logo} alt="Code-X-Novas" className="h-10 mb-4" />
            <h2 className="text-xl font-bold font-mono tracking-wider text-cyan-400">ADMIN CONTROL CENTER</h2>
            <p className="text-xs text-gray-500 mt-1 font-mono">Enter credentials to gain system access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-2">Admin Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <Mail size={16} />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@gmail.com"
                  className="w-full bg-black/60 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-gray-400 mb-2">Access Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <Lock size={16} />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black/60 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-mono"
                />
              </div>
            </div>

            {authError && (
              <div className="p-3 bg-red-950/40 border border-red-500/50 rounded-lg text-xs text-red-400 font-mono">
                Error: {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold rounded-lg font-mono tracking-widest text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              {isLoggingIn ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  AUTHENTICATING...
                </>
              ) : (
                "GAIN ACCESS"
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Helper arrays for filters
  const filteredWorks = works.filter(item => 
    (categoryFilter === "All" || item.category === categoryFilter) &&
    (item.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.desc?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredBlogs = blogs.filter(item => 
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCareers = careers.filter(item => 
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContacts = contacts.filter(item => 
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredJobApps = jobApps.filter(item => 
    item.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.positionApplied?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredHackathon = hackathonList.filter(item => 
    item.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.collegeName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[150px] pointer-events-none" />
      
      {/* Header bar */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Code-X-Novas" className="h-8" />
          <span className="text-xs font-mono bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 px-2 py-0.5 rounded tracking-widest">
            SYSTEM ENGINE
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-500 font-mono hidden md:inline">
            Logged in as: <span className="text-gray-300">{user.email}</span>
          </span>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-950/30 border border-red-800/30 hover:bg-red-900/40 text-xs text-red-400 font-mono transition-all"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </header>

      {/* Grid structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
        
        {/* Left Sidebar Navigation */}
        <aside className="grid grid-cols-1 sm:grid-cols-2 lg:block lg:space-y-2 gap-4">
          <div>
            <div className="px-3 py-2 text-xs font-mono uppercase tracking-widest text-gray-500">Database</div>
            <div className="space-y-2">
              {[
                { id: "works", label: "Our Works", icon: <FolderGit2 size={16} /> },
                { id: "blogs", label: "Blogs", icon: <BookOpen size={16} /> },
                { id: "careers", label: "Careers", icon: <Briefcase size={16} /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setSearchTerm(""); setCategoryFilter("All"); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                    activeTab === tab.id 
                      ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400" 
                      : "bg-white/[0.01] border border-transparent text-gray-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="px-3 py-2 text-xs font-mono uppercase tracking-widest text-gray-500">Submissions</div>
            <div className="space-y-2">
              {[
                { id: "contacts", label: "Contact Us", icon: <Inbox size={16} />, count: contacts.length },
                { id: "job_apps", label: "Job Applications", icon: <FileText size={16} />, count: jobApps.length },
                { id: "hackathon", label: "Hackathon list", icon: <Users size={16} />, count: hackathonList.length }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setSearchTerm(""); setCategoryFilter("All"); }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all ${
                    activeTab === tab.id 
                      ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400" 
                      : "bg-white/[0.01] border border-transparent text-gray-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {tab.icon}
                    {tab.label}
                  </div>
                  <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-400">
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 backdrop-blur-sm relative">
          
          {/* Dashboard Control Ribbon */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5 mb-6">
            <div>
              <h1 className="text-xl font-bold tracking-tight capitalize font-mono text-cyan-400">
                {activeTab.replace("_", " ")} Control Panel
              </h1>
              <p className="text-xs text-gray-500 mt-1">Manage, filter, search or export records</p>
            </div>

            {/* Create buttons for contents */}
            {["works", "blogs", "careers"].includes(activeTab) && (
              <button
                onClick={() => {
                  if (activeTab === "works") openAddWork();
                  if (activeTab === "blogs") openAddBlog();
                  if (activeTab === "careers") openAddCareer();
                }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold rounded-lg text-xs font-mono flex items-center justify-center gap-1.5 transition-all shadow-md shadow-cyan-500/10"
              >
                <Plus size={16} />
                Add Item
              </button>
            )}
          </div>

          {/* Search/Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder={`Search records inside ${activeTab.replace("_", " ")}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-mono"
              />
            </div>

            {activeTab === "works" && (
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-gray-500" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="bg-black/60 border border-white/10 rounded-lg px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-cyan-400 font-mono"
                >
                  <option value="All">All Categories</option>
                  <option value="Website">Website</option>
                  <option value="App Design">App Design</option>
                  <option value="Animation">Animation</option>
                  <option value="Development">Development</option>
                  <option value="Illustration">Illustration</option>
                  <option value="Social Media">Social Media</option>
                </select>
              </div>
            )}
          </div>

          {/* Data Tables / Grid Display */}
          {loadingData ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3 font-mono text-xs">
              <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              <span>Fetching dynamic Firestore records...</span>
            </div>
          ) : (
            <>
              {/* WORKS TAB */}
              {activeTab === "works" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredWorks.map(item => (
                    <div key={item.id} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-4 hover:border-cyan-500/30 transition-all">
                      <div className="w-20 h-16 bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0 border border-white/5">
                        {item.img ? (
                          <img src={getWorkImg(item.img)} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-600 font-mono">NO IMG</div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] uppercase font-mono bg-cyan-950/40 text-cyan-400 border border-cyan-900/50 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        <h4 className="text-sm font-bold text-white mt-2 truncate">{item.title}</h4>
                        <p className="text-xs text-gray-400 line-clamp-2 mt-1">{item.desc}</p>
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noreferrer" className="text-[10px] text-cyan-400 font-mono flex items-center gap-1 mt-2 hover:underline">
                            <LinkIcon size={10} /> Link
                          </a>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <button onClick={() => openEditWork(item)} className="p-1.5 text-gray-400 hover:text-cyan-400 transition-colors">
                          <Edit3 size={14} />
                        </button>
                        <button onClick={() => handleDelete("work", item.id)} className="p-1.5 text-gray-400 hover:text-red-400 transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                  {filteredWorks.length === 0 && (
                    <div className="col-span-2 text-center py-12 text-xs text-gray-500 font-mono">No work projects found matching search.</div>
                  )}
                </div>
              )}

              {/* BLOGS TAB */}
              {activeTab === "blogs" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredBlogs.map(item => (
                    <div key={item.id} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-4 hover:border-cyan-500/30 transition-all">
                      <div className="w-20 h-16 bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0 border border-white/5">
                        {item.img ? (
                          <img src={getBlogImg(item.img)} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-600 font-mono">NO IMG</div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] uppercase font-mono bg-cyan-950/40 text-cyan-400 border border-cyan-900/50 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        <h4 className="text-sm font-bold text-white mt-2 truncate">{item.title}</h4>
                        <p className="text-xs text-gray-400 line-clamp-2 mt-1">{item.desc}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button onClick={() => openEditBlog(item)} className="p-1.5 text-gray-400 hover:text-cyan-400 transition-colors">
                          <Edit3 size={14} />
                        </button>
                        <button onClick={() => handleDelete("blog", item.id)} className="p-1.5 text-gray-400 hover:text-red-400 transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                  {filteredBlogs.length === 0 && (
                    <div className="col-span-2 text-center py-12 text-xs text-gray-500 font-mono">No blog items found matching search.</div>
                  )}
                </div>
              )}

              {/* CAREERS TAB */}
              {activeTab === "careers" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredCareers.map(item => (
                    <div key={item.id} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-start gap-4 hover:border-cyan-500/30 transition-all">
                      <div className="w-20 h-16 bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0 border border-white/5">
                        {item.img ? (
                          <img src={getCareerImg(item.img)} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-600 font-mono">NO IMG</div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white truncate">{item.title}</h4>
                          <span className={`text-[8px] uppercase font-mono px-1.5 py-0.5 rounded ${
                            item.status === "closed" ? "bg-red-950/40 text-red-400 border border-red-900/50" : "bg-green-950/40 text-green-400 border border-green-900/50"
                          }`}>
                            {item.status || "open"}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 line-clamp-2 mt-1">{item.desc}</p>
                        {item.requirements && (
                          <p className="text-[10px] text-cyan-400 mt-2 font-mono truncate">Reqs: {item.requirements}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <button onClick={() => openEditCareer(item)} className="p-1.5 text-gray-400 hover:text-cyan-400 transition-colors">
                          <Edit3 size={14} />
                        </button>
                        <button onClick={() => handleDelete("career", item.id)} className="p-1.5 text-gray-400 hover:text-red-400 transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                  {filteredCareers.length === 0 && (
                    <div className="col-span-2 text-center py-12 text-xs text-gray-500 font-mono">No careers postings found matching search.</div>
                  )}
                </div>
              )}

              {/* CONTACTS SUBMISSIONS */}
              {activeTab === "contacts" && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-500">
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Phone</th>
                        <th className="py-3 px-4">Message</th>
                        <th className="py-3 px-4 text-right">View</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredContacts.map(item => (
                        <tr key={item.id} className="hover:bg-white/[0.02]">
                          <td className="py-3 px-4 text-white font-bold">{item.name}</td>
                          <td className="py-3 px-4 text-gray-300">{item.email}</td>
                          <td className="py-3 px-4 text-gray-400">{item.phone || "—"}</td>
                          <td className="py-3 px-4 text-gray-400 truncate max-w-[200px]">{item.message}</td>
                          <td className="py-3 px-4 text-right">
                            <button onClick={() => setSelectedSubmission({ ...item, type: "Contact Submission" })} className="p-1 text-cyan-400 hover:text-cyan-300">
                              <Eye size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredContacts.length === 0 && (
                        <tr>
                          <td colSpan="5" className="text-center py-12 text-gray-500">No contact submissions found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* JOB APPLICATIONS */}
              {activeTab === "job_apps" && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-500">
                        <th className="py-3 px-4">Applicant</th>
                        <th className="py-3 px-4">Applied For</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Links</th>
                        <th className="py-3 px-4 text-right">View</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredJobApps.map(item => (
                        <tr key={item.id} className="hover:bg-white/[0.02]">
                          <td className="py-3 px-4 text-white font-bold">{item.fullName}</td>
                          <td className="py-3 px-4 text-cyan-400 font-bold">{item.positionApplied}</td>
                          <td className="py-3 px-4 text-gray-300">{item.email}</td>
                          <td className="py-3 px-4 text-gray-400 space-x-2">
                            {item.resumeUrl && <a href={item.resumeUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">Resume</a>}
                            {item.portfolioUrl && <a href={item.portfolioUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">Portfolio</a>}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button onClick={() => setSelectedSubmission({ ...item, type: "Job Application" })} className="p-1 text-cyan-400 hover:text-cyan-300">
                              <Eye size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredJobApps.length === 0 && (
                        <tr>
                          <td colSpan="5" className="text-center py-12 text-gray-500">No job applications found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* HACKATHON WAITLIST */}
              {activeTab === "hackathon" && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-500">
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">College</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Tech Stack</th>
                        <th className="py-3 px-4">Role</th>
                        <th className="py-3 px-4 text-right">View</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredHackathon.map(item => (
                        <tr key={item.id} className="hover:bg-white/[0.02]">
                          <td className="py-3 px-4 text-white font-bold">{item.fullName}</td>
                          <td className="py-3 px-4 text-gray-300">{item.collegeName}</td>
                          <td className="py-3 px-4 text-gray-300">{item.email}</td>
                          <td className="py-3 px-4 text-gray-400 truncate max-w-[150px]">{item.techStack}</td>
                          <td className="py-3 px-4 text-cyan-400">{item.interestedAs}</td>
                          <td className="py-3 px-4 text-right">
                            <button onClick={() => setSelectedSubmission({ ...item, type: "Hackathon Registration" })} className="p-1 text-cyan-400 hover:text-cyan-300">
                              <Eye size={14} />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredHackathon.length === 0 && (
                        <tr>
                          <td colSpan="6" className="text-center py-12 text-gray-500">No hackathon waitlist registrants found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* CREATE/EDIT MODAL */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-zinc-950 border border-white/10 rounded-2xl p-6 relative">
            <h3 className="text-base font-bold font-mono tracking-wider text-cyan-400 mb-6 uppercase">
              {editId ? "Edit" : "Create New"} {modalType}
            </h3>

            <form onSubmit={handleSave} className="space-y-4 font-mono text-xs">
              {modalType === "work" && (
                <>
                  <div>
                    <label className="block text-gray-400 mb-1">Project Title</label>
                    <input
                      type="text"
                      required
                      value={workForm.title}
                      onChange={(e) => setWorkForm({ ...workForm, title: e.target.value })}
                      placeholder="Project name"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Description</label>
                    <textarea
                      required
                      value={workForm.desc}
                      onChange={(e) => setWorkForm({ ...workForm, desc: e.target.value })}
                      placeholder="Short description"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Category</label>
                    <select
                      value={workForm.category}
                      onChange={(e) => setWorkForm({ ...workForm, category: e.target.value })}
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option>Website</option>
                      <option>App Design</option>
                      <option>Animation</option>
                      <option>Development</option>
                      <option>Illustration</option>
                      <option>Social Media</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Image URL / Drive Link</label>
                    <input
                      type="text"
                      required
                      value={workForm.img}
                      onChange={(e) => setWorkForm({ ...workForm, img: e.target.value })}
                      placeholder="https://..."
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Project Link (Optional)</label>
                    <input
                      type="text"
                      value={workForm.link}
                      onChange={(e) => setWorkForm({ ...workForm, link: e.target.value })}
                      placeholder="https://..."
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </>
              )}

              {modalType === "blog" && (
                <>
                  <div>
                    <label className="block text-gray-400 mb-1">Blog Title</label>
                    <input
                      type="text"
                      required
                      value={blogForm.title}
                      onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                      placeholder="Title"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Excerpt / Description</label>
                    <textarea
                      required
                      value={blogForm.desc}
                      onChange={(e) => setBlogForm({ ...blogForm, desc: e.target.value })}
                      placeholder="Snippet/preview text"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Category</label>
                    <select
                      value={blogForm.category}
                      onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option>AI & Automation</option>
                      <option>Startups & Business</option>
                      <option>Design & Development</option>
                      <option>Productivity Hacks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Cover Image URL</label>
                    <input
                      type="text"
                      required
                      value={blogForm.img}
                      onChange={(e) => setBlogForm({ ...blogForm, img: e.target.value })}
                      placeholder="https://..."
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </>
              )}

              {modalType === "career" && (
                <>
                  <div>
                    <label className="block text-gray-400 mb-1">Position Title</label>
                    <input
                      type="text"
                      required
                      value={careerForm.title}
                      onChange={(e) => setCareerForm({ ...careerForm, title: e.target.value })}
                      placeholder="e.g. UI/UX Designer"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Card Image URL</label>
                    <input
                      type="text"
                      required
                      value={careerForm.img}
                      onChange={(e) => setCareerForm({ ...careerForm, img: e.target.value })}
                      placeholder="https://..."
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Description</label>
                    <textarea
                      required
                      value={careerForm.desc}
                      onChange={(e) => setCareerForm({ ...careerForm, desc: e.target.value })}
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Requirements (Comma separated)</label>
                    <input
                      type="text"
                      value={careerForm.requirements}
                      onChange={(e) => setCareerForm({ ...careerForm, requirements: e.target.value })}
                      placeholder="React, Figma, 2 years experience"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Status</label>
                    <select
                      value={careerForm.status}
                      onChange={(e) => setCareerForm({ ...careerForm, status: e.target.value })}
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="open">Open</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <label className="block text-gray-400 mb-1">Custom Application Questions</label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        id="new-question-input"
                        placeholder="Add a custom question..."
                        className="flex-1 bg-black border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 text-xs"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            const val = e.target.value.trim();
                            if (val) {
                              setCareerForm(prev => ({
                                ...prev,
                                customQuestions: [...(prev.customQuestions || []), val]
                              }));
                              e.target.value = "";
                            }
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById("new-question-input");
                          const val = el ? el.value.trim() : "";
                          if (val) {
                            setCareerForm(prev => ({
                              ...prev,
                              customQuestions: [...(prev.customQuestions || []), val]
                            }));
                            el.value = "";
                          }
                        }}
                        className="px-3 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded-lg transition-all text-xs"
                      >
                        ADD
                      </button>
                    </div>
                    {/* List of custom questions */}
                    <div className="space-y-1.5 max-h-[120px] overflow-y-auto pr-1">
                      {(careerForm.customQuestions || []).map((q, qidx) => (
                        <div key={qidx} className="flex items-center justify-between bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-xs">
                          <span className="text-gray-300 truncate pr-2">{q}</span>
                          <button
                            type="button"
                            onClick={() => {
                              setCareerForm(prev => ({
                                ...prev,
                                customQuestions: prev.customQuestions.filter((_, i) => i !== qidx)
                              }));
                            }}
                            className="text-red-400 hover:text-red-300 font-bold"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all"
                >
                  SAVE RECORD
                </button>
                <button
                  type="button"
                  onClick={() => setShowFormModal(false)}
                  className="flex-1 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SUBMISSION DETAIL VIEW MODAL */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-zinc-950 border border-white/10 rounded-2xl p-6 relative">
            <h3 className="text-base font-bold font-mono tracking-wider text-cyan-400 mb-4 uppercase">
              {selectedSubmission.type}
            </h3>

            <div className="space-y-4 text-xs font-mono max-h-[400px] overflow-y-auto pr-2">
              {Object.entries(selectedSubmission).map(([key, val]) => {
                if (["id", "type"].includes(key)) return null;
                return (
                  <div key={key} className="border-b border-white/5 pb-2">
                    <span className="text-gray-500 uppercase block text-[10px]">{key.replace(/([A-Z])/g, ' $1')}</span>
                    {typeof val === "object" && val !== null ? (
                      <div className="mt-1 space-y-1.5 pl-3 border-l border-white/10">
                        {Object.entries(val).map(([q, a]) => (
                          <div key={q} className="text-xs">
                            <span className="text-gray-400 block font-semibold">{q}</span>
                            <span className="text-white block pl-2">{String(a) || "—"}</span>
                          </div>
                        ))}
                      </div>
                    ) : typeof val === "string" && (val.startsWith("http://") || val.startsWith("https://")) ? (
                      <a href={val} target="_blank" rel="noreferrer" className="text-cyan-400 underline hover:text-cyan-300 break-all">{val}</a>
                    ) : (
                      <span className="text-white block mt-1 whitespace-pre-wrap">{val !== undefined ? String(val) : "—"}</span>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setSelectedSubmission(null)}
              className="w-full mt-6 py-2.5 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all font-mono text-xs"
            >
              CLOSE DETAILS
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
