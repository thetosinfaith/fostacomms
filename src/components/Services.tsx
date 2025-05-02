import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShieldAlert,
  BriefcaseBusiness,
  Megaphone,
  Building2,
} from "lucide-react";

import ServiceCard from "./ServiceCards";

export default function OurServices() {
  const [expandedCard, setExpandedCard] = useState<number | null>(2);

  const services = [
    {
      title: "Crisis Management",
      color: "bg-blue-500",
      icon: <ShieldAlert size={40} className="text-white" />,
      description:
        "Stay ahead of the curve with a solid crisis response strategy to protect your reputation.",
    },
    {
      title: "Brand Management",
      color: "bg-black",
      icon: <BriefcaseBusiness size={40} className="text-white" />,
      description:
        "Turn your brand into a household name with powerful positioning and consistent messaging.",
    },
    {
      title: "Media Communication",
      color: "bg-yellow-400",
      icon: <Megaphone size={40} className="text-black" />,
      description:
        "Get your story out there with our media strategy that guarantees positive press and buzz.",
    },
    {
      title: "Corporate to Brands PR",
      color: "bg-white",
      icon: <Building2 size={40} className="text-black" />,
      description:
        "We are redefining the way Public Relations is practiced on the continent and influencing a shift.",
    },
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full bg-fostacomms-yellow mx-auto px-4 md:px-8">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="mb-2">
          <h2 className="inline-block text-fostacomms-black bg-fostacomms-cream px-4 py-2 rounded-full text-sm font-semibold font-kamerik mb-4 lg:-mt-10">
            People Before Profits
          </h2>
        </div>

        <div className="mb-12">
          <h1 className="text-2xl md:text-5xl font-heading mb-6 md:mb-0">
            Our PR
            <span className="text-fostacomms-black font-heading">
              {" "}
              Services
            </span>
            .
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <ServiceCard
                title={service.title}
                color={service.color}
                icon={service.icon}
                description={service.description}
                isExpanded={expandedCard === index}
                onToggle={() => toggleCard(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
