import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CasePage from "./pages/CasePage";

// Only count visits on the real site (not previews or local dev).
const TRACKED_HOSTS = ["ericfalk.work", "www.ericfalk.work", "hazok666.github.io"];

type GoatCounter = { count: (vars: { path: string; title?: string }) => void };

function countPageview(path: string, attempt = 0) {
  if (!TRACKED_HOSTS.includes(window.location.hostname)) return;
  const gc = (window as unknown as { goatcounter?: GoatCounter }).goatcounter;
  if (gc?.count) {
    gc.count({ path, title: document.title });
  } else if (attempt < 20) {
    // count.js loads async; retry briefly until it's ready
    setTimeout(() => countPageview(path, attempt + 1), 250);
  }
}

// The site uses hash URLs (/#/case/...), so each route change is sent as its own page view.
function PageviewTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    countPageview(pathname);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <PageviewTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case/:id" element={<CasePage />} />
      </Routes>
    </HashRouter>
  );
}
