import React from "react";
import { Target, RefreshCw, BarChart3 } from "lucide-react";
import Reveal from "./Reveal";

const MODULES = [
  {
    num: "01",
    title: "Diagnóstico y plan de trabajo accionable",
    desc: "Entendemos la cultura innovadora real de tu organización y priorizamos tu portafolio de proyectos.",
  },
  {
    num: "02",
    title: "Implementación de proyectos estratégicos",
    desc: "Tu equipo ejecuta proyectos reales del portafolio con un programa de aprendizaje teórico/práctico en paralelo.",
  },
  {
    num: "03",
    title: "Captura, medición y sostenibilidad",
    desc: "Instalamos un sistema y capacidades que le dan continuidad a la cultura innovadora, más allá del programa.",
  },
];

const BENEFITS = [
  { icon: Target, text: "Conoces tu capacidad instalada y priorizas tu portafolio de proyectos." },
  { icon: RefreshCw, text: "Creas un sistema de gestión de la innovación propio, no dependiente de terceros." },
  { icon: BarChart3, text: "Capturas, mides y sostienes resultados de forma ágil y autónoma." },
];

export default function Program() {
  return (
    <section id="programa" className="bg-white py-28 lg:py-40 border-t border-charcoal/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">02 — La solución</span>
              <h2 className="mt-6 font-display font-700 uppercase tracking-tightest text-charcoal text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] text-balance">
                Programa <span className="text-orange">Innovación Aplicada</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <p className="text-charcoal/70 text-lg leading-relaxed">
                Implementamos proyectos de innovación con <span className="text-charcoal font-600">ROI de al menos 20%, en 3 a 6 meses</span>, sin informes ni capacitaciones que no se aplican.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Diferenciador */}
        <Reveal delay={200}>
          <div className="mt-14 bg-charcoal text-white p-8 lg:p-12 rounded-sm">
            <p className="font-display font-500 uppercase tracking-tight text-2xl lg:text-3xl leading-snug text-balance">
              Con nuestra compañía y con contenidos teóricos aprendidos, el propio equipo del cliente <span className="text-orange">desarrolla y ejecuta</span> sus proyectos reales durante el proceso. No entregamos un informe y nos vamos: <span className="text-orange">instalamos capacidades</span> de innovación ágil dentro de tu empresa.
            </p>
          </div>
        </Reveal>

        {/* Métricas grandes */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
          {[
            { n: "+20%", l: "ROI mínimo garantizado" },
            { n: "3–6", l: "meses de duración" },
            { n: "3", l: "módulos del programa" },
            { n: "100%", l: "ejecutado por tu equipo" },
          ].map((m, i) => (
            <Reveal key={i} delay={i * 100} className="bg-white p-8 lg:p-10">
              <div className="font-display font-700 uppercase tracking-tightest text-orange text-5xl lg:text-6xl tabular-nums">
                {m.n}
              </div>
              <div className="mt-3 text-sm text-charcoal/60 uppercase tracking-wider">{m.l}</div>
            </Reveal>
          ))}
        </div>

        {/* Beneficios */}
        <Reveal>
          <h3 className="mt-20 lg:mt-28 font-display font-700 uppercase tracking-tightest text-charcoal text-3xl lg:text-4xl">
            Beneficios
          </h3>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="border border-charcoal/15 p-8 h-full hover:border-orange transition-colors group">
                <b.icon className="w-9 h-9 text-orange mb-6" strokeWidth={1.5} />
                <p className="text-charcoal text-lg leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Módulos timeline */}
        <div className="mt-24">
          <Reveal>
            <h3 className="font-display font-700 uppercase tracking-tightest text-charcoal text-3xl lg:text-4xl">
              Estructura del programa
            </h3>
          </Reveal>
          <div className="mt-12 grid lg:grid-cols-3 gap-px bg-charcoal/10 border border-charcoal/10">
            {MODULES.map((m, i) => (
              <Reveal key={m.num} delay={i * 150} className="bg-white p-8 lg:p-10 relative">
                <div className="font-display font-700 uppercase tracking-tightest text-charcoal/10 text-6xl lg:text-7xl leading-none">
                  {m.num}
                </div>
                <div className="mt-6 h-px w-12 bg-orange" />
                <h4 className="mt-6 font-display font-600 uppercase tracking-tight text-xl text-charcoal leading-snug">
                  {m.title}
                </h4>
                <p className="mt-4 text-charcoal/65 leading-relaxed">{m.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}