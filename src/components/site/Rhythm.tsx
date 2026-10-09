import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "./primitives";

/** Visual drum-rhythm simulation. Click / tap to strike; the waves answer. */
export function Rhythm() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const strikes = useRef<{ t: number; x: number; y: number; p: number }[]>([]);
  const [beats, setBeats] = useState(0);

  useEffect(() => {
    const c = canvas.current!;
    const ctx = c.getContext("2d")!;
    const css = getComputedStyle(document.documentElement);
    const gold = css.getPropertyValue("--gold").trim() || "#c9a96a";
    const terra = css.getPropertyValue("--terracotta").trim() || "#b0603d";
    let raf = 0;
    let mx = 0.5, my = 0.5;
    const resize = () => {
      const r = c.getBoundingClientRect();
      c.width = r.width * devicePixelRatio;
      c.height = r.height * devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);
    const onMove = (e: PointerEvent) => {
      const r = c.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width;
      my = (e.clientY - r.top) / r.height;
    };
    c.addEventListener("pointermove", onMove);

    // a slow traditional-feeling base pattern: strong · · light · strong light ·
    const pattern = [1, 0, 0, 0.5, 0, 1, 0.5, 0];
    let step = 0;
    const tick = setInterval(() => {
      const p = pattern[step++ % pattern.length];
      if (p) strikes.current.push({ t: performance.now(), x: 0.5, y: 0.5, p });
    }, 360);

    const draw = (now: number) => {
      const w = c.width, h = c.height, dpr = devicePixelRatio;
      ctx.clearRect(0, 0, w, h);
      strikes.current = strikes.current.filter((s) => now - s.t < 2600);
      // radial waves
      for (const s of strikes.current) {
        const age = (now - s.t) / 2600;
        const r = age * Math.max(w, h) * 0.55 * (0.6 + s.p * 0.4);
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, r, 0, Math.PI * 2);
        ctx.strokeStyle = s.p > 1 ? terra : gold;
        ctx.globalAlpha = (1 - age) * (s.p > 1 ? 0.9 : 0.5);
        ctx.lineWidth = dpr * (s.p > 1 ? 1.6 : 1);
        ctx.stroke();
      }
      // thin rhythmic lines bending towards the cursor
      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = gold;
      ctx.lineWidth = dpr * 0.6;
      const energy = strikes.current.reduce((a, s) => a + Math.max(0, 1 - (now - s.t) / 500) * s.p, 0);
      for (let i = 0; i < 14; i++) {
        const yb = (h / 15) * (i + 1);
        ctx.beginPath();
        for (let x = 0; x <= w; x += 8 * dpr) {
          const dx = x / w - mx, dy = yb / h - my;
          const d = Math.exp(-(dx * dx + dy * dy) * 14);
          const y = yb + Math.sin(x / (40 * dpr) + now / 600 + i) * (4 + energy * 18) * dpr * d;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(tick);
      window.removeEventListener("resize", resize);
      c.removeEventListener("pointermove", onMove);
    };
  }, []);

  const strike = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    strikes.current.push({ t: performance.now(), x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height, p: 2 });
    setBeats((b) => b + 1);
  };

  return (
    <section className="relative h-[90svh] min-h-[560px] overflow-hidden border-y border-border bg-ink">
      <canvas
        ref={canvas}
        onPointerDown={strike}
        data-cursor="STRIKE"
        aria-label="Interactive rhythm visual. Tap to strike the drum."
        className="absolute inset-0 h-full w-full touch-manipulation"
      />
      <div className="pointer-events-none relative mx-auto flex h-full max-w-[1600px] flex-col justify-between px-5 py-14 md:px-10">
        <SectionLabel n="07" label="Interaction" />
        <h2 key={beats} className="display text-center text-[clamp(3rem,9vw,9rem)] animate-in zoom-in-[0.98] duration-300">
          Listen to <em className="text-gold">the rhythm</em>
        </h2>
        <p className="eyebrow text-center text-ivory/60">Tap anywhere to strike the geta bera</p>
      </div>
    </section>
  );
}
