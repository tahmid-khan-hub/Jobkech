"use client";
import Link from "next/link";

interface NavLinksProps {
  onClick?: () => void;
}
export default function NavLinks({ onClick }: NavLinksProps) {
  return (
    <>
      <Link href="/" onClick={onClick} className="hover:text-purple-500 font-semibold hover:underline ">
        Home
      </Link>
      <Link href="/about" onClick={onClick} className="hover:text-purple-500 font-semibold hover:underline ">
        About
      </Link>
      <Link href="/contact" onClick={onClick} className="hover:text-purple-500 font-semibold hover:underline ">
        Contact
      </Link>
    </>
  );
}
