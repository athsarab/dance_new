import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  MaskText,
  Reveal,
  RevealImage,
  SectionLabel,
  CircleButton,
  ease,
} from "@/components/site/primitives";

import t1 from "@/assets/new/teacher1.jpg";
import t2 from "@/assets/new/teacher2.jpg";
import t3 from "@/assets/new/teacher3.jpg";
import t4 from "@/assets/new/teacher4.jpg";
import t5 from "@/assets/new/teacher5.jpg";
import g1 from "@/assets/new/group1.jpg";
import g2 from "@/assets/new/group2.jpg";

export const Route = createFileRoute("/teacher")({
  head: () => ({
    meta: [
      { title: "The Teacher — RANGAVEDA" },
      {
        name: "description",
        content: "Meet the Guru: Three decades of devotion to Kandyan dance.",
      },
    ],
  }),
  component: TeacherPage,
});

function TeacherPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ink text-ivory">
      {/* 1. Hero / Intro Banner */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={t1}
            alt="Guru dancing"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
          <div className="grain absolute inset-0 opacity-40 mix-blend-overlay" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-12 md:p-24">
          <nav className="flex items-center justify-between">
            <Link to="/" className="eyebrow link-dance text-[0.7rem] text-ivory">
              ← Back to RANGAVEDA
            </Link>
            <div className="eyebrow text-gold text-[0.7rem]">Guru Profile</div>
          </nav>

          <div className="max-w-4xl">
            <MaskText
              as="h1"
              lines={["Guru Anura", "Gunasekera"]}
              className="display text-6xl text-ivory sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.85]"
            />
            <Reveal delay={0.4}>
              <p className="mt-8 eyebrow text-gold text-[0.75rem] max-w-sm">
                Founder · Lead Instructor · Kandyan Dance
              </p>
              <p className="mt-4 font-light text-ivory/80 text-lg md:text-xl max-w-md">
                Three decades of devotion, passed hand to hand.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. About / Biography Section */}
      <section className="relative px-6 py-24 sm:px-12 md:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="01" label="The Journey" />
          
          <div className="mt-16 grid gap-16 md:grid-cols-2 md:items-center">
            <RevealImage
              src={t2}
              alt="Teacher at practice"
              w={800}
              h={1000}
              className="aspect-[3/4] w-full"
            />
            
            <div className="space-y-8">
              <MaskText
                as="h2"
                lines={["A Lineage", "Preserved"]}
                className="display text-4xl text-clay sm:text-5xl"
              />
              <Reveal delay={0.2} className="space-y-6 text-ivory/80 text-lg font-light leading-relaxed">
                <p>
                  Training under the legendary masters of the hill country, Guru Anura began his journey into Kandyan dance over thirty years ago. His dedication to the craft goes beyond mere performance; it is a sacred duty to preserve a centuries-old heritage.
                </p>
                <p>
                  He brings an exacting discipline matched only by his deep compassion for his students. Every movement, every rhythm of the Geta Bera, is taught with a reverence for the ancient rituals from which they originated.
                </p>
                <p>
                  "Dance is not just movement of the body," he often says. "It is the awakening of the spirit, a dialogue with our ancestors."
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="motif-border h-4 opacity-50" />

      {/* 3. Achievements & Honours Timeline */}
      <section className="relative px-6 py-24 sm:px-12 md:px-24 bg-maroon/20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel n="02" label="Honours & Milestones" />
          
          <div className="mt-20 space-y-16 relative before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-gold/30 md:before:left-1/2 md:before:-ml-px">
            {[
              { year: "1994", title: "National Arts Award", desc: "Awarded the prestigious Kalashoori title for outstanding contribution to traditional dance." },
              { year: "1998", title: "International Debut", desc: "Lead performer at the Festival of Asian Arts, showcasing Kandyan dance to a global audience." },
              { year: "2005", title: "Founding of RANGAVEDA", desc: "Established the academy to formalize traditional training for the next generation." },
              { year: "2012", title: "Presidential Award", desc: "Honoured for lifetime achievements in preserving Sri Lankan cultural heritage." },
              { year: "2018", title: "10th Anniversary Grand Recital", desc: "Directed over 100 students in a historic performance at the Lionel Wendt Theatre." },
              { year: "2023", title: "Master's Guild Recognition", desc: "Recognized as a senior Guru by the traditional dance guild of Kandy." },
            ].map((item, i) => (
              <Reveal
                key={i}
                delay={i * 0.1}
                className={`relative flex items-center justify-between md:justify-normal ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 w-3 h-3 bg-ink border border-gold rotate-45 -translate-x-[5px] md:left-1/2 md:-translate-x-[6px]" />
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"
                }`}>
                  <div className="eyebrow text-gold mb-2">{item.year}</div>
                  <h3 className="display text-2xl text-ivory mb-3">{item.title}</h3>
                  <p className="text-ivory/70 font-light text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Gallery / Performance Highlights */}
      <section className="relative px-6 py-24 sm:px-12 md:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="03" label="Performance & Practice" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-7">
              <RevealImage src={t3} alt="Performance" w={1200} h={800} className="w-full aspect-[4/3]" />
            </div>
            <div className="md:col-span-5 md:mt-24 space-y-6">
              <RevealImage src={t4} alt="Teaching" w={800} h={1000} className="w-full aspect-[3/4]" />
              <p className="eyebrow text-clay text-[0.65rem] text-right">Passing the rhythm to the next generation</p>
            </div>
            <div className="md:col-span-4 md:-mt-12">
              <RevealImage src={g1} alt="Group" w={800} h={800} className="w-full aspect-square" />
            </div>
            <div className="md:col-span-8">
              <RevealImage src={t5} alt="Details" w={1200} h={700} className="w-full aspect-video" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Teaching Philosophy Section */}
      <section className="relative bg-terracotta px-6 py-32 sm:px-12 md:px-24 text-ink flex items-center justify-center min-h-[60vh]">
        <div className="max-w-4xl text-center space-y-12">
          <div className="text-6xl text-ink/20 font-serif leading-none h-4">"</div>
          <MaskText
            as="h2"
            lines={[
              "The discipline of the body",
              "is merely the gateway",
              "to the freedom of the mind."
            ]}
            className="display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight"
          />
          <Reveal delay={0.5}>
            <p className="eyebrow text-ink/70">Guru Anura's Philosophy</p>
          </Reveal>
        </div>
      </section>

      {/* 6. Students' Journey / Legacy */}
      <section className="relative px-6 py-24 sm:px-12 md:px-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="04" label="A Living Legacy" />
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-ivory/10 pt-12">
            {[
              { num: "30+", label: "Years Teaching" },
              { num: "500+", label: "Students Trained" },
              { num: "150+", label: "Major Performances" },
              { num: "03", label: "National Honours" },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1} className="text-center md:text-left">
                <div className="display text-5xl md:text-7xl text-gold mb-4">{stat.num}</div>
                <div className="eyebrow text-[0.7rem] text-ivory/60">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA / Return */}
      <section className="relative px-6 py-24 sm:px-12 md:px-24 bg-maroon text-center flex flex-col items-center justify-center min-h-[40vh]">
        <MaskText
          as="h2"
          lines={["Begin Your Journey"]}
          className="display text-4xl sm:text-6xl text-ivory mb-12"
        />
        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <Link to="/" className="group relative inline-flex items-center gap-5 py-2">
              <span className="relative grid size-16 shrink-0 place-items-center rounded-full border border-ivory/50 text-ivory transition-all duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-110 group-hover:bg-ivory group-hover:text-ink sm:size-20">
                <span className="text-xl transition-transform duration-700 group-hover:-translate-x-1">←</span>
              </span>
              <span className="eyebrow text-[0.72rem] text-ivory transition-[letter-spacing] duration-700 group-hover:tracking-[0.42em]">
                RETURN HOME
              </span>
            </Link>
            <CircleButton label="CONTACT US" href="/#contact" variant="solid" />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
