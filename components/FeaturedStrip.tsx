export default function FeaturedStrip() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div
        className="absolute inset-0 
                   bg-gradient-to-r from-transparent via-white/5 to-transparent"
      />

      <div
        className="relative max-w-6xl mx-auto px-6
                   flex flex-wrap justify-center gap-12
                   text-sm text-gray-400"
      >
        <span>Clean Architecture</span>
        <span>Scalable Systems</span>
        <span>Modern UI</span>
        <span>Performance Focused</span>
        <span>Maintainable Code</span>
      </div>
    </section>
  );
}
