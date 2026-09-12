import React from "react";
import { HandHeart, ShieldCheck, MessageSquare, Users } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  {
    icon: HandHeart,
    title: "Acompañamiento y contención real",
    desc: "Ante la incertidumbre no entregamos solo informes: caminamos el proceso contigo y tu equipo.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad psicológica",
    desc: "Creamos espacios donde los equipos proponen ideas sin miedo a equivocarse ni a ser juzgados.",
  },
  {
    icon: MessageSquare,
    title: "Feedback honesto y directo",
    desc: "Sin adornos ni diplomacia vacía. Decimos lo que necesita escucharse para avanzar.",
  },
  {
    icon: Users,
    title: "Co-construcción, nunca prefabricados",
    desc: "No entregamos soluciones hechas. Trabajamos con tus equipos, no para ellos.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-white py-28 lg:py-40 border-t border-charcoal/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">03 — Cómo lo hacemos</span>
            <h2 className="mt-6 font-display font-700 uppercase tracking-tightest text-charcoal text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.92] text-balance">
              No es consultoría. Es <span className="text-orange">co-construcción</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
              Cuatro pilares que definen cómo trabajamos en cada proyecto, sin excepción.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-charcoal/10 border border-charcoal/10">
          {PILLARS.map((p, i) => (
            <Reveal key={i} delay={i * 120} className="bg-white p-8 lg:p-12 group hover:bg-charcoal hover:text-white transition-colors">
              <div className="flex items-start gap-6">
                <p.icon className="w-10 h-10 text-orange shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display font-600 uppercase tracking-tight text-2xl leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-charcoal/70 group-hover:text-white/70 transition-colors">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}