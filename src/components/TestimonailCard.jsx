import React from "react";

const TestimonialCard = () => {
  return (
    <section className="w-full flex justify-center py-8 px-4">
      <div className="relative w-full max-w-[980px]">

        <div className="md:hidden bg-[#579AC2] rounded-[28px] shadow-xl overflow-hidden flex flex-row items-center py-6 relative min-h-[220px]">
          <div className="w-3/5 py-4 px-0 pl-6 text-white relative">
            <div className="absolute -top-4 left-5 w-9 h-9 bg-white/30 rounded-full backdrop-blur-sm"></div>

              <blockquote className="mt-4 text-white text-sm font-light leading-snug tracking-tight max-w-[190px]">
              “The direct attention from the founder of the company made us feel like a priority”
            </blockquote>

              <p className="mt-6 text-xs md:text-sm text-white/80">
              SVP of Global Marketing, Cogency Global
            </p>
          </div>

             <div className="w-1/2 relative flex justify-end items-end h-full pr-3">
            <img
              src="https://res.cloudinary.com/dnbqbzens/image/upload/v1780811305/codexnovas/aiks9d6nvieqwnkqma9v.png"
              loading="lazy"
              alt="testimonial"
                 className="w-[320px] sm:w-[360px] object-contain absolute top-0 right-[-10px] z-10" 
              style={{ pointerEvents: "none" }}
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-14px] w-[80%] h-5 blur-[16px] bg-black/20 rounded-full"></div>
        </div>

        <div className="hidden md:flex bg-[#579AC2] rounded-[32px] shadow-2xl overflow-hidden flex-row items-center py-10 md:min-h-[360px] relative">
          <div className="w-1/2 p-8 md:pl-16 md:pr-10 text-white relative">
            <div className="absolute -top-0 left-12 w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm"></div>

            <blockquote className="text-white mt-20 text-2xl font-light leading-snug tracking-tight max-w-[520px]">
              “The direct attention from the founder of the company made us feel like a priority”
            </blockquote>

            <p className="mt-6 text-base text-white/80">
              SVP of Global Marketing, Cogency Global
            </p>
          </div>

          <div className="w-1/2 relative flex justify-end items-end h-full">
            <img
              src="https://res.cloudinary.com/dnbqbzens/image/upload/v1780811305/codexnovas/aiks9d6nvieqwnkqma9v.png"
              alt="testimonial"
              loading="lazy"
              className="w-[420px] lg:w-[480px] object-contain absolute -bottom-48 right-0"
              style={{ pointerEvents: "none" }}
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] w-[80%] h-6 blur-[18px] bg-black/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
