"use client";
import Logo from "@/components/Logo/Logo";
import NavLinks from "./components/NavLinks";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center max-w-325 mx-auto">
        {/* Left side */}
        <Logo />

        {/* Right side - desktop links */}
        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>
      </div>
    </div>
  );
}
