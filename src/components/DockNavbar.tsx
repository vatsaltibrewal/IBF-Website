'use client';

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Home, Calendar, Users, Info, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function DockNavbar() {
  const navItems = [
    { href: "/", icon: <Home className="h-5 w-5" />, label: "Home" },
    { href: "/events", icon: <Calendar className="h-5 w-5" />, label: "Events" },
    { href: "/team", icon: <Users className="h-5 w-5" />, label: "Team" },
    { href: "/about", icon: <Info className="h-5 w-5" />, label: "About" },
  ];

  const socialItems = [
    { href: "https://x.com/IBF_Community", icon: <Twitter className="h-5 w-5" />, label: "X" },
    { href: "https://linkedin.com/company/indian-blockchain-fraternity", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
    { href: "https://instagram.com/ibf.bu", icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50">
      <div className="mx-auto flex h-16 w-max items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/50 p-2.5 backdrop-blur-md">
        <Dock direction="middle">
          {navItems.map((item) => (
            <DockIcon key={item.href}>
              <Link href={item.href} className="flex h-full w-full items-center justify-center text-gray-400 hover:text-white">
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </Link>
            </DockIcon>
          ))}
          <div className="h-10 w-px bg-gray-600/50 mx-2" />
          {socialItems.map((item) => (
            <DockIcon key={item.href}>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex h-full w-full items-center justify-center text-gray-400 hover:text-white">
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </a>
            </DockIcon>
          ))}
        </Dock>
      </div>
    </div>
  );
}