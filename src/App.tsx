import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CasePage from "./pages/CasePage";

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case/:id" element={<CasePage />} />
      </Routes>
    </HashRouter>
  );
}
