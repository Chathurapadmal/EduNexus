// src/components/Hero.tsx
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-neutral-white">
      <div className="container mx-auto px-4 py-24 text-center"> {/* ← py-24 for more presence */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to EduNexus
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Streamline student applications, payments, and inquiries — all in one platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-brand-accent hover:bg-opacity-90 text-neutral-white font-semibold px-8 py-3 rounded-lg transition">
            Apply Now
          </button>
          <button className="bg-transparent border-2 border-neutral-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}