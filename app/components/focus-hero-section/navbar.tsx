import { LiquidGlass } from "@/components/LiquidGlass";
import { LiquidGlassFilter } from "@/components/LiquidGlassFilter";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const navLinks = [
    { name: "Features", href: "#" },
    { name: "About", href: "#" },
    { name: "News", href: "#" },
    { name: "Docs", href: "#" },
  ];

  const socialLinks = [
    {
      href: "#",
      icon: <Instagram size={18} />,
    },
    {
      href: "#",
      icon: <Facebook size={18} />,
    },
    {
      href: "#",
      icon: <Twitter size={18} />,
    },
  ];
  return (
    <header className="w-full h-16">
      <nav className="w-full h-full flex items-center justify-between">
        <LiquidGlassFilter id="liquid-glass" scale={35} />
        <p className="font-semibold flex gap-1 text-neutral-100">
          <Image src="/hero-1-logo.png" alt="logo" width={28} height={1} />
          <span>Summit</span>
        </p>
        <ul className="flex gap-8 text-sm text-neutral-100 font-medium">
          {navLinks.map((item, idx) => (
            <Link key={idx} href={item.href}>
              {item.name}
            </Link>
          ))}
        </ul>
        <ul className="flex gap-2">
          {socialLinks.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <LiquidGlass filterId="liquid-glass" className="p-1">{item.icon}</LiquidGlass>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
