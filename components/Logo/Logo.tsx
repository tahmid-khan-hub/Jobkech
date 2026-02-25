"use client"
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href={"/"}><div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Logo"
        width={40}
        height={40}
        priority
      />
      <h1 className="inter text-2xl ml-1 font-semibold">Jobkech</h1>
    </div></Link>
  )
}
