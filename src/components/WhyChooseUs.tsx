import React from "react";
import {
  Megaphone,
  Users,
  HeartHandshake,
  ThumbsUp,
  Globe,
  MessageSquare,
} from "lucide-react";

const Benefits = [
  {
    icon: <Megaphone className="text-blue-600 w-12 h-12" />,
    title: "Boost Your Brand",
    description:
      "We will reach a larger audience with targeted PR strategies that elevate your brand’s visibility and position you as an industry leader.",
  },
  {
    icon: <Users className="text-yellow-500 w-12 h-12" />,
    title: "Engage Your Community",
    description:
      "We will build lasting relationships and earn trust by engaging with your audience in authentic and meaningful ways.",
  },
  {
    icon: <HeartHandshake className="text-purple-600 w-12 h-12" />,
    title: "Collaborate Authentically",
    description:
      "We will partner with influencers and brands that align with your values, expanding your reach and boosting credibility.",
  },
  {
    icon: <ThumbsUp className="text-green-600 w-12 h-12" />,
    title: "Build Positive Reputation",
    description:
      "We will cultivate a trustworthy brand presence both online and offline, ensuring a lasting, positive impact on your audience.",
  },
  {
    icon: <Globe className="text-black w-12 h-12" />,
    title: "Expand Globally",
    description:
      "We will take your brand international and connect with a global audience through effective PR strategies.",
  },
  {
    icon: <MessageSquare className="text-red-500 w-12 h-12" />,
    title: "Stay Visible",
    description:
      "We will maintain a consistent presence across media channels, ensuring your brand stays top-of-mind with your audience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-fostacomms-blue px-4 sm:px-6 md:px-24 py-20">
      <div className="text-center mb-2">
        <h2 className="inline-block text-fostacomms-black bg-fostacomms-cream px-4 py-2 rounded-full text-sm font-semibold font-kamerik mb-4 lg:-mt-10">
          So Many Benefits
        </h2>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-5xl font-heading mb-6 md:mb-0 text-fostacomms-yellow">
          Why Choose
          <span className="text-fostacomms-black font-heading"> Us?</span>
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mx-auto px-4 sm:px-6 md:px-8 z-10">
        {Benefits.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-xl shadow-sm flex flex-col gap-4 relative w-full sm:w-[90%] md:w-full"
          >
            <div>{feature.icon}</div>
            <h3 className="font-semibold text-xl md:text-2xl text-gray-900">
              {feature.title}
            </h3>
            <p className="text-base md:text-lg text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
