import { useEffect, useRef } from "react";

interface ParticleNetworkProps {
  className?: string;
  /** Respects the caller's reduced-motion check; when true, renders nothing. */
  disabled?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

/**
 * Lightweight, dependency-free canvas particle network — small dots drifting
 * slowly and connected by faint lines when close together, with a gentle
 * push-away reaction near the cursor. No library (no three.js, no
 * tsparticles): plain Canvas 2D, a few KB of our own code.
 *
 * Kept cheap on purpose:
 * - Particle count scales down on narrow/mobile viewports.
 * - devicePixelRatio capped at 1.5 so retina screens don't 4x the draw cost.
 * - Pauses entirely when the tab is hidden (visibilitychange).
 * - Caller is expected to skip rendering this under prefers-reduced-motion
 *   (via the `disabled` prop) rather than this component guessing on its own.
 */
const ParticleNetwork = ({ className, disabled = false }: ParticleNetworkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (disabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let particles: Particle[] = [];
    let animationFrame = 0;
    let running = true;
    const mouse = { x: -9999, y: -9999 };

    const particleCount = () => (window.innerWidth < 768 ? 22 : window.innerWidth < 1280 ? 36 : 50);
    const linkDistance = () => (window.innerWidth < 768 ? 90 : 130);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = particleCount();
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      const maxLinkDist = linkDistance();

      for (const p of particles) {
        // Gentle push-away from the cursor, within a small radius.
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.vx += (dx / (dist || 1)) * force * 0.02;
          p.vy += (dy / (dist || 1)) * force * 0.02;
        }

        p.x += p.vx;
        p.y += p.vy;
        // Mild drag so the mouse push doesn't accumulate into chaos.
        p.vx *= 0.98;
        p.vy *= 0.98;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < maxLinkDist) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.14 * (1 - d / maxLinkDist)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(step);
    };

    const onVisibilityChange = () => {
      running = !document.hidden;
      if (running) animationFrame = requestAnimationFrame(step);
      else cancelAnimationFrame(animationFrame);
    };

    resize();
    animationFrame = requestAnimationFrame(step);
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      running = false;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [disabled]);

  if (disabled) return null;

  return <canvas ref={canvasRef} className={className} />;
};

export default ParticleNetwork;
