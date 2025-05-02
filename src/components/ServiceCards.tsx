"use client";

import { ChevronUp } from "lucide-react";

interface ServiceCardProps {
  title: string;
  color: string;
  icon: React.ReactNode;
  description: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ServiceCard({
  title,
  color,
  icon,
  description,
  isExpanded,
  onToggle,
}: ServiceCardProps) {
  const textColor =
    color === "bg-black"
      ? "text-white"
      : color === "bg-white"
      ? "text-black"
      : "text-black";

  const toggleBgColor = "bg-black";
  const toggleTextColor = "text-white";

  return (
    <div
      className={`${color} rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? "h-auto" : "h-[350px]"
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex flex-col items-center justify-center mb-1 mt-6">
          <div className="relative w-24 h-24 flex items-center justify-center mb-4">
            {icon}
          </div>
          <div className="text-center">
            <h3 className={`text-2xl md:text-3xl font-medium ${textColor}`}>
              {title}
            </h3>
          </div>
        </div>

        {isExpanded && (
          <div
            className={`${textColor} text-center mb-4 transition-opacity duration-300 ease-in-out opacity-70`}
          >
            {description}
          </div>
        )}

        <div className="flex justify-center mt-6">
          <button
            onClick={onToggle}
            className={`${toggleBgColor} ${toggleTextColor} w-12 h-12 flex items-center justify-center rounded-sm ${
              color === "bg-black" ? "border border-white" : ""
            }`}
          >
            {isExpanded ? (
              <span className="text-2xl">---</span>
            ) : (
              <ChevronUp className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
