import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Home() {
  let itemsTags = ["#UI/UX", "#DESIGN", "#WEB", "#DEVELOPMENT", "#MOBILE"];

  return (
    <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Section */}
      <div className="flex flex-col h-full items-center justify-between md:items-start w-full gap-6 text-center md:text-left">
        {/* Title */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold">VISI</h2>
            <div className="w-20 h-10 sm:w-24 sm:h-12 bg-black rounded-full flex items-center justify-center">
              <div className="w-14 h-6 sm:w-20 sm:h-8 bg-[#f3f3f1] rounded-full"></div>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold">NS</h2>
          </div>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap justify-center md:justify-start">
            {itemsTags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs sm:text-sm text-gray-600 border-gray-400 border-2 rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description & Button */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Welcome to My Digital Space
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-[500px]">
            I craft clean, functional, and user-focused designs — one pixel and line of code at a time.
          </p>
          <Button
            variant="ghost"
            className="text-sm md:mt-16 sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 border-gray-400 rounded-full hover:bg-muted transition-all"
          >
            🔻 Scroll Down 🔻
          </Button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full flex justify-center">
        <img
          src="/portfolio.svg"
          alt="Portfolio Illustration"
          className="w-full max-w-[560px] mx-auto"
        />
      </div>
    </div>
  );
}

export default Home;
