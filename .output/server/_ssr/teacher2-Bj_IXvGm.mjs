import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/teacher2-Bj_IXvGm.js
var import_jsx_runtime = require_jsx_runtime();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.figure, {
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
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			width: w,
			height: h,
			loading: eager ? "eager" : "lazy",
			className: `h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05] ${imgClassName}`
		})
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
var group1_default = "/assets/group1-De5XK8Rr.jpg";
var teacher1_default = "/assets/teacher1-BYYFvEb1.jpg";
var teacher2_default = "/assets/teacher2-BAjS-WVP.jpg";
//#endregion
export { SectionLabel as a, teacher1_default as c, RevealImage as i, teacher2_default as l, MaskText as n, ease as o, Reveal as r, group1_default as s, CircleButton as t };
