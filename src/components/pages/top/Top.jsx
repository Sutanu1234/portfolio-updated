import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Top() {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-center p-4 gap-4">
      {/* Left: Avatar + Name */}
      <div className="flex items-center gap-4">
        <Avatar className="grayscale">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>

        <p className="font-bold text-xl sm:text-2xl text-gray-700">
          Sutanu Bera
        </p>
      </div>

      {/* Right: Welcome Message */}
      <div className="text-center sm:text-right">
        <p className="font-bold text-lg sm:text-2xl text-gray-600">
          Welcome to My Portfolio
        </p>
      </div>
    </div>
  );
}
