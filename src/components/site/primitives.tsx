import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const ease = [0.7, 0, 0.2, 1] as const;

/** Masked line-by-line headline reveal: movement → pause → movement */
export function MaskText({
  lines,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: {
  lines: string[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, ease, delay: delay + i * 0.14 }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Image that unveils like a curtain lifting */
export function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  w,
  h,
  cursor = "VIEW STORY",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  w: number;
  h: number;
  cursor?: string;
  eager?: boolean;
}) {
  return (
    <motion.figure
      data-cursor={cursor}
      className={`group relative overflow-hidden ${className}`}
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.4, ease }}
    >
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        loading={eager ? "eager" : "lazy"}
        className={`h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05] ${imgClassName}`}
      />
      <figcaption className="eyebrow absolute bottom-2 right-2 bg-ink/70 px-2 py-1 text-[0.55rem] text-ivory/70">
        Illustrative image
      </figcaption>
    </motion.figure>
  );
}

/** Circular dance-inspired button */
export function CircleButton({
  label,
  href = "#contact",
  variant = "light",
}: {
  label: string;
  href?: string;
  variant?: "light" | "solid";
}) {
  const solid = variant === "solid";
  return (
    <a
      href={href}
      data-cursor="BEGIN"
      className="group relative inline-flex items-center gap-5 py-2"
    >
      <span
        className={`relative grid size-16 shrink-0 place-items-center rounded-full border transition-all duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-110 sm:size-20 ${
          solid
            ? "border-maroon bg-maroon text-ivory group-hover:bg-ivory group-hover:text-ink group-hover:border-ivory"
            : "border-ivory/50 text-ivory group-hover:bg-ivory group-hover:text-ink"
        }`}
      >
        <span className="absolute inset-[-6px] rounded-full border border-gold/0 transition-all duration-700 group-hover:inset-[-12px] group-hover:border-gold/50" />
        <span className="text-xl transition-transform duration-700 group-hover:-rotate-45">→</span>
      </span>
      <span className="eyebrow text-[0.72rem] text-ivory transition-[letter-spacing] duration-700 group-hover:tracking-[0.42em]">
        {label}
      </span>
    </a>
  );
}

export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-gold">
      <span className="display text-2xl italic">{n}</span>
      <span className="h-px w-12 bg-gold/60" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}
