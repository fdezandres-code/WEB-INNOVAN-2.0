import { useEffect } from "react";

export default function KineticThread() {
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="kinetic-thread" aria-hidden="true" />;
}