import React from "react";
import Navbar from "../../components/Navbar";
import Contact from "../Contact";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-[60px] sm:pt-[70px] md:pt-[80px] lg:pt-[85px]">
                <Contact />
            </div>
        </div>
    );
}
