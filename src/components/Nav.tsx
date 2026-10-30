import { Link } from "react-router-dom";

interface NavProps {
  light?: boolean;
}

export default function Nav({ light = false }: NavProps) {
  const textClass = light
    ? "text-[#f0ede6]"
    : "text-[#f0ede6]";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-7"
      style={{ mixBlendMode: "normal" }}
    >
      <Link
        to="/"
        className={`${textClass} text-xs tracking-[0.35em] uppercase font-sans hover:opacity-60 transition-opacity duration-300`}
      >
        Eric Falk
      </Link>
      <div className="flex items-center gap-8">
        <a
          href="https://linkedin.com/in/eric-falk-0581223b"
          target="_blank"
          rel="noopener noreferrer"
          className={`${textClass} text-xs tracking-[0.35em] uppercase font-sans opacity-50 hover:opacity-100 transition-opacity duration-300`}
        >
          LinkedIn
        </a>
        <a
          href="mailto:eric.o.falk@gmail.com"
          className={`${textClass} text-xs tracking-[0.35em] uppercase font-sans opacity-50 hover:opacity-100 transition-opacity duration-300`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
