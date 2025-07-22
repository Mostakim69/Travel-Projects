export default function Banner() {
  return (
    <div className="hero min-h-[80vh] bg-[#0F172A] relative overflow-hidden">
      {/* Background glow or gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-70"></div>
      <div className="absolute -top-10 left-1/2 w-[600px] h-[600px] bg-purple-500 opacity-20 rounded-full blur-3xl transform -translate-x-1/2"></div>

      {/* Overlay */}
      <div className="hero-content text-center text-neutral-content z-10">
        <div className="max-w-2xl px-4">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Discover{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#a78bfa]">
              Bangladesh
            </span>{" "}
            with DeshGuide
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Your digital travel companion for authentic adventures, local
            guides, and unforgettable memories — all in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn bg-gradient-to-r from-[#22d3ee] to-[#a78bfa] border-0 text-white shadow-lg hover:opacity-90 transition-all duration-200 text-lg px-6">
              🌏 Explore Now
            </button>
            <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition-all duration-200 text-lg px-6">
              📝 Share Your Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
