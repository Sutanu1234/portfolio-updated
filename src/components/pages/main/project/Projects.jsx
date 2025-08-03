import React from "react";

import { projects } from "./projectData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MousePointerClick } from "lucide-react";

function Projects() {
  return (
    <div className="p-4 flex flex-col gap-4 w-full">
      <h2 className="text-4xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {projects.map((project, index) => (
          <>
            <div
              key={index}
              className="rounded-2xl border-2 border-gray-400 flex flex-col gap-4 w-full p-4"
            >
              <div className="flex justify-between items-center">
                <Badge
                  className={`${
                    project.status === "Ongoing" ? "" : "bg-green-400"
                  } font-medium text-md rounded-2xl`}
                >
                  {project.status}
                </Badge>
                <Badge className="font-medium text-md bg-[#233eff] rounded-2xl">
                  {project.time}
                </Badge>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="" className="rounded-full w-full">
                      {" "}
                      <MousePointerClick /> Click
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="sm:w-100 md:w-120">
                    <div className="flex flex-col gap-4">
                      <h2 className="text-lg font-semibold">{project.name}</h2>
                      <p className="text-md font-medium text-gray-600">
                        {project.tech}
                      </p>
                      <div className="p-4 text-justify">
                        {project.des.map((d) => (
                          <ul>
                            <li className="font-medium text-gray-600 text-sm list-disc">
                              {d}
                            </li>
                          </ul>
                        ))}
                      </div>
                      <div className="flex gap-2 justify-between items-center w-full">
                        <Button className="rounded-full w-1/2" onClick={() => window.open(project.code, "_blank")}>
                          View Code
                        </Button>
                        <Button
                          className="rounded-full w-1/2 bg-transparent border-2 border-gray-400"
                          variant="outline"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Projects;
