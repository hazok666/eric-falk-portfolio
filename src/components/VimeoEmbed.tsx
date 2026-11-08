import { useEffect, useRef } from "react";

interface VimeoEmbedProps {
  src: string;
  title: string;
}

const VIMEO_ORIGIN = "https://player.vimeo.com";

/**
 * Vimeo iframe that returns to its poster frame when the video ends,
 * so Vimeo's "More from …" end screen (other videos on the account) never shows.
 * Uses Vimeo's postMessage API directly; the end event arrives as "finish".
 */
export default function VimeoEmbed({ src, title }: VimeoEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const post = (method: string, value?: string) =>
      iframe.contentWindow?.postMessage(
        JSON.stringify(value === undefined ? { method } : { method, value }),
        VIMEO_ORIGIN,
      );
    const subscribe = () => post("addEventListener", "ended");

    const onMessage = (e: MessageEvent) => {
      if (e.origin !== VIMEO_ORIGIN || e.source !== iframe.contentWindow) return;
      let data: { event?: string } = {};
      try {
        data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }
      if (data?.event === "ready") subscribe();
      if (data?.event === "finish" || data?.event === "ended") post("unload");
    };

    window.addEventListener("message", onMessage);
    iframe.addEventListener("load", subscribe);
    subscribe(); // in case the player is already loaded
    return () => {
      window.removeEventListener("message", onMessage);
      iframe.removeEventListener("load", subscribe);
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
