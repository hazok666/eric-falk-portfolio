import { useEffect, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Lightbox from "../components/Lightbox";
import { cases } from "../data/cases";

export default function CasePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const heroImgRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const currentIdx = cases.findIndex((c) => c.id === id);
  const current = cases[currentIdx];
  const nextCase = cases[(currentIdx + 1) % cases.length];

  useEffect(() => {
    if (!current) navigate("/");
    window.scrollTo(0, 0);
  }, [id, current, navigate]);

  useEffect(() => {
    const onScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!bodyRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    bodyRef.current.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [id]);

  if (!current) return null;

  const revealStyle = (delay = 0): React.CSSProperties => ({
    opacity: 0,
    transform: "translateY(28px)",
    transition: `opacity 0.9s ${delay}s cubic-bezier(0.16,1,0.3,1), transform 0.9s ${delay}s cubic-bezier(0.16,1,0.3,1)`,
  });

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative h-screen overflow-hidden">
        <div
          ref={heroImgRef}
          className="absolute will-change-transform"
          style={{ inset: "-15% 0" }}
        >
          <img
            src={current.image as string}
            alt={current.title}
            className="w-full h-full object-cover opacity-55"
            style={{ objectPosition: current.imagePosition ?? "center" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-[#0a0a0a]/50" />
        <div className="relative h-full flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-20 max-w-[1400px]">
          <p className="text-[#f0ede6]/35 text-[9px] tracking-[0.5em] uppercase font-sans mb-3">
            {current.category}
          </p>
          <p className="text-[#f0ede6]/35 text-[9px] tracking-[0.4em] uppercase font-sans mb-5">
            {current.client} — {current.year}
          </p>
          <h1
            className="text-[#f0ede6] leading-tight max-w-4xl"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2rem, 5vw, 5.5rem)",
              fontWeight: 300,
            }}
          >
            {current.title}
          </h1>
        </div>
      </section>

      {/* ── Body ── */}
      <div ref={bodyRef} className="max-w-[860px] mx-auto px-8 py-20 md:py-28">

        {/* Tagline */}
        <p
          className="reveal text-[#f0ede6] text-xl md:text-2xl leading-snug mb-20"
          style={{
            ...revealStyle(0),
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          {current.tagline}
        </p>

        {/* Media */}
        {current.media && current.media.length > 0 && (
          <div className="reveal mb-16 -mx-8" style={revealStyle(0.05)}>
            {/* Videos */}
            {current.media.filter(m => m.type === "vimeo").map((item, i) => (
              <div key={i} className="relative w-full mb-3" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={item.src as string}
                  title={item.title ?? current.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            ))}
            {/* Images */}
            {(() => {
              const imgs = current.media!.filter(m => m.type === "image");
              if (imgs.length === 0) return null;
              const full = imgs.filter(m => m.layout === "full" || !m.layout);
              const thirds = imgs.filter(m => m.layout === "third");
              const ungrouped = imgs.filter(m => !m.layout && full.length === 0);
              return (
                <div className="mt-3 flex flex-col gap-3">
                  {full.map((item, i) => (
                    <img key={`full-${i}`} src={item.src as string} alt={`${current.title} — ${i + 1}`} className="w-full object-cover cursor-zoom-in" loading="lazy" onClick={() => setLightbox({ src: item.src as string, alt: `${current.title} — ${i + 1}` })} />
                  ))}
                  {thirds.length > 0 && (
                    <div className="flex flex-col md:flex-row gap-3 items-start">
                      {thirds.map((item, i) => (
                        <img key={`third-${i}`} src={item.src as string} alt={`${current.title} — ${i + 1}`} className="w-full md:flex-1 md:w-0 h-auto cursor-zoom-in" loading="lazy" onClick={() => setLightbox({ src: item.src as string, alt: `${current.title} — ${i + 1}` })} />
                      ))}
                    </div>
                  )}
                  {ungrouped.length > 0 && (
                    <div className={`grid gap-3 ${ungrouped.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
                      {ungrouped.map((item, i) => (
                        <img key={`un-${i}`} src={item.src as string} alt={`${current.title} — ${i + 1}`} className="w-full object-cover aspect-video cursor-zoom-in" loading="lazy" onClick={() => setLightbox({ src: item.src as string, alt: `${current.title} — ${i + 1}` })} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* Brief */}
        <div className="reveal mb-14" style={revealStyle(0.08)}>
          <p className="text-[#c9a96e] text-[9px] tracking-[0.45em] uppercase font-sans mb-4">
            The Brief
          </p>
          <p className="text-[#f0ede6]/70 text-base md:text-lg leading-relaxed font-sans" style={{ fontWeight: 300 }}>
            {current.brief}
          </p>
        </div>

        {/* Idea */}
        <div className="reveal mb-14" style={revealStyle(0.1)}>
          <p className="text-[#c9a96e] text-[9px] tracking-[0.45em] uppercase font-sans mb-4">
            The Idea
          </p>
          <p className="text-[#f0ede6]/70 text-base md:text-lg leading-relaxed font-sans" style={{ fontWeight: 300 }}>
            {current.idea}
          </p>
        </div>

        {/* Execution */}
        <div className="reveal mb-16" style={revealStyle(0.15)}>
          <p className="text-[#c9a96e] text-[9px] tracking-[0.45em] uppercase font-sans mb-4">
            The Work
          </p>
          <p className="text-[#f0ede6]/70 text-base md:text-lg leading-relaxed font-sans" style={{ fontWeight: 300 }}>
            {current.execution}
          </p>
        </div>

        {/* Pull quote */}
        {current.quote && (
          <div
            className="reveal border-l border-[#c9a96e]/30 pl-8 py-2 mb-16"
            style={revealStyle(0.18)}
          >
            <p
              className="text-[#f0ede6] text-xl md:text-2xl leading-snug mb-4"
              style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 300 }}
            >
              "{current.quote.text}"
            </p>
            <p className="text-[#f0ede6]/35 text-[10px] tracking-[0.35em] uppercase font-sans">
              {current.quote.author} — {current.quote.role}
            </p>
          </div>
        )}

        {/* Results */}
        {current.results && (
          <div
            className="reveal bg-[#141414] px-8 py-8 mb-16"
            style={revealStyle(0.2)}
          >
            <p className="text-[#c9a96e] text-[9px] tracking-[0.45em] uppercase font-sans mb-3">
              Results
            </p>
            <p
              className="text-[#f0ede6] text-2xl md:text-3xl"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 300 }}
            >
              {current.results}
            </p>
          </div>
        )}

        {/* Credits */}
        <div
          className="reveal border-t border-[#f0ede6]/8 pt-10"
          style={revealStyle(0.22)}
        >
          <p className="text-[#f0ede6]/25 text-[9px] tracking-[0.45em] uppercase font-sans mb-8">
            Credits
          </p>
          <dl className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-7">
            <div>
              <dt className="text-[#f0ede6]/30 text-[9px] tracking-[0.35em] uppercase font-sans mb-1">
                Role
              </dt>
              <dd className="text-[#f0ede6]/80 text-sm font-sans" style={{ fontWeight: 300 }}>
                {current.role}
              </dd>
            </div>
            {current.credits.map((credit) => (
              <div key={credit.label}>
                <dt className="text-[#f0ede6]/30 text-[9px] tracking-[0.35em] uppercase font-sans mb-1">
                  {credit.label}
                </dt>
                <dd className="text-[#f0ede6]/80 text-sm font-sans" style={{ fontWeight: 300 }}>
                  {credit.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ── Next Case ── */}
      <div className="px-4 md:px-6 pb-6">
        <Link
          to={`/case/${nextCase.id}`}
          className="group relative block overflow-hidden bg-[#111]"
          style={{ height: "clamp(260px, 45vh, 520px)" }}
        >
          <div className="absolute inset-0">
            <img
              src={nextCase.image as string}
              alt={nextCase.title}
              className="w-full h-full object-cover opacity-40 group-hover:opacity-30 group-hover:scale-[1.04] transition-all duration-[800ms] ease-out"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
            <p className="text-[#f0ede6]/30 text-[9px] tracking-[0.45em] uppercase font-sans">
              Next Case
            </p>
            <div>
              <p className="text-[#f0ede6]/35 text-[9px] tracking-[0.4em] uppercase font-sans mb-3">
                {nextCase.category} — {nextCase.client}
              </p>
              <h3
                className="text-[#f0ede6] leading-tight"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(1.4rem, 3.5vw, 3.5rem)",
                  fontWeight: 300,
                }}
              >
                {nextCase.title}
              </h3>
              <div className="flex items-center gap-3 mt-5 text-[#c9a96e] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-8px] group-hover:translate-x-0">
                <span className="text-[9px] tracking-[0.35em] uppercase font-sans">View Case</span>
                <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                  <path d="M0 4H18M15 1L19 4L15 7" stroke="#c9a96e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}

      {/* Footer */}
      <footer className="border-t border-[#f0ede6]/8 px-8 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link
          to="/"
          className="text-[#f0ede6]/20 text-[10px] tracking-[0.35em] uppercase font-sans hover:text-[#f0ede6]/50 transition-colors duration-300"
        >
          ← All Work
        </Link>
        <div className="flex items-center gap-8">
          <a
            href="mailto:eric.o.falk@gmail.com"
            className="text-[#f0ede6]/25 text-[10px] tracking-[0.3em] uppercase font-sans hover:text-[#c9a96e] transition-colors duration-300"
          >
            eric.o.falk@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/eric-falk-0581223b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0ede6]/25 text-[10px] tracking-[0.3em] uppercase font-sans hover:text-[#c9a96e] transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
