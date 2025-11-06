import { headers } from "next/headers"
import { Home, Sparkles, Target, Users, Mail } from "lucide-react"
import SidebarClient from "./SidebarClient"

export default async function Sidebar({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const pathname = headersList.get("x-pathname") || "/dashboard"

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/match", label: "Find Matches", icon: Sparkles },
    { href: "/philosophy", label: "Philosophy", icon: Target },
    { href: "/synergy", label: "Vibe & Identity", icon: Sparkles },
    { href: "/mission", label: "Our Mission", icon: Users },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <SidebarClient navItems={navItems} isActive={isActive}>
      {children}
    </SidebarClient>
  )
}
