import { motion, useScroll, useTransform } from "motion/react";
import { useIsScreenshotOrAutomated } from "../components/ui/utils";

const getFadeVariants = (isScreenshot: boolean) => ({
  fade: isScreenshot ? false : { opacity: 0, y: 20 },
  fadeOnly: isScreenshot ? false : { opacity: 0 },
  fadeLeft: isScreenshot ? false : { opacity: 0, x: -20 },
  fadeRight: isScreenshot ? false : { opacity: 0, x: 20 }
});

import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function Thesis() {
  useEffect(() => {
    document.title = "Thesis | Infrastructure Operating Architecture";
  }, []);

  return (
    <div className="pt-16">
      <ThesisHero />
      <Section01WhyEvolve />
      <Section02LandConstraints />
      <Section03InfraEnergy />
      <Section04PublicAssets />
      <Section05Ecosystems />
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE HERO — minimal editorial header
───────────────────────────────────────────── */
function ThesisHero() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  return (
    <section className="px-6 py-20 md:py-28 border-b border-foreground/10">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={anim.fadeOnly}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
              Institutional Publication · Infrastructure Category Thesis
            </p>
            <h1
              className="text-[clamp(3rem,9vw,7rem)] leading-[1.0] tracking-tight font-large"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Thesis
            </h1>
          </div>
          <div className="max-w-[380px]">
            <p className="text-base text-muted-foreground/200 leading-relaxed">
              Why infrastructure must become more than a passive physical asset —
              and how a new category of adaptive infrastructure–energy ecosystems
              emerges from that transformation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 01 — Why Infrastructure Must Evolve
   Layout: editorial text left + cinematic image right
───────────────────────────────────────────── */
function Section01WhyEvolve() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} className="min-h-screen flex items-stretch">
      {/* Left — text column */}
      <div className="w-full md:w-[38%] flex flex-col justify-center px-8 md:px-14 py-20 md:py-28">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          
          <h2
            className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.2] font-medium mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Why Infrastructure Must Evolve
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src="/thesis-1.JPG"
              alt="Infrastructure corridor — Samruddhi Expressway"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <p
            className="text-xl md:text-2xl leading-snug mb-8 font-medium"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            "Infrastructure faces growing pressures from climate adaptation,
            energy transition, modernization, and land constraints."
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-[400px]">
            Traditional infrastructure — designed for static, single-purpose
            operation — cannot meet the dynamic, multi-domain requirements of
            21st-century systems. The question is not whether infrastructure will
            evolve, but whether that evolution will be reactive or deliberate.
          </p>
        </motion.div>
      </div>

      {/* Right — cinematic image */}
      <div className="hidden md:flex md:w-[62%]  justify-center p-12 bg-muted/5 border-l border-foreground/10 relative">
        <div className="w-full max-w-[85%] aspect-[16/5] border border-foreground/15 shadow-lg relative z-10">
          <div className="w-full h-full overflow-hidden relative rounded-sm">
            <motion.img
              src="/thesis-1.JPG"
              alt="Infrastructure corridor — Samruddhi Expressway"
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[115%] object-cover object-center"
            />
          </div>
        </div>
        {/* Subtle grid pattern background for the frame to sit on */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 02 — Land Constraints & Energy Transition
   Layout: image left (with pull-quote overlay) + text right
───────────────────────────────────────────── */
function Section02LandConstraints() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="min-h-screen flex items-stretch bg-muted/20">
      {/* Left — cinematic image */}
      <div className="hidden md:flex md:w-[55%] justify-center p-12 bg-muted/5 border-r border-foreground/10 relative">
        <div className="w-full max-w-[85%] aspect-[20/10] border border-foreground/15 shadow-lg relative z-10">
          <div className="w-full h-full overflow-hidden relative rounded-sm">
            <motion.img
              src="/thesis-2.jpeg"
              alt="Infrastructure corridor aerial — land utilization"
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[115%] object-cover object-center"
            />
          </div>
        </div>
        {/* Subtle grid pattern background for the frame to sit on */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      </div>

      {/* Right — text column */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-14 py-20 md:py-28">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >

          <h2
            className="text-[clamp(1.8rem,3.2vw,2.4rem)] leading-[1.2] font-medium mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Land Constraints &amp; Energy Transition
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src="/thesis-2.jpeg"
              alt="Infrastructure corridor aerial — land utilization"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Pull-quote — moved here from image overlay */}
          <blockquote className="border-l-2 border-foreground/25 pl-5 mb-10">
            <p
              className="text-lg leading-snug font-medium"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              "The scale of the energy transition increasingly depends on how
              efficiently existing land and infrastructure assets are utilized."
            </p>
          </blockquote>

          {/* Key claim */}
          <p className="text-sm font-semibold tracking-wide uppercase text-foreground/70 mb-6">
            Land is the critical constraint.
          </p>

          {/* Data assertions strip */}
          <div className="space-y-3 border-t border-foreground/10 pt-6">
            {[
              "Elevated corridors → untapped surface area",
              "Embankments → strategic grid positioning",
              "Rights-of-way → productive energy assets",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-foreground/25 mt-1 shrink-0">—</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 03 — Infrastructure Failure & Resilience
   Layout: editorial text left + cinematic image right
───────────────────────────────────────────── */
function Section03InfraEnergy() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} className="min-h-screen flex items-stretch">
      {/* Left — text column */}
      <div className="w-full md:w-[38%] flex flex-col justify-center px-8 md:px-14 py-20 md:py-28">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-[clamp(1.8rem,3.2vw,2.4rem)] leading-[1.2] font-medium mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Infrastructure Failure<br />&amp; Resilience
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src="/thesis-3.jpeg"
              alt="Infrastructure Failure &amp; Resilience"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <blockquote className="border-l-2 border-foreground/25 pl-5 mb-8">
            <p
              className="text-lg leading-snug font-medium italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              "Infrastructure failures are becoming more frequent, more expensive, and more interconnected."
            </p>
          </blockquote>

          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 mb-8">
            <p>
              As infrastructure networks age and environmental pressures increase, failures can no longer be viewed as isolated engineering events.
            </p>
            <p>
              Transport disruption, flood events, structural degradation, and operational interruptions increasingly create cascading consequences across entire regions.
            </p>
            <p>
              Future infrastructure must be designed not only to perform, but to adapt, monitor, and respond.
            </p>
          </div>

          {/* Insight blocks */}
          <div className="space-y-5 border-t border-foreground/10 pt-6">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/75 mb-1.5">
                RESILIENCE
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Adaptive infrastructure requires continuous visibility into structural and environmental conditions.
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/75 mb-1.5">
                MONITORING
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Infrastructure intelligence transforms reactive maintenance into proactive resilience management.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right — cinematic image */}
      <div className="hidden md:flex md:w-[62%] items- justify-center p-12 bg-muted/5 border-l border-foreground/10 relative">
        <div className="w-full max-w-[85%] aspect-[16/10] border border-foreground/15 shadow-lg relative z-10">
          <div className="w-full h-full overflow-hidden relative rounded-sm">
            <motion.img
              src="/thesis-3.jpeg"
              alt="Infrastructure Failure &amp; Resilience"
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[115%] object-cover object-center"
            />
          </div>
        </div>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 04 — Public Asset Optimization
   Layout: cinematic image left + editorial text right
───────────────────────────────────────────── */
function Section04PublicAssets() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="min-h-screen flex items-stretch bg-muted/30">
      {/* Left — cinematic image */}
      <div className="hidden md:flex md:w-[55%] items- justify-center p-12 bg-muted/5 border-r border-foreground/10 relative">
        <div className="w-full max-w-[85%] aspect-[16/10] border border-foreground/15 shadow-lg relative z-10">
          <div className="w-full h-full overflow-hidden relative rounded-sm">
            <motion.img
              src="/thesis-4.jpeg"
              alt="Public Asset Optimization"
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[115%] object-cover object-center"
            />
          </div>
        </div>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      </div>

      {/* Right — text column */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-14 py-20 md:py-28">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >

          <h2
            className="text-[clamp(1.8rem,3.2vw,2.4rem)] leading-[1.2] font-medium mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Public Asset<br />Optimization
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src="/thesis-4.jpeg"
              alt="Public Asset Optimization"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <blockquote className="border-l-2 border-foreground/25 pl-5 mb-8">
            <p
              className="text-lg leading-snug font-medium italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              "The greatest infrastructure opportunity may already exist within the assets we have built."
            </p>
          </blockquote>

          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 mb-8">
            <p>
              Governments and infrastructure authorities manage vast networks of corridors, embankments, rights-of-way, and public infrastructure systems.
            </p>
            <p>
              These assets occupy strategic land, operate at scale, and already serve critical public functions.
            </p>
            <p>
              The next step is to unlock additional value from these assets without requiring entirely new infrastructure footprints.
            </p>
          </div>

          {/* Insight blocks */}
          <div className="space-y-5 border-t border-foreground/10 pt-6">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/75 mb-1.5">
                LAND UTILIZATION
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Infrastructure corridors represent significant underutilized spatial resources.
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/75 mb-1.5">
                VALUE CREATION
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Existing infrastructure can support additional resilience, intelligence, and energy functions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 05 — Adaptive Infrastructure–Energy Ecosystems
   Layout: editorial text left + cinematic image right
───────────────────────────────────────────── */
function Section05Ecosystems() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-between">
      {/* Content wrapper */}
      <div className="flex-1 flex items-stretch">
        {/* Left — text column */}
        <div className="w-full md:w-[38%] flex flex-col justify-center px-8 md:px-14 py-20 md:py-28">
          <motion.div
            initial={isScreenshot ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >

            <h2
              className="text-[clamp(1.8rem,3.2vw,2.4rem)] leading-[1.2] font-medium mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Adaptive Infrastructure-<br />Energy Ecosystems
            </h2>

            {/* MOBILE IMAGE BLOCK */}
            <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
              <img
                src="/thesis-5.jpeg"
                alt="Adaptive Infrastructure-Energy Ecosystems"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            <blockquote className="border-l-2 border-foreground/25 pl-5 mb-8">
              <p
                className="text-lg leading-snug font-medium italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                "Infrastructure must evolve from passive assets into active infrastructure-energy ecosystems."
              </p>
            </blockquote>

            <div className="text-sm text-muted-foreground leading-relaxed space-y-4 mb-8">
              <p>
                The future of infrastructure will not be defined solely by mobility, protection, or connectivity.
              </p>
              <p>
                It will be defined by the ability of infrastructure to integrate energy generation, operational intelligence, environmental adaptation, and long-term value creation within a unified ecosystem architecture.
              </p>
              <p>
                This transition forms the foundation of the Integrated Energy Transition Ecosystem (iETE).
              </p>
            </div>

            {/* Insight blocks */}
            <div className="space-y-5 border-t border-foreground/10 pt-6">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/75 mb-1.5">
                  INTEGRATION
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Infrastructure, energy, and intelligence operate as a coordinated system rather than independent layers.
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground/75 mb-1.5">
                  TRANSFORMATION
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Infrastructure becomes an active participant in resilience, sustainability, and the energy transition.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — cinematic image */}
        <div className="hidden md:flex md:w-[62%] items- justify-center p-12 bg-muted/5 border-l border-foreground/10 relative">
          <div className="w-full max-w-[85%] aspect-[16/10] border border-foreground/15 shadow-lg relative z-10">
            <div className="w-full h-full overflow-hidden relative rounded-sm">
              <motion.img
                src="/thesis-5.jpeg"
                alt="Adaptive Infrastructure-Energy Ecosystems"
                style={{ y: imageY }}
                className="absolute inset-0 w-full h-[115%] object-cover object-center"
              />
            </div>
          </div>
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        </div>
      </div>

      {/* Footer — publication footnote + CTA */}
      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-14 py-8 border-t border-foreground/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40">
          TPS — Infrastructure Operating Architecture · Institutional Publication · 2026
        </p>

        <div className="flex items-center gap-8">
          <Link
            to="/architecture"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase border-b-2 border-foreground pb-1 hover:opacity-60 transition-opacity"
          >
            Explore Architecture
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/value-creation"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase opacity-50 hover:opacity-80 transition-opacity"
          >
            Value Creation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
