"use client"

import Image from "next/image"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="/favicon.ico"
              alt="Duo Keyboard Koalition Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div>
              <h1 className="text-3xl font-bold text-white italic mb-2">DUO KEYBOARD KOALITION</h1>
              <p className="text-gray-400">Welcome to your dashboard</p>
            </div>
          </div>
          <button
            onClick={async () => {
              await signOut()
              router.push("/")
            }}
            className="px-6 py-2 bg-[#FFA500] text-black font-semibold rounded-lg hover:bg-[#FF8C00] transition-colors"
          >
            Sign Out
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-medium text-white">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-medium text-white">User ID:</span> {user.id}
              </p>
              {user.user_metadata?.full_name && (
                <p>
                  <span className="font-medium text-white">Name:</span> {user.user_metadata.full_name}
                </p>
              )}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3 text-[#FFA500]">
              <li className="hover:underline cursor-pointer">View Events</li>
              <li className="hover:underline cursor-pointer">Create Post</li>
              <li className="hover:underline cursor-pointer">Community Rules</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


