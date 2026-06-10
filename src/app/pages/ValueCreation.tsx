import { motion, useScroll, useTransform } from "motion/react";
import { useIsScreenshotOrAutomated } from "../components/ui/utils";

const getFadeVariants = (isScreenshot: boolean) => ({
  fade: isScreenshot ? false : { opacity: 0, y: 20 },
  fadeOnly: isScreenshot ? false : { opacity: 0 },
  fadeLeft: isScreenshot ? false : { opacity: 0, x: -20 },
  fadeRight: isScreenshot ? false : { opacity: 0, x: 20 }
});

import { useEffect, useRef } from "react";

export default function ValueCreation() {
  useEffect(() => {
    document.title = "Value Creation | Infrastructure Operating Architecture";
  }, []);

  return (
    <div className="pt-16">
      <ValueCreationHero />
      <Section02EnergyValue />
      <Section03ResilienceValue />
      <Section04OperationalValue />
      <Section05StrategicValue />
      <Section06ClosingManifesto />
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION 01 — Value Creation Hero
───────────────────────────────────────────── */
function ValueCreationHero() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-end overflow-hidden">
      {/* Full-bleed hero image */}
      <motion.img
        src="/valCrea-background.jpeg"
        alt="Infrastructure corridor — strategic value"
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-[120%] object-cover object-center"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Content overlay at bottom */}
      <div className="relative z-10 w-full px-8 md:px-14 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={isScreenshot ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] font-medium text-white mb-8 max-w-[800px]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Value Creation
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-[600px] leading-relaxed mb-8">
              Existing infrastructure contains untapped strategic value.
              Adaptive Infrastructure–Energy Ecosystems transform these assets
              into multi-value platforms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 02 — Energy Value
   Layout: text left + image right
───────────────────────────────────────────── */
function Section02EnergyValue() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="min-h-screen flex items-stretch border-b border-foreground/10 overflow-hidden">
      {/* Left — text column */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-14 py-20 md:py-28">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-5">
            Energy Value
          </p>

          <h2
            className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.2] font-medium mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Infrastructure as an Energy Participant
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src="/valCrea-sec1.jpeg"
              alt="Energy Infrastructure Integration"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-[400px] mb-8">
            Transform infrastructure assets into active participants in future
            energy systems.
          </p>

          {/* Value drivers */}
          <div className="space-y-3 border-t border-foreground/10 pt-6 mb-10">
            {[
              "Renewable Energy Generation",
              "Distributed Energy Participation",
              "Energy Storage Integration",
              "Future Hydrogen Readiness",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-foreground/25 mt-0.5 shrink-0">•</span>
                <p className="text-sm text-foreground/70">{line}</p>
              </div>
            ))}
          </div>

          {/* Hero statement */}
          <blockquote className="border-l-2 border-foreground/25 pl-5">
            <p
              className="text-base leading-snug font-medium italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Infrastructure is no longer only a consumer of energy—it can
              become part of the energy system itself.
            </p>
          </blockquote>
        </motion.div>
      </div>

      {/* Right — cinematic image */}
      <div className="hidden md:flex md:w-[58%] items-center justify-center p-12 bg-muted/5 border-l border-foreground/10 relative">
        <div className="w-full max-w-[85%] aspect-[16/10] border border-foreground/15 p-2 bg-background shadow-lg relative z-10">
          <div className="w-full h-full overflow-hidden relative rounded-sm">
            <motion.img
              src="/valCrea-sec1.jpeg"
              alt="Infrastructure corridor with integrated energy systems"
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
   SECTION 03 — Resilience Value
   Layout: image left + text right (dark section)
───────────────────────────────────────────── */
function Section03ResilienceValue() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="min-h-screen flex items-stretch bg-muted/20 border-b border-foreground/10 overflow-hidden">
      {/* Left — cinematic image */}
      <div className="hidden md:flex md:w-[55%] items-center justify-center p-12 bg-muted/5 border-r border-foreground/10 relative">
        <div className="w-full max-w-[85%] aspect-[16/10] border border-foreground/15 p-2 bg-background shadow-lg relative z-10">
          <div className="w-full h-full overflow-hidden relative rounded-sm">
            <motion.img
              src="/valCrea-sec2.jpeg"
              alt="Resilient infrastructure — climate adaptation"
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

          <p className="text-[10px] tracking-[0.4em] uppercase opacity-50 mb-5">
            Resilience Value
          </p>

          <h2
            className="text-[clamp(1.8rem,3.2vw,2.4rem)] leading-[1.2] font-medium mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Infrastructure Designed for a Changing Future
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src="/valCrea-sec2.jpeg"
              alt="Resilient infrastructure — climate adaptation"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <p className="text-sm opacity-70 leading-relaxed max-w-[400px] mb-8">
            Strengthen infrastructure performance, adaptability, and long-term
            operational reliability.
          </p>

          {/* Value drivers */}
          <div className="space-y-3 border-t border-background/15 pt-6 mb-10">
            {[
              "Climate Adaptation",
              "Infrastructure Modernization",
              "Risk Reduction",
              "Asset Longevity",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="opacity-30 mt-0.5 shrink-0">•</span>
                <p className="text-sm opacity-70">{line}</p>
              </div>
            ))}
          </div>

          {/* Hero statement */}
          <blockquote className="border-l-2 border-background/25 pl-5">
            <p
              className="text-base leading-snug font-medium italic opacity-90"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Future infrastructure must not only withstand change—it must
              adapt to it.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 04 — Operational Value
   Layout: text left + image right
