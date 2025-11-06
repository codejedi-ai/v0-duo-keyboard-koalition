"use client"

import { useState } from "react"

const slides = [
  {
    title: "The Force",
    description:
      "An energy field created by all living things. It surrounds us and penetrates us; it binds the galaxy together. The Jedi and Sith harness this cosmic energy through their connection to it.",
    background: "bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800",
    symbol: "☯️",
    symbolName: "Balance",
  },
  {
    title: "English: Ether",
    description:
      "Historically described as the invisible medium connecting all existence, akin to the vibe in Auraflow and the Force in the Star Wars universe.",
    background: "bg-gradient-to-r from-purple-900 to-indigo-900",
    symbol: "✨",
    symbolName: "Sparkles",
  },
  {
    title: "Taoism: Qi",
    description:
      "The vital life force flowing through living beings and the universe, emphasizing harmony and balance, similar to how Jedi seek balance in the Force.",
    background: "bg-gradient-to-r from-green-700 to-teal-600",
    symbol: "☯️",
    symbolName: "Yin-Yang",
  },
  {
    title: "Stoicism: Logos",
    description:
      "The rational principle governing nature, connecting all beings through reason and universal order, much like how the Force has a will of its own.",
    background: "bg-gradient-to-r from-gray-700 to-gray-900",
    symbol: "🏛️",
    symbolName: "Pillar",
  },
  {
    title: "Hinduism: Prana",
    description:
      "The life force sustaining existence, flowing through energy pathways and resonating with cosmic rhythms, comparable to how Force-sensitives can feel disturbances.",
    background: "bg-gradient-to-r from-orange-600 to-yellow-500",
    symbol: "🕉️",
    symbolName: "Om",
  },
  {
    title: "Paganism: Animism",
    description:
      "The belief that all elements of nature possess a spiritual essence, connecting individuals to the Earth and cosmos, as Jedi connect to all living things.",
    background: "bg-gradient-to-r from-blue-800 to-indigo-600",
    symbol: "🌿",
    symbolName: "Plant",
  },
]

export default function PhilosophySlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div
        className={`p-8 rounded-lg shadow-lg text-white ${slides[currentSlide].background} border border-opacity-20 border-white relative overflow-hidden`}
      >
        <div className="flex flex-col">
          <div className="absolute opacity-10 left-4 top-4 text-8xl">
            {slides[currentSlide].symbol}
          </div>
          <div className="flex items-center justify-center mb-5 space-x-3">
            <span className="text-4xl">{slides[currentSlide].symbol}</span>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            {slides[currentSlide].title}
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-center">
          {slides[currentSlide].description}
        </p>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-all"
        >
          Previous
        </button>
        <div className="flex space-x-1">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? "bg-blue-400" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  )
}

