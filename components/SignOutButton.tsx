"use client"

import { useRouter } from "next/navigation"
import { signOut } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"

export default function SignOutButton() {
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  return (
    <Button onClick={handleSignOut}>
      Sign Out
    </Button>
  )
}

