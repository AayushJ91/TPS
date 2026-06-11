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
   APPLICATIONS PAGE
   Infrastructure–Energy Ecosystems Across
   Multiple Infrastructure Domains
═══════════════════════════════════════════════ */

const DOMAIN_IMAGES = {
  flood: "/app-flood-embankment.png",
  highway: "/app-highway-corridor.png",
  water: "/app-water-infrastructure.png",
  corridor: "/app-strategic-corridor.png",
};

export default function Applications() {
  useEffect(() => {
    document.title =
      "Applications | Infrastructure–Energy Ecosystems Across Multiple Infrastructure Domains";
  }, []);

  return (
    <div className="pt-16">
      <ApplicationsHero />
      <Section01FloodControl />
      <Section02Highways />
      <Section03WaterInfrastructure />
      <Section04StrategicCorridors />
      <ClosingSection />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO — large editorial header
───────────────────────────────────────────── */
function ApplicationsHero() {
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
              Applications
            </h1>
          </div>
          <div className="max-w-[420px]">
            <p className="text-base text-muted-foreground/200 leading-relaxed">
              Adaptive Infrastructure–Energy Ecosystems enable infrastructure
              assets to participate in resilience, intelligence, and energy
              systems while unlocking additional value from existing public
              infrastructure footprints.
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
            Infrastructure–Energy Ecosystems Across Multiple Infrastructure
            Domains
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 01 — Flood Control Embankments
   Layout: Image Left | Text Right
───────────────────────────────────────────── */
function Section01FloodControl() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="min-h-screen flex items-stretch bg-muted/40 overflow-hidden">
      {/* Left — cinematic image */}
      <div className="hidden md:flex md:w-[55%] justify-center p-12 relative">
        <div className="w-full max-w-[85%] aspect-[16/10]">
          <div className="w-full h-full overflow-hidden relative">
            <motion.img
              src={DOMAIN_IMAGES.flood}
              alt="Flood Control Embankment"
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[100%] object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Right — text column */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-14 py-20 md:py-28">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[25px] tracking-[0.1em] uppercase text-muted-foreground mb-5">
            Flood Control Embankments
          </p>

          <h2
            className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.2] font-medium mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            From Flood Protection to Adaptive Resilience & Energy Corridors
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src={DOMAIN_IMAGES.flood}
              alt="Flood Control Embankment"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-[440px] mb-8">
            Flood-control embankments represent some of the largest linear
            public infrastructure assets. Through resilience enhancement,
            monitoring, and renewable energy integration, these systems can
            evolve into adaptive infrastructure-energy corridors.
          </p>

          {/* Key Value Areas */}
          <div className="space-y-2 border-t border-foreground/10 pt-6 mb-8">
            {[
              "Resilience Enhancement",
              "Renewable Energy Integration",
              "Adaptive Monitoring",
              "Infrastructure Intelligence",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-foreground/25 mt-0.5 shrink-0">—</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <blockquote className="border-l-2 border-foreground/25 pl-5">
            <p
              className="text-base leading-snug font-medium"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Existing embankments can evolve beyond flood protection and become
              active participants in resilience and energy systems.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 02 — Highways & Expressways
   Layout: Text Left | Image Right
───────────────────────────────────────────── */
function Section02Highways() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="min-h-screen flex items-stretch overflow-hidden">
      {/* Left — text column */}
      <div className="w-full md:w-[40%] flex flex-col justify-center px-8 md:px-14 py-20 md:py-28">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[25px] tracking-[0.1em] uppercase text-muted-foreground mb-5">
            Highways & Expressways
          </p>

          <h2
            className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.2] font-medium mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            From Transportation Corridors to Infrastructure–Energy Ecosystems
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src={DOMAIN_IMAGES.highway}
              alt="Transportation Corridors"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-[440px] mb-8">
            Modern highway networks provide strategic infrastructure footprints
            capable of supporting energy generation, electrification, and future
            energy participation while continuing to serve mobility functions.
          </p>

          {/* Key Value Areas */}
          <div className="space-y-2 border-t border-foreground/10 pt-6 mb-8">
            {[
              "Corridor Energy Generation",
              "EV Ecosystem Support",
              "Infrastructure Intelligence",
              "Hydrogen Readiness",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-foreground/25 mt-0.5 shrink-0">—</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <blockquote className="border-l-2 border-foreground/25 pl-5">
            <p
              className="text-base leading-snug font-medium"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Transportation corridors can become strategic assets within future
              energy ecosystems.
            </p>
          </blockquote>
        </motion.div>
      </div>

      {/* Right — cinematic image */}
      <div className="hidden md:flex md:w-[60%] justify-center p-12 bg-muted/5 relative">
        <div className="w-full max-w-[85%] aspect-[16/10]">
          <div className="w-full h-full overflow-hidden relative">
            <motion.img
              src={DOMAIN_IMAGES.highway}
              alt="Aerial view — modern expressway corridor through landscape"
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[100%] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 03 — Water Infrastructure Systems
   Layout: Image Left | Text Right
───────────────────────────────────────────── */
function Section03WaterInfrastructure() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="min-h-screen flex items-stretch bg-muted/40 overflow-hidden">
      {/* Left — cinematic image */}
      <div className="hidden md:flex md:w-[55%] justify-center p-12 bg-muted/5 relative">
        <div className="w-full max-w-[85%] aspect-[16/10]">
          <div className="w-full h-full overflow-hidden relative">
            <motion.img
              src={DOMAIN_IMAGES.water}
              alt="Water Infrastructure System"
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[100%] object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Right — text column */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-14 py-20 md:py-28">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >

          <p className="text-[25px] tracking-[0.1em] uppercase text-muted-foreground mb-5">
            Water Infrastructure Systems
          </p>

          <h2
            className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.2] font-medium mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Unlocking New Value from Water Infrastructure
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src={DOMAIN_IMAGES.water}
              alt="Water Infrastructure System"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-[440px] mb-8">
            Canals, reservoirs, and water-management systems represent
            strategically positioned infrastructure assets capable of supporting
            energy participation, operational intelligence, and adaptive
            resource management.
          </p>

          {/* Key Value Areas */}
          <div className="space-y-2 border-t border-foreground/10 pt-6 mb-8">
            {[
              "Energy Participation",
              "Operational Intelligence",
              "Resource Optimization",
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

          {/* Impact Statement */}
          <blockquote className="border-l-2 border-foreground/25 pl-5">
            <p
              className="text-base leading-snug font-medium"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Water infrastructure can support both resource management and
              energy-transition objectives.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 04 — Strategic Infrastructure Corridors
   Layout: Text Left | Image Right
───────────────────────────────────────────── */
function Section04StrategicCorridors() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="min-h-screen flex items-stretch overflow-hidden">
      {/* Left — text column */}
      <div className="w-full md:w-[40%] flex flex-col justify-center px-8 md:px-14 py-20 md:py-28">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >

          <p className="text-[25px] tracking-[0.1em] uppercase text-muted-foreground mb-5">
            Strategic Infrastructure Corridors
          </p>

          <h2
            className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.2] font-medium mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Multi-Use Infrastructure for Emerging Energy Systems
          </h2>

          {/* MOBILE IMAGE BLOCK */}
          <div className="md:hidden w-full mb-8 relative rounded-sm overflow-hidden aspect-[4/3] bg-background border border-foreground/15 shadow-sm">
            <img
              src="/app-sec4.jpeg"
              alt="Strategic Infrastructure Corridors"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-[440px] mb-8">
            Future infrastructure will increasingly be expected to deliver
            resilience, intelligence, and energy participation from the same
            physical footprint. Strategic infrastructure corridors provide a
            pathway toward multi-use infrastructure systems capable of
            supporting evolving energy requirements.
          </p>

          {/* Key Value Areas */}
          <div className="space-y-2 border-t border-foreground/10 pt-6 mb-8">
            {[
              "Multi-Use Infrastructure",
              "Energy Participation",
              "Infrastructure Coordination",
              "Strategic Corridor Development",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-foreground/25 mt-0.5 shrink-0">—</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <blockquote className="border-l-2 border-foreground/25 pl-5">
            <p
              className="text-base leading-snug font-medium"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The next generation of infrastructure will deliver more than its
              original purpose.
            </p>
          </blockquote>
        </motion.div>
      </div>

      {/* Right — cinematic image */}
      <div className="hidden md:flex md:w-[60%] justify-center p-12 bg-muted/5 relative">
        <div className="w-full max-w-[85%] aspect-[16/10]">
          <div className="w-full h-full overflow-hidden relative">
            <motion.img
              src={"/app-sec4.jpeg"}
              alt="Aerial view — strategic multi-use infrastructure corridor"
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[100%] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CLOSING SECTION — ONE FRAMEWORK.
   Full-width dark editorial statement
───────────────────────────────────────────── */
function ClosingSection() {
  const isScreenshot = useIsScreenshotOrAutomated();

  return (
    <section className="bg-foreground text-background py-32 md:py-18 px-6 text-center select-none">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2
            className="text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] font-medium tracking-tight mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            One Framework.
            <br />
            Multiple Infrastructure Domains.
          </h2>

          {/* Domain divider strip */}
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap mb-12">
            {[
              "Flood Control Embankments",
              "Highways & Expressways",
              "Water Infrastructure Systems",
              "Strategic Infrastructure Corridors",
            ].map((domain, i) => (
              <span key={i} className="flex items-center gap-4 md:gap-6">
                <span className="text-[11px] tracking-[0.2em] uppercase opacity-50">
                  {domain}
                </span>
                {i < 3 && (
                  <span className="text-background/20 text-lg select-none">
                    •
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Supporting statement */}
          <p
            className="text-lg md:text-xl leading-relaxed opacity-80 max-w-[720px] mx-auto mb-16"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The iETE framework enables infrastructure assets across multiple
            domains to participate in resilience, intelligence, and energy
            systems while creating additional public value from existing
            infrastructure footprints.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
