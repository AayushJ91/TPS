import { motion } from "motion/react";
import { useIsScreenshotOrAutomated } from "../components/ui/utils";
import TpsWordmark from "../components/TpsWordmark";

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
    <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="mb-6" style={{ fontSize: "1.25rem" }}>
            <TpsWordmark variant="light" showTagline={true} />
          </div>

          <div className="pt-8 grid md:grid-cols-12 gap-8 items-start">
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
              src="/kosi-about-bg.jpeg"
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
    },
    {
      acronym: "EEC",
      title: "Structural Resilience & Energy Integration Layer",
      desc: "The physical transformation layer: solar integration, structural resilience, and energy storage designed into infrastructure geometry.",

    },
    {
      acronym: "SCLOU",
      title: "Structural Intelligence & Monitoring Layer",
      desc: "The operational intelligence layer: sensor networks, structural health telemetry, and diagnostic visibility across the lifecycle.",

    },
    {
      acronym: "EFA",
      title: "Infrastructure–Energy Coordination Layer",
      desc: "The multi-domain coordination layer: coordinating energy routing, distributed systems integration, and ecosystem participation.",
    }
  ];

  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  return (
    <section className="py-4">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Narrative */}
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8 }}
          className="md:col-span-5 space-y-6"
        >
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
              A unified architecture enabling infrastructure assets to participate in resilience, intelligence, and energy systems. </p>
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
    { num: "01", name: "Observation", desc: "Identifying untapped strategic value within existing infrastructure assets." },
    { num: "02", name: "Concept Development", desc: "Designing structural integrations capable of bridging physical assets and energy pathways." },
    { num: "03", name: "Architecture Development", desc: "Establishing structural, intelligence, and coordination layers within a unified system." },
    { num: "04", name: "Strategic Vision Frameworks", desc: "Establishing long-term systems frameworks defining infrastructure-energy resilience." },
    { num: "05", name: "Institutional Engagement", desc: "Aligning architecture frameworks with engineering, regulatory, and deployment ecosystems." },
    { num: "06", name: "Implementation Frameworks", desc: "Delivering structural specifications and design methodologies for project developers." }
  ];

  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  return (
    <section className="py-4">
      <div className="space-y-12">
        {/* Title Block */}
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.8 }}
          className="max-w-[800px]"
        >
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
   SECTION 04 — Applications
   Editorial 40/60 split — no cards, no borders
   Masonry image composition, publication aesthetic
   ───────────────────────────────────────────── */
function AreasOfEngagementSection() {
  const applicationAreas = [
    "Flood Control Embankments",
    "Highways & Expressways",
    "Water Infrastructure Systems",
    "Strategic Infrastructure Corridors",
  ];

  const isScreenshot = useIsScreenshotOrAutomated();

  return (
    <section className="py-4">
      <div className="grid md:grid-cols-12 gap-16 items-start">

        {/* ── Left Column: 40% ── */}
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 space-y-10 md:sticky md:top-28"
        >

          {/* Section headline */}
          <div className="space-y-4">
            <h2
              className="text-3xl md:text-4xl text-foreground font-medium leading-tight font-serif"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Infrastructure–Energy Ecosystems Across Multiple Infrastructure Domains
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-sans">
              TPS focuses on infrastructure systems where resilience, intelligence, energy participation, and long-term asset optimization converge.
            </p>
          </div>

          {/* Application Areas */}
          <div className="space-y-3 pt-2">
            {applicationAreas.map((area) => (
              <div key={area} className="flex items-center gap-4">
                <span
                  className="w-4 h-px shrink-0"
                  style={{ backgroundColor: "var(--foreground)", opacity: 0.3 }}
                />
                <span className="text-foreground font-sans text-sm font-medium leading-snug">
                  {area}
                </span>
              </div>
            ))}
          </div>

          {/* Quotation block */}
          <div className="border-t border-foreground/10 pt-8">
            <blockquote className="border-l-2 border-foreground/25 pl-5">
              <p
                className="text-base md:text-lg leading-snug font-medium text-foreground italic font-serif"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                "Adaptive infrastructure requires coordinated thinking across resilience, energy, operations, and long-term value creation."
              </p>
            </blockquote>
          </div>
        </motion.div>

        {/* ── Right Column: 60% — Editorial Image Composition ── */}
        <motion.div
          initial={isScreenshot ? false : { opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="md:col-span-7"
        >
          {/*
            Editorial publication layout:
            Left 55%: One dominant tall feature image (Flood Control)
            Right 45%: Three landscape panels stacked cleanly
            Clean gaps, no offsets, no cards — infrastructure case-study aesthetic
          */}
          <div className="flex gap-3" style={{ alignItems: "stretch" }}>

            {/* ── Left: Dominant Feature — Flood Control Embankments ── */}
            <div
              className="relative group overflow-hidden rounded-xl flex-shrink-0"
              style={{ width: "55%", minHeight: "520px" }}
            >
              <img
                src="/app-flood-embankment.png"
                alt="Flood Control Embankments"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
                <p
                  className="text-[8px] tracking-[0.3em] uppercase text-white/70 font-mono mb-1"
                >
                  01 — Flood Control
                </p>
                <p
                  className="text-sm font-medium text-white leading-snug"
                  style={{ fontFamily: "var(--font-serif)", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
                >
                  Flood Control<br />Embankments
                </p>
              </div>
            </div>

            {/* ── Right: Vertical Stack of Three ── */}
            <div className="flex flex-col gap-3 flex-1">

              {/* Highways & Expressways */}
              <div className="relative group overflow-hidden rounded-xl flex-1">
                <img
                  src="/app-highway-corridor.png"
                  alt="Highways & Expressways"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
                  <p className="text-[8px] tracking-[0.3em] uppercase text-white/70 font-mono mb-0.5">02</p>
                  <p className="text-xs font-medium text-white" style={{ fontFamily: "var(--font-serif)" }}>
                    Highways & Expressways
                  </p>
                </div>
              </div>

              {/* Water Infrastructure Systems */}
              <div className="relative group overflow-hidden rounded-xl flex-1">
                <img
                  src="/app-water-infrastructure.png"
                  alt="Water Infrastructure Systems"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
                  <p className="text-[8px] tracking-[0.3em] uppercase text-white/70 font-mono mb-0.5">03</p>
                  <p className="text-xs font-medium text-white" style={{ fontFamily: "var(--font-serif)" }}>
                    Water Infrastructure
                  </p>
                </div>
              </div>

              {/* Strategic Infrastructure Corridors */}
              <div className="relative group overflow-hidden rounded-xl flex-1">
                <img
                  src="/app-strategic-corridor.png"
                  alt="Strategic Infrastructure Corridors"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
                  <p className="text-[8px] tracking-[0.3em] uppercase text-white/70 font-mono mb-0.5">04</p>
                  <p className="text-xs font-medium text-white" style={{ fontFamily: "var(--font-serif)" }}>
                    Strategic Corridors
                  </p>
                </div>
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
    <section id="contact-section" className="bg-[#0b0b0d] text-[#e3e3e7] py-28 px-6 border-t border-foreground/10">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="space-y-6">
          
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
            <p className="font-semibold text-base text-white">Triparna Systems Pvt. Ltd.</p>
            <p className="opacity-70 leading-relaxed font-sans">
              Developer of Adaptive Infrastructure–Energy Ecosystems
            </p>
          </div>

          <div className="space-y-2">
            <p className="opacity-95 font-mono">Email: infotriparna@gmail.com</p>
            <p className="opacity-95 font-mono">Mobile: +91 70212 07522</p>
          </div>

          <div className="space-y-2">
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
