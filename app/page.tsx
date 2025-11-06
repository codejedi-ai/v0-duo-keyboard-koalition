"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { Shield } from "lucide-react"
import { useAuth } from "@/context/AuthContext"

const supabase = createClient()

export default function HomePage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (user) {
    return null // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-[#FFA500]/20 rounded-full">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-full"></div>
            </div>
            <h1 className="text-3xl font-bold text-white italic">DUO KEYBOARD KOALITION</h1>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-3">
            {isSignUp ? "Join the Koalition" : "Welcome Back"}
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {isSignUp
              ? "Create your account to access the community"
              : "Sign in to continue to your dashboard"}
          </p>
        </div>

        {/* Auth Form Container */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* Toggle Buttons */}
          <div className="flex bg-gray-800/50 rounded-xl p-1.5 mb-8">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-200 ${
                !isSignUp
                  ? "bg-[#FFA500] text-black shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isSignUp
                  ? "bg-[#FFA500] text-black shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Supabase Auth Component */}
          <div className="auth-container">
            <Auth
              supabaseClient={supabase}
              view={isSignUp ? "sign_up" : "sign_in"}
              appearance={{
                theme: ThemeSupa,
                style: {
                  button: {
                    background: "#FFA500",
                    color: "#000000",
                    borderRadius: "8px",
                    border: "none",
                    padding: "12px 16px",
                    fontSize: "14px",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                  },
                  anchor: {
                    color: "#FFA500",
                    textDecoration: "none",
                    fontSize: "14px",
                  },
                  input: {
                    background: "#1f2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#ffffff",
                    padding: "12px 16px",
                    fontSize: "14px",
                  },
                  label: {
                    color: "#d1d5db",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginBottom: "6px",
                  },
                  message: {
                    color: "#ef4444",
                    fontSize: "13px",
                    padding: "8px 0",
                  },
                  container: {
                    gap: "16px",
                  },
                  divider: {
                    background: "#374151",
                    margin: "24px 0",
                  },
                },
                variables: {
                  default: {
                    colors: {
                      brand: "#FFA500",
                      brandAccent: "#FF8C00",
                    },
                  },
                },
              }}
              providers={["discord"]}
              redirectTo={typeof window !== "undefined" ? `${window.location.origin}/auth/callback?next=/dashboard` : ""}
              onlyThirdPartyProviders={false}
              magicLink={false}
              showLinks={false}
            />
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
