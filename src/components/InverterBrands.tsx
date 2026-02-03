export function InverterBrands() {
    const brands = [
        { name: "Growatt", url: "https://www.growatt.com" },
        { name: "Sungrow", url: "https://www.sungrowpower.com" },
        { name: "TBEA", url: "https://www.tbea.com" },
        { name: "Canadian Solar", url: "https://www.canadiansolar.com" },
        { name: "Ingecon", url: "https://www.ingecon.com" },
        { name: "Deye", url: "https://www.deyeinverter.com" },
    ]

    // Duplicate brands for infinite scroll effect
    const duplicatedBrands = [...brands, ...brands, ...brands]

    return (
        <section className="py-12 bg-white/80 backdrop-blur-sm border-y border-slate-200 overflow-hidden">
            <div className="container px-4 sm:px-6 mb-6">
                <h2 className="text-2xl md:text-3xl font-heading text-slate-900 text-center">
                    Especialistas nas principais marcas do mercado
                </h2>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling Track */}
                <div className="flex gap-16 animate-scroll hover:pause-animation py-4">
                    {duplicatedBrands.map((brand, index) => (
                        <a
                            key={`${brand.name}-${index}`}
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 flex items-center justify-center transition-all duration-300 group"
                        >
                            <span className="text-slate-600 font-bold text-2xl md:text-3xl font-heading tracking-tight group-hover:text-accent transition-colors duration-300">
                                {brand.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* CSS Animation */}
            <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    )
}
