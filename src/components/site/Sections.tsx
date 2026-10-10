import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero-dancer.jpg";
import drums from "@/assets/drums.jpg";
import children from "@/assets/children.jpg";
import feet from "@/assets/feet.jpg";
import group1 from "@/assets/new/group1.jpg";
import group4 from "@/assets/new/group4.jpg";
import group8 from "@/assets/new/group8.jpg";
import teacher1 from "@/assets/new/teacher7.jpg";
import teacher2 from "@/assets/new/teacher2.jpg";
import { CircleButton, MaskText, Reveal, RevealImage, SectionLabel, ease } from "./primitives";

/* ---------------- HERO ---------------- */
const heroSlides = [
  {
    src: group4,
    alt: "Sri Lankan dancers gathered in traditional costume",
    label: "The collective / Kandyan movement",
    theme: "from-[#120c12]/95 via-[#2b161d]/55 to-[#120c12]/20",
    imageClass: "object-[58%_42%] saturate-[0.72]",
  },
  {
    src: group8,
    alt: "Young dancers moving together in rehearsal",
    label: "The next generation / Shared rhythm",
    theme: "from-[#08151a]/95 via-[#12343a]/50 to-[#08151a]/15",
    imageClass: "object-[52%_46%] saturate-[0.82] hue-rotate-[8deg]",
  },
  {
    src: group1,
    alt: "A Sri Lankan dancer in traditional costume",
    label: "The individual / A living archive",
    theme: "from-[#21100e]/95 via-[#6a2d20]/48 to-[#21100e]/15",
    imageClass: "object-[50%_32%] saturate-[0.78] sepia-[0.12]",
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section ref={ref} id="top" className="grain relative min-h-[100svh] overflow-hidden bg-ink">
      <div className="absolute inset-0" data-cursor="VIEW STORY">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
            exit={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            transition={{ duration: 1.45, ease }}
          >
            <motion.img
              src={slide.src}
              alt={slide.alt}
              width={1600}
              height={1066}
              style={{ y, scale }}
              initial={{ scale: 1.14, x: "2%" }}
              animate={{ scale: 1, x: "0%" }}
              transition={{ duration: 7, ease: "linear" }}
              className={`h-full w-full object-cover ${slide.imageClass}`}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.theme}`} />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,11,16,0.9)_0%,transparent_42%,rgba(13,11,16,0.3)_100%)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-5 pb-8 pt-28 md:px-10 md:pb-10">
        <div className="flex items-start justify-between border-t border-ivory/20 pt-4">
          <p className="eyebrow text-ivory/70">Prashadi Art Academy</p>
          <p className="eyebrow hidden text-right text-ivory/60 sm:block">Kurunegala, Sri Lanka</p>
        </div>

        <div className="mt-auto grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 md:col-span-9">
            <p className="eyebrow mb-5 flex items-center gap-3 text-gold">
              <span className="h-px w-10 bg-gold" />
              A living practice / Est. 2018
            </p>
            <MaskText
              as="h1"
              delay={0.7}
              lines={["Where heritage", "finds its", "rhythm."]}
              className="display max-w-[9ch] text-[clamp(4.6rem,11.5vw,12rem)] text-ivory"
            />
          </div>
          <div className="col-span-12 flex flex-col gap-8 md:col-span-3 md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="max-w-xs text-sm leading-relaxed text-ivory/75 md:text-right"
            >
              Traditional dance, retold with precision, pride and a pulse for the next generation.
            </motion.p>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.9, duration: 1, ease }}>
              <CircleButton label="Enter the academy" href="#academy" />
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 border-t border-ivory/25 pt-4">
          <span className="eyebrow min-w-fit text-[0.58rem] text-gold">{slide.label}</span>
          <span className="h-px flex-1 bg-ivory/30" />
          <div className="flex items-center gap-3" aria-label="Hero image selection">
            {heroSlides.map((heroSlide, index) => (
              <button
                key={heroSlide.src}
                type="button"
                aria-label={`Show hero image ${index + 1}`}
                aria-pressed={activeSlide === index}
                onClick={() => setActiveSlide(index)}
                className="group flex items-center gap-2 py-2"
              >
                <span className={`block h-px transition-all duration-500 ${activeSlide === index ? "w-8 bg-gold" : "w-3 bg-ivory/40 group-hover:bg-ivory"}`} />
                <span className="sr-only">{heroSlide.label}</span>
              </button>
            ))}
            <span className="display ml-1 text-xl italic text-ivory/70">
              {String(activeSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[22%] left-[3.3%] z-10 hidden md:block">
        <p className="eyebrow origin-bottom-left -rotate-90 whitespace-nowrap text-ivory/60">
          Sri Lanka&nbsp;&nbsp;/&nbsp;&nbsp;Traditional Dance&nbsp;&nbsp;/&nbsp;&nbsp;A living archive
        </p>
      </div>

      <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full" viewBox="0 0 1600 1000" preserveAspectRatio="none" aria-hidden>
        <path className="animate-draw" d="M-20 780 C 300 650, 520 920, 820 700 S 1300 380, 1640 500" fill="none" stroke="var(--gold)" strokeOpacity=".4" strokeWidth="1" />
      </svg>
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
export function Teachers() {
  return (
    <section className="relative w-full bg-ivory py-28 text-ink md:py-40">
      <p className="eyebrow absolute left-4 top-40 hidden origin-top-left rotate-90 translate-x-4 whitespace-nowrap text-maroon md:block">
        The founder behind the movement
      </p>
      <div className="mx-auto max-w-[1600px] px-5 md:px-16">
        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          {/* Left Column - Large Image */}
          <div className="md:col-span-7">
            <RevealImage src={teacher1} alt="Founder portrait" w={800} h={1066} className="aspect-[3/4] w-full" />
          </div>

          {/* Right Column - Info */}
          <div className="flex flex-col justify-center md:col-span-5 md:pl-10">
            <SectionLabel n="05" label="The founder" />
            
            <div className="mt-12">
              <MaskText lines={["The hand that", "guides."]} className="display text-[clamp(2.8rem,5vw,5rem)] text-ink" />
            </div>
            
            <Reveal className="mt-8">
              <h3 className="display text-4xl text-ink">Imasha Prashadi Weerasignhe</h3>
              <p className="eyebrow mt-3 text-terracotta">Founder · Lead Instructor</p>
              
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/80">
                Trained in the classical Kandyan tradition under renowned masters, she brings over two decades of experience to the academy. Her vision preserves ancient techniques while inspiring the next generation of dancers.
              </p>

              <div className="mt-10 w-48">
                <RevealImage src={teacher2} alt="Teacher teaching" w={640} h={480} className="aspect-[4/3] w-full" />
              </div>

              {/* Decorative motif-border divider */}
              <div className="mt-12 flex w-full items-center opacity-40">
                <div className="size-1.5 rotate-45 bg-maroon"></div>
                <div className="h-px flex-1 bg-maroon"></div>
                <div className="size-1.5 rotate-45 bg-maroon"></div>
              </div>

              {/* Stats */}
              <div className="mt-10 flex gap-8">
                <div>
                  <p className="display text-3xl text-ink">25+</p>
                  <p className="eyebrow mt-1 text-[0.65rem] text-ink/60">Teaching</p>
                </div>
                <div>
                  <p className="display text-3xl text-ink">500+</p>
                  <p className="eyebrow mt-1 text-[0.65rem] text-ink/60">Students</p>
                </div>
                <div>
                  <p className="display text-3xl text-ink">3</p>
                  <p className="eyebrow mt-1 text-[0.65rem] text-ink/60">National awards</p>
                </div>
              </div>

              {/* Link */}
              <Link to="/teacher" data-cursor="VIEW STORY" className="group mt-12 flex items-center gap-5">
                <span className="grid size-14 shrink-0 place-items-center border border-ink/30 text-ink transition-all duration-700 group-hover:bg-maroon group-hover:text-ivory group-hover:border-maroon">
                  <span className="text-lg transition-transform duration-700 group-hover:-rotate-45">→</span>
                </span>
                <span className="eyebrow text-[0.72rem] text-ink/80 transition-[letter-spacing] duration-700 group-hover:tracking-[0.42em]">Discover her journey</span>
              </Link>
            </Reveal>
          </div>
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
            <SectionLabel n="06" label="Performances" />
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
            <span className="display text-2xl italic">07</span>
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
