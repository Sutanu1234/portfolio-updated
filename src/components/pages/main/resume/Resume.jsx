import React from "react";
import { expData } from "./exp";
import { extras, logoLink, skills } from "./logo";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function Resume() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full">
      {/* Experience */}
      <div className="p-4 flex flex-col gap-4 w-full lg:w-1/3">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center lg:text-left">Experience</h2>
        <div className="flex flex-col gap-4">
          {expData.map((data, index) => (
            <div key={index} className="rounded-2xl border-2 border-gray-400 p-4 w-full flex flex-col gap-4">
              <Badge
                variant="outline"
                className="text-sm text-white bg-[#233eff] border-2 rounded-full w-fit"
              >
                {data.year}
              </Badge>
              <div>
                <h2 className="text-lg font-semibold text-gray-600">{data.tag}</h2>
                <p className="text-2xl font-semibold">{data.title}</p>
                <p className="text-sm font-medium text-gray-600">{data.des}</p>
              </div>
              <div>
                <Separator className="bg-gray-400" />
                <div className="flex justify-between text-sm font-medium text-gray-600">
                  <p>{data.start}</p>
                  <p>{data.end}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Separator */}
      <div className="hidden md:flex justify-center items-stretch px-2">
        <Separator orientation="vertical" className="bg-gray-300 w-[2px]" />
      </div>

      {/* Skills */}
      <div className="w-full lg:w-1/3 flex flex-col">
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center lg:text-left">Expertise</h2>
          <p className="text-md font-medium text-gray-600 text-justify">
            Skilled Full Stack Developer with strong command over MERN stack,
            competitive programming, and UI/UX design.
          </p>
        </div>

        <Separator className="bg-gray-300" />

        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center lg:text-left">Hardskills</h2>
          <div className="bg-black rounded-2xl p-4 flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden min-h-[200px]">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('/img.jpg')" }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {logoLink.map((logo, idx) => (
                <Avatar key={idx} className="size-10 bg-white ring-2 ring-white">
                  <AvatarImage src={logo.link} />
                </Avatar>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-gray-300" />

        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center lg:text-left">Softskills</h2>
          <div className="flex flex-wrap">
            {skills.map((skill, i) => (
              <Badge
                key={i}
                variant="outline"
                className="text-sm font-semibold text-gray-600 border-gray-400 rounded-full m-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Separator */}
      <div className="hidden md:flex justify-center items-stretch px-2">
        <Separator orientation="vertical" className="bg-gray-300 w-[2px]" />
      </div>

      {/* Education */}
      <div className="w-full lg:w-1/3 flex flex-col">
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center lg:text-left">Education</h2>
          <div className="rounded-2xl border-2 border-gray-400 p-4 flex flex-col gap-4">
            <Badge
              variant="outline"
              className="text-sm text-white bg-black border-2 rounded-full w-fit"
            >
              Ongoing
            </Badge>
            <div>
              <h2 className="text-lg font-semibold text-gray-600">IIIT Kalyani</h2>
              <p className="text-2xl font-semibold">B.Tech in CSE</p>
              <p className="text-sm font-medium text-gray-600">CGPA - 7.3</p>
            </div>
            <div>
              <Separator className="bg-gray-400" />
              <div className="flex justify-between text-sm font-medium text-gray-600">
                <p>2022</p>
                <p>2026</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-300" />

        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center lg:text-left">Extracurricular Activities</h2>
          <div className="flex flex-col gap-2">
            {extras.map((ex, index) => (
              <div key={index}>
                <div className="p-2 text-md font-medium text-gray-600 text-justify">{ex}</div>
                {index < extras.length - 1 && (
                  <Separator className="bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
