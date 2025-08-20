import {
  Code,
  Code2,
  Dribbble,
  FileDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-6 h-6" />,
    href: "https://github.com/Sutanu1234",
    hover: "hover:text-black dark:hover:text-white",
    color: "bg-black"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/sutanu-bera-9200a9258/",
    hover: "hover:text-blue-600",
    color: "bg-blue-600"
  },
  {
    name: "Email",
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:cse22107@iiitkalyani.ac.in",
    hover: "hover:text-red-500",
    color: "bg-red-500"
  },
  {
    name: "Leetcode",
    icon: <Code2 className="w-6 h-6" />,
    href: "https://leetcode.com/u/sutanubera/",
    hover: "hover:text-yellow-400",
    color: "bg-yellow-400"
  },
  {
    name: "Dribble",
    icon: <Dribbble className="w-6 h-6" />,
    href: "https://dribbble.com/SB_ui",
    hover: "hover:text-pink-400",
    color: "bg-pink-400"
  },
  {
    name: "Resume",
    icon: <FileDown className="w-6 h-6" />,
    href: "#",
    hover: "hover:text-green-600",
    color: "bg-green-600"
  },
];

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-4 text-gray-600 dark:text-gray-300">
          {socialLinks.map((link, index) => (
            <HoverCard>
              <HoverCardTrigger>
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition ${link.hover}`}
                >
                  {link.icon}
                </a>
              </HoverCardTrigger>
              <HoverCardContent className={`${link.color}`}>
                <div className={`flex justify-center font-semibold text-white`}>{link.name}</div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Designed & Developed by{" "}
          <span className="font-semibold">Sutanu Bera</span> ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
