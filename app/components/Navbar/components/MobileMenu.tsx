"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Icon */}
      <div className="md:hidden">
        {!isOpen ? (
          <FaBars
            size={24}
            className="cursor-pointer mr-1"
            onClick={() => setIsOpen(true)}
          />
        ) : (
          <FaTimes
            size={24}
            className="cursor-pointer mr-1"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-48 bg-white shadow-md flex flex-col gap-4 p-4 md:hidden">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
