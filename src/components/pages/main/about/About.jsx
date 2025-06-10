import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function About() {
  const cards = [
    {
      name: "Email",
      color: "#f3f3f1",
      icon: <Mail />,
      value: "cse22107@iiitkalyani.ac.in\nsutanubera82@gmail.com",
    },
    {
      name: "Phone",
      color: "#000000",
      icon: <Phone />,
      value: "+91 8317850433",
    },
    {
      name: "Address",
      color: "#233eff",
      icon: <MapPin />,
      value: "Kalyani, Nadia, West Bengal, 741235",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left image block with blur and overlay text */}
      <div className="w-full lg:w-1/2">
        <div className="relative sm:h-[400px] md:h-[560px] lg:h-full rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{ backgroundImage: "url('/me2.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="relative z-10 h-full flex items-start justify-start p-6">
            <h2 className="text-white text-3xl sm:text-4xl font-bold">
              I am Sutanu Bera
            </h2>
          </div>
        </div>
      </div>

      {/* Right content block */}
      <div className="flex flex-col w-full lg:w-1/2 gap-8 justify-between">
        <h2 className="text-3xl sm:text-4xl font-semibold">Introduction</h2>

        <div className="p-4 border-2 rounded-3xl border-gray-600">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            A passionate software engineer with a strong background in Computer Science.
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <p className="text-md text-gray-600 text-justify">
              Aspiring software developer skilled in competitive programming, MERN stack development, and UI/UX design. Solved 400+ problems on LeetCode, built scalable applications, and designed intuitive interfaces. Seeking to contribute to innovative projects while advancing technical and creative expertise.
            </p>
            <div className="w-full md:w-1/2">
              <img
                src="/program.png"
                alt="Illustration of programming"
                className="w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>

        <Separator className="bg-gray-300" />

        <h2 className="text-3xl sm:text-4xl font-semibold">Get In Touch</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2">
          {cards.map((card, index) => {
            const isEmail = card.name === "Email";
            const textColor = isEmail ? "text-black" : "text-white";

            return (
              <div
                key={index}
                className="rounded-2xl border-2 p-4 flex flex-col justify-between w-full"
                style={{ backgroundColor: card.color }}
              >
                <div className={`flex gap-2 items-center mb-2 ${textColor}`}>
                  {card.icon}
                  <p className="text-md font-medium">{card.name}</p>
                </div>
                <Separator className="bg-gray-300 mt-2 mb-2" />
                <p className={`text-sm whitespace-pre-line ${textColor} lg:overflow-auto`}>
                  {card.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
