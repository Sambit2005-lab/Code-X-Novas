
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id, path) => {
    if (path === "/contact") {
      const contactEl = typeof document !== "undefined" && document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
        return;
      }
      navigate(path);
      return;
    }
    navigate(path);
  };

  return (
    <nav
      className="flex items-center justify-between px-4 sm:px-6 md:px-8 h-[60px] sm:h-[70px] md:h-[80px] lg:h-[85px] fixed top-0 left-0 z-50"
      style={{
        width: "100%",
        background: "#FFFFFFB5",
        boxShadow: "0px 4px 62.9px 0px #00000026",
        backdropFilter: "blur(10px)",
      }}
    >
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          loading="lazy"
          alt="Code X Novas"
          className="h-[32px] sm:h-[40px] md:h-[48px] lg:h-[56px] w-auto transition-all duration-300"
        />
      </Link>

      <div className="hidden lg:flex items-center gap-4 xl:gap-6 absolute left-1/2 transform -translate-x-1/2">
        <button onClick={() => handleNavClick("services", "/services")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">Services</button>
        <button onClick={() => handleNavClick("works", "/works")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">Works</button>
        <button onClick={() => handleNavClick("products", "/products")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">Products</button>
        <button onClick={() => handleNavClick("blogs", "/blogs")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">Blogs</button>
        <button onClick={() => handleNavClick("about", "/about")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">About</button>
        <button onClick={() => handleNavClick("career", "/career")} className="font-sora text-[14px] xl:text-[16px] text-black hover:underline decoration-gray-400 underline-offset-4 transition-all">Career</button>
      </div>

      <div className="hidden lg:flex items-center">
        <button
          onClick={() => handleNavClick("contact", "/contact")}
          className="relative overflow-hidden px-5 xl:px-6 py-2 xl:py-2.5 rounded-md font-poppins text-[14px] xl:text-[16px] text-white hover:opacity-90 transition-all"
          style={{
            background: `linear-gradient(90deg, #2352A5 0%, #137DD1 20%, #02A7FD 45%, #42ACEF 70%, #7DE2FF 92%, #B7F1FF 100%)`,
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
          }}
        >
          Contact us
        </button>
      </div>

      <div className="flex items-center lg:hidden">
        <button
          className="text-gray-700 p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          className="fixed left-0 w-full bg-white shadow-lg flex flex-col p-5 sm:p-6 space-y-4 sm:space-y-5 lg:hidden z-[9999]"
          style={{
            top: "60px",
          }}
        >
          <button onClick={() => { handleNavClick("services", "/services"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">Services</button>
          <button onClick={() => { handleNavClick("works", "/works"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">Works</button>
          <button onClick={() => { handleNavClick("products", "/products"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">Products</button>
          <button onClick={() => { handleNavClick("blogs", "/blogs"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">Blogs</button>
          <button onClick={() => { handleNavClick("about", "/about"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">About</button>
          <button onClick={() => { handleNavClick("career", "/career"); setOpen(false); }} className="text-left font-sora text-[15px] sm:text-[16px] text-gray-800 hover:text-blue-600 transition-colors">Career</button>
          <button
            onClick={() => { handleNavClick("contact", "/contact"); setOpen(false); }}
            className="w-full text-center px-6 py-2.5 sm:py-3 rounded-md font-poppins text-[15px] sm:text-[16px] text-white transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #2352A5 0%, #137DD1 50%, #3CA9E2 100%)",
            }}
          >
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
}