───────────────────────────────────────────── */
function Section04OperationalValue() {
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
      <div className="w-full md:w-[42%] flex flex-col justify-center px-8 md:px-14 py-20 md:py-28">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-5">
            Operational Value
          </p>

          <h2
            className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.2] font-medium mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            From Passive Assets to Intelligent Systems
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src="/valCrea-sec3.jpeg"
              alt="Operational intelligence — infrastructure monitoring"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-[400px] mb-8">
            Enable monitoring, visibility, coordination, and informed
            decision-making throughout the infrastructure lifecycle.
          </p>

          {/* Value drivers */}
          <div className="space-y-3 border-t border-foreground/10 pt-6 mb-10">
            {[
              "Operational Visibility",
              "Continuous Monitoring",
              "Early Warning Capabilities",
              "Performance Intelligence",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-foreground/25 mt-0.5 shrink-0">•</span>
                <p className="text-sm text-foreground/70">{line}</p>
              </div>
            ))}
          </div>

          {/* Hero statement */}
          <blockquote className="border-l-2 border-foreground/25 pl-5">
            <p
              className="text-base leading-snug font-medium italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Better information creates better infrastructure decisions.
            </p>
          </blockquote>
        </motion.div>
      </div>

      {/* Right — cinematic image */}
      <div className="hidden md:flex md:w-[58%] items-center justify-center p-12 bg-muted/5 border-l border-foreground/10 relative">
        <div className="w-full max-w-[85%] aspect-[16/10] border border-foreground/15 p-2 bg-background shadow-lg relative z-10">
          <div className="w-full h-full overflow-hidden relative rounded-sm">
            <motion.img
              src="/valCrea-sec3.jpeg"
              alt="Operational intelligence — infrastructure monitoring"
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[115%] object-cover object-[center_30%]"
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
   SECTION 05 — Strategic Value
   Layout: image left + text right
───────────────────────────────────────────── */
function Section05StrategicValue() {
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
      <div className="hidden md:flex md:w-[55%] items-center justify-center p-12 bg-muted/5 border-r border-foreground/10 relative">
        <div className="w-full max-w-[85%] aspect-[16/10] border border-foreground/15 p-2 bg-background shadow-lg relative z-10">
          <div className="w-full h-full overflow-hidden relative rounded-sm">
            <motion.img
              src="/hero-bg.jpg"
              alt="Infrastructure corridor — land optimization and strategic value"
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

          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-5">
            Strategic Value
          </p>

          <h2
            className="text-[clamp(1.8rem,3.2vw,2.4rem)] leading-[1.2] font-medium mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Greater Public Value from Existing Assets
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src="/hero-bg.jpg"
              alt="Land Optimization Strategy"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-[400px] mb-8">
            Unlock additional value from infrastructure without requiring
            equivalent new land footprints.
          </p>

          {/* Value drivers */}
          <div className="space-y-3 border-t border-foreground/10 pt-6 mb-10">
            {[
              "Land Optimization",
              "Multi-Use Infrastructure",
              "Asset Productivity",
              "Public Infrastructure Value Creation",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-foreground/25 mt-0.5 shrink-0">•</span>
                <p className="text-sm text-foreground/70">{line}</p>
              </div>
            ))}
          </div>

          {/* Hero statement */}
          <blockquote className="border-l-2 border-foreground/25 pl-5">
            <p
              className="text-base leading-snug font-medium italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The challenge is no longer creating infrastructure alone, but
              extracting greater value from infrastructure that already exists.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 06 — Closing Manifesto
   Full-width dark editorial close
───────────────────────────────────────────── */
function Section06ClosingManifesto() {
  const isScreenshot = useIsScreenshotOrAutomated();

  return (
    <section className="bg-foreground text-background py-25 md:py-25 px-6 text-center select-none">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.15] font-medium mb-4 max-w-[800px] mx-auto"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            One Infrastructure Asset.
          </h2>
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.15] font-medium mb-12 max-w-[800px] mx-auto"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Multiple Value Streams.
          </h2>

          {/* Value pillars strip */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-14 text-[10px] tracking-[0.35em] uppercase opacity-50">
            <span>Resilience</span>
            <span className="opacity-40">·</span>
            <span>Operational Intelligence</span>
            <span className="opacity-40">·</span>
            <span>Energy Participation</span>
          </div>

          <p
            className="text-lg md:text-xl leading-relaxed opacity-75 max-w-[680px] mx-auto mb-16"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Through Adaptive Infrastructure–Energy Ecosystems, existing
            infrastructure can evolve beyond its traditional role and become
            an active participant in future resilience and energy systems.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
