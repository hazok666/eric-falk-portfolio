import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  /** Optional high-resolution version. When set, clicking the image zooms in to read details. */
  zoomSrc?: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, zoomSrc, onClose }: LightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const focus = useRef({ x: 0.5, y: 0.5 });
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; left: number; top: number; moved: boolean } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Preload the zoom image so zooming in is instant.
  useEffect(() => {
    if (zoomSrc) new Image().src = zoomSrc;
  }, [zoomSrc]);

  // Wide enough that small text on a case board is comfortable to read, on desktop and phone.
  const zoomWidth = Math.min(4000, Math.max(window.innerWidth * 2.5, 2400));

  // When zooming in, centre the view on the point that was clicked.
  useLayoutEffect(() => {
    const el = scroller.current;
    if (!zoomed || !el) return;
    const img = el.querySelector("img");
    if (!img) return;
    const h = img.getBoundingClientRect().height || (zoomWidth * 0.71);
    el.scrollLeft = focus.current.x * zoomWidth - el.clientWidth / 2;
    el.scrollTop = focus.current.y * h - el.clientHeight / 2;
  }, [zoomed, zoomWidth]);

  const zoomIn = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    if (!zoomSrc) return;
    const r = e.currentTarget.getBoundingClientRect();
    focus.current = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
    setZoomed(true);
  };

  const touch = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
  const hint = "bg-black/70 px-4 py-2 text-[#f0ede6]/70 text-[10px] tracking-[0.35em] uppercase font-sans";

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90"
      onClick={zoomed ? undefined : onClose}
      style={{ backdropFilter: "blur(8px)" }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-8 z-10 text-[#f0ede6]/50 hover:text-[#f0ede6] transition-colors duration-200 text-[10px] tracking-[0.35em] uppercase font-sans"
        aria-label="Close"
      >
        Close ✕
      </button>

      {!zoomed && (
        <div className="w-full h-full flex items-center justify-center cursor-zoom-out">
          <img
            src={src}
            alt={alt}
            className={`max-w-[92vw] max-h-[86vh] object-contain ${zoomSrc ? "cursor-zoom-in" : "cursor-default"}`}
            onClick={zoomIn}
          />
        </div>
      )}

      {zoomed && zoomSrc && (
        <div
          ref={scroller}
          className="w-full h-full overflow-auto cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
          onMouseDown={(e) => {
            const el = scroller.current!;
            drag.current = { x: e.clientX, y: e.clientY, left: el.scrollLeft, top: el.scrollTop, moved: false };
          }}
          onMouseMove={(e) => {
            const d = drag.current;
            if (!d) return;
            const dx = e.clientX - d.x, dy = e.clientY - d.y;
            if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
            scroller.current!.scrollLeft = d.left - dx;
            scroller.current!.scrollTop = d.top - dy;
          }}
          onMouseUp={() => {
            const moved = drag.current?.moved;
            drag.current = null;
            if (!moved) setZoomed(false); // a plain click zooms back out
          }}
          onMouseLeave={() => { drag.current = null; }}
        >
          <img
            src={zoomSrc}
            alt={alt}
            draggable={false}
            className="max-w-none select-none"
            style={{ width: zoomWidth }}
          />
        </div>
      )}

      {zoomSrc && (
        <p className={`${hint} absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap`}>
          {zoomed
            ? (touch ? "Swipe to move · Tap to zoom out" : "Drag to move · Click to zoom out")
            : (touch ? "Tap to zoom in" : "Click to zoom in")}
        </p>
      )}
    </div>
  );
}
