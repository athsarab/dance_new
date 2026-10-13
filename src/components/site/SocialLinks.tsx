import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export interface SocialChannel {
  name: string;
  handle: string;
  url: string;
  label: string;
  description: string;
  color: string;
  glowColor: string;
  cursorLabel: string;
}

export const socialLinks: SocialChannel[] = [
  {
    name: "Instagram",
    handle: "@prashadi_art_academy",
    url: "https://instagram.com/prashadi_art_academy",
    label: "Follow us on Instagram",
    description: "Daily rehearsals, traditional costumes & behind the scenes",
    color: "#E1306C",
    glowColor: "rgba(225, 48, 108, 0.35)",
    cursorLabel: "INSTAGRAM",
  },
  {
    name: "Facebook",
    handle: "Prashadi Art Academy",
    url: "https://facebook.com/prashadiartacademy",
    label: "Join our Facebook community",
    description: "Announcements, student graduations & festival photos",
    color: "#1877F2",
    glowColor: "rgba(24, 119, 242, 0.35)",
    cursorLabel: "FACEBOOK",
  },
  {
    name: "YouTube",
    handle: "@PrashadiArtAcademy",
    url: "https://youtube.com/@prashadiartacademy",
    label: "Watch on YouTube",
    description: "Full stage recitals, Kandyan dances & Geta Bera rhythms",
    color: "#FF0000",
    glowColor: "rgba(255, 0, 0, 0.35)",
    cursorLabel: "YOUTUBE",
  },
  {
    name: "TikTok",
    handle: "@prashadiartacademy",
    url: "https://tiktok.com/@prashadiartacademy",
    label: "Watch TikTok rhythms",
    description: "Fast rhythm clips, footwork practice & student spotlights",
    color: "#00f2fe",
    glowColor: "rgba(0, 242, 254, 0.35)",
    cursorLabel: "TIKTOK",
  },
  {
    name: "WhatsApp",
    handle: "+94 77 123 4567",
    url: "https://wa.me/94771234567?text=Hello%20Prashadi%20Art%20Academy,%20I%20would%20like%20to%20enquire%20about%20dance%20classes.",
    label: "Message on WhatsApp",
    description: "Instant enquiries, class schedules & admissions chat",
    color: "#25D366",
    glowColor: "rgba(37, 211, 102, 0.35)",
    cursorLabel: "WHATSAPP",
  },
];

export function SocialIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  switch (name) {
    case "Instagram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "Facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.09 2.35 2.29.98.19 2.02-.07 2.78-.71.59-.49.95-1.21.99-1.98.05-3.33.02-6.67.02-10V.02h.56z" />
        </svg>
      );
    case "WhatsApp":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.776.978-.952 1.179-.175.2-.351.226-.652.075s-1.271-.469-2.42-1.494c-.895-.797-1.5-1.782-1.675-2.083-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.05-.376-.025-.526-.075-.151-.677-1.632-.927-2.233-.244-.585-.492-.506-.677-.515-.175-.009-.376-.011-.577-.011s-.527.075-.802.376c-.276.301-1.053 1.029-1.053 2.509s1.079 2.909 1.229 3.11c.151.2 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.721.23 1.377.197 1.896.12.578-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 21.785a9.728 9.728 0 0 1-4.966-1.365l-.356-.211-3.693.968.985-3.6-.232-.369A9.73 9.73 0 0 1 2.308 12.04c0-5.385 4.37-9.755 9.755-9.755 2.61 0 5.064 1.017 6.91 2.862a9.697 9.697 0 0 1 2.862 6.91c0 5.386-4.37 9.758-9.755 9.758zm8.286-18.044A11.666 11.666 0 0 0 12.04.055C5.437.055.068 5.424.068 12.028a11.62 11.62 0 0 0 1.796 6.223L0 24l5.908-1.55a11.644 11.644 0 0 0 6.132 1.724h.005c6.602 0 11.972-5.369 11.972-11.973 0-3.201-1.246-6.21-3.513-8.477z" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * Eye-catching Desktop Floating Dock
 * Anchored to the right side of the screen with smooth hover tooltips and gold glow.
 */
