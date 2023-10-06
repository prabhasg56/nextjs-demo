"use client"

import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <button className="bg-green-800 p-2 rounded text-white font-bold">
        <Link href='/dashboard'> Click me! </Link>
      </button>
    </main>
  )
}