import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import hero from "@/assets/hero-dancer.jpg";
import drums from "@/assets/drums.jpg";
import children from "@/assets/children.jpg";
import feet from "@/assets/feet.jpg";
import { CircleButton, MaskText, Reveal, RevealImage, SectionLabel, ease } from "./primitives";

/* ---------------- HERO ---------------- */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section ref={ref} id="top" className="grain relative min-h-[100svh] overflow-hidden">
      <div className="mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-12 px-5 pb-10 pt-28 md:px-10">
        {/* vertical side typography */}
        <div className="col-span-1 hidden items-end md:flex">
          <p className="eyebrow origin-bottom-left -rotate-90 translate-x-4 whitespace-nowrap text-ivory/60">
            Sri Lanka &nbsp;/&nbsp; Traditional Dance &nbsp;/&nbsp; Est. 2018
          </p>
        </div>

        {/* image */}
        <motion.div
          className="relative col-span-12 h-[62svh] overflow-hidden md:col-span-7 md:col-start-5 md:h-auto"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.8, ease }}
          data-cursor="VIEW STORY"
        >
          <motion.img
            src={hero}
            alt="A Kandyan dancer mid-leap in traditional ves costume"
            width={1280}
            height={1600}
            style={{ y, scale }}
            className="h-full w-full object-cover object-[50%_25%]"
          />
          <span className="eyebrow absolute bottom-3 right-3 bg-ink/70 px-2 py-1 text-[0.55rem] text-ivory/70">
            Illustrative image
          </span>
        </motion.div>
      </div>

      {/* movement lines */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1600 1000" preserveAspectRatio="none" aria-hidden>
        <path className="animate-draw" d="M-20 720 C 300 560, 520 900, 820 640 S 1300 300, 1640 460" fill="none" stroke="var(--gold)" strokeOpacity=".45" strokeWidth="1" />
        <path className="animate-draw [animation-delay:1s]" d="M-20 780 C 340 640, 560 960, 860 700 S 1320 380, 1640 540" fill="none" stroke="var(--terracotta)" strokeOpacity=".5" strokeWidth="1" />
      </svg>

      {/* headline overlapping */}
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-5 pb-10 md:px-10 md:pb-16">
        <MaskText
          as="h1"
          delay={0.7}
          lines={["Where heritage", "finds its rhythm."]}
          className="display max-w-[14ch] text-[clamp(3.2rem,9.5vw,10rem)] text-ivory md:ml-[8%]"
        />
        <div className="mt-8 flex flex-col gap-8 md:ml-[8%] md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="max-w-sm text-sm leading-relaxed text-ivory/75"
          >
            Sri Lankan traditional dance, presented for a new generation. Kandyan, Low Country and
            Sabaragamuwa — taught to children, teenagers and young dancers.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9, duration: 1, ease }}>
            <CircleButton label="Explore the academy" href="#academy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATEMENT + ROOTS ---------------- */
export function Roots() {
  return (
    <section id="academy" className="relative w-full bg-ink py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
      <div className="grid grid-cols-12 gap-y-14">
        <MaskText
          lines={["Tradition", "is not", "still."]}
          className="display col-span-12 text-[clamp(4rem,13vw,13rem)] italic text-clay md:col-span-8"
        />
        <Reveal className="col-span-12 self-end md:col-span-3 md:col-start-10" delay={0.3}>
          <p className="display text-2xl leading-snug text-ivory">
            Passed from teacher to student, movement becomes memory.
          </p>
        </Reveal>
      </div>

      <div className="motif-border my-24 opacity-60" />

      <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
        <div className="col-span-12 md:col-span-5">
          <SectionLabel n="01" label="The Roots" />
          <MaskText
            lines={["A movement carried", "through generations."]}
            className="display mt-8 text-[clamp(2.4rem,4.8vw,4.6rem)]"
          />
          <Reveal delay={0.2} className="mt-10 max-w-md space-y-5 text-[0.95rem] leading-relaxed text-ivory/75">
            <p>
              Kandyan dance grew from the hill country of Sri Lanka and remains one of the island's
              most recognised art forms — known for its powerful leaps, sweeping arms and the silver
              ornaments of the <em>ves</em> costume.
            </p>
            <p>
              It is never danced alone. The <em>geta bera</em> drum leads, the dancer answers, and
              rhythm becomes a conversation. Learning it asks for discipline, stamina and respect for
              those who taught before us.
            </p>
          </Reveal>
        </div>
        <div className="col-span-12 grid grid-cols-6 gap-4 md:col-span-7">
          <RevealImage src={drums} alt="Hands playing a geta bera drum" w={1408} h={1024} className="col-span-6 aspect-[4/3]" />
          <RevealImage src={feet} alt="Ankle bells on a dancer's feet" w={1024} h={1280} className="col-span-3 col-start-4 -mt-24 aspect-[4/5] border-8 border-ink md:-mt-40" />
        </div>
      </div>
      </div>
    </section>
  );
}

