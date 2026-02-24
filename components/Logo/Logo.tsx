"use client"
import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Logo"
        width={40}
        height={40}
        priority
      />
    </div>
  )
}
