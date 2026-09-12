import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function LeadMagnet() {
  return (
    <section id="autodiagnostico" className="bg-charcoal text-white py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04]">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #E8590C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      </div>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-orange">07 — Autodiagnóstico gratis</span>
            <h2 className="mt-6 font-display font-700 uppercase tracking-tightest text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.92] text-balance">
              Autodiagnóstico de Innovación en <span className="text-orange">6 dimensiones</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-md">
              Descubre en 5 minutos qué tan preparada está tu organización para innovar. Sin reuniones, sin compromiso.
            </p>
          </Reveal>