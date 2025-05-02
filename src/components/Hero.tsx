import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import { ArrowRight, AlarmClock } from "lucide-react";

import Founder from "../../src/assets/billboard.jpg";
import Navbar from "./Navbar";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="about" className="bg-fostacomms-yellow section-padding">
      <div className="container mx-auto mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="order-2 lg:order-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-[] rounded-tr-[80px] -z-10"></div>
                <div className="relative overflow-hidden rounded-tr-[70px] shadow-2xl">
                  <img
                    src={Founder}
                    alt="Team collaboration"
                    className="w-full h-[350px] sm:h-[550px] lg:h-[550px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="space-y-6 lg:mt-6">
                <span className="inline-block text-fostacomms-gold bg-fostacomms-cream px-4 py-2 rounded-full text-sm font-semibold font-kamerik lg:-mt-10">
                  Leading PR Agency in Nigeria
                </span>
                <h1
                  className="font-heading text-3xl md:text-6xl lg:text-6xl mb-6 text-fostacomms-black"
                  style={{ lineHeight: "1.3" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  The{" "}
                  <span className="text-fostacomms-blue font-kamerik">
                    PR Team{" "}
                  </span>
                  Behind Trusted
                  <span className="text-fostacomms-blue font-kamerik">
                    {" "}
                    Brands
                  </span>
                </h1>

                <div className="space-y-6 text-fostacomms-black">
                  <p
                    className="text-lg leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    Fostacomms is a communications and public relations agency
                    focused on helping businesses build strong brand
                    communication, and drive growth. We use effective
                    communication to help brands connect with their audience.
                    Let us help you tell your story!
                  </p>
                </div>

                <div
                  className="lg:mt-10"
                  style={{ marginTop: "6%" }}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <a
                    href="https://wa.me/2348136456329"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-fostacomms-blue text-white font-heading px-6 py-3 rounded-full font-body text-lg flex items-center gap-2 transition-all hover:bg-fostacomms-black hover:text-white w-fit"
                  >
                    Get Immediate PR Support
                    <ArrowRight size={20} />
                  </a>
                  <div className="inline-flex items-center bg-fostacomms-black text-fostacomms-cream text-sm px-5 py-3 rounded-full uppercase tracking-wide shadow-md mb-3 gap-2 mt-6 glow-effect">
                    <AlarmClock size={16} className="animate-shake" />
                    Fast Response Guaranteed
                  </div>

                  <div className="hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
