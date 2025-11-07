"use client"

import Image from "next/image"
import { Shield } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"
import AuthForm from "@/components/AuthForm"
import Loading from "@/components/Loading"

function HomePageContent() {
  const { user, loading } = useAuth()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!loading && user) {
      // Use window.location for more reliable redirects in production
      window.location.href = "/dashboard"
    }
  }, [user, loading])

  if (loading) {
    return <Loading />
  }

  if (user) {
    return null
  }

  const error = searchParams.get("error") ? decodeURIComponent(searchParams.get("error")!) : null
  const message = searchParams.get("message") ? decodeURIComponent(searchParams.get("message")!) : null
  const view = searchParams.get("view") === "signup" ? "signup" : "signin"

  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/Aurajay - NoBG.png"
              alt="Duo Keyboard Koalition Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <h1 className="text-3xl font-bold text-white italic">
              DUO KEYBOARD KOALITION
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
            {view === "signup" ? "Join the Koalition" : "Welcome Back"}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {view === "signup"
              ? "Create your account to access the community"
              : "Sign in to continue to your dashboard"}
          </p>
        </div>

        {/* Auth Form Container */}
        <div className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
          <AuthForm view={view} error={error} message={message} />
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-cyan-400/70">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-cyan-400" />
            <span>Secure & Private</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePageContent />
    </Suspense>
  )
}
