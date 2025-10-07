import { Linkedin, Mail } from "lucide-react";
import { SiX, SiInstagram, SiGithub } from "@icons-pack/react-simple-icons";

export interface TeamMember {
  name: string;
  post: string;
  imageUrl: string;
  socials: {
    icon: React.ReactNode;
    url: string;
  }[];
}

export const boardMembers: TeamMember[] = [
  {
    name: "Aditi Sharma",
    post: "President",
    imageUrl: "/Aditi.png",
    socials: [
      { icon: <Linkedin />, url: "https://linkedin.com" },
      { icon: <SiX />, url: "https://SiX.com" },
      { icon: <SiInstagram />, url: "https://instagram.com" },
      { icon: <SiGithub />, url: "https://github.com" },
      { icon: <Mail />, url: "mailto:example@example.com" },
    ],
  },
  {
    name: "Tanu Somani",
    post: "Vice President",
    imageUrl: "/Tanu.jpg",
    socials: [
      { icon: <Linkedin />, url: "https://linkedin.com" },
      { icon: <SiX />, url: "https://SiX.com" },
      { icon: <SiInstagram />, url: "https://instagram.com" },
      { icon: <SiGithub />, url: "https://github.com" },
      { icon: <Mail />, url: "mailto:example@example.com" },
    ],
  },
  {
    name: "Hemesh Kanyal",
    post: "Joint Secretary",
    imageUrl: "/Hemesh.PNG",
    socials: [
      { icon: <Linkedin />, url: "https://linkedin.com" },
      { icon: <SiX />, url: "https://SiX.com" },
      { icon: <SiInstagram />, url: "https://instagram.com" },
      { icon: <SiGithub />, url: "https://github.com" },
      { icon: <Mail />, url: "mailto:example@example.com" },
    ],
  },
  {
    name: "Anshita Varshney",
    post: "Joint Secretary",
    imageUrl: "/Anshita.jpg",
    socials: [
      { icon: <Linkedin />, url: "https://linkedin.com" },
      { icon: <SiX />, url: "https://SiX.com" },
      { icon: <SiInstagram />, url: "https://instagram.com" },
      { icon: <SiGithub />, url: "https://github.com" },
      { icon: <Mail />, url: "mailto:example@example.com" },
    ],
  },
];

export const advisorsAndMentors: TeamMember[] = [
  {
    name: "Aditaya Krishna Sharma",
    post: "Advisor",
    imageUrl: "/Aditaya.jpg",
    socials: [
      { icon: <Linkedin />, url: "https://linkedin.com" },
      { icon: <SiX />, url: "https://SiX.com" },
      { icon: <SiInstagram />, url: "https://instagram.com" },
      { icon: <SiGithub />, url: "https://github.com" },
      { icon: <Mail />, url: "mailto:example@example.com" },
    ],
  },
  {
    name: "Indresh Agrawal",
    post: "Mentor",
    imageUrl: "/INDRESH.jpg",
    socials: [
      { icon: <Linkedin />, url: "https://linkedin.com" },
      { icon: <SiX />, url: "https://SiX.com" },
      { icon: <SiInstagram />, url: "https://instagram.com" },
      { icon: <SiGithub />, url: "https://github.com" },
      { icon: <Mail />, url: "mailto:example@example.com" },
    ],
  },
  {
    name: "Sarthak Arora",
    post: "Mentor / CTO",
    imageUrl: "/Sarthak.jpg",
    socials: [
      { icon: <Linkedin />, url: "https://linkedin.com" },
      { icon: <SiX />, url: "https://SiX.com" },
      { icon: <SiInstagram />, url: "https://instagram.com" },
      { icon: <SiGithub />, url: "https://github.com" },
      { icon: <Mail />, url: "mailto:example@example.com" },
    ],
  },
];

export const seniorCore: TeamMember[] = [
  
];

export const juniorCore: TeamMember[] = [
  
];