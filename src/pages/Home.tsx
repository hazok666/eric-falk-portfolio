import { useEffect, useRef } from "react";
import Nav from "../components/Nav";
import CaseCard from "../components/CaseCard";
import { cases } from "../data/cases";

export default function Home() {
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroTextRef.current) return;
      const y = window.scrollY;
      heroTextRef.current.style.transform = `translateY(${y * 0.28}px)`;
      heroTextRef.current.style.opacity = String(
        Math.max(0, 1 - y / 500)
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".case-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle noise grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        <div
          ref={heroTextRef}
          className="text-center px-8 will-change-transform select-none"
        >
          <p
            className="text-[#f0ede6]/30 text-[10px] tracking-[0.55em] uppercase font-sans mb-10"
          >
            Creative Direction &nbsp;·&nbsp; Experience Design &nbsp;·&nbsp; Creative Technology
          </p>

          <h1
            className="text-[#f0ede6] leading-none tracking-[-0.02em]"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(3rem, 13vw, 15rem)",
              fontWeight: 300,
            }}
          >
            Eric Falk
          </h1>

          <p
            className="text-[#f0ede6]/45 font-sans text-sm md:text-base mt-8 max-w-xl mx-auto leading-relaxed"
            style={{ fontWeight: 300, letterSpacing: "0.02em" }}
          >
            I turn emerging technology into human experiences — ideas people don't just see, but step into, shape and share.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div
            className="w-px h-14 bg-[#f0ede6]/20 origin-top scroll-indicator"
          />
          <span className="text-[#f0ede6]/20 text-[9px] tracking-[0.4em] uppercase font-sans">
            Scroll
          </span>
        </div>
      </section>

      {/* ── Cases Grid ── */}
      <section className="px-4 md:px-6 pb-24 md:pb-32">
        {/* Row 1 – full width */}
        <div className="mb-2">
          <CaseCard
            {...cases[0]}
            className="w-full"
            style={{ height: "clamp(300px, 55vh, 680px)" }}
          />
        </div>

        {/* Row 2 – 60 / 40 */}
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <CaseCard
            {...cases[1]}
            className="md:flex-[3]"
            style={{ height: "clamp(260px, 55vh, 640px)" }}
          />
          <CaseCard
            {...cases[2]}
            className="md:flex-[2]"
            style={{ height: "clamp(260px, 55vh, 640px)" }}
          />
        </div>

        {/* Row 3 – 40 / 60 */}
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <CaseCard
            {...cases[3]}
            className="md:flex-[2]"
            style={{ height: "clamp(260px, 55vh, 640px)" }}
          />
          <CaseCard
            {...cases[4]}
            className="md:flex-[3]"
            style={{ height: "clamp(260px, 55vh, 640px)" }}
          />
        </div>

        {/* Row 4 – full width */}
        <div className="mb-2">
          <CaseCard
            {...cases[5]}
            className="w-full"
            style={{ height: "clamp(240px, 50vh, 560px)" }}
          />
        </div>

        {/* Row 5 – 60 / 40 */}
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <CaseCard
            {...cases[6]}
            className="md:flex-[3]"
            style={{ height: "clamp(260px, 55vh, 620px)" }}
          />
          <CaseCard
            {...cases[7]}
            className="md:flex-[2]"
            style={{ height: "clamp(260px, 55vh, 620px)" }}
          />
        </div>

        {/* Row 6 – full width */}
        <div>
          <CaseCard
            {...cases[8]}
            className="w-full"
            style={{ height: "clamp(260px, 50vh, 560px)" }}
          />
        </div>

      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#f0ede6]/8 px-8 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <span
          className="text-[#f0ede6]/20 text-xs tracking-[0.3em] uppercase font-sans"
          style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 300 }}
        >
          Eric Falk
        </span>
        <div className="flex items-center gap-8">
          <a
            href="mailto:eric.o.falk@gmail.com"
            className="text-[#f0ede6]/30 text-xs tracking-[0.3em] uppercase font-sans hover:text-[#c9a96e] transition-colors duration-300"
          >
            eric.o.falk@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/eric-falk-0581223b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0ede6]/30 text-xs tracking-[0.3em] uppercase font-sans hover:text-[#c9a96e] transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
        <span className="text-[#f0ede6]/15 text-xs font-sans">
          © {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}
