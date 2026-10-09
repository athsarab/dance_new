import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40 });
  const sy = useSpring(y, { stiffness: 400, damping: 40 });
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor], a, button, input, textarea, select");
      if (!el) return setLabel(null);
      setLabel(el.dataset["cursor"] ?? "");
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;
  const big = label !== null && label !== "";
  const hover = label !== null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full border border-ivory"
        animate={{
          width: big ? 92 : hover ? 36 : 10,
          height: big ? 92 : hover ? 36 : 10,
          backgroundColor: big || !hover ? "var(--ivory)" : "transparent",
        }}
        transition={{ duration: 0.45, ease: [0.7, 0, 0.2, 1] }}
      >
        {big && (
          <motion.span
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            className="eyebrow text-center text-[0.55rem] leading-tight text-ink"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
