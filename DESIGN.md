---
version: "1.0"
name: "IELTS Marathon Editorial & Focused Studio"
colors:
  canvas-light: "#F8F7F4"
  canvas-dark: "#121316"
  surface-light: "#FFFFFF"
  surface-dark: "#1B1D21"
  surface-muted-light: "#F0EFEA"
  surface-muted-dark: "#23262C"
  ink-primary-light: "#1C1E22"
  ink-primary-dark: "#F1F2F4"
  ink-secondary-light: "#5A606A"
  ink-secondary-dark: "#98A0AE"
  border-subtle-light: "#E5E2DC"
  border-subtle-dark: "#2A2E36"
  accent-terracotta: "#C2410C"
  accent-crimson: "#B91C1C"
  accent-sage: "#15803D"
  accent-amber: "#B45309"
typography:
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontWeight: 700
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15px"
    lineHeight: 1.6
  editorial:
    fontFamily: "Newsreader, Georgia, serif"
    fontWeight: 500
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "13px"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
---

# IELTS Marathon 21 Days: Visual Identity & Design System

## Overview
"IELTS Marathon 21 Days" represents a high-agency, evidence-based academic companion. Unlike gamified, cartoonish test-prep apps with childish points and loud gradients, IELTS Marathon is styled like a focused editorial binder from a premier academic institute: austere yet warm, deeply respectful of the user's attention, and ruthlessly centered on deliberate practice.

The UI mirrors physical editorial craft: warm textured paper stock, crisp bookish typography, high-contrast ink, physical tabs for draft revisions, and purposeful tactile feedback.

## Core Design Principles

### 1. Honest Craft (No AI Slop)
- Avoid over-rounded neon pill soup and gratuitous purple gradients.
- Contrast is purposeful: interactive controls are distinct, metadata is quiet, and the text is deeply readable.
- Every state is explicit: First Drafts carry immutable locked badges (`🔒 Bản gốc`), Rewrites are cleanly demarcated (`✏️ Bản đối chiếu`).

### 2. Physicality & Continuity (Emil Kowalski Philosophy)
- Motion is physical and swift: transitions use `cubic-bezier(0.16, 1, 0.3, 1)` with durations under 280ms.
- Audio recording provides real-time ambient wave dynamics to convey live microphone capture.
- Split-screen Reading and Listening afford simultaneous reading and response entry on desktop without context switching.

### 3. Responsive Dual-World Architecture
- **Desktop (2-3 columns)**: Sidebar timeline on left, active reading/listening split-screen in center, persistent floating timer and quick error logger on right.
- **Mobile (1 column)**: Bottom navigation thumb-bar, single-expand accordion for cognitive quiet, sticky large thumb-touch recording button.
