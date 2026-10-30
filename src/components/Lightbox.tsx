import { useEffect } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 cursor-zoom-out"
      onClick={onClose}
      style={{ backdropFilter: "blur(8px)" }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-[#f0ede6]/50 hover:text-[#f0ede6] transition-colors duration-200 text-[10px] tracking-[0.35em] uppercase font-sans"
        aria-label="Close"
      >
        Close ✕
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-[92vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
