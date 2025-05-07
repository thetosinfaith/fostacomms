import Founder from "../../src/assets/founder.jpg";
import { useEffect } from "react";
import { Sparkles, ArrowRight, Target, Globe, Handshake } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Brands from "../../src/assets/certified.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      className="bg-[#f8f5e9] pt-6 pb-6 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 p-2 md:p-8 lg:p-12 mx-auto px-4 md:px-8"
      style={{
        background: `linear-gradient(to right, 
      rgba(50, 142, 193, 0.95),
      rgba(50, 142, 193, 0.8)
      ), url('https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="bg-fostacomms-cream rounded-2xl p-6 md:p-10 mb-6 flex flex-col md:flex-row md:items-center md:justify-between"
          data-aos="fade-up"
        >
          <h1 className="text-2xl md:text-5xl font-heading mb-6 md:mb-0">
            Become a
            <span className="text-fostacomms-black font-heading"> Client</span>.
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-fostacomms-yellow text-fostacomms-navy font-heading px-8 py-4 rounded-full flex items-center justify-center transition-colors text-lg group"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              Take The First Step
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="bg-fostacomms-black text-fostacomms-cream font-heading px-8 py-4 rounded-full flex items-center justify-center transition-colors text-lg group"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Get In Touch
              <Handshake className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div
            className="md:col-span-6 md:row-span-2"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="h-full rounded-2xl overflow-hidden">
              <img
                src={Founder}
                alt="Designer working on laptop"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div
                className="flex-1 bg-fostacomms-yellow rounded-2xl p-6 md:p-8"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <div className="mb-4">
                  <Sparkles className="h-6 w-6 text-[#1a1a2e]" />
                </div>
                <h2 className="text-2xl text-[#1a1a2e] mb-4">
                  Your Favourite Brands Use{" "}
                  <span className="text-fostacomms-blue font-semibold">
                    Fostacomms
                  </span>
                </h2>
                <p className="text-[#1a1a2e]">
                  We put our clients first and come up with creative ways to
                  help their businesses communicate better. Every project at{" "}
                  <span className="text-fostacomms-blue font-semibold">
                    Fostacomms
                  </span>{" "}
                  gets quality attention and results.
                </p>
              </div>

              <div
                className="flex-1 rounded-2xl overflow-hidden"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src={Brands}
                  alt="Bicycle basket with colorful items"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="bg-fostacomms-black rounded-2xl p-6 text-white pt-10 pb-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="inline-flex items-center bg-fostacomms-yellow text-[#1a1a2e] px-4 py-1.5 rounded-full font-medium text-sm mb-6">
                <Target size={16} className="mr-2" />
                Our Mission
              </div>
              <p className="text-fostacomms-cream">
                Our goal is to help brands like yours stand out with bold
                storytelling, trusted media connections, and smart social
                strategies. Whether in the headlines, online buzz, or real
                conversations, we make sure your message not only gets heard but
                makes an impact and keeps people talking.
              </p>
              <div className="inline-flex items-center bg-fostacomms-yellow text-[#1a1a2e] px-4 py-1.5 rounded-full font-medium text-sm mb-6 mt-10">
                <Globe size={16} className="mr-2" />
                Our Vision
              </div>

              <p className="text-fostacomms-cream">
                To be the go-to provider of innovative concepts, integrated
                marketing communications solutions, and human development
                services that provide superior values that enhance reputation
                and boost revenue.
              </p>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8">
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p className="text-fostacomms-yellow text-3xl font-bold">
                    100%
                  </p>
                  <p className="text-white text-sm">Dedication</p>
                </div>
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <p className="text-fostacomms-yellow text-3xl font-bold">
                    24/7
                  </p>
                  <p className="text-white text-sm">Media Support</p>
                </div>
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <p className="text-fostacomms-yellow text-3xl font-bold">5</p>
                  <p className="text-white text-sm">Brands</p>
                </div>
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <p className="text-fostacomms-yellow text-3xl font-bold">
                    10+
                  </p>
                  <p className="text-white text-sm">Media Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
