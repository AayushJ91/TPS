import { motion, useScroll, useTransform } from "motion/react";
import { useIsScreenshotOrAutomated } from "../components/ui/utils";

const getFadeVariants = (isScreenshot: boolean) => ({
  fade: isScreenshot ? false : { opacity: 0, y: 20 },
  fadeOnly: isScreenshot ? false : { opacity: 0 },
  fadeLeft: isScreenshot ? false : { opacity: 0, x: -20 },
  fadeRight: isScreenshot ? false : { opacity: 0, x: 20 }
});

import { useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════
   ARCHITECTURE PAGE
   How iETE functions as the operating architecture
   for Adaptive Infrastructure–Energy Ecosystems.
   ═══════════════════════════════════════════════ */

export default function Architecture() {
  useEffect(() => {
    document.title =
      "Architecture | iETE Operating Architecture for Adaptive Infrastructure–Energy Ecosystems";
  }, []);

  return (
    <div className="pt-16">
      <ArchitectureHero />
      <ArchitectureStatement />
      <HeroArchitectureDiagram />
      <EECLayerSection />
      <SCLOULayerSection />
      <EFALayerSection />
      <IntegrationSection />
      <ClosingManifesto />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO — Clean, minimal institutional header
   ───────────────────────────────────────────── */
function ArchitectureHero() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={anim.fadeOnly}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <div>
            <h1
              className="text-[clamp(3rem,9vw,7rem)] leading-[1.0] tracking-tight font-medium"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Architecture
            </h1>
          </div>
          <div className="max-w-[420px]">
            <p className="text-base text-muted-foreground/200 leading-relaxed">
              The Integrated Energy Transition Ecosystem (iETE) provides a
              structured framework for transforming infrastructure assets into
              adaptive infrastructure-energy ecosystems capable of delivering
              resilience, operational intelligence, and energy participation.
            </p>
          </div>
        </motion.div>

        {/* Subtitle bar */}
        <motion.div
          initial={anim.fadeOnly}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 pt-6 border-t border-foreground/10"
        >
          <p
            className="text-lg md:text-xl leading-relaxed max-w-[720px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The Architecture Behind Adaptive Infrastructure–Energy Ecosystems
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ARCHITECTURE STATEMENT — Conceptual bridge
   ───────────────────────────────────────────── */
function ArchitectureStatement() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  return (
    <section className="px-6 py-20 md:py-10 bg-muted/40">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-medium tracking-tight mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            One Ecosystem.
            <br />
            Three Integrated Layers.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[640px] mx-auto">
            Infrastructure transformation requires more than isolated technologies.
            iETE brings together physical infrastructure enhancement, operational
            intelligence, and energy coordination within a unified architecture
            designed for future infrastructure systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ARCHITECTURE DIAGRAM SECTION — Blueprint center
   ───────────────────────────────────────────── */
function HeroArchitectureDiagram() {
  return (
    <section className="px-6 py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto">
        <ArchitectureDiagram />
      </div>
    </section>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="w-full max-w-[1600px] mx-auto py-2 px-2 md:px-4">
      <div className="border border-foreground/25 p-8 md:p-14 bg-background font-mono text-xs text-muted-foreground relative overflow-hidden">
        {/* Subtle grid pattern for blueprint look - slightly stronger opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Tree flow using HTML/SVG hierarchy */}
        <div className="flex flex-col items-center relative z-10 space-y-0">
          {/* Level 01: iETE - MASTER ARCHITECTURE */}
          <div className="text-center w-full max-w-[620px] border-2 border-foreground/60 p-7 md:p-9 bg-background relative z-10 hover:border-foreground transition-colors duration-300">
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-foreground/80 block mb-2 font-mono">
              [ Master Ecosystem Framework ]
            </span>
            <h4
              className="text-xl md:text-2xl font-bold tracking-widest text-foreground mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              iETE
            </h4>
            <p className="text-xs md:text-sm leading-relaxed max-w-[500px] mx-auto text-muted-foreground font-sans">
              Integrated Energy Transition Ecosystem
            </p>
          </div>

          {/* Connection Line */}
          <div className="h-12 w-px bg-foreground/45 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground/75" />
          </div>

          {/* Level 02: EEC */}
          <div className="text-center w-full max-w-[580px] border border-foreground/40 p-6 md:p-7 bg-background relative z-10 hover:border-foreground/75 transition-colors duration-300">
            <h4 className="text-base md:text-lg font-bold tracking-wider text-foreground mb-1">
              EEC
            </h4>
            <p className="text-xs leading-relaxed max-w-[480px] mx-auto text-muted-foreground/90 font-sans">
              Structural Resilience & Energy Integration Layer
            </p>
          </div>

          {/* Connection Line */}
          <div className="h-12 w-px bg-foreground/45 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground/75" />
          </div>

          {/* Level 03: SCLOU */}
          <div className="text-center w-full max-w-[580px] border border-foreground/40 p-6 md:p-7 bg-background relative z-10 hover:border-foreground/75 transition-colors duration-300">
            <h4 className="text-base md:text-lg font-bold tracking-wider text-foreground mb-1">
              SCLOU
            </h4>
            <p className="text-xs leading-relaxed max-w-[480px] mx-auto text-muted-foreground/90 font-sans">
              Structural Intelligence & Monitoring Layer
            </p>
          </div>

          {/* Connection Line */}
          <div className="h-12 w-px bg-foreground/45 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground/75" />
          </div>

          {/* Level 04: EFA */}
          <div className="text-center w-full max-w-[580px] border border-foreground/40 p-6 md:p-7 bg-background relative z-10 hover:border-foreground/75 transition-colors duration-300">
           
            <h4 className="text-base md:text-lg font-bold tracking-wider text-foreground mb-1">
              EFA
            </h4>
            <p className="text-xs leading-relaxed max-w-[480px] mx-auto text-muted-foreground/90 font-sans">
              Infrastructure–Energy Coordination Layer
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}
/* ─────────────────────────────────────────────
   SECTION 01 — EEC Layer (Image Left | Text Right)
   ───────────────────────────────────────────── */
function EECLayerSection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Keep imageY defined so it doesn't break other parts of your code, 
  // but we will omit it from this specific absolute diagram container.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="py-24 md:py-0">
      <div className="max-w-[6500px] mx-auto px-6 flex flex-col md:flex-row items-stretch bg-muted/40 overflow-visible">
        {/* Left — cinematic image */}
        <div className="hidden md:flex md:w-[60%] items-center justify-center p-12 bg-muted/5 relative">
          {/* CHANGED: Swapped aspect-[16/10] to max-w-full to allow natural scaling without forced clipping */}
          <div className="w-full max-w-full border border-foreground/15 p-2 bg-background shadow-lg relative z-10">
            <div className="w-full h-full overflow-hidden relative rounded-sm">
              <img
                src="/arch-1.jpeg"
                alt="EEC Layer — Structural Resilience & Energy Integration"
                // REMOVED: style={{ y: imageY }} to keep text callouts perfectly centered and sharp
                // CHANGED: Removed absolute positioning so it defines its own natural height layout
                className="w-full h-auto block bg-white"
              />
            </div>
          </div>
        </div>

        {/* Right — text column */}
        <div className="w-full md:w-[40%] flex flex-col justify-start md:justify-center px-6 md:px-10 lg:px-14 py-16 md:py-20">
          <motion.div
            initial={isScreenshot ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-[clamp(1.8rem,4vw,3.2rem)] font-black leading-none select-none"
                style={{ opacity: 1 }}
              >
                EEC
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 leading-tight text-foreground"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Structural Resilience & Energy Integration Layer
            </h2>

            {/* MOBILE IMAGE BLOCK */}
            <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
              <img
                src="/arch-1.jpeg"
                alt="EEC Layer — Structural Resilience & Energy Integration"
                className="absolute inset-0 w-full h-full object-cover object-center bg-white"
              />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-[440px] mb-6">
              EEC serves as the physical transformation layer within the ecosystem.
              It enables infrastructure assets to support resilience enhancement while
              providing the foundation for renewable energy participation and infrastructure modernization.
            </p>

            {/* Core Functions */}
            <div className="space-y-2 border-t border-foreground/10 pt-4 mb-6">
              {[
                "Resilience Enhancement",
                "Renewable Energy Integration",
                "Infrastructure Modernization",
                "Multi-Use Infrastructure Enablement",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-foreground/25 mt-0.5 shrink-0">—</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Role */}
            <blockquote className="border-l-2 border-foreground/25 pl-5">
              <p
                className="text-base leading-snug font-medium"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Transforming infrastructure assets into resilience and energy participation platforms.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 02 — SCLOU Layer (Text Left | Image Right)
   ───────────────────────────────────────────── */
function SCLOULayerSection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col-reverse md:flex-row items-stretch overflow-visible">
      {/* Left — text column */}
      <div className="w-full md:w-[40%] flex flex-col justify-start md:justify-center px-6 md:px-10 lg:px-14 py-16 md:py-20">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-[clamp(1.8rem,4vw,3.2rem)] font-black leading-none select-none"
              style={{ opacity: 1 }}
            >
              SCLOU
            </span>
          </div>

          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 leading-tight text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Structural Intelligence & Monitoring Layer
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src="/arch-sclou.jpeg"
              alt="SCLOU Layer — Structural Intelligence & Monitoring"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-[440px] mb-6">
            SCLOU provides the intelligence layer of the ecosystem, enabling monitoring, diagnostics, visibility, and infrastructure awareness throughout the asset lifecycle.
          </p>

          {/* Core Functions */}
          <div className="space-y-2 border-t border-foreground/10 pt-4 mb-6">
            {[
              "Monitoring & Diagnostics",
              "Operational Visibility",
              "Infrastructure Intelligence",
              "Adaptive Monitoring",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-foreground/25 mt-0.5 shrink-0">—</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Key Role */}
          <blockquote className="border-l-2 border-foreground/25 pl-5">
            <p
              className="text-base leading-snug font-medium"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Enabling infrastructure systems to observe, understand, and respond to changing conditions.
            </p>
          </blockquote>
        </motion.div>
      </div>

      {/* Right — cinematic image */}
      <div className="hidden md:flex md:w-[60%] items-center justify-center p-12 bg-muted/5 relative">
        <div className="w-full max-w-[85%] aspect-[32/20] border border-foreground/15 p-2 bg-background shadow-lg relative z-10">
          <div className="w-full h-full overflow-hidden relative rounded-sm">
            <motion.img
              src="/arch-sclou.jpeg"
              alt="SCLOU Layer — Structural Intelligence & Monitoring"
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[115%] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 03 — EFA Layer (Image Left | Text Right)
   ───────────────────────────────────────────── */
function EFALayerSection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="py-24 md:py-0">
      <div className="max-w-[6500px] mx-auto px-6 flex flex-col md:flex-row items-stretch bg-muted/40 overflow-visible">
        {/* Left — cinematic image */}
        <div className="hidden md:flex md:w-[60%] items-center justify-center p-12 bg-muted/5 relative">
          <div className="w-full max-w-[250%] aspect-[16/10] border border-foreground/15 p-2 bg-background shadow-lg relative z-10">
            <div className="w-full h-full overflow-hidden relative rounded-sm">
              <motion.img
                src="/arch-efa.jpeg"
                alt="EFA Layer — Infrastructure–Energy Coordination"
                style={{ y: imageY }}
                className="absolute inset-0 w-full h-[115%] object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Right — text column */}
        <div className="w-full md:w-[40%] flex flex-col justify-start md:justify-center px-6 md:px-10 lg:px-14 py-16 md:py-20">
          <motion.div
            initial={isScreenshot ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-[clamp(1.8rem,4vw,3.2rem)] font-black leading-none select-none"
                style={{ opacity: 1 }}
              >
                EFA
              </span>
            </div>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 leading-tight text-foreground"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Infrastructure–Energy Coordination Layer
            </h2>

            {/* MOBILE IMAGE BLOCK */}
            <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
              <img
                src="/arch-efa.jpeg"
                alt="EFA Layer — Infrastructure–Energy Coordination"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-[440px] mb-6">
              EFA functions as the energy coordination layer of the ecosystem.
              It enables energy routing, storage integration, distributed participation, and coordination across infrastructure-energy systems.
            </p>

            {/* Core Functions */}
            <div className="space-y-2 border-t border-foreground/10 pt-4 mb-6">
              {[
                "Energy Coordination",
                "Energy Routing & Management",
                "Storage Integration",
                "Distributed Energy Participation",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-foreground/25 mt-0.5 shrink-0">—</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Role */}
            <blockquote className="border-l-2 border-foreground/25 pl-5">
              <p
                className="text-base leading-snug font-medium"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Coordinating how energy moves, interacts, and participates across infrastructure-energy ecosystems.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   INTEGRATION SECTION — Three layers unified
   ───────────────────────────────────────────── */
function IntegrationSection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  return (
    <section className="py-24 md:py-32 bg-muted/5">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-medium tracking-tight mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Three Integrated Layers.
            <br />
            One Adaptive Infrastructure–Energy Ecosystem.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[700px] mx-auto">
            Together, EEC, SCLOU, and EFA create a unified architecture capable
            of transforming passive infrastructure assets into systems that
            support resilience, operational intelligence, and energy participation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CLOSING MANIFESTO — Manifesto callout block
   ───────────────────────────────────────────── */
function ClosingManifesto() {
  const isScreenshot = useIsScreenshotOrAutomated();

  return (
    <section className="bg-foreground text-background py-28 md:py-36">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h3
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] font-medium tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Infrastructure is no longer defined solely by what it is built to do.
          </h3>
          <div className="h-px w-24 bg-background/30 mx-auto my-8" />
          <h3
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] font-medium tracking-tight opacity-90"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            It is increasingly defined by what it is capable of becoming.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
