import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import About from "./about/About";
import Resume from "./resume/Resume";
import Projects from "./project/Projects";

function ToggleManue() {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabs = ["About Me", "Resume", "Projects"];

  return (
    <div>
      <div className="flex gap-8 items-center p-4">
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>

        <div className="flex gap-10 text-sm md:text-xl text-gray-600">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1 transition-all cursor-pointer ${
                activeTab === tab
                  ? "text-black font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black"
                  : "hover:text-black text-gray-600 font-semibold"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Separator height="2px" width="96%" className="bg-gray-300 " />
      </div>

      {/* Render all components but toggle visibility */}
      <div className="">
        <div className={activeTab === "About Me" ? "" : "hidden"}>
          <About />
        </div>
        <div className={activeTab === "Resume" ? "" : "hidden"}>
          <Resume />
        </div>
        <div className={activeTab === "Projects" ? "" : "hidden"}>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default ToggleManue;
