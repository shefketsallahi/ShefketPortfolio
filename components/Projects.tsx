"use client";

import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6"
    >
      {/* SUBTLE BACKGROUND PANEL */}
      <div className="absolute inset-0 bg-white/[0.02]" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold tracking-tight mb-16">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          {/* PROJECT 1 */}
          <div
            className="group relative rounded-2xl border border-white/10 
                       bg-gradient-to-br from-white/[0.04] to-transparent
                       p-10 transition hover:border-indigo-400/40"
          >
            <div
              className="absolute top-0 left-0 h-[2px] w-full 
                         bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent 
                         opacity-0 group-hover:opacity-100 transition"
            />

            <div
              className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 
                         transition transform translate-y-2 group-hover:translate-y-0"
            >
              <div
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur 
                           border border-white/20 flex items-center justify-center"
              >
                <ArrowUpRight />
              </div>
            </div>

            <h3 className="text-xl font-medium mb-4">
              Smart City System
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform for managing municipal services, public reports and
              transportation infrastructure.
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              <span className="px-3 py-1 rounded-full border border-white/10">
                React
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10">
                REST API
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10">
                Tailwind
              </span>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div
            className="group relative rounded-2xl border border-white/10 
                       bg-gradient-to-br from-white/[0.04] to-transparent
                       p-10 transition hover:border-indigo-400/40"
          >
            <div
              className="absolute top-0 left-0 h-[2px] w-full 
                         bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent 
                         opacity-0 group-hover:opacity-100 transition"
            />

            <div
              className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 
                         transition transform translate-y-2 group-hover:translate-y-0"
            >
              <div
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur 
                           border border-white/20 flex items-center justify-center"
              >
                <ArrowUpRight />
              </div>
            </div>

            <h3 className="text-xl font-medium mb-4">
              POS Restaurant System
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Full point-of-sale solution including sales processing,
              inventory management and reporting.
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              <span className="px-3 py-1 rounded-full border border-white/10">
                .NET
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10">
                WPF
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10">
                SQL Server
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
