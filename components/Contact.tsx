import Section from "./Section";

export default function Contact() {
  return (
    <Section>
      <section
        id="contact"
        className="py-32 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-semibold tracking-tight mb-6">
          Let’s talk
        </h2>

        <p className="text-gray-400 max-w-xl mb-10 leading-relaxed">
          If you’re interested in collaboration or have a project in mind,
          feel free to reach out.
        </p>

        <a
          href="mailto:shefket@email.com"
          className="text-lg border-b border-white/30 hover:border-white transition"
        >
          ss242309.student@unt.edu.mk
        </a>
      </section>
    </Section>
  );
}
