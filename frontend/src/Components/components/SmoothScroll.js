import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return null;
}
