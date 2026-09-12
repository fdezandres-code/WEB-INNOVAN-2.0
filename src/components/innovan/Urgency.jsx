import React from "react";
import Reveal from "./Reveal";

export default function Urgency() {
  return (
    <section className="bg-white py-28 lg:py-40 border-t border-charcoal/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">06 — Por qué ahora</span>
            <h2 className="mt-6 font-display font-700 uppercase tracking-tightest text-charcoal text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.92] text-balance">
              Las empresas que innovan <span className="text-orange">diseñan su futuro</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
              Innovar nunca será urgente, pero sí es muy importante si estás perdiendo participación de mercado, quieres liderar tu industria, desarrollar nuevos productos o mejorar procesos.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );