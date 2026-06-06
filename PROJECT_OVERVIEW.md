# TPS Infrastructure Operating Architecture Platform

## Overview

A Bentley-level infrastructure thought-leadership platform designed to establish and define the **Infrastructure Operating Architecture** category.

## Design Philosophy

### What This Is
- Infrastructure research institution
- Engineering publication
- Systems architecture framework  
- Future infrastructure think tank
- Category-defining intellectual platform

### What This Is NOT
- SaaS startup
- Solar company
- Monitoring platform
- Consulting website
- Dashboard product

## Architecture

### Technology Stack
- **Framework**: React 18 + Vite
- **Routing**: React Router (Data mode)
- **Styling**: Tailwind CSS v4
- **Animation**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Typography**: 
  - Headlines: Crimson Pro (serif)
  - Body: Inter (sans-serif)

### Site Structure

```
/ (Home)
├── /thesis
├── /architecture (Most important page)
├── /ecosystems
├── /applications
├── /research
└── /tps
```

## Pages

### 1. Home (`/`)
**Sections:**
1. Hero - Infrastructure Operating Architecture
2. Why Infrastructure Must Evolve
3. Infrastructure Evolution (5 stages)
4. What is iETE?
5. Core Architecture (iETE → EEC → SCLOU → EFA)
6. Future Infrastructure Operating Architecture
7. Applications
8. Research & Whitepapers
9. TPS

### 2. Thesis (`/thesis`)
Institutional publication-style page covering:
- Why Infrastructure Must Evolve
- Infrastructure & Energy Transition
- Infrastructure Intelligence
- Infrastructure Operating Architectures
- Adaptive Infrastructure-Energy Ecosystems

### 3. Architecture (`/architecture`)
**Most important page** - Progressive scroll-based reveals:
- Layer 01: iETE (Infrastructure-Embedded Techno-Ecological)
- Layer 02: EEC (Embedded Energy Corridor)
- Layer 03: SCLOU (Systems & Controls Layer Operating Unit)
- Layer 04: EFA (Ecosystem Functionality Array)
- Integration architecture explanation

### 4. Ecosystems (`/ecosystems`)
Future ecosystem layers:
- iDTL (Infrastructure Digital Twin Layer)
- iRSL (Infrastructure Resilience Systems Layer)
- iCML (Infrastructure Carbon Management Layer)
- iHEL (Infrastructure Hydrological-Ecological Layer)
- iAEL (Infrastructure Adaptive Ecosystem Layer)

### 5. Applications (`/applications`)
Sector-specific deployment contexts:
- Flood Control Corridors
- Highway Corridors
- Rail Corridors
- Canal Systems
- Coastal Infrastructure
- Industrial Infrastructure

### 6. Research (`/research`)
Knowledge center with:
- Technical frameworks
- Whitepapers
- Engineering specifications
- Research publications
- Institutional knowledge

### 7. TPS (`/tps`)
About page positioning TPS as:
- Infrastructure Systems IP Company
- NOT a software vendor, consultant, EPC contractor, or SaaS provider

## Visual Design Language

### Design Principles
- Engineering Blueprint × Architectural Publication
- Topographic maps and geological contour systems
- Infrastructure morphology diagrams
- Blueprint overlays
- Technical illustrations

### Typography Hierarchy
- **Editorial serif** (Crimson Pro) for headlines
- **Professional sans-serif** (Inter) for body text
- Generous whitespace
- Grid discipline

### Animation
- Subtle fade reveals
- Diagram construction animations
- Layer emergence effects
- Scroll-based progressive disclosure
- NO parallax gimmicks or excessive motion

### Color Palette
- Clean, monochromatic base
- Subtle borders and dividers
- High contrast for readability
- Engineering publication aesthetic

## Key Features

1. **Fixed Navigation**: Clean, minimal navigation with animated active indicators
2. **Scroll Restoration**: Auto-scroll to top on page navigation
3. **Smooth Animations**: Subtle Motion-based animations throughout
4. **Responsive Design**: Mobile-first, responsive across all breakpoints
5. **SEO-Ready**: Dynamic page titles, semantic HTML structure
6. **Accessibility**: Proper ARIA labels, keyboard navigation support
7. **Footer**: Comprehensive site map and brand reinforcement

## Core Message Hierarchy

**After 10 seconds:** "This is about the future of infrastructure."

**After 1 minute:** "This is not a solar company."

**After 3 minutes:** "This is not a monitoring company."

**After 5 minutes:** "This is an Infrastructure Operating Architecture."

**After 10 minutes:** "iETE may represent a new infrastructure category."

## Category Definition

**Primary Category:** Infrastructure Operating Architecture

**Core Concepts:**
- Infrastructure Intelligence
- Adaptive Infrastructure-Energy Ecosystems
- Infrastructure-Embedded Techno-Ecological systems (iETE)

## Navigation Order

1. THESIS
2. ARCHITECTURE
3. ECOSYSTEMS
4. APPLICATIONS
5. RESEARCH
6. TPS (always last)

**Deliberately excluded from navigation:**
- No "Contact"
- No "Book Demo"
- No "Get Started"
- No startup conversion patterns

## Design Validation Checklist

Before implementing any UI element:

✅ Would Bentley Systems use this?
✅ Would an engineering publication use this?
✅ Would a research institution use this?

❌ Does it feel like a startup?
❌ Does it feel like SaaS?
❌ Does it have dashboard aesthetics?

## File Structure

```
src/
├── app/
│   ├── App.tsx (RouterProvider entry)
│   ├── Root.tsx (Layout with nav + footer)
│   ├── routes.tsx (Router configuration)
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── pages/
│       ├── Home.tsx
│       ├── Thesis.tsx
│       ├── Architecture.tsx
│       ├── Ecosystems.tsx
│       ├── Applications.tsx
│       ├── Research.tsx
│       └── TPS.tsx
└── styles/
    ├── fonts.css (Google Fonts imports)
    └── theme.css (Tailwind + custom properties)
```

## Notes

- This is a **Figma Make** environment (React + Vite)
- NOT a Next.js project (as originally specified in brief)
- Build command (`vite build`) will fail - this is expected and documented
- Dev server is managed by Figma Make environment
- No localhost access needed - uses preview surface

## Success Metrics

The platform successfully communicates:
1. TPS as an infrastructure systems IP company
2. Infrastructure Operating Architecture as a new category
3. iETE as a foundational framework
4. Thought leadership without startup conversion patterns
5. Engineering rigor without SaaS product messaging
