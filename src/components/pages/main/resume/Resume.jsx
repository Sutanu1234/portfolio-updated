import React from "react";

import { expData } from "./exp";
import { extras, logoLink, skills } from "./logo";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Resume() {
  return (
    <div className="flex justify-between w-full">
      {/* exp */}
      <div className="p-4 flex flex-col gap-4 w-full">
        <h2 className="text-4xl font-semibold">Experience</h2>
        <div className="flex flex-col">
          {expData.map((data) => {
            return (
              <>
                <div className="rounded-2xl border-2 border-gray-400 flex flex-col p-4 w-full gap-4">
                  <Badge
                    variant="outline"
                    className="text-sm text-white bg-[#233eff] border-2 rounded-full"
                  >
                    {data.year}
                  </Badge>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-600">
                      {data.tag}
                    </h2>
                    <p className="text-3xl font-semibold">{data.title}</p>
                    <p className="text-sm font-medium text-gray-600">
                      {data.des}
                    </p>
                  </div>
                  <div>
                    <Separator height="2px" className="bg-gray-400" />
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-600">
                        {data.start}
                      </p>
                      <p className="text-sm font-medium text-gray-600">
                        {data.end}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <Separator
          orientation="vertical"
          width="2px"
          className="bg-gray-300 "
        />
      </div>

      {/* Skills */}
      <div className="w-full flex flex-col">
        <div className="p-4 flex flex-col gap-4 w-full">
          <h2 className="text-4xl font-semibold">Expertise</h2>
          <p className="text-md font-medium text-gray-600">
            Skilled Full Stack Developer with strong command over MERN stack,
            competitive programming, and UI/UX design. Proficient in building
            scalable web applications, solving complex problems, and delivering
            clean, user-friendly interfaces.
          </p>
        </div>
        <Separator height="2px" className="bg-gray-300" />
        <div className="p-4 flex flex-col gap-4 w-full h-full">
          <h2 className="text-4xl font-semibold">Hardskills</h2>
          <div className="bg-black rounded-2xl p-4 h-full flex flex-col gap-6">
            <div className="relative h-full min-h-[200px] rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('/img.jpg')" }}
              ></div>
            </div>
            <div className="*:data-[slot=avatar]:bg-white flex -space-x-2 *:data-[slot=avatar]:ring-3">
              {logoLink.map((logo) => {
                return (
                  <>
                    <Avatar className="size-10">
                      <AvatarImage src={logo.link} />
                    </Avatar>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <Separator height="2px" className="bg-gray-300" />
        <div className="p-4 flex flex-col gap-4 w-full">
          <h2 className="text-4xl font-semibold">Softskills</h2>
          <div className="w-full">
            {skills.map((skill) => {
              return (
                <Badge
                  variant="outline"
                  className="text-sm font-semibold text-gray-600 border-gray-400 rounded-full m-1"
                >
                  {skill}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Separator
          orientation="vertical"
          width="2px"
          className="bg-gray-300 "
        />
      </div>

      {/* Education */}
      <div className="w-full flex flex-col">
        <div className="p-4 flex flex-col gap-4 w-full">
          <h2 className="text-4xl font-semibold">Education</h2>
          <div className="rounded-2xl border-2 border-gray-400 flex flex-col p-4 w-full gap-4">
            <Badge
              variant="outline"
              className="text-sm text-white bg-black border-2 rounded-full"
            >
              Ongoing
            </Badge>
            <div>
              <h2 className="text-xl font-semibold text-gray-600">
                IIIT Kalyani
              </h2>
              <p className="text-3xl font-semibold">B.Tech in CSE</p>
              <p className="text-sm font-medium text-gray-600">CGPA - 7.3</p>
            </div>
            <div>
              <Separator height="2px" className="bg-gray-400" />
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-600">2022</p>
                <p className="text-sm font-medium text-gray-600">2026</p>
              </div>
            </div>
          </div>
        </div>
        <Separator height="2px" className="bg-gray-300" />
        <div className="p-4 flex flex-col gap-4 w-full h-full">
          <h2 className="text-4xl font-semibold">Extracurricular Activities</h2>
          <div className="grid-cols-1 gap-2">
            {extras.map((ex, index) => {
              return (
                <>
                  <div key={index} className="p-2 text-md font-medium text-gray-600">
                    {ex}
                  </div>
                  {index < extras.length - 1 ?
                  <div className="flex justify-center">
                    <Separator
                      height="1.5px"
                      className="bg-gray-300 "
                    />
                  </div> : ""
                  }
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
