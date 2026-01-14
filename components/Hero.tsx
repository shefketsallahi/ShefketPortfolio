export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 blur-[160px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I’m <span className="text-gray-400">Shefket</span>
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-xl leading-relaxed">
          Software Developer focused on building modern, clean and scalable
          applications.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded border border-white/20 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>

        {/* MINI STATS */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="text-3xl font-semibold">5+</p>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">2+</p>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">10+</p>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">100%</p>
            <p className="text-gray-400 text-sm">Passion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
