import { n as __toESM } from "../_runtime.mjs";
import { i as useScroll, n as useTransform, o as AnimatePresence, r as useMotionValue, s as performance_default, t as useSpring } from "../_libs/framer-motion+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D55Uw2hz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function Cursor() {
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const sx = useSpring(x, {
		stiffness: 400,
		damping: 40
	});
	const sy = useSpring(y, {
		stiffness: 400,
		damping: 40
	});
	const [label, setLabel] = (0, import_react.useState)(null);
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
		setEnabled(true);
		document.body.classList.add("has-cursor");
		const move = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
			const el = e.target.closest("[data-cursor], a, button, input, textarea, select");
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference",
		style: {
			x: sx,
			y: sy
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "-translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full border border-ivory",
			animate: {
				width: big ? 92 : hover ? 36 : 10,
				height: big ? 92 : hover ? 36 : 10,
				backgroundColor: big || !hover ? "var(--ivory)" : "transparent"
			},
			transition: {
				duration: .45,
				ease: [
					.7,
					0,
					.2,
					1
				]
			},
			children: big && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					opacity: 0,
					rotate: -20
				},
				animate: {
					opacity: 1,
					rotate: 0
				},
				className: "eyebrow text-center text-[0.55rem] leading-tight text-ink",
				children: label
			})
		})
	});
}
var ease = [
	.7,
	0,
	.2,
	1
];
/** Masked line-by-line headline reveal: movement → pause → movement */
function MaskText({ lines, className = "", delay = 0, as: Tag = "h2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		className,
		children: lines.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block overflow-hidden pb-[0.08em]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "block",
				initial: { y: "110%" },
				whileInView: { y: 0 },
				viewport: {
					once: true,
					margin: "-10%"
				},
				transition: {
					duration: 1.1,
					ease,
					delay: delay + i * .14
				},
				children: l
			})
		}, i))
	});
}
var fade = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0
	}
};
function Reveal({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants: fade,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-10%"
		},
		transition: {
			duration: .9,
			ease,
			delay
		},
		children
	});
}
/** Image that unveils like a curtain lifting */
function RevealImage({ src, alt, className = "", imgClassName = "", w, h, cursor = "VIEW STORY", eager = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
		"data-cursor": cursor,
		className: `group relative overflow-hidden ${className}`,
		initial: { clipPath: "inset(100% 0 0 0)" },
		whileInView: { clipPath: "inset(0% 0 0 0)" },
		viewport: {
			once: true,
			margin: "-10%"
		},
		transition: {
			duration: 1.4,
			ease
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			width: w,
			height: h,
			loading: eager ? "eager" : "lazy",
			className: `h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05] ${imgClassName}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "eyebrow absolute bottom-2 right-2 bg-ink/70 px-2 py-1 text-[0.55rem] text-ivory/70",
			children: "Illustrative image"
		})]
	});
}
/** Circular dance-inspired button */
function CircleButton({ label, href = "#contact", variant = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		"data-cursor": "BEGIN",
		className: "group relative inline-flex items-center gap-5 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: `relative grid size-16 shrink-0 place-items-center rounded-full border transition-all duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-110 sm:size-20 ${variant === "solid" ? "border-maroon bg-maroon text-ivory group-hover:bg-ivory group-hover:text-ink group-hover:border-ivory" : "border-ivory/50 text-ivory group-hover:bg-ivory group-hover:text-ink"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-[-6px] rounded-full border border-gold/0 transition-all duration-700 group-hover:inset-[-12px] group-hover:border-gold/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xl transition-transform duration-700 group-hover:-rotate-45",
				children: "→"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow text-[0.72rem] text-ivory transition-[letter-spacing] duration-700 group-hover:tracking-[0.42em]",
			children: label
		})]
	});
}
function SectionLabel({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4 text-gold",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "display text-2xl italic",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-gold/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: label
			})
		]
	});
}
var navLinks = [
	["Academy", "#academy"],
	["Dance", "#dance"],
	["Young Dancers", "#young"],
	["Journey", "#events"],
	["Gallery", "#gallery"],
	["Contact", "#contact"]
];
function Nav() {
	const [compact, setCompact] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setCompact(window.scrollY > 60);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-700 ${compact ? "bg-ink/85 py-3 backdrop-blur-md" : "py-6"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "display text-xl tracking-[0.28em] text-ivory md:text-2xl",
					"data-cursor": "",
					children: "RANGAVEDA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex gap-9",
						children: navLinks.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: h,
							className: "link-dance eyebrow text-ivory/80 hover:text-ivory",
							children: l
						}) }, l))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "eyebrow hidden border border-gold/60 px-5 py-3 text-gold transition-colors duration-500 hover:bg-gold hover:text-ink sm:inline-block",
						children: "Join a class"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(true),
						"aria-label": "Open menu",
						className: "flex h-11 w-11 flex-col items-end justify-center gap-1.5 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-7 bg-ivory" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-4 bg-ivory" })]
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[60] flex lg:hidden",
		initial: "closed",
		animate: "open",
		exit: "closed",
		children: [[
			0,
			1,
			2,
			3
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: `h-full flex-1 ${i % 2 ? "bg-maroon" : "bg-[color-mix(in_oklab,var(--maroon)_85%,black)]"}`,
			variants: {
				closed: {
					scaleY: 0,
					transition: {
						duration: .6,
						ease,
						delay: (3 - i) * .05
					}
				},
				open: {
					scaleY: 1,
					transition: {
						duration: .8,
						ease,
						delay: i * .07
					}
				}
			},
			style: { transformOrigin: "top" }
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "absolute inset-0 flex flex-col justify-between px-6 py-6",
			variants: {
				closed: { opacity: 0 },
				open: {
					opacity: 1,
					transition: { delay: .45 }
				}
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "display text-xl tracking-[0.28em]",
						children: "RANGAVEDA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(false),
						"aria-label": "Close menu",
						className: "eyebrow h-11 px-2",
						children: "Close"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: navLinks.map(([l, h], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: h,
							onClick: () => setOpen(false),
							className: "display flex items-baseline gap-4 py-1 text-5xl",
							variants: {
								closed: { y: "100%" },
								open: {
									y: 0,
									transition: {
										duration: .8,
										ease,
										delay: .5 + i * .06
									}
								}
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow text-gold",
								children: ["0", i + 1]
							}), l]
						})
					}, l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "eyebrow border border-gold py-4 text-center text-gold",
					children: "Join a class →"
				})
			]
		})]
	}) })] });
}
var hero_dancer_default = "/assets/hero-dancer-DOj_i_-Z.jpg";
var drums_default = "/assets/drums-Cueabjs7.jpg";
var children_default = "/assets/children-DXHWfd_I.jpg";
var feet_default = "/assets/feet-CHmmryde.jpg";
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "top",
		className: "grain relative min-h-[100svh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-12 px-5 pb-10 pt-28 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-1 hidden items-end md:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow origin-bottom-left -rotate-90 translate-x-4 whitespace-nowrap text-ivory/60",
						children: "Sri Lanka \xA0/\xA0 Traditional Dance \xA0/\xA0 Est. 2018"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "relative col-span-12 h-[62svh] overflow-hidden md:col-span-7 md:col-start-5 md:h-auto",
					initial: { clipPath: "inset(0 0 100% 0)" },
					animate: { clipPath: "inset(0 0 0% 0)" },
					transition: {
						duration: 1.8,
						ease
					},
					"data-cursor": "VIEW STORY",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: hero_dancer_default,
						alt: "A Kandyan dancer mid-leap in traditional ves costume",
						width: 1280,
						height: 1600,
						style: {
							y,
							scale
						},
						className: "h-full w-full object-cover object-[50%_25%]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow absolute bottom-3 right-3 bg-ink/70 px-2 py-1 text-[0.55rem] text-ivory/70",
						children: "Illustrative image"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "pointer-events-none absolute inset-0 h-full w-full",
				viewBox: "0 0 1600 1000",
				preserveAspectRatio: "none",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					className: "animate-draw",
					d: "M-20 720 C 300 560, 520 900, 820 640 S 1300 300, 1640 460",
					fill: "none",
					stroke: "var(--gold)",
					strokeOpacity: ".45",
					strokeWidth: "1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					className: "animate-draw [animation-delay:1s]",
					d: "M-20 780 C 340 640, 560 960, 860 700 S 1320 380, 1640 540",
					fill: "none",
					stroke: "var(--terracotta)",
					strokeOpacity: ".5",
					strokeWidth: "1"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-5 pb-10 md:px-10 md:pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskText, {
					as: "h1",
					delay: .7,
					lines: ["Where heritage", "finds its rhythm."],
					className: "display max-w-[14ch] text-[clamp(3.2rem,9.5vw,10rem)] text-ivory md:ml-[8%]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-8 md:ml-[8%] md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							delay: 1.6,
							duration: 1
						},
						className: "max-w-sm text-sm leading-relaxed text-ivory/75",
						children: "Sri Lankan traditional dance, presented for a new generation. Kandyan, Low Country and Sabaragamuwa — taught to children, teenagers and young dancers."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1.9,
							duration: 1,
							ease
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleButton, {
							label: "Explore the academy",
							href: "#academy"
						})
					})]
				})]
			})
		]
	});
}
function Roots() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "academy",
		className: "relative mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-44",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-12 gap-y-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskText, {
					lines: [
						"Tradition",
						"is not",
						"still."
					],
					className: "display col-span-12 text-[clamp(4rem,13vw,13rem)] italic text-clay md:col-span-8"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "col-span-12 self-end md:col-span-3 md:col-start-10",
					delay: .3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-2xl leading-snug text-ivory",
						children: "Passed from teacher to student, movement becomes memory."
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "motif-border my-24 opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-12 gap-y-12 md:gap-x-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-12 md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							n: "01",
							label: "The Roots"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskText, {
							lines: ["A movement carried", "through generations."],
							className: "display mt-8 text-[clamp(2.4rem,4.8vw,4.6rem)]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: .2,
							className: "mt-10 max-w-md space-y-5 text-[0.95rem] leading-relaxed text-ivory/75",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Kandyan dance grew from the hill country of Sri Lanka and remains one of the island's most recognised art forms — known for its powerful leaps, sweeping arms and the silver ornaments of the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "ves" }),
								" costume."
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"It is never danced alone. The ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "geta bera" }),
								" drum leads, the dancer answers, and rhythm becomes a conversation. Learning it asks for discipline, stamina and respect for those who taught before us."
							] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-12 grid grid-cols-6 gap-4 md:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
						src: drums_default,
						alt: "Hands playing a geta bera drum",
						w: 1408,
						h: 1024,
						className: "col-span-6 aspect-[4/3]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
						src: feet_default,
						alt: "Ankle bells on a dancer's feet",
						w: 1024,
						h: 1280,
						className: "col-span-3 col-start-4 -mt-24 aspect-[4/5] border-8 border-ink md:-mt-40"
					})]
				})]
			})
		]
	});
}
var forms = [
	{
		n: "01",
		t: "Kandyan Dance",
		d: "The hill-country form. Leaps, spins and controlled strength, carried by the geta bera.",
		img: hero_dancer_default,
		alt: hero_dancer_default
	},
	{
		n: "02",
		t: "Low Country Dance",
		d: "From the southern coast — masked, dramatic and rooted in ritual storytelling.",
		img: feet_default,
		alt: drums_default
	},
	{
		n: "03",
		t: "Sabaragamuwa Dance",
		d: "Graceful and grounded, shaped by the rhythms of the dawula drum.",
		img: children_default,
		alt: feet_default
	},
	{
		n: "04",
		t: "Traditional Drumming",
		d: "Learn the beat every dancer listens for. Rhythm, timing and call-and-response.",
		img: drums_default,
		alt: hero_dancer_default
	}
];
function DanceForms() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);
	const Panel = ({ f }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		"data-cursor": "EXPLORE",
		className: "group relative w-[80vw] shrink-0 md:w-[38vw]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[3/4] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: f.img,
					alt: f.t,
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover transition-all duration-[1.4s] ease-out group-hover:scale-110 group-hover:opacity-0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: f.alt,
					alt: "",
					"aria-hidden": true,
					loading: "lazy",
					className: "absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-[1.4s] ease-out group-hover:scale-100 group-hover:opacity-100"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "display absolute left-5 top-4 text-6xl italic text-ivory/90",
					children: f.n
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex items-start justify-between gap-6 border-t border-border pt-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "display text-3xl md:text-4xl",
				children: f.t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xs text-sm leading-relaxed text-ivory/65",
				children: f.d
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-12 shrink-0 place-items-center rounded-full border border-ivory/40 transition-all duration-700 group-hover:-rotate-45 group-hover:bg-terracotta group-hover:border-terracotta",
				children: "→"
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "dance",
		ref,
		className: "relative hidden h-[300vh] bg-maroon md:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 flex h-screen flex-col justify-center overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-10 flex w-full max-w-[1600px] items-end justify-between px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display text-[clamp(3rem,6vw,6.5rem)]",
					children: [
						"The language",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-gold",
							children: "of movement"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					n: "02",
					label: "Dance forms"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { x },
				className: "flex gap-10 pl-10",
				children: forms.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { f }, f.n))
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-maroon py-20 md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				n: "02",
				label: "Dance forms"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "display mt-6 text-5xl",
				children: ["The language ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "text-gold",
					children: "of movement"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4",
			children: forms.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "snap-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { f })
			}, f.n))
		})]
	})] });
}
var groups = [
	{
		name: "Little Rhythm",
		ages: "Ages 4–7",
		img: children_default,
		copy: "Playful first steps. Counting beats, balance, posture and the joy of moving to the drum.",
		sched: "Saturdays · 45 min"
	},
	{
		name: "Young Performers",
		ages: "Ages 8–12",
		img: feet_default,
		copy: "Foundational Kandyan vocabulary, coordination and first stage experience in academy showcases.",
		sched: "Sat & Wed · 60 min"
	},
	{
		name: "Future Artists",
		ages: "Ages 13–17",
		img: hero_dancer_default,
		copy: "Advanced technique, stamina and expression — preparing for performances and graded progress.",
		sched: "Sat & Thu · 90 min"
	}
];
function Wave() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex h-6 items-end gap-[3px]",
		"aria-hidden": true,
		children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "animate-bar w-[2px] bg-gold",
			style: {
				height: "100%",
				animationDelay: `${i * 97 % 600}ms`
			}
		}, i))
	});
}
function NextGeneration() {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "young",
		className: "relative overflow-hidden py-28 md:py-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "sync",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: groups[active].img,
					alt: "",
					"aria-hidden": true,
					initial: {
						opacity: 0,
						scale: 1.08
					},
					animate: {
						opacity: .22,
						scale: 1
					},
					exit: { opacity: 0 },
					transition: {
						duration: 1.2,
						ease
					},
					className: "absolute inset-0 h-full w-full object-cover"
				}, active)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-[1600px] grid-cols-12 gap-y-14 px-5 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-12 md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							n: "03",
							label: "Young dancers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskText, {
							lines: ["The next", "generation."],
							className: "display mt-8 text-[clamp(3rem,7vw,7rem)]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 max-w-sm text-lg leading-relaxed text-ivory/80",
								children: "We don't only teach steps. We help young dancers discover discipline, confidence, rhythm and culture."
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "col-span-12 border-t border-border md:col-span-6 md:col-start-7",
					children: groups.map((g, i) => {
						const on = active === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							"data-cursor": "EXPLORE",
							onMouseEnter: () => setActive(i),
							onClick: () => setActive(i),
							className: "relative border-b border-border py-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "eyebrow text-gold",
										children: ["0", i + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: `display text-4xl transition-all duration-700 md:text-6xl ${on ? "translate-x-3 text-ivory" : "text-ivory/45"}`,
										children: g.name
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow shrink-0 text-ivory/60",
									children: g.ages
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								initial: false,
								children: on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										height: 0,
										opacity: 0
									},
									animate: {
										height: "auto",
										opacity: 1
									},
									exit: {
										height: 0,
										opacity: 0
									},
									transition: {
										duration: .7,
										ease
									},
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-6 pt-6 md:pl-12 sm:flex-row sm:items-end sm:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "max-w-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-ivory/75",
												children: g.copy
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "eyebrow mt-4 text-clay",
												children: g.sched
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wave, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#contact",
												className: "link-dance eyebrow text-gold",
												children: "Discover the class ↗"
											})]
										})]
									})
								})
							})]
						}, g.name);
					})
				})]
			})
		]
	});
}
var principles = [
	["Discipline", "Regular practice, focus and respect in the studio."],
	["Confidence", "Performing in front of others, step by step."],
	["Culture", "Understanding the stories, drums and costumes behind each form."],
	["Creativity", "Expression within a tradition — finding their own voice."]
];
function Principles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-12 gap-y-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-12 md:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					n: "04",
					label: "Why parents choose us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-sm leading-relaxed text-ivory/75",
						children: "Children learn traditional movement while developing confidence, coordination and a lasting appreciation for Sri Lankan culture — in small classes, with patient teachers."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative col-span-12 md:col-span-7 md:col-start-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					className: "absolute left-3 top-0 w-px origin-top bg-gold/50",
					initial: { scaleY: 0 },
					whileInView: { scaleY: 1 },
					viewport: { once: true },
					transition: {
						duration: 2.4,
						ease
					},
					style: { height: "100%" }
				}), principles.map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .15,
					className: `relative py-8 pl-12 ${i % 2 ? "md:pl-40" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[9px] top-[3.3rem] size-2 rotate-45 bg-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display text-[clamp(2.6rem,6vw,6rem)] uppercase",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "display text-xl italic text-gold",
								children: ["0", i + 1]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-sm text-sm text-ivory/60",
							children: d
						})
					]
				}, t))]
			})]
		})
	});
}
var teachers = [
	{
		name: "Teacher Name",
		role: "Kandyan dance · Lead instructor",
		yrs: "— years teaching",
		bio: "Placeholder profile. Replace with the teacher's real biography, training lineage and photograph."
	},
	{
		name: "Teacher Name",
		role: "Low Country dance",
		yrs: "— years teaching",
		bio: "Placeholder profile. Replace with the teacher's real biography and photograph."
	},
	{
		name: "Teacher Name",
		role: "Geta bera & drumming",
		yrs: "— years teaching",
		bio: "Placeholder profile. Replace with the drummer's real biography and photograph."
	}
];
function PortraitPlaceholder({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid aspect-[3/4] place-items-center overflow-hidden bg-card",
		"data-cursor": "VIEW STORY",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-6 border border-gold/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(135deg,transparent_0_14px,color-mix(in_oklab,var(--gold)_40%,transparent)_14px_15px)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow relative bg-ink px-3 py-2 text-[0.6rem] text-ivory/60",
				children: label
			})
		]
	});
}
function Teachers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-ivory py-28 text-ink md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow absolute left-4 top-40 hidden origin-top-left rotate-90 translate-x-4 whitespace-nowrap text-maroon md:block",
			children: "Meet the people behind the movement"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-5 md:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskText, {
					lines: ["The hands that", "pass it on."],
					className: "display text-[clamp(2.8rem,6vw,6rem)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-maroon md:hidden",
					children: "Meet the people behind the movement"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-10 md:grid-cols-12",
				children: teachers.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .12,
					className: i === 0 ? "md:col-span-5" : i === 1 ? "md:col-span-3 md:col-start-7 md:mt-32" : "md:col-span-3 md:mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortraitPlaceholder, { label: "Portrait placeholder" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 border-t border-ink/20 pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display text-3xl",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-2 text-terracotta",
								children: t.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-1 text-ink/50",
								children: t.yrs
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xs text-sm text-ink/70",
								children: t.bio
							})
						]
					})]
				}, i))
			})]
		})]
	});
}
var events = [
	{
		d: "12",
		m: "Dec",
		t: "Annual Cultural Showcase",
		p: "Colombo",
		img: hero_dancer_default
	},
	{
		d: "08",
		m: "Feb",
		t: "Traditional Dance Evening",
		p: "Galle",
		img: feet_default
	},
	{
		d: "14",
		m: "Apr",
		t: "Avurudu Celebration Performance",
		p: "Colombo",
		img: drums_default
	},
	{
		d: "21",
		m: "Jun",
		t: "Young Dancers' Open Studio",
		p: "Academy Hall",
		img: children_default
	}
];
function Events() {
	const [hover, setHover] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "events",
		className: "mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-12 gap-y-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-12 md:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						n: "05",
						label: "Performances"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskText, {
						lines: ["When the stage", "comes alive."],
						className: "display mt-8 text-[clamp(2.8rem,5vw,5rem)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-6 text-ivory/50",
						children: "Sample dates — confirm with the academy"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "relative col-span-12 md:col-span-7 md:col-start-6",
				onMouseLeave: () => setHover(null),
				children: [events.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					"data-cursor": "VIEW",
					onMouseEnter: () => setHover(i),
					className: "group grid grid-cols-[4.5rem_1fr_auto] items-center gap-5 border-b border-border py-7 md:grid-cols-[6rem_1fr_auto]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display block text-5xl text-gold md:text-6xl",
								children: e.d
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: e.m
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "transition-transform duration-700 group-hover:translate-x-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display text-2xl md:text-4xl",
								children: e.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-2 text-ivory/50",
								children: e.p
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl transition-transform duration-700 group-hover:-rotate-45",
							children: "→"
						})
					]
				}, e.t)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: hover !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: events[hover].img,
					alt: "",
					"aria-hidden": true,
					initial: {
						opacity: 0,
						scale: .9,
						rotate: -3
					},
					animate: {
						opacity: 1,
						scale: 1,
						rotate: 2
					},
					exit: { opacity: 0 },
					transition: {
						duration: .5,
						ease
					},
					className: "pointer-events-none absolute -left-72 hidden aspect-[3/4] w-56 object-cover lg:block",
					style: { top: hover * 120 }
				}, hover) })]
			})]
		})
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "relative overflow-hidden py-28 md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-[clamp(3rem,8vw,8rem)] italic text-clay",
					children: "Moments"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					n: "06",
					label: "Gallery"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid grid-cols-6 gap-4 md:grid-cols-12 md:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
						src: hero_dancer_default,
						alt: "Kandyan dancer leap",
						w: 1280,
						h: 1600,
						className: "col-span-4 aspect-[4/5] md:col-span-5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-2 flex flex-col justify-end md:col-span-3 md:col-start-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display text-lg italic text-ivory/70 md:text-2xl",
							children: "“The leap is earned in the hundredth repetition.”"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
						src: feet_default,
						alt: "Ankle bells close-up",
						w: 1024,
						h: 1280,
						className: "col-span-3 aspect-[3/4] md:col-span-3 md:col-start-10 md:-mt-40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
						src: children_default,
						alt: "Children practising",
						w: 1408,
						h: 1024,
						className: "col-span-6 aspect-[16/10] md:col-span-7 md:col-start-3 md:-mt-16 md:z-10 md:border-[10px] md:border-ink"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealImage, {
						src: drums_default,
						alt: "Drummer's hands",
						w: 1408,
						h: 1024,
						className: "col-span-3 aspect-square md:col-span-3 md:col-start-10 md:mt-24"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-24 overflow-hidden border-y border-border py-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-marquee flex w-max gap-16 whitespace-nowrap",
				children: Array.from({ length: 2 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "display flex gap-16 text-4xl italic text-ivory/30 md:text-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kandyan" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "◆"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pahatharata" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "◆"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sabaragamuwa" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "◆"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Geta Bera" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "◆"
						})
					]
				}, k))
			})
		})]
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grain relative overflow-hidden bg-terracotta py-32 md:py-48",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: "pointer-events-none absolute -right-40 top-1/2 size-[900px] -translate-y-1/2 opacity-25",
			viewBox: "0 0 200 200",
			"aria-hidden": true,
			children: [
				90,
				75,
				60,
				45,
				30
			].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "100",
				r,
				fill: "none",
				stroke: "var(--ivory)",
				strokeWidth: ".3"
			}, r))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1600px] px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskText, {
					lines: ["Your first step", "starts here."],
					className: "display text-[clamp(3.2rem,10vw,11rem)] text-ivory"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-md text-lg text-ivory/85",
					children: "Come learn the movement. Carry the tradition forward."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-col gap-8 sm:flex-row sm:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleButton, {
						label: "Book a trial class",
						variant: "solid"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleButton, { label: "Talk to the academy" })]
				})
			]
		})]
	});
}
/** Visual drum-rhythm simulation. Click / tap to strike; the waves answer. */
function Rhythm() {
	const canvas = (0, import_react.useRef)(null);
	const strikes = (0, import_react.useRef)([]);
	const [beats, setBeats] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const c = canvas.current;
		const ctx = c.getContext("2d");
		const css = getComputedStyle(document.documentElement);
		const gold = css.getPropertyValue("--gold").trim() || "#c9a96a";
		const terra = css.getPropertyValue("--terracotta").trim() || "#b0603d";
		let raf = 0;
		let mx = .5, my = .5;
		const resize = () => {
			const r = c.getBoundingClientRect();
			c.width = r.width * devicePixelRatio;
			c.height = r.height * devicePixelRatio;
		};
		resize();
		window.addEventListener("resize", resize);
		const onMove = (e) => {
			const r = c.getBoundingClientRect();
			mx = (e.clientX - r.left) / r.width;
			my = (e.clientY - r.top) / r.height;
		};
		c.addEventListener("pointermove", onMove);
		const pattern = [
			1,
			0,
			0,
			.5,
			0,
			1,
			.5,
			0
		];
		let step = 0;
		const tick = setInterval(() => {
			const p = pattern[step++ % pattern.length];
			if (p) strikes.current.push({
				t: performance_default.now(),
				x: .5,
				y: .5,
				p
			});
		}, 360);
		const draw = (now) => {
			const w = c.width, h = c.height, dpr = devicePixelRatio;
			ctx.clearRect(0, 0, w, h);
			strikes.current = strikes.current.filter((s) => now - s.t < 2600);
			for (const s of strikes.current) {
				const age = (now - s.t) / 2600;
				const r = age * Math.max(w, h) * .55 * (.6 + s.p * .4);
				ctx.beginPath();
				ctx.arc(s.x * w, s.y * h, r, 0, Math.PI * 2);
				ctx.strokeStyle = s.p > 1 ? terra : gold;
				ctx.globalAlpha = (1 - age) * (s.p > 1 ? .9 : .5);
				ctx.lineWidth = dpr * (s.p > 1 ? 1.6 : 1);
				ctx.stroke();
			}
			ctx.globalAlpha = .35;
			ctx.strokeStyle = gold;
			ctx.lineWidth = dpr * .6;
			const energy = strikes.current.reduce((a, s) => a + Math.max(0, 1 - (now - s.t) / 500) * s.p, 0);
			for (let i = 0; i < 14; i++) {
				const yb = h / 15 * (i + 1);
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
	const strike = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		strikes.current.push({
			t: performance_default.now(),
			x: (e.clientX - r.left) / r.width,
			y: (e.clientY - r.top) / r.height,
			p: 2
		});
		setBeats((b) => b + 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[90svh] min-h-[560px] overflow-hidden border-y border-border bg-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvas,
			onPointerDown: strike,
			"data-cursor": "STRIKE",
			"aria-label": "Interactive rhythm visual. Tap to strike the drum.",
			className: "absolute inset-0 h-full w-full touch-manipulation"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none relative mx-auto flex h-full max-w-[1600px] flex-col justify-between px-5 py-14 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					n: "07",
					label: "Interaction"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display text-center text-[clamp(3rem,9vw,9rem)] animate-in zoom-in-[0.98] duration-300",
					children: ["Listen to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-gold",
						children: "the rhythm"
					})]
				}, beats),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-center text-ivory/60",
					children: "Tap anywhere to strike the geta bera"
				})
			]
		})]
	});
}
var field = "w-full border-0 border-b border-ivory/25 bg-transparent py-4 text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none transition-colors";
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-12 gap-y-16 md:gap-x-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-12 md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							n: "08",
							label: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display mt-8 text-[clamp(2.8rem,5vw,5rem)]",
							children: ["Begin the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-gold",
								children: "journey."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-12 grid grid-cols-2 gap-8 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow text-clay",
									children: "Studio"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-2 text-ivory/80",
									children: [
										"Address to be confirmed",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Colombo, Sri Lanka"
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow text-clay",
									children: "Talk to us"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-2 text-ivory/80",
									children: [
										"+94 00 000 0000",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"hello@rangaveda.lk"
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow text-clay",
									children: "Classes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-2 text-ivory/80",
									children: [
										"Wed & Thu · 4–7 pm",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Sat · 8 am–1 pm"
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "eyebrow text-clay",
									children: "Follow"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-2 flex flex-col text-ivory/80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "link-dance w-fit",
											href: "#",
											children: "Instagram"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "link-dance w-fit",
											href: "#",
											children: "Facebook"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "link-dance w-fit",
											href: "#",
											children: "YouTube"
										})
									]
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 aspect-[16/9] overflow-hidden border border-border grayscale",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Academy location map",
								loading: "lazy",
								className: "h-full w-full",
								src: "https://www.google.com/maps?q=Colombo,Sri+Lanka&output=embed"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "col-span-12 md:col-span-6 md:col-start-7",
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
						toast("Thank you — the academy will be in touch soon.");
						e.target.reset();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-ivory/60",
							children: "Enquire about a trial class"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-2 sm:grid-cols-2 sm:gap-x-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Parent / Student name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "name",
										placeholder: "Parent / Student name",
										className: field
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Age"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									name: "age",
									type: "number",
									min: 3,
									max: 99,
									placeholder: "Age of dancer",
									className: field
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Dance interest"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "interest",
									defaultValue: "",
									required: true,
									className: `${field} [&>option]:bg-ink`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Dance interest"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Kandyan Dance" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Low Country Dance" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sabaragamuwa Dance" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Traditional Drumming" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Not sure yet" })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Phone number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "phone",
										type: "tel",
										placeholder: "Phone number",
										className: field
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										rows: 3,
										placeholder: "Message",
										className: `${field} resize-none`
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							"data-cursor": "SEND",
							className: "group mt-12 flex w-full items-center justify-between border-y border-gold/60 py-6 text-gold transition-colors duration-700 hover:bg-gold hover:text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display px-2 text-3xl md:text-4xl",
								children: sent ? "Sent — thank you" : "Begin the journey"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-2 text-2xl transition-transform duration-700 group-hover:-rotate-45",
								children: "→"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "motif-border mt-28 opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display text-[clamp(3rem,12vw,12rem)] leading-none tracking-[0.12em] text-ivory/90",
					children: "RANGAVEDA"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-x-6 gap-y-2 pb-4",
					children: navLinks.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "link-dance eyebrow text-ivory/60",
						children: l
					}, l))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow pb-8 text-[0.6rem] text-ivory/40",
				children: "© RANGAVEDA Sri Lankan Traditional Dance Academy"
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Roots, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DanceForms, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextGeneration, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Principles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Teachers, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Events, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rhythm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
	] });
}
//#endregion
export { Index as component };