export function FloatingSocialDock() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <aside
      aria-label="Social media links"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center"
    >
      {/* Decorative gold guide line */}
      <div className="h-8 w-px bg-gradient-to-b from-transparent via-gold/60 to-gold/30 mb-2" />

      {/* Main Glass Dock */}
      <div className="relative flex flex-col items-center gap-3 rounded-full border border-gold/30 bg-ink/85 p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-md">
        {/* Subtle breathing glow */}
        <div className="pointer-events-none absolute -inset-0.5 rounded-full bg-gradient-to-b from-gold/20 via-transparent to-gold/10 opacity-60 blur-[6px]" />

        {socialLinks.map((social) => {
          const isHovered = hovered === social.name;
          return (
            <div key={social.name} className="relative flex items-center">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor={social.cursorLabel}
                aria-label={social.label}
                onMouseEnter={() => setHovered(social.name)}
                onMouseLeave={() => setHovered(null)}
                className="group relative grid size-11 place-items-center rounded-full text-ivory/80 transition-all duration-300 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                style={{
                  backgroundColor: isHovered ? "var(--color-card)" : "transparent",
                }}
              >
                {/* Glow ring on hover */}
                {isHovered && (
                  <motion.span
                    layoutId="dock-glow"
                    className="absolute inset-0 rounded-full border border-gold/70"
                    style={{
                      boxShadow: `0 0 16px ${social.glowColor}`,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <span className="transition-transform duration-300 group-hover:scale-115">
                  <SocialIcon name={social.name} className="h-5 w-5" />
                </span>
              </a>

              {/* Eye-catching Tooltip Flyout */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    role="tooltip"
                    initial={{ opacity: 0, x: 12, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 8, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="pointer-events-none absolute right-[calc(100%+14px)] flex items-center whitespace-nowrap rounded-lg border border-gold/40 bg-ink/95 px-3 py-1.5 text-xs text-ivory shadow-xl backdrop-blur-md"
                  >
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1.5 font-medium tracking-wide">
                        <span className="inline-block size-1.5 rounded-full" style={{ backgroundColor: social.color }} />
                        <span className="font-semibold text-ivory">{social.name}</span>
                        <span className="text-[0.65rem] text-gold/90">{social.handle}</span>
                      </div>
                      <span className="text-[0.68rem] text-ivory/60">{social.description}</span>
                    </div>

                    {/* Arrow pointer */}
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-gold/40" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom accent line & gold dot */}
      <div className="mt-2 flex flex-col items-center gap-1">
        <div className="size-1 rounded-full bg-gold/70 shadow-[0_0_6px_var(--gold)]" />
        <div className="h-8 w-px bg-gradient-to-t from-transparent via-gold/60 to-gold/30" />
      </div>
    </aside>
  );
}

/**
 * Eye-catching Mobile Quick-Connect Button & Sheet
 * Positioned in bottom-right corner for effortless thumb access on mobile phones.
 */
export function MobileSocialButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-40 lg:hidden">
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm"
            />

            {/* Expanded Social Tray */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.7, 0, 0.2, 1] }}
              className="fixed bottom-24 right-5 z-50 w-[min(340px,calc(100vw-40px))] rounded-2xl border border-gold/40 bg-ink/95 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.8)] backdrop-blur-lg"
            >
              <div className="flex items-center justify-between border-b border-ivory/10 pb-3">
                <div>
                  <p className="eyebrow text-gold text-[0.65rem]">Social Channels</p>
                  <p className="display text-lg text-ivory">Connect with Us</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close social links"
                  className="rounded-full border border-ivory/20 p-1.5 text-ivory/70 transition-colors hover:text-ivory"
                >
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between rounded-xl border border-ivory/10 bg-ivory/[0.03] p-2.5 transition-all active:scale-[0.98] hover:border-gold/60 hover:bg-gold/10"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="grid size-10 place-items-center rounded-full text-white shadow-md"
                        style={{ backgroundColor: social.color }}
                      >
                        <SocialIcon name={social.name} className="size-5" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-sm text-ivory group-hover:text-gold transition-colors">
                          {social.name}
                        </div>
                        <div className="text-[0.72rem] text-ivory/60">{social.handle}</div>
                      </div>
                    </div>
                    <span className="text-gold pr-1 text-sm transition-transform group-hover:translate-x-1">→</span>
                  </a>
                ))}
              </div>

              <p className="mt-4 text-center text-[0.65rem] text-ivory/40">
                Prashadi Art Academy · Kurunegala
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        aria-label="Toggle social media links"
        className="group relative flex size-14 items-center justify-center rounded-full border border-gold/70 bg-ink shadow-[0_8px_30px_rgba(0,0,0,0.6)] text-gold focus:outline-none"
      >
        {/* Animated pulse halo */}
        <span className="absolute -inset-1 rounded-full border border-gold/40 animate-ping opacity-35" />
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold/30 via-transparent to-gold/10 opacity-70" />

        <div className="relative flex items-center justify-center">
          {open ? (
            <svg className="size-6 text-ivory" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <div className="relative">
              {/* Eye-catching layered icons symbol */}
              <svg className="size-6 text-gold transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              {/* Notification indicator dot */}
              <span className="absolute -top-1 -right-1 size-2 rounded-full bg-terracotta ring-2 ring-ink" />
            </div>
          )}
        </div>
      </motion.button>
    </div>
  );
}

/**
 * Eye-catching Grid Cards for Contact & Footer Section
 */
export function SocialCardsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor={social.cursorLabel}
          aria-label={social.label}
          className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-ivory/15 bg-ivory/[0.02] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:bg-ivory/[0.05] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
        >
          {/* Subtle hover gradient glow */}
          <div
            className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
            style={{ backgroundColor: social.color }}
          />

          <div className="flex items-start justify-between">
            <div
              className="grid size-11 place-items-center rounded-xl border border-ivory/20 text-ivory transition-all duration-300 group-hover:scale-110 group-hover:border-transparent group-hover:text-white"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="group-hover:hidden text-gold">
                <SocialIcon name={social.name} className="size-5" />
              </div>
              <div
                className="hidden group-hover:grid place-items-center size-full rounded-xl"
                style={{ backgroundColor: social.color }}
              >
                <SocialIcon name={social.name} className="size-5" />
              </div>
            </div>

            <span className="text-gold/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-gold text-base">
              ↗
            </span>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-ivory text-base tracking-wide group-hover:text-gold transition-colors">
              {social.name}
            </h4>
            <p className="text-xs text-gold/80 mt-0.5">{social.handle}</p>
            <p className="text-[0.72rem] text-ivory/60 mt-1.5 line-clamp-1">{social.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

/**
 * Compact Icon Strip for Nav Bar and Footer Row
 */
export function SocialIconRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor={social.cursorLabel}
          aria-label={social.label}
          className="group relative grid size-9 place-items-center rounded-full border border-ivory/20 bg-ivory/[0.03] text-ivory/70 transition-all duration-300 hover:scale-110 hover:border-gold hover:text-gold hover:bg-gold/10"
        >
          <SocialIcon name={social.name} className="size-4" />
        </a>
      ))}
    </div>
  );
}

