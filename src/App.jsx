import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

// This helper component injects Meta's official script cleanly using standard browser API
function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    // 1. If Meta's tracking object isn't on the window yet, inject the base snippet
    if (!window.fbq) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

      // 2. Initialize your specific Pixel ID
      window.fbq("init", "1068995708812953");
    }
  }, []);

  useEffect(() => {
    // 3. Fire a PageView every time the React router path changes
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location]);

  return null;
}

// ONLY ONE DEFAULT EXPORT ALLOWED PER FILE
export default function App() {
  return (
    <BrowserRouter>
      <PixelTracker />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}