/* ---------------- DANCE FORMS (horizontal) ---------------- */
const forms = [
  { n: "01", t: "Kandyan Dance", d: "The hill-country form. Leaps, spins and controlled strength, carried by the geta bera.", img: hero, alt: hero },
  { n: "02", t: "Low Country Dance", d: "From the southern coast — masked, dramatic and rooted in ritual storytelling.", img: feet, alt: drums },
  { n: "03", t: "Sabaragamuwa Dance", d: "Graceful and grounded, shaped by the rhythms of the dawula drum.", img: children, alt: feet },
  { n: "04", t: "Traditional Drumming", d: "Learn the beat every dancer listens for. Rhythm, timing and call-and-response.", img: drums, alt: hero },
];

export function DanceForms() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  const Panel = ({ f }: { f: (typeof forms)[number] }) => (
    <article data-cursor="EXPLORE" className="group relative w-[80vw] shrink-0 md:w-[38vw]">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img src={f.img} alt={f.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-all duration-[1.4s] ease-out group-hover:scale-110 group-hover:opacity-0" />
        <img src={f.alt} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-[1.4s] ease-out group-hover:scale-100 group-hover:opacity-100" />
        <span className="display absolute left-5 top-4 text-6xl italic text-ivory/90">{f.n}</span>
      </div>
      <div className="mt-6 flex items-start justify-between gap-6 border-t border-ivory/20 pt-5">
        <div>
          <h3 className="display text-3xl md:text-4xl text-ivory">{f.t}</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/75">{f.d}</p>
        </div>
        <span className="grid size-12 shrink-0 place-items-center rounded-full border border-ivory/40 text-ivory transition-all duration-700 group-hover:-rotate-45 group-hover:bg-gold group-hover:text-ink group-hover:border-gold">→</span>
      </div>
    </article>
  );

  return (
    <>
      {/* desktop: scroll-driven horizontal */}
      <section id="dance" ref={ref} className="relative hidden h-[300vh] bg-maroon md:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto mb-10 flex w-full max-w-[1600px] items-end justify-between px-10">
            <h2 className="display text-[clamp(3rem,6vw,6.5rem)]">The language<br /><em className="text-gold">of movement</em></h2>
            <SectionLabel n="02" label="Dance forms" />
          </div>
          <motion.div style={{ x }} className="flex gap-10 pl-10">
            {forms.map((f) => <Panel key={f.n} f={f} />)}
          </motion.div>
        </div>
      </section>
      {/* mobile: swipeable magazine strip */}
      <section className="bg-maroon py-20 md:hidden">
        <div className="px-5">
          <SectionLabel n="02" label="Dance forms" />
          <h2 className="display mt-6 text-5xl">The language <em className="text-gold">of movement</em></h2>
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4">
          {forms.map((f) => <div key={f.n} className="snap-start"><Panel f={f} /></div>)}
        </div>
      </section>
    </>
  );
}

