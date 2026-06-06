import { motion } from "motion/react";
import { useIsScreenshotOrAutomated } from "../components/ui/utils";

const getFadeVariants = (isScreenshot: boolean) => ({
  fade: isScreenshot ? false : { opacity: 0, y: 20 },
  fadeOnly: isScreenshot ? false : { opacity: 0 },
  fadeLeft: isScreenshot ? false : { opacity: 0, x: -20 },
  fadeRight: isScreenshot ? false : { opacity: 0, x: 20 }
});

import { useEffect } from "react";

/* ═══════════════════════════════════════════════
   TPS PAGE
   Institutional foundation behind iETE and
   Adaptive Infrastructure-Energy Ecosystems.
   ═══════════════════════════════════════════════ */

export default function TPS() {
  useEffect(() => {
    document.title = "TPS | Infrastructure Systems IP Company";
  }, []);

  return (
    <div className="pt-16 bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Publication Contents */}
      <div className="max-w-[1200px] mx-auto px-6 space-y-32 py-24">
        {/* Section 01: Why TPS Was Created */}
        <WhyTPSSection />

        {/* Section 02: What TPS Has Built */}
        <EcosystemArchitectureSection />

        {/* Section 03: Development Journey */}
        <DevelopmentJourneySection />

        {/* Section 04: Areas of Engagement */}
        <AreasOfEngagementSection />
      </div>

      {/* Closing Section */}
      <ClosingSection />
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO — Cinematic infrastructure entry
   ───────────────────────────────────────────── */
function HeroSection() {
  const isScreenshot = useIsScreenshotOrAutomated();

  return (
    <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24 border-b border-foreground/10 bg-muted/5">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <img
              src="/logo.png"
              alt="TPS Logo"
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">
              Institutional Core · IP Developer
            </p>
            <h1
              className="text-[clamp(3rem,9vw,6.5rem)] leading-[0.9] tracking-tight font-medium"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              TPS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4 font-mono tracking-tight">
              Infrastructure Systems IP Company
            </p>
          </div>

          <div className="pt-8 border-t border-foreground/10 grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <p
                className="text-2xl md:text-3xl lg:text-4xl leading-tight font-medium text-foreground font-serif"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Developing the systems architectures that enable the next evolution of infrastructure.
              </p>
            </div>
            <div className="md:col-span-5 space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed font-sans">
              <p>
                Adaptive Infrastructure–Energy Ecosystems represent a new approach to infrastructure participation in resilience, intelligence, and energy systems.
              </p>
              <p>
                TPS exists to develop the frameworks, architectures, and methodologies that enable this transformation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Large cinematic image */}
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-16 w-full h-[55vh] min-h-[350px] relative overflow-hidden rounded-xl border border-foreground/10"
        >
          <img
            src="/hero-bg.jpg"
            alt="Strategic Public Infrastructure Corridor"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-5 left-6 text-white text-[10px] tracking-[0.3em] uppercase opacity-75 font-mono">
            REF: SYSTEM CORRIDOR VISUALIZATION · 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 01 — Why TPS Was Created
   ───────────────────────────────────────────── */
function WhyTPSSection() {
  const isScreenshot = useIsScreenshotOrAutomated();

  return (
    <section className="py-4">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Image */}
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <div className="overflow-hidden rounded-lg border border-foreground/10 aspect-[16/10] bg-muted/20">
            <img
              src="/app-strategic-corridor.png"
              alt="Public Infrastructure Corridor"
              className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Right Column: Text */}
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          
          transition={{ duration: 0.8 }}
          className="md:col-span-5 space-y-6"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">
            01 / Genesis Narrative
          </p>
          <h2
            className="text-3xl md:text-4xl text-foreground font-medium leading-tight font-serif"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Reimagining the Role of Infrastructure
          </h2>
          <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed font-sans">
            <p className="font-medium text-foreground">
              TPS was created around a simple observation: Existing infrastructure assets contain significant untapped strategic value.
            </p>
            <p>
              As energy transition, climate adaptation, infrastructure renewal, and land constraints converge, infrastructure is increasingly expected to deliver more value from the same physical footprint.
            </p>
            <p>
              TPS exists to develop the systems architectures that enable infrastructure to evolve beyond its traditional role and participate in future resilience and energy ecosystems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 02 — What TPS Has Built
   ───────────────────────────────────────────── */
function EcosystemArchitectureSection() {
  const layers = [
    {
      acronym: "iETE",
      title: "Integrated Energy Transition Ecosystem",
      desc: "The overarching multi-domain ecosystem framework aligning public asset productivity with transition outcomes.",
      tag: "Ecosystem Framework"
    },
    {
      acronym: "EEC",
      title: "Structural Resilience & Energy Integration Layer",
      desc: "The physical transformation layer: solar integration, structural resilience, and energy storage designed into infrastructure geometry.",
      tag: "Layer 01 · Physical"
    },
    {
      acronym: "SCLOU",
      title: "Structural Intelligence & Monitoring Layer",
      desc: "The operational intelligence layer: sensor networks, structural health telemetry, and diagnostic visibility across the lifecycle.",
      tag: "Layer 02 · Intelligence"
    },
    {
      acronym: "EFA",
      title: "Infrastructure–Energy Coordination Layer",
      desc: "The multi-domain coordination layer: coordinating energy routing, distributed systems integration, and ecosystem participation.",
      tag: "Layer 03 · Coordination"
    }
  ];

  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  return (
    <section className="py-4 border-t border-foreground/10">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Narrative */}
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8 }}
          className="md:col-span-5 space-y-6"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">
            02 / Systems Portfolio
          </p>
          <h2
            className="text-3xl md:text-4xl text-foreground font-medium leading-tight font-serif"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The iETE Ecosystem
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            TPS is the developer of a structured infrastructure-energy architecture designed to support Adaptive Infrastructure–Energy Ecosystems.
          </p>
          <div className="border-t border-foreground/10 pt-6 mt-6">
            <p
              className="text-lg md:text-xl text-foreground font-medium leading-snug font-serif"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              A unified architecture for resilience, intelligence, and energy participation within existing infrastructure systems.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Architectural Schematic */}
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-7 w-full animate-fade-in"
        >
          <div className="border border-foreground/15 p-6 md:p-8 bg-background relative overflow-hidden font-mono text-xs text-muted-foreground rounded-lg">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 flex flex-col space-y-0">
              {layers.map((layer, idx) => (
                <div key={layer.acronym} className="flex flex-col items-center">
                  <div className="w-full border border-foreground/15 p-5 bg-background hover:border-foreground/45 hover:bg-muted/5 transition-all duration-300 rounded group relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] tracking-wider uppercase text-muted-foreground">{layer.tag}</span>
                      <span className="text-xs font-bold text-foreground tracking-widest">{layer.acronym}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-1 font-sans">
                      {layer.title}
                    </h4>
                    <p className="text-[10px] leading-relaxed text-muted-foreground/85 font-sans">
                      {layer.desc}
                    </p>
                  </div>

                  {idx < layers.length - 1 && (
                    <div className="h-8 w-px bg-foreground/25 relative my-1">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-r border-b border-foreground/35 transform rotate-45" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 03 — Development Journey
   ───────────────────────────────────────────── */
function DevelopmentJourneySection() {
  const steps = [
    { num: "01", name: "Observation", desc: "Identifying latent value and structural inefficiencies in passive infrastructure assets." },
    { num: "02", name: "Concept Development", desc: "Designing structural integrations capable of bridging physical assets and energy pathways." },
    { num: "03", name: "Architecture Development", desc: "Establishing structural, intelligence, and coordination layers within a unified system." },
    { num: "04", name: "Strategic Vision Frameworks", desc: "Publishing long-term systems blueprints defining infrastructure-energy resilience." },
    { num: "05", name: "Institutional Engagement", desc: "Aligning technical frameworks with regulatory, engineering, and civic stakeholders." },
    { num: "06", name: "Implementation Frameworks", desc: "Delivering structural specifications and design methodologies for project developers." }
  ];

  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  return (
    <section className="py-4 border-t border-foreground/10">
      <div className="space-y-12">
        {/* Title Block */}
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8 }}
          className="max-w-[800px]"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-4">
            03 / Methodology Evolution
          </p>
          <h2
            className="text-3xl md:text-4xl text-foreground font-medium leading-tight font-serif"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            From Observation to Architecture
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4">
            The development of iETE has evolved through a structured progression of systems thinking, architecture development, and institutional engagement.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 pt-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={isScreenshot ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="border-t border-foreground/10 pt-6 flex flex-col justify-between h-full group hover:border-foreground/50 transition-colors duration-300"
            >
              <div>
                <span className="text-xs font-mono text-muted-foreground block mb-3 opacity-60 group-hover:text-foreground transition-colors">
                  {step.num}
                </span>
                <h4
                  className="text-lg font-medium text-foreground mb-2 leading-snug font-serif"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {step.name}
                </h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2 font-sans opacity-95">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 04 — Areas of Engagement
   ───────────────────────────────────────────── */
function AreasOfEngagementSection() {
  const domains = [
    "Flood Control Infrastructure",
    "Highway & Expressway Systems",
    "Water Infrastructure Systems",
    "Energy Transition Pathways",
    "Infrastructure Modernization",
    "Adaptive Infrastructure–Energy Ecosystems"
  ];

  const isScreenshot = useIsScreenshotOrAutomated();

  return (
    <section className="py-4 border-t border-foreground/10">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & List */}
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          
          transition={{ duration: 0.8 }}
          className="md:col-span-5 space-y-8"
        >
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-4">
              04 / Focus Domains
            </p>
            <h2
              className="text-3xl md:text-4xl text-foreground font-medium leading-tight font-serif"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Infrastructure Domains
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4 font-sans">
              TPS focuses on infrastructure systems that intersect resilience, intelligence, and energy participation.
            </p>
          </div>

          <div className="space-y-3">
            {domains.map((domain) => (
              <div key={domain} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-foreground/40 shrink-0" />
                <span className="text-foreground font-sans text-sm md:text-base font-medium">{domain}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-foreground/10 pt-6">
            <blockquote className="border-l-2 border-foreground/30 pl-5">
              <p
                className="text-base md:text-lg leading-snug font-medium text-foreground italic font-serif"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                "Infrastructure transformation requires multidisciplinary thinking across engineering, energy, resilience, and systems architecture."
              </p>
            </blockquote>
          </div>
        </motion.div>

        {/* Right Column: Institutional Image Collage */}
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <div className="grid grid-cols-12 gap-4">
            {/* Top Left */}
            <div className="col-span-7 aspect-[4/3] rounded-lg overflow-hidden border border-foreground/10 relative group bg-muted/10">
              <img
                src="/app-flood-embankment.png"
                alt="Flood Control Infrastructure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 pointer-events-none">
                <span className="text-[9px] uppercase tracking-widest text-white/95 font-mono">Flood Control</span>
              </div>
            </div>

            {/* Top Right */}
            <div className="col-span-5 aspect-[3/4] rounded-lg overflow-hidden border border-foreground/10 relative group mt-6 bg-muted/10">
              <img
                src="/app-highway-corridor.png"
                alt="Highway Expressway Systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 pointer-events-none">
                <span className="text-[9px] uppercase tracking-widest text-white/95 font-mono">Expressways</span>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="col-span-5 aspect-[3/4] rounded-lg overflow-hidden border border-foreground/10 relative group -mt-6 bg-muted/10">
              <img
                src="/app-water-infrastructure.png"
                alt="Water Infrastructure Systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 pointer-events-none">
                <span className="text-[9px] uppercase tracking-widest text-white/95 font-mono">Water Systems</span>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="col-span-7 aspect-[4/3] rounded-lg overflow-hidden border border-foreground/10 relative group bg-muted/10">
              <img
                src="/app-strategic-corridor.png"
                alt="Strategic Infrastructure Modernization"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 pointer-events-none">
                <span className="text-[9px] uppercase tracking-widest text-white/95 font-mono">Modernization</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CLOSING SECTION — Institutional Back Cover
   ───────────────────────────────────────────── */
function ClosingSection() {
  return (
    <section className="bg-[#0b0b0d] text-[#e3e3e7] py-28 px-6 border-t border-foreground/10">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="space-y-6">
          <p className="text-xs tracking-[0.3em] uppercase opacity-50 font-mono">Strategic Framework Publication</p>
          <h3
            className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-none font-serif"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Infrastructure • Energy • Resilience
          </h3>
          <p className="text-lg md:text-xl opacity-80 max-w-[800px] leading-relaxed font-sans">
            Developing the Systems Architectures for the Next Evolution of Infrastructure.
          </p>
        </div>

        <div className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          <div className="space-y-2">
            <p className="opacity-40 uppercase tracking-widest text-[10px] font-mono">Organization</p>
            <p className="font-semibold text-base text-white">Triparna Systems Pvt. Ltd.</p>
            <p className="opacity-70 leading-relaxed font-sans">
              Developer of Adaptive Infrastructure–Energy Ecosystems
            </p>
          </div>

          <div className="space-y-2">
            <p className="opacity-40 uppercase tracking-widest text-[10px] font-mono">Contact Information</p>
            <p className="opacity-95 font-mono">Email: infotriparna@gmail.com</p>
            <p className="opacity-95 font-mono">Mobile: +91 70212 07522</p>
          </div>

          <div className="space-y-2">
            <p className="opacity-40 uppercase tracking-widest text-[10px] font-mono">Address</p>
            <p className="opacity-95 leading-relaxed font-sans">
              B-701, Shelton Sapphire,<br />
              Sector-15, CBD Belapur,<br />
              Navi Mumbai – 400614
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
