import { Link } from "react-router-dom";

interface CaseCardProps {
  id: string;
  category: string;
  client: string;
  title: string;
  tagline: string;
  image: string | unknown;
  imagePosition?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CaseCard({
  id,
  category,
  client,
  title,
  tagline,
  image,
  imagePosition = "center",
  className = "",
  style,
}: CaseCardProps) {
  return (
    <Link
      to={`/case/${id}`}
      className={`group relative block overflow-hidden bg-[#111] case-card ${className}`}
      style={style}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={image as string}
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-[1.04] transition-all duration-[800ms] ease-out"
          style={{ objectPosition: imagePosition }}
          loading="lazy"
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
        {/* Top: category */}
        <div>
          <span className="text-[#f0ede6]/50 text-[9px] tracking-[0.35em] uppercase font-sans">
            {category}
          </span>
        </div>

        {/* Bottom: title + tagline + arrow */}
        <div>
          <h2
            className="text-[#f0ede6] leading-tight mb-3"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(1.1rem, 2.2vw, 1.9rem)",
            }}
          >
            {title}
          </h2>
          <p className="text-[#f0ede6]/50 text-sm font-sans max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">
            {tagline}
          </p>
          <div className="flex items-center gap-3 text-[#c9a96e] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-8px] group-hover:translate-x-0">
            <span className="text-[10px] tracking-[0.35em] uppercase font-sans">
              View Case
            </span>
            <svg
              width="20"
              height="8"
              viewBox="0 0 20 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4H18M15 1L19 4L15 7"
                stroke="#c9a96e"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
