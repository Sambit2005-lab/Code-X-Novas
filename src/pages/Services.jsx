{/**Few Imports*/}
import React from "react";
import { FiMonitor, FiSmartphone } from "react-icons/fi"; 
import { motion } from "framer-motion";
import RightElement from "../assets/Services/RightElement.png"; 
import MapImage from "../assets/Services/Map.png"; 

// Services Section- Having a list of services Provided by Code-X-Novas
const servicesData = [
  {
    icon: <FiMonitor />,
    title: "Web Design",
    desc: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you’re a startup or an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website.",
  },
  {
    icon: <FiSmartphone />,
    title: "App Design",
    desc: "We design sleek, intuitive apps for iOS, Android & web—tailored to your brand and users. From startups to enterprises, we turn ideas into powerful digital experiences. Let’s build something amazing together.",
  },
  {
    icon: <FiMonitor />,
    title: "Web Design",
    desc: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you’re a startup or an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website.",
  },
  {
    icon: <FiMonitor />,
    title: "Web Design",
    desc: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you’re a startup or an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website.",
  },
  {
    icon: <FiMonitor />,
    title: "Web Design",
    desc: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you’re a startup or an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website.",
  },
  {
    icon: <FiMonitor />,
    title: "Web Design",
    desc: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you’re a startup or an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website.",
  },
];

//  Small helper component for pulsing dot for the map provided
const PulseDot = ({ left, top }) => (
  <div
    className="absolute"
    style={{ left: `${left}px`, top: `${top}px`, width: "20px", height: "20px" }}
  >
    <span className="absolute inset-0 rounded-full bg-sky-500 opacity-60 animate-ping"></span>
    <span className="absolute inset-[6px] rounded-full bg-sky-500"></span>
  </div>
);

// Map with 12 pulsing dots
const MapWithDots = () => {
  return (
    <div className="relative w-full max-w-[638px] aspect-[638/614] -ml-0 lg:-ml-24">
      {/* Map background */}
      <img
        src={MapImage}
        alt="World map"
        className="w-full h-full object-contain"
      />

      {/* Pulsing Dots - Dots showing the location by shining & pulsing , I have made their positions here !*/}
      <PulseDot left={305} top={209} />
      <PulseDot left={355} top={217} />
      <PulseDot left={361} top={235} />
      <PulseDot left={374} top={248} />
      <PulseDot left={377} top={217} />
      <PulseDot left={406} top={248} />
      <PulseDot left={526} top={369} />
      <PulseDot left={365} top={201} />
      <PulseDot left={189} top={160} />
      <PulseDot left={74} top={354} />
      <PulseDot left={4} top={218} />
      <PulseDot left={4} top={168} />
    </div>
  );
};


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
  return (
    <>
      <section className="relative w-full bg-black text-white py-16 md:py-20 px-4 md:px-12 overflow-hidden">
        <img
          src={RightElement}
          alt="Decorative element"
          className="absolute top-0 right-0 h-full object-contain pointer-events-none select-none opacity-50 md:opacity-90"
        />

        <div className="relative text-center max-w-6xl mx-auto mb-12 md:mb-16 z-10">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: "Sora" }}
          >
            <span className="text-white">Our </span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #082F6E 0%, #2352A5 50%, #001F4D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Our service range fits together cohesively, so we can provide end-to-end service, from Startup to Scaleup.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto z-10 pr-0 md:pr-20 lg:pr-20">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative h-auto min-h-[300px] sm:min-h-[340px] md:h-[400px] 
                w-full sm:w-[90%] md:w-[360px] lg:w-[380px] 
                flex flex-col justify-between
                bg-black/40 backdrop-blur-lg p-6 rounded-md shadow-md 
                transition-all duration-700 mx-auto overflow-hidden
                hover:bg-gradient-to-tr hover:from-[#001F4D] hover:via-[#2352A5] hover:to-[#4FA3FF]"
            >
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition duration-500 pointer-events-none"></div>
              <div className="relative text-4xl md:text-5xl text-sky-400 group-hover:text-sky-200 transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="relative text-lg md:text-xl font-semibold mt-4 mb-2">
                {service.title}
              </h3>
              <p className="relative text-gray-300 text-sm md:text-base group-hover:text-gray-100 transition-colors duration-500 flex-grow leading-relaxed">
                {service.desc}
              </p>
              <button className="relative px-4 py-2 mt-4 rounded-md border border-white/20 text-sm md:text-base text-white bg-transparent font-medium transition-all duration-300 hover:bg-sky-500/10 hover:border-sky-400">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full bg-white py-16 md:py-20 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <MapWithDots />
          </motion.div>

          <div className="hidden lg:flex flex-col items-center justify-center px-4 relative h-full">
            <div className="absolute left-[-35px] top-[150px] h-[500px] w-[2px] bg-black"></div>
            <span className="absolute -left-[230px] top-[-90px] text-black font-semibold text-5xl tracking-wide -rotate-90 whitespace-nowrap">
              Why choose us
            </span>
          </div>

            {/*The Reasons*/}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 px-0 md:px-0"
          >
            <div>
              <GradientHeading>Proven Track Record</GradientHeading>
              <p className="text-gray-700">
                We’ve successfully delivered 40+ real-world projects across web, app,
                AI, and custom software solutions — trusted by startups, brands, and institutions.
              </p>
            </div>
            <div>
              <GradientHeading>Recognized & Credible</GradientHeading>
              <p className="text-gray-700">
                Selected among India’s Top 75 Emerging Startups and proudly
                represented India at the Dubai AI Festival, showcasing our credibility and innovation.
              </p>
            </div>
            <div>
              <GradientHeading>Innovation-Driven Team</GradientHeading>
              <p className="text-gray-700">
                We specialize in building intelligent, scalable systems using
                cutting-edge tech — from AI agents to custom platforms — tailored to your needs.
              </p>
            </div>
            <div>
              <GradientHeading>End-to-End Services</GradientHeading>
              <p className="text-gray-700">
                From idea to execution, we offer complete digital solutions:
                design, development, deployment, maintenance, and growth strategy — all under one roof.
              </p>
            </div>
            <div>
              <GradientHeading>Agile & Transparent Process</GradientHeading>
              <p className="text-gray-700">
                We follow a client-first approach with regular updates, live
                previews, flexible iterations, and transparent communication throughout the project.
              </p>
            </div>
            <div>
              <GradientHeading>Long-Term Partnership</GradientHeading>
              <p className="text-gray-700">
                We believe in building lasting relationships by offering
                post-delivery support, affordable maintenance plans, and reliable upgrades as your business grows.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