/* ---------------- NEXT GENERATION ---------------- */
const groups = [
  { name: "Little Rhythm", ages: "Ages 4–7", img: children, copy: "Playful first steps. Counting beats, balance, posture and the joy of moving to the drum.", sched: "Saturdays · 45 min" },
  { name: "Young Performers", ages: "Ages 8–12", img: feet, copy: "Foundational Kandyan vocabulary, coordination and first stage experience in academy showcases.", sched: "Sat & Wed · 60 min" },
  { name: "Future Artists", ages: "Ages 13–17", img: hero, copy: "Advanced technique, stamina and expression — preparing for performances and graded progress.", sched: "Sat & Thu · 90 min" },
];

function Wave() {
  return (
    <span className="flex h-6 items-end gap-[3px]" aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} className="animate-bar w-[2px] bg-gold" style={{ height: "100%", animationDelay: `${(i * 97) % 600}ms` }} />
      ))}
    </span>
  );
}

export function NextGeneration() {
  const [active, setActive] = useState(0);
  return (
    <section id="young" className="relative w-full overflow-hidden bg-ink py-28 md:py-40">
      <AnimatePresence mode="sync">
        <motion.img
          key={active}
          src={groups[active]!.img}
          alt=""
          aria-hidden
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.22, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-12 gap-y-14 px-5 md:px-10">
        <div className="col-span-12 md:col-span-5">
          <SectionLabel n="03" label="Young dancers" />
          <MaskText lines={["The next", "generation."]} className="display mt-8 text-[clamp(3rem,7vw,7rem)]" />
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-sm text-lg leading-relaxed text-ivory/80">
              We don't only teach steps. We help young dancers discover discipline, confidence,
              rhythm and culture.
            </p>
          </Reveal>
        </div>

        <ol className="col-span-12 border-t border-border md:col-span-6 md:col-start-7">
          {groups.map((g, i) => {
            const on = active === i;
            return (
              <li
                key={g.name}
                data-cursor="EXPLORE"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="relative border-b border-border py-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-5">
                    <span className="eyebrow text-gold">0{i + 1}</span>
                    <h3 className={`display text-4xl transition-all duration-700 md:text-6xl ${on ? "translate-x-3 text-ivory" : "text-ivory/45"}`}>{g.name}</h3>
                  </div>
                  <span className="eyebrow shrink-0 text-ivory/60">{g.ages}</span>
                </div>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-6 pt-6 md:pl-12 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-sm">
                          <p className="text-ivory/75">{g.copy}</p>
                          <p className="eyebrow mt-4 text-clay">{g.sched}</p>
                        </div>
                        <div className="flex items-center gap-5">
                          <Wave />
                          <a href="#contact" className="link-dance eyebrow text-gold">Discover the class ↗</a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- PRINCIPLES ---------------- */
const principles = [
  ["Discipline", "Regular practice, focus and respect in the studio."],
  ["Confidence", "Performing in front of others, step by step."],
  ["Culture", "Understanding the stories, drums and costumes behind each form."],
  ["Creativity", "Expression within a tradition — finding their own voice."],
];

export function Principles() {
  return (
    <section className="relative w-full bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="04" label="Why parents choose us" />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-sm leading-relaxed text-ivory/75">
                Children learn traditional movement while developing confidence, coordination and a
                lasting appreciation for Sri Lankan culture — in small classes, with patient teachers.
              </p>
            </Reveal>
          </div>
          <div className="relative col-span-12 md:col-span-7 md:col-start-6">
            <motion.span
              className="absolute left-3 top-0 w-px origin-top bg-gold/50"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.4, ease }}
              style={{ height: "100%" }}
            />
            {principles.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.15} className={`relative py-8 pl-12 ${i % 2 ? "md:pl-40" : ""}`}>
                <span className="absolute left-[9px] top-[3.3rem] size-2 rotate-45 bg-gold" />
                <div className="flex items-baseline gap-6">
                  <h3 className="display text-[clamp(2.6rem,6vw,6rem)] uppercase">{t}</h3>
                  <span className="display text-xl italic text-gold">0{i + 1}</span>
                </div>
                <p className="mt-2 max-w-sm text-sm text-ivory/60">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEACHERS ---------------- */
const teachers = [
  { name: "Teacher Name", role: "Kandyan dance · Lead instructor", yrs: "— years teaching", bio: "Placeholder profile. Replace with the teacher's real biography, training lineage and photograph." },
  { name: "Teacher Name", role: "Low Country dance", yrs: "— years teaching", bio: "Placeholder profile. Replace with the teacher's real biography and photograph." },
  { name: "Teacher Name", role: "Geta bera & drumming", yrs: "— years teaching", bio: "Placeholder profile. Replace with the drummer's real biography and photograph." },
];

function PortraitPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative grid aspect-[3/4] place-items-center overflow-hidden border border-ink/15 bg-ivory shadow-sm transition-all duration-500 hover:shadow-md" data-cursor="VIEW STORY">
      <div className="absolute inset-5 border border-maroon/25" />
      <div className="absolute inset-0 opacity-15 [background-image:repeating-linear-gradient(135deg,transparent_0_14px,color-mix(in_oklab,var(--maroon)_50%,transparent)_14px_15px)]" />
      <span className="eyebrow relative bg-maroon px-3 py-2 text-[0.6rem] tracking-widest text-ivory">{label}</span>
    </div>
  );
}

export function Teachers() {
  return (
    <section className="relative w-full bg-ivory py-28 text-ink md:py-40">
      <p className="eyebrow absolute left-4 top-40 hidden origin-top-left rotate-90 translate-x-4 whitespace-nowrap text-maroon md:block">
        Meet the people behind the movement
      </p>
      <div className="mx-auto max-w-[1600px] px-5 md:px-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <MaskText lines={["The hands that", "pass it on."]} className="display text-[clamp(2.8rem,6vw,6rem)] text-ink" />
          <p className="eyebrow text-maroon md:hidden">Meet the people behind the movement</p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-12">
          {teachers.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 0.12}
              className={i === 0 ? "md:col-span-5" : i === 1 ? "md:col-span-3 md:col-start-7 md:mt-32" : "md:col-span-3 md:mt-12"}
            >
              <PortraitPlaceholder label="Portrait placeholder" />
              <div className="mt-5 border-t border-ink/20 pt-4">
                <h3 className="display text-3xl text-ink">{t.name}</h3>
                <p className="eyebrow mt-2 text-terracotta">{t.role}</p>
                <p className="eyebrow mt-1 text-ink/50">{t.yrs}</p>
                <p className="mt-3 max-w-xs text-sm text-ink/75">{t.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EVENTS ---------------- */
const events = [
  { d: "12", m: "Dec", t: "Annual Cultural Showcase", p: "Colombo", img: hero },
  { d: "08", m: "Feb", t: "Traditional Dance Evening", p: "Galle", img: feet },
  { d: "14", m: "Apr", t: "Avurudu Celebration Performance", p: "Colombo", img: drums },
  { d: "21", m: "Jun", t: "Young Dancers' Open Studio", p: "Academy Hall", img: children },
];

export function Events() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section id="events" className="relative w-full bg-maroon py-28 text-ivory md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel n="05" label="Performances" />
            <MaskText lines={["When the stage", "comes alive."]} className="display mt-8 text-[clamp(2.8rem,5vw,5rem)] text-ivory" />
            <p className="eyebrow mt-6 text-ivory/60">Sample dates — confirm with the academy</p>
          </div>
          <ul className="relative col-span-12 md:col-span-7 md:col-start-6" onMouseLeave={() => setHover(null)}>
            {events.map((e, i) => (
              <li
                key={e.t}
                data-cursor="VIEW"
                onMouseEnter={() => setHover(i)}
                className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-5 border-b border-ivory/20 py-7 transition-colors duration-300 hover:border-gold/60 md:grid-cols-[6rem_1fr_auto]"
              >
                <div className="leading-none">
                  <span className="display block text-5xl text-gold md:text-6xl">{e.d}</span>
                  <span className="eyebrow text-ivory/70">{e.m}</span>
                </div>
                <div className="transition-transform duration-700 group-hover:translate-x-3">
                  <h3 className="display text-2xl text-ivory md:text-4xl">{e.t}</h3>
                  <p className="eyebrow mt-2 text-ivory/60">{e.p}</p>
                </div>
                <span className="text-xl text-ivory/80 transition-transform duration-700 group-hover:-rotate-45 group-hover:text-gold">→</span>
              </li>
            ))}
            <AnimatePresence>
              {hover !== null && (
                <motion.img
                  key={hover}
                  src={events[hover]!.img}
                  alt=""
                  aria-hidden
                  initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                  animate={{ opacity: 1, scale: 1, rotate: 2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="pointer-events-none absolute -left-72 hidden aspect-[3/4] w-56 object-cover shadow-2xl border-4 border-ink/40 lg:block"
                  style={{ top: hover * 120 }}
                />
              )}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
export function Gallery() {
  return (
    <section id="gallery" className="relative w-full overflow-hidden bg-ivory py-28 text-ink md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex items-end justify-between">
          <h2 className="display text-[clamp(3rem,8vw,8rem)] italic text-maroon">Moments</h2>
          <div className="flex items-center gap-4 text-maroon">
            <span className="display text-2xl italic">06</span>
            <span className="h-px w-12 bg-maroon/40" />
            <span className="eyebrow">Gallery</span>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-6 gap-4 md:grid-cols-12 md:gap-6">
          <RevealImage src={hero} alt="Kandyan dancer leap" w={1280} h={1600} className="col-span-4 aspect-[4/5] shadow-lg md:col-span-5" />
          <div className="col-span-2 flex flex-col justify-end md:col-span-3 md:col-start-7">
            <p className="display text-lg italic text-ink/80 md:text-2xl">“The leap is earned in the hundredth repetition.”</p>
          </div>
          <RevealImage src={feet} alt="Ankle bells close-up" w={1024} h={1280} className="col-span-3 aspect-[3/4] shadow-lg md:col-span-3 md:col-start-10 md:-mt-40" />
          <RevealImage src={children} alt="Children practising" w={1408} h={1024} className="col-span-6 aspect-[16/10] shadow-2xl md:col-span-7 md:col-start-3 md:-mt-16 md:z-10 md:border-[10px] md:border-ivory" />
          <RevealImage src={drums} alt="Drummer's hands" w={1408} h={1024} className="col-span-3 aspect-square shadow-lg md:col-span-3 md:col-start-10 md:mt-24" />
        </div>
      </div>
      <div className="mt-24 overflow-hidden border-y border-ink/20 bg-ink py-6 text-ivory">
        <div className="animate-marquee flex w-max gap-16 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="display flex gap-16 text-4xl italic text-ivory/50 md:text-6xl">
              <span>Kandyan</span><span className="text-gold">◆</span><span>Pahatharata</span><span className="text-gold">◆</span><span>Sabaragamuwa</span><span className="text-gold">◆</span><span>Geta Bera</span><span className="text-gold">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
export function FinalCta() {
  return (
    <section className="grain relative w-full overflow-hidden bg-terracotta py-32 md:py-48">
      <svg className="pointer-events-none absolute -right-40 top-1/2 size-[900px] -translate-y-1/2 opacity-25" viewBox="0 0 200 200" aria-hidden>
        {[90, 75, 60, 45, 30].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="var(--ivory)" strokeWidth=".3" />
        ))}
      </svg>
      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <MaskText lines={["Your first step", "starts here."]} className="display text-[clamp(3.2rem,10vw,11rem)] text-ivory" />
        <p className="mt-8 max-w-md text-lg text-ivory/85">Come learn the movement. Carry the tradition forward.</p>
        <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:gap-16">
          <CircleButton label="Book a trial class" variant="solid" />
          <CircleButton label="Talk to the academy" />
        </div>
      </div>
    </section>
  );
}
