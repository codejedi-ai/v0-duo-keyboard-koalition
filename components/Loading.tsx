"use client"

import Image from "next/image"

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
      <div className="relative w-40 h-40">
        {/* Outer pulsing circles */}
        <div className="absolute inset-[-30px] border-2 border-cyan-500/40 rounded-full animate-circle-pulse"></div>
        <div className="absolute inset-[-30px] border-2 border-blue-500/40 rounded-full animate-circle-pulse" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute inset-[-30px] border-2 border-magenta-500/40 rounded-full animate-circle-pulse" style={{ animationDelay: "1.4s" }}></div>
        
        {/* Outer rotating circle with gradient */}
        <div 
          className="absolute inset-[-20px] border-2 border-transparent border-t-cyan-500 border-r-blue-500 border-b-magenta-500 border-l-cyan-500 rounded-full animate-circle-rotate"
          style={{ 
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
          }}
        ></div>
        
        {/* Middle rotating circle (reverse) */}
        <div 
          className="absolute inset-[-10px] border-2 border-transparent border-t-magenta-500 border-r-cyan-500 border-b-blue-500 border-l-magenta-500 rounded-full"
          style={{ 
            animation: "circle-rotate 2s linear infinite reverse",
            boxShadow: "0 0 15px rgba(255, 0, 255, 0.3)"
          }}
        ></div>
        
        {/* Inner pulsing circle */}
        <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-full animate-circle-pulse"></div>
        
        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="animate-logo-pulse">
            <Image
              src="/Aurajay - NoBG.png"
              alt="Duo Keyboard Koalition Logo"
              width={80}
              height={80}
              className="w-20 h-20 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

