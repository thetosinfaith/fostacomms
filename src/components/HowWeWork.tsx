import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HowWeWork() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  const steps = [
    {
      number: 1,
      title: "Onboarding",
      description:
        "We talk to you to understand what you want to achieve with your brand and who you want to reach.",
      gradientFrom: "#3cffd0",
      gradientTo: "#0066ff",
    },
    {
      number: 2,
      title: "Strategy",
      description:
        "We create a plan to help your brand get noticed and connect with the right people.",
      gradientFrom: "#3cffd0",
      gradientTo: "#00b3b3",
    },
    {
      number: 3,
      title: "Execution",
      description:
        "We carry out the plan and track how well it’s working, making adjustments to keep your brand growing.",
      gradientFrom: "#5e7eff",
      gradientTo: "#4834d4",
    },
  ];

  return (
    <div className="bg-fostacomms-yellow text-white py-16 md:py-24 px-6 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-2">
          <h2 className="inline-block text-fostacomms-black bg-fostacomms-cream px-4 py-2 rounded-full text-sm font-semibold font-kamerik mb-4 lg:-mt-10">
            Public Relations & Consulting Firm in Lagos
          </h2>
        </div>

        <div className="mb-12">
          <h1 className="text-2xl md:text-5xl font-heading mb-6 md:mb-0">
            Our Work
            <span className="text-fostacomms-black font-heading"> Process</span>.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start text-left w-full px-8 sm:px-10 bg-white/10 rounded-lg py-10 md:py-10"
              data-aos="fade-up" // <-- AOS animation
              data-aos-delay={step.number * 150} // optional staggered delay
            >
              <span
                className="text-[90px] md:text-[120px] font-bold mb-2 bg-gradient-to-b text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${step.gradientFrom}, ${step.gradientTo})`,
                }}
              >
                {step.number}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-fostacomms-black">
                {step.title}
              </h3>
              <p className="text-base md:text-lg mt-4 text-fostacomms-black">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
