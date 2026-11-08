import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

interface VimeoEmbedProps {
  src: string;
  title: string;
}

/**
 * Vimeo iframe that returns to its poster frame when the video ends,
 * so Vimeo's "More from …" end screen (other videos on the account) never shows.
 */
export default function VimeoEmbed({ src, title }: VimeoEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;
    const player = new Player(iframeRef.current);
    const onEnded = () => {
      player.unload().catch(() => {});
    };
    player.on("ended", onEnded);
    return () => {
      player.off("ended", onEnded);
    };
  }, [src]);

  return (
    <div className="relative w-full mb-3 bg-black" style={{ paddingBottom: "56.25%" }}>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
