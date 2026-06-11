import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useIsScreenshotOrAutomated } from "../components/ui/utils";
import TpsWordmark from "../components/TpsWordmark";

const getFadeVariants = (isScreenshot: boolean) => ({
  fade: isScreenshot ? false : { opacity: 0, y: 20 },
  fadeOnly: isScreenshot ? false : { opacity: 0 },
  fadeLeft: isScreenshot ? false : { opacity: 0, x: -20 },
  fadeRight: isScreenshot ? false : { opacity: 0, x: 20 }
});

const HERO_IMAGES = ["/hero-bg.jpg", "/hero-bg2.jpg"];

export default function Home() {
  useEffect(() => {
    document.title = "TPS | Infrastructure Operating Architecture";
  }, []);

  return (
    <div className="pt-16">
      <HeroSection />
      <VisualShowcaseSection />
      <WhyInfrastructureSection />
      <WhatIsIETESection />
      <CoreArchitectureSection />
      <ApplicationsSection />
      <ValueCreationSection />
      <TPSSection />
    </div>
  );
}

function HeroSection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const headingWords = "Transforming Infrastructure into Energy-Producing Assets".split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isScreenshot ? 0 : 0.05,
        delayChildren: isScreenshot ? 0 : 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: isScreenshot ? {} : { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isScreenshot ? 0 : 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutQuart
      },
    },
  };

  return (
    <section className="h-[60vh] min-h-[50px] flex items-center justify-center px-6 bg-white relative">
      <div className="max-w-[900px] mx-auto text-center">
        {/* Heading Title (Staggered Word Reveal) */}
        <motion.h1
          variants={containerVariants}
          initial={isScreenshot ? "visible" : "hidden"}
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.15] flex flex-wrap justify-center gap-x-[0.22em] gap-y-[0.08em] font-medium tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {headingWords.map((word, i) => (
             <motion.span key={i} className="inline-block">
               {word}
             </motion.span>
          ))}
        </motion.h1>

        {/* Description Paragraph */}
        <motion.p
          initial={isScreenshot ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: isScreenshot ? 0 : 1.1, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed"
        >
          Creating resilient infrastructure systems that generate, store, and participate in modern energy networks.
        </motion.p>
      </div>
    </section>
  );
}

