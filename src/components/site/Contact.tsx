import { useState } from "react";
import { toast } from "sonner";
import { SectionLabel } from "./primitives";
import { navLinks } from "./Nav";

const field = "w-full border-0 border-b border-ivory/25 bg-transparent py-4 text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none transition-colors";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <footer id="contact" className="relative w-full bg-ink pt-28 md:pt-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
      <div className="grid grid-cols-12 gap-y-16 md:gap-x-10">
        <div className="col-span-12 md:col-span-5">
          <SectionLabel n="08" label="Contact" />
          <h2 className="display mt-8 text-[clamp(2.8rem,5vw,5rem)]">Begin the <em className="text-gold">journey.</em></h2>
          <dl className="mt-12 grid grid-cols-2 gap-8 text-sm">
            <div><dt className="eyebrow text-clay">Studio</dt><dd className="mt-2 text-ivory/80">Address to be confirmed<br />Colombo, Sri Lanka</dd></div>
            <div><dt className="eyebrow text-clay">Talk to us</dt><dd className="mt-2 text-ivory/80">+94 00 000 0000<br />hello@rangaveda.lk</dd></div>
            <div><dt className="eyebrow text-clay">Classes</dt><dd className="mt-2 text-ivory/80">Wed & Thu · 4–7 pm<br />Sat · 8 am–1 pm</dd></div>
            <div><dt className="eyebrow text-clay">Follow</dt><dd className="mt-2 flex flex-col text-ivory/80"><a className="link-dance w-fit" href="#">Instagram</a><a className="link-dance w-fit" href="#">Facebook</a><a className="link-dance w-fit" href="#">YouTube</a></dd></div>
          </dl>
          <div className="mt-10 aspect-[16/9] overflow-hidden border border-border grayscale">
            <iframe title="Academy location map" loading="lazy" className="h-full w-full" src="https://www.google.com/maps?q=Colombo,Sri+Lanka&output=embed" />
          </div>
        </div>

        <form
          className="col-span-12 md:col-span-6 md:col-start-7"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast("Thank you — the academy will be in touch soon.");
            (e.target as HTMLFormElement).reset();
          }}
        >
          <p className="eyebrow text-ivory/60">Enquire about a trial class</p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 sm:gap-x-8">
            <label className="sm:col-span-2"><span className="sr-only">Parent / Student name</span><input required name="name" placeholder="Parent / Student name" className={field} /></label>
            <label><span className="sr-only">Age</span><input required name="age" type="number" min={3} max={99} placeholder="Age of dancer" className={field} /></label>
            <label><span className="sr-only">Dance interest</span>
              <select name="interest" defaultValue="" required className={`${field} [&>option]:bg-ink`}>
                <option value="" disabled>Dance interest</option>
                <option>Kandyan Dance</option><option>Low Country Dance</option><option>Sabaragamuwa Dance</option><option>Traditional Drumming</option><option>Not sure yet</option>
              </select>
            </label>
            <label className="sm:col-span-2"><span className="sr-only">Phone number</span><input required name="phone" type="tel" placeholder="Phone number" className={field} /></label>
            <label className="sm:col-span-2"><span className="sr-only">Message</span><textarea name="message" rows={3} placeholder="Message" className={`${field} resize-none`} /></label>
          </div>
          <button type="submit" data-cursor="SEND" className="group mt-12 flex w-full items-center justify-between border-y border-gold/60 py-6 text-gold transition-colors duration-700 hover:bg-gold hover:text-ink">
            <span className="display px-2 text-3xl md:text-4xl">{sent ? "Sent — thank you" : "Begin the journey"}</span>
            <span className="px-2 text-2xl transition-transform duration-700 group-hover:-rotate-45">→</span>
          </button>
        </form>
      </div>

      <div className="motif-border mt-28 opacity-50" />
      <div className="flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <p className="display text-[clamp(3rem,12vw,12rem)] leading-none tracking-[0.12em] text-ivory/90">RANGAVEDA</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 pb-4">
          {navLinks.map(([l, h]) => <a key={l} href={h} className="link-dance eyebrow text-ivory/60">{l}</a>)}
        </div>
      </div>
      <p className="eyebrow pb-8 text-[0.6rem] text-ivory/40">© RANGAVEDA Sri Lankan Traditional Dance Academy</p>
      </div>
    </footer>
  );
}
