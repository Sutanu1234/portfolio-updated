import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";

function Home() {
  let itemsTags = ["#UI/UX", "#DESIGN", "#WEB", "#DEVELOPMENT", "#MOBILE"];
  return (
    <div className="p-4 flex justify-between">
      <div className="flex flex-col items-start justify-around w-full">
        <div className="flex flex-col">
          <div className="flex w-full items-center">
            <h2 className="text-8xl font-semibold">VISI</h2>
            <div className="w-30 h-16 bg-black rounded-full flex items-center justify-center">
              <div className="w-24 h-10 bg-[#f3f3f1] rounded-full"></div>
            </div>
            <h2 className="text-8xl font-semibold">NS</h2>
          </div>
          <div className="flex gap-4 flex-wrap">
            {itemsTags.map((items) => {
              return (
                <>
                  <Badge
                    variant="outline"
                    className="text-sm text-gray-600 border-gray-400 border-2 rounded-full"
                  >
                    {items}
                  </Badge>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-4xl font-semibold tracking-tight">
            Welcome to My Digital Space
          </h1>
          <p className="text-muted-foreground text-sm">
            I craft clean, functional, and user-focused designs — one pixel and line of code at a time.
          </p>
          <Button
            variant="ghost"
            className="text-xl text-gray-600 px-8 py-8 border-2 border-gray-400 rounded-full hover:bg-muted transition-all"
          >
            🔻 Scroll Down 🔻
          </Button>
        </div>
      </div>
      <div className="w-full">
        <img src="/portfolio.svg" className=" w-full" />
      </div>
    </div>
  );
}

export default Home;
