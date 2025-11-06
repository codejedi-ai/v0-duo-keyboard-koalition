import PhilosophySlideshow from "@/components/PhilosophySlideshow"

function ForceBalance() {
  return (
    <div className="my-12 py-8 px-6 rounded-lg bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700">
      <h3 className="text-2xl font-bold mb-6 text-center text-yellow-400">
        The Flow of the Force
      </h3>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 p-6 rounded-lg bg-gradient-to-br from-purple-700 via-pink-500 to-indigo-800 shadow-inner">
          <h4 className="text-xl font-semibold text-purple-200 text-center mb-3">
            Aura of Balance
          </h4>
          <p className="text-purple-100">
            The aura represents harmony, resonance, and universal flow. It&apos;s the
            subtle energy that connects all things and maintains equilibrium
            within the Force.
          </p>
        </div>
        <div className="flex-1 p-6 rounded-lg bg-gradient-to-br from-red-800 via-orange-600 to-yellow-500 shadow-inner">
          <h4 className="text-xl font-semibold text-orange-200 text-center mb-3">
            Vibe of Energy
          </h4>
          <p className="text-orange-100">
            The vibe flows with intensity, passion, and momentum. It&apos;s the
            energetic pulse that drives transformation and amplifies individual
            impact within the Force.
          </p>
        </div>
      </div>
    </div>
  )
}

function ForceQuotes() {
  return (
    <div className="my-10 space-y-6">
      <blockquote className="p-6 rounded-lg bg-gradient-to-r from-indigo-900/60 to-blue-900/60 border-l-4 border-yellow-500">
        <p className="text-gray-200 italic">
          &quot;The Force is what gives a Jedi his power. It&apos;s an energy field
          created by all living things. It surrounds us and penetrates us; it
          binds the galaxy together.&quot;
        </p>
        <footer className="mt-2 text-yellow-400">— Obi-Wan Kenobi</footer>
      </blockquote>
      <blockquote className="p-6 rounded-lg bg-gradient-to-r from-purple-900/60 to-indigo-900/60 border-l-4 border-yellow-500">
        <p className="text-gray-200 italic">
          &quot;Close your eyes. Feel it. The light... it&apos;s always been there. It
          will guide you.&quot;
        </p>
        <footer className="mt-2 text-yellow-400">— Maz Kanata</footer>
      </blockquote>
    </div>
  )
}

export default function Philosophy() {
  return (
    <div className="max-w-4xl mx-auto pt-20 text-white px-4 min-h-screen bg-fixed">
      <div className="space-y-stars absolute top-0 left-0 right-0 bottom-0 -z-10"></div>
      <h1 className="text-4xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
        The Philosophy of Auraflow
      </h1>
      <h2 className="text-xl text-center mb-8 text-yellow-300">
        The Force That Binds Us All
      </h2>
      <div className="prose lg:prose-xl mx-auto">
        <p className="text-lg leading-relaxed mb-6 text-gray-300">
          Like the mystical Force that flows through the Star Wars galaxy,
          Auraflow embodies the harmonious interplay between two fundamental
          energies: <span className="text-blue-400">aura</span>, the personal
          energy that radiates from individuals, and{" "}
          <span className="text-purple-400">vibe</span>, the universal resonance
          that connects all living things.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-gray-300">
          Just as Jedi and other Force-sensitives can feel disturbances in the
          Force, practitioners of Auraflow learn to sense and harmonize with the
          energy that surrounds us all. This universal connection transcends
          cultures, galaxies, and time itself.
        </p>
        <ForceBalance />
        <h3 className="text-2xl font-bold mt-12 mb-6 text-center text-yellow-400">
          Universal Interpretations
        </h3>
        <PhilosophySlideshow />
        <p className="text-lg leading-relaxed mt-10 text-gray-300">
          Across cultures and galaxies, this universal energy field has been
          conceptualized in various ways. Just as the Force manifests
          differently to Jedi, Sith, and other cultures in the Star Wars
          universe, Auraflow bridges these traditions by emphasizing personal
          energy (aura) and collective resonance (vibe), reminding us of our
          shared connection to existence.
        </p>
        <ForceQuotes />
        <div className="mt-16 p-6 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800">
          <h3 className="text-2xl font-bold mb-4 text-center text-yellow-400">
            The Core Philosophy
          </h3>
          <p className="text-lg leading-relaxed text-gray-300">
            Whether you call it The Force, Aura, Vibe, Qi, Prana, or any other
            name, this energy diffuses through all existence, binding and
            connecting everything in a cosmic dance. By learning to sense and
            work with this energy, we can achieve greater harmony within
            ourselves and with the universe around us.
          </p>
        </div>
      </div>
    </div>
  )
}
