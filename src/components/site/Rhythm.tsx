import video from "@/assets/video/video1.mp4";
import { SectionLabel } from "./primitives";

/** A cinematic pause for the academy's dance footage. */
export function Rhythm() {
  return (
    <section className="grain relative flex min-h-[560px] h-[78svh] max-h-[920px] w-full flex-col justify-between overflow-hidden border-y border-border bg-ink px-5 py-12 text-ivory md:px-10 md:py-14">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="absolute inset-0 bg-ink/35" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,11,16,0.78)_0%,rgba(13,11,16,0.12)_32%,rgba(13,11,16,0.18)_58%,rgba(13,11,16,0.82)_100%)]" aria-hidden="true" />

      <div className="relative z-10">
        <SectionLabel n="07" label="In motion" />
      </div>

      <p className="eyebrow relative z-10 text-center text-ivory/75">A living tradition, carried forward through movement</p>
    </section>
  );
}
