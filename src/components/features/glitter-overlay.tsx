"use client";

import dynamic from "next/dynamic";

const GlitterFinal = dynamic(
  () => import("@/components/animated-hero-with-web-gl-glitter").then((m) => ({ default: m.GlitterFinal })),
  { ssr: false }
);

export function GlitterOverlay() {
  return <GlitterFinal speed={0.5} intensity={4} />;
}