function VisualShowcaseSection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (isScreenshot) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isScreenshot]);

  const prev = () =>
    setCurrentIdx((i) => (i - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  const next = () =>
    setCurrentIdx((i) => (i + 1) % HERO_IMAGES.length);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-24 relative">
      {/* Cinematic container — tall, editorial */}
      <div
        className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-muted/10 border border-border/40"
        style={{ height: "clamp(420px, 72vh, 820px)" }}
      >
        {/* Image slides */}
        <AnimatePresence mode="sync">
          <motion.img
            key={currentIdx}
            src={HERO_IMAGES[currentIdx]}
            alt="Infrastructure corridor"
            initial={isScreenshot ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1.0 }}
            transition={{ duration: isScreenshot ? 0 : 1.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </AnimatePresence>

        {/* Subtle bottom gradient for UI legibility */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-b-3xl" />

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-colors z-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-colors z-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              aria-label={`Go to image ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === currentIdx ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: i === currentIdx ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyInfrastructureSection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  const challenges = [
    {
      title: "Climate Stress",
      description: "Increasing frequency and severity of extreme weather events demand adaptive infrastructure response systems.",
    },
    {
      title: "Aging Infrastructure",
      description: "Critical systems require modernization beyond traditional maintenance and replacement cycles.",
    },
    {
      title: "Energy Transition",
      description: "Infrastructure must actively participate in distributed energy generation and grid resilience.",
    },
    {
      title: "Operational Complexity",
      description: "Multi-domain systems require unified intelligence layers for real-time optimization and coordination.",
    },
  ];

  return (
    <section className="py-20 px-6  bg-muted/40">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-6 max-w-[800px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Why Infrastructure Must Evolve
          </h2>
          <p className="text-xl text-muted-foreground max-w-[700px] mb-16" spellCheck={false}>
            Contemporary infrastructure faces converging pressures that demand fundamental architectural transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 divide-y divide-foreground/8">
          {challenges.map((challenge, i) => (
            <motion.div
              key={i}
              initial={anim.fade}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: isScreenshot ? 0 : i * 0.08 }}
              className="py-10 flex gap-8"
            >
              <div>
                <p className="text-[18px] tracking-[0.1em] uppercase font-sbold text-foreground mb-3">
                  {challenge.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[420px]">
                  {challenge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIsIETESection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  return (
    <section className="py-20 px-6 bg-foreground text-background">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-7xl mb-12"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What is iETE?
          </h2>
          <div className="space-y-8 text-xl leading-relaxed opacity-90 max-w-[760px]">
            <p>
              <strong className="font-semibold">iETE</strong> (Integrated Energy Transition Ecosystem) represents a new energy-transition paradigm: transforming public infrastructure into adaptive infrastructure-energy ecosystems.
            </p>
            <p>
              Rather than treating infrastructure, energy, intelligence, and resilience as separate domains, iETE integrates them into a unified framework for enabling the next era of energy transition.
            </p>
            <p className="pt-2">
              This defines a new category:
            </p>
            <p
              className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Adaptive Infrastructure-Energy Ecosystems —{" "}
              <span className="font-normal opacity-80 text-xl md:text-2xl">
                a framework for leveraging public infrastructure to support resilient, intelligent, and scalable energy-transition outcomes.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CoreArchitectureSection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  const layers = [
    {
      acronym: "EEC",
      subtitle: "Resilience & Energy Integration",
      description:
        "The physical transformation layer: solar integration, structural resilience, and energy storage designed into infrastructure geometry.",
    },
    {
      acronym: "SCLOU",
      subtitle: "Infrastructure Intelligence & Monitoring",
      description:
        "The operational intelligence layer: sensor networks, structural health telemetry, and diagnostic visibility across the lifecycle.",
    },
    {
      acronym: "EFA",
      subtitle: "Infrastructure–Energy Coordination",
      description:
        "The multi-domain coordination layer: coordinating energy routing, distributed systems integration, and ecosystem participation.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2
            className="text-5xl md:text-6xl mb-4 text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Architecture
          </h2>
          <p className="text-lg text-muted-foreground">
            One Ecosystem. Three Integrated Layers.
          </p>
        </motion.div>

        {/* Blueprint-style typographic layout */}
        <div className="border border-foreground/30 p-6 md:p-10 bg-background relative overflow-hidden font-mono text-xs text-muted-foreground mb-16 rounded-xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_5px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_5px)] bg-[size:20px_20px] pointer-events-none" />

          {/* Master Box iETE */}
          <div className="flex flex-col items-center mb-10 relative z-10">
            <div className="text-center border border-foreground/20 px-6 py-4 bg-background max-w-[320px] w-full">
              <h3 className="text-sm font-bold tracking-widest text-foreground">iETE</h3>
            </div>
            <div className="h-8 w-px bg-foreground/30 relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-foreground/50" />
            </div>
          </div>

          {/* Layers container */}
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {layers.map((layer, index) => (
              <div key={layer.acronym} className="border border-foreground/15 p-5 bg-background flex flex-col justify-between hover:border-foreground/45 transition-colors duration-300 rounded">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold text-foreground tracking-wider font-mono">{layer.acronym}</span>
                  </div>
                  <h4 className="text-s font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                    {layer.subtitle}
                  </h4>
                  <p className="text-[15px] leading-relaxed text-muted-foreground/85 font-sans">
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={anim.fadeOnly}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/architecture"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase border-b-2 border-foreground pb-1 hover:opacity-75 transition-opacity font-mono font-bold text-foreground"
          >
            Explore Architecture
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ApplicationsSection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  const domains = [
    {
      title: "Flood Control Embankments",
      description:
        "Resilience enhancement and renewable energy integration across linear flood-control infrastructure.",
      image: "/app-flood-embankment.png",
    },
    {
      title: "Highways & Expressways",
      description:
        "Corridor energy generation and EV ecosystem support from strategic transportation footprints.",
      image: "/app-highway-corridor.png",
    },
    {
      title: "Water Infrastructure Systems",
      description:
        "Energy participation and operational intelligence from canal and reservoir networks.",
      image: "/app-water-infrastructure.png",
    },
    {
      title: "Strategic Infrastructure Corridors",
      description:
        "Multi-use infrastructure delivering resilience, intelligence, and energy participation.",
      image: "/app-strategic-corridor.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/40">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-5xl md:text-6xl mb-4 text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Applications
          </h2>
          <p className="text-lg text-muted-foreground max-w-[720px]">
            Infrastructure–Energy Ecosystems Across Multiple Infrastructure Domains
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={isScreenshot ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: isScreenshot ? 0 : index * 0.08 }}
              className="group"
            >
              <Link to="/applications" className="block">
                <div className="border border-foreground/15 hover:border-foreground/40 transition-all duration-300 overflow-hidden bg-background rounded-lg">
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={domain.image}
                      alt={domain.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                  {/* Content */}
                  <div className="px-5 py-5">
                    <h3
                      className="text-base font-medium mb-2 leading-snug text-foreground"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {domain.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={anim.fadeOnly}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Link
            to="/applications"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase border-b-2 border-foreground pb-1 hover:opacity-75 transition-opacity font-mono font-bold text-foreground"
          >
            Explore Applications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ValueCreationSection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  const valuePillars = [
    {
      label: "Energy Value",
      description: "Infrastructure as an active participant in energy generation, storage, and distribution.",
    },
    {
      label: "Resilience Value",
      description: "Climate adaptation, risk reduction, and long-term operational reliability.",
    },
    {
      label: "Operational Value",
      description: "Monitoring, visibility, and informed decision-making across the infrastructure lifecycle.",
    },
    {
      label: "Strategic Value",
      description: "Land optimization, multi-use infrastructure, and greater public asset productivity.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={anim.fade}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-6 text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Value Creation
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mb-12">
            Explore how Adaptive Infrastructure–Energy Ecosystems create energy, resilience, operational, and strategic value from existing infrastructure assets.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 mb-16 relative">

          {valuePillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={isScreenshot ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: isScreenshot ? 0 : index * 0.08 }}
              className={`py-4 group ${index % 2 === 0 ? 'sm:pr-6' : 'sm:pl-6'}`}
            >
              <h3
                className="text-xl mb-2 text-foreground font-serif"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {pillar.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={anim.fadeOnly}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/value-creation"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase border-b-2 border-foreground pb-1 hover:opacity-75 transition-opacity font-mono font-bold text-foreground"
          >
            Explore Value Creation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TPSSection() {
  const isScreenshot = useIsScreenshotOrAutomated();
  const anim = getFadeVariants(isScreenshot);

  const highlights = [
    "Infrastructure Systems Architecture",
    "iETE Ecosystem Development",
    "Infrastructure Modernization",
    "Energy Transition Frameworks",
  ];

  return (
    <section className="py-20 px-6 bg-muted/40">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={anim.fadeLeft}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 space-y-6"
          >
            <div className="flex flex-col gap-2 mb-2">
              <div style={{ fontSize: "1.1rem" }}>
                <TpsWordmark variant="light" showTagline={false} />
              </div>
            </div>

            <h2
              className="text-4xl md:text-5xl text-foreground font-medium leading-tight font-serif"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Infrastructure Systems IP Company
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans max-w-[500px]">
              Developing the frameworks, architectures, and methodologies that enable Adaptive Infrastructure–Energy Ecosystems.
            </p>

            <div className="pt-4">
              <Link
                to="/tps"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border-b border-foreground pb-1 hover:opacity-75 transition-opacity font-mono text-foreground font-bold"
              >
                Explore TPS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={anim.fadeRight}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6"
          >
            <div className="border-t border-foreground/15">
              {highlights.map((highlight, idx) => (
                <div
                  className="border-b border-foreground/15 py-5 flex items-center justify-between group hover:bg-muted/5 transition-colors duration-300 px-2"
                >
                  <span className="text-base text-foreground font-sans font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
