"use client";
import Logo from "@/components/Logo/Logo";
import NavLinks from "./components/NavLinks";
import MobileMenu from "./components/MobileMenu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center max-w-325 mx-auto">
        {/* Left side */}
        <Logo />

        {/* Right side - desktop links */}
        <div className="hidden md:flex space-x-6 mr-1">
          <NavLinks />
        </div>

        <div className="flex items-center gap-3">
          {/* Login or Log out button */}
          <Link href="/login"><Button className="bg-purple-300 text-primary-foreground hover:bg-purple-400/90 mr-1 mt-1.5" variant="outline">Default</Button></Link>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
