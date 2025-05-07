import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function FAQ() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "What services does Fostacomms offer?",
      answer:
        "Fostacomms offers comprehensive communication and public relations services, including brand communication strategies, media relations, content creation, crisis management, and digital marketing. We help businesses connect with their audience and build a strong brand presence.",
      isOpen: true,
    },
    {
      question: "What industries does Fostacomms specialize in?",
      answer:
        "Fostacomms specializes in a wide range of industries, including technology, healthcare, finance, retail, and consumer goods. We tailor our strategies to meet the unique needs of each sector, ensuring effective communication and maximum brand impact.",
      isOpen: false,
    },
    {
      question: "Can Fostacomms assist with crisis management?",
      answer:
        "Yes, Fostacomms provides crisis communication services to help businesses navigate and manage any reputational challenges. We work closely with clients to craft transparent, clear, and effective messages to mitigate damage and restore trust.",
      isOpen: false,
    },
    {
      question: "How does Fostacomms measure the success of its PR campaigns?",
      answer:
        "We measure the success of our PR campaigns using key performance indicators (KPIs) such as media coverage, audience engagement, brand sentiment analysis, and overall visibility. We provide clients with detailed reports to track progress and adjust strategies as needed.",
      isOpen: false,
    },
    {
      question: "How can Fostacomms help improve my brand's online presence?",
      answer:
        "Fostacomms helps businesses improve their online presence by leveraging digital marketing strategies, social media campaigns, and content creation that resonates with your target audience. We ensure your brand reaches the right people across multiple digital platforms to boost visibility and engagement.",
      isOpen: false,
    },
    {
      question: "What makes Fostacomms different from other PR agencies?",
      answer:
        "At Fostacomms, we focus on creating tailored, results-driven strategies that align with our clients' specific goals. Our team’s extensive experience, creative approach, and commitment to building lasting relationships with media outlets and stakeholders set us apart from other PR agencies.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqItems(
      faqItems.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      })
    );
  };

  return (
    <div className="bg-fostacomms-blue px-1 md:px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-2" data-aos="fade-down">
          <h2 className="inline-block text-fostacomms-black bg-fostacomms-cream px-4 py-2 rounded-full text-sm font-semibold font-kamerik mb-4 lg:-mt-10">
            Public Relations & Consulting Firm in Lagos
          </h2>
        </div>

        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-2xl md:text-5xl font-heading mb-6 md:mb-0 text-fostacomms-cream">
            Frequently Asked
            <span className="text-fostacomms-yellow font-heading"> Questions.</span>
          </h1>
        </div>

        <div className="bg-fostacomms-blue p-6 md:p-10 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg" data-aos="fade-up">
              <h3 className="text-xl font-heading text-gray-800 mb-4">
                Send a Message
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Feel free to contact with us, we don't spam your email
              </p>

              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-600"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-600"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Hi Fostacomms"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-600"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    className="w-full border-b border-gray-300 resize-none focus:outline-none focus:border-teal-600"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-fostacomms-yellow hover:bg-teal-900 text-black py-3 px-6 rounded-full transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {faq.isOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  {faq.isOpen && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
