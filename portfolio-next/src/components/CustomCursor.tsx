"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor.style.transform = "translate(-50%, -50%)";
    };

    const handleEnter = () => {
      cursor.style.width = "60px";
      cursor.style.height = "60px";
      cursor.style.backgroundColor = "#FBFF48";
      cursor.style.mixBlendMode = "normal";
      cursor.style.border = "2px solid black";
    };

    const handleLeave = () => {
      cursor.style.width = "24px";
      cursor.style.height = "24px";
      cursor.style.backgroundColor = "#fff";
      cursor.style.mixBlendMode = "difference";
      cursor.style.border = "none";
    };

    document.addEventListener("mousemove", moveCursor);

    const attachHoverListeners = () => {
      const hoverElements = document.querySelectorAll("a, button, input, textarea, .cursor-hover");
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    attachHoverListeners();

    // Re-attach on DOM mutations
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="w-6 h-6 bg-white rounded-full border-2 border-black hidden lg:block fixed"
      style={{ zIndex: 9999, pointerEvents: "none", mixBlendMode: "difference" }}
    />
  );
}
