const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const TEAM = [
  {
    nombre: "Andrés Fernández Astaburuaga",
    cargo: "CEO & Founder · Consultor Senior",
    bajada: "Ingeniero Comercial y Diseñador Industrial, Diplomado en Docencia Universitaria, Universidad Diego Portales. Consultor y docente con +10 años de experiencia acompañando a organizaciones y equipos en el desarrollo de capacidades para la gestión de la innovación.",
    foto: "https://media.db.com/images/public/6a8c5ff187edbe58168c74fa/cc1d7c6ed_AndresFernandezConsultorSenior.jpeg",
    focalPointY: 0.32,
    linkedin: "https://www.linkedin.com/in/andresfernandezastaburuaga/",
  },
  {
    nombre: "Sebastián Cruz Fernández",
    cargo: "Partner & Director de Proyectos",
    bajada: "Ingeniero Agrónomo PUC, Máster of Wine Business en The University of Adelaide. Experiencia en gestión de operaciones, dirección y evaluación de proyectos, finanzas corporativas, control de gestión, planificación y ejecución de estrategias comerciales e investigaciones de mercado.",
    foto: "https://media.db.com/images/public/6a8c5ff187edbe58168c74fa/8683a5037_SebastianCruzFernandez.jpeg",
    linkedin: "https://www.linkedin.com/in/sebastiancruzf/",
  },
  {
    nombre: "Agustina González Candel",
    cargo: "Partner · Consultora Senior",
    bajada: "Ingeniera Comercial PUC, Master en comportamiento del consumidor UAI, Diplomada en psicología junguiana PUC, mentora certificada de triple Impacto Emprendiem-PUC. Consultora y docente con +12 años de experiencia acompañando a organizaciones y equipos en el desarrollo de capacidades estratégicas y financieras para emprender e innovar.",
    foto: "https://media.db.com/images/public/6a8c5ff187edbe58168c74fa/8b59f9020_AgustinaGonzalez.jpeg",
    linkedin: "#",
  },
  {
    nombre: "Bastián Olave Arqueros",
    cargo: "Consultor Junior",
    bajada: "Sociólogo de la Universidad Diego Portales y Diplomado de Honor en Gestión de la Innovación. Cuenta con experiencia en consultoría y análisis de datos, participando en proyectos para organizaciones públicas y privadas.",
    foto: "https://media.db.com/images/public/6a8c5ff187edbe58168c74fa/e9e15acca_BastianOlave.jpeg",
    fittingType: "fill",
    linkedin: "#",
  },
  {
    nombre: "Cristóbal Hargous Demangel",
    cargo: "Partner · Consultor Senior",
    bajada: "Psicólogo laboral, MBA UC y especializaciones en innovación, agilidad y change management. Mentor en Startup Chile y co-fundador del Hub de Innovación y emprendimiento del MBA UC. Enfoque en corporate venturing, estrategia de negocios y desarrollo de ventajas competitivas.",
    foto: "https://media.db.com/images/public/6a8c5ff187edbe58168c74fa/b07151326_1789073388135.png",
    linkedin: "https://www.linkedin.com/in/cristobal-hargous-demangel",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-28 lg:py-40 border-t border-charcoal/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">04 — Sobre nosotros</span>
            <h2 className="mt-6 font-display font-700 uppercase tracking-tightest text-charcoal text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.92] text-balance">
              Hechos para empresas medianas, no para corporaciones gigantes
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-charcoal/70 text-lg leading-relaxed">
              INNOVAN nace en 2025 de una observación simple: las consultoras de innovación atienden a grandes corporaciones con presupuestos enormes, y no trabajan con las empresas medianas que están 100% metidas en la operación, y no tienen tiempo o capacidades instaladas para gestionar la innovación.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-charcoal/70 text-lg leading-relaxed">
              Somos una consultora enfocada en empresas de 50 a 500 colaboradores. Conocemos la presión del directorio, la falta de estructura y el agotamiento de operar sin método. Por eso instalamos capacidad real, no teoría.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="mt-20 lg:mt-28 font-display font-700 uppercase tracking-tightest text-charcoal text-3xl lg:text-4xl">
            Nuestro equipo
          </h3>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TEAM.map((m, i) => (
            <Reveal key={i} delay={i * 120}>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-charcoal/15 p-6 h-full transition-colors hover:border-orange"
              >
                <div className="aspect-square bg-secondary overflow-hidden">
                  {m.foto ? (
                    <Image src={m.foto} alt={m.nombre} className="w-full h-full" fittingType={m.fittingType || "fill"} focalPointY={m.focalPointY} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-charcoal/30 font-mono text-xs uppercase tracking-widest">Foto</span>
                    </div>
                  )}
                </div>
                <h4 className="mt-6 font-display font-600 uppercase tracking-tight text-charcoal group-hover:text-orange-deep transition-colors">{m.nombre}</h4>
                <p className="mt-1 text-sm text-orange-deep uppercase tracking-wider">{m.cargo}</p>
                <p className="mt-4 text-sm text-charcoal/70 leading-relaxed">{m.bajada}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}