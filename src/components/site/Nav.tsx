import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ease } from "./primitives";

export const navLinks = [
  ["Academy", "#academy"],
  ["Dance", "#dance"],
  ["Young Dancers", "#young"],
  ["Journey", "#events"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
] as const;

export function Nav() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setCompact(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          compact ? "bg-ink/90 py-3 shadow-md border-b border-ivory/10 backdrop-blur-md" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="display text-xl tracking-[0.28em] text-ivory md:text-2xl" data-cursor="">
            RANGAVEDA
          </a>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex gap-9">
              {navLinks.map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="link-dance eyebrow text-ivory/80 hover:text-ivory">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <a
              href="#contact"
              className="eyebrow hidden border border-gold/60 px-5 py-3 text-gold transition-colors duration-500 hover:bg-gold hover:text-ink sm:inline-block"
            >
              Join a class
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 flex-col items-end justify-center gap-1.5 lg:hidden"
            >
              <span className="h-px w-7 bg-ivory" />
              <span className="h-px w-4 bg-ivory" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Curtain panels */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`h-full flex-1 ${i % 2 ? "bg-maroon" : "bg-[color-mix(in_oklab,var(--maroon)_85%,black)]"}`}
                variants={{
                  closed: { scaleY: 0, transition: { duration: 0.6, ease, delay: (3 - i) * 0.05 } },
                  open: { scaleY: 1, transition: { duration: 0.8, ease, delay: i * 0.07 } },
                }}
                style={{ transformOrigin: "top" }}
              />
            ))}
            <motion.div
              className="absolute inset-0 flex flex-col justify-between px-6 py-6"
              variants={{ closed: { opacity: 0 }, open: { opacity: 1, transition: { delay: 0.45 } } }}
            >
              <div className="flex items-center justify-between">
                <span className="display text-xl tracking-[0.28em]">RANGAVEDA</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="eyebrow h-11 px-2">
                  Close
                </button>
              </div>
              <ul className="space-y-2">
                {navLinks.map(([l, h], i) => (
                  <li key={l} className="overflow-hidden">
                    <motion.a
                      href={h}
                      onClick={() => setOpen(false)}
                      className="display flex items-baseline gap-4 py-1 text-5xl"
                      variants={{
                        closed: { y: "100%" },
                        open: { y: 0, transition: { duration: 0.8, ease, delay: 0.5 + i * 0.06 } },
                      }}
                    >
                      <span className="eyebrow text-gold">0{i + 1}</span>
                      {l}
                    </motion.a>
                  </li>
                ))}
              </ul>
              <a href="#contact" onClick={() => setOpen(false)} className="eyebrow border border-gold py-4 text-center text-gold">
                Join a class →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
