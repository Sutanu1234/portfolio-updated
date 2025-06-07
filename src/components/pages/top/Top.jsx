import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Top() {
  return (
    <div className="flex w-full justify-between items-center p-4">
      <div className="flex justify-between items-center gap-4">
        <Avatar className="grayscale">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>

        <p className="font-bold text-2xl text-gray-600">Sutanu Bera</p>
      </div>
      <div>
        <p className="font-bold text-gray-600 text-2xl">Welcome To My Portfolio</p>
      </div>
    </div>
  );
}
