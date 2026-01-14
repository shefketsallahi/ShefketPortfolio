export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold tracking-tight mb-16">
        Skills & Tools
      </h2>

      <div className="grid md:grid-cols-3 gap-16">
        {/* FRONTEND */}
        <div>
          <h3 className="flex items-center gap-2 mb-4 font-medium">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Frontend
          </h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "Tailwind", "TypeScript"].map(skill => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full 
                           bg-white/5 border border-white/10
                           hover:border-indigo-400/40 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div>
          <h3 className="flex items-center gap-2 mb-4 font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Backend
          </h3>
          <div className="flex flex-wrap gap-2">
            {[".NET", "ASP.NET Core", "SQL Server", "REST API"].map(skill => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full 
                           bg-white/5 border border-white/10
                           hover:border-cyan-400/40 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div>
          <h3 className="flex items-center gap-2 mb-4 font-medium">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Git", "GitHub", "Vercel", "VS Code"].map(skill => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full 
                           bg-white/5 border border-white/10
                           hover:border-purple-400/40 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
