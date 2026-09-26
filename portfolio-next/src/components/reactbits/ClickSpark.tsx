"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  children?: React.ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

export default function ClickSpark({
  sparkColor = "rgba(255, 255, 255, 0.8)",
  sparkSize = 8,
  sparkRadius = 20,
  sparkCount = 8,
  duration = 400,
  children,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const now = performance.now();
      const newSparks: Spark[] = [];
      for (let i = 0; i < sparkCount; i++) {
        newSparks.push({
          x: e.clientX,
          y: e.clientY,
          angle: (2 * Math.PI * i) / sparkCount + Math.random() * 0.2,
          startTime: now,
        });
      }
      sparksRef.current.push(...newSparks);
    },
    [sparkCount]
  );

  useEffect(() => {
    let animId: number;

    const animate = (time: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = time - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const currentRadius = sparkRadius * progress;
        const currentSize = sparkSize * (1 - progress);

        const x = spark.x + Math.cos(spark.angle) * currentRadius;
        const y = spark.y + Math.sin(spark.angle) * currentRadius;

        ctx.fillStyle = sparkColor;
        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.5, currentSize / 2), 0, 2 * Math.PI);
        ctx.fill();

        return true;
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [duration, sparkColor, sparkRadius, sparkSize]);

  return (
    <div onClick={handleClick} className="min-h-screen w-full">
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50"
      />
      {children}
    </div>
  );
}
