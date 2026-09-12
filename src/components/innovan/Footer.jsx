const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Programa", href: "#programa" },
  { label: "Cómo lo hacemos", href: "#metodologia" },
  { label: "Casos / Resultados", href: "#casos" },
  { label: "Sobre nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-charcoal/15">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <img
              src="https://media.db.com/images/public/6a8c5ff187edbe58168c74fa/34e9261f8_LOGOINNOVANbaja.png"
              alt="INNOVAN"
              className="h-12 w-auto"
            />
            <p className="mt-6 text-charcoal/65 leading-relaxed max-w-sm">
              Innovación real, ejecutada por tu propio equipo. La innovación no se piensa, se ejecuta.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 border border-charcoal/20 hover:border-orange hover:text-orange flex items-center justify-center transition-colors rounded-full">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 border border-charcoal/20 hover:border-orange hover:text-orange flex items-center justify-center transition-colors rounded-full">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/56988286227" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 border border-charcoal/20 hover:border-orange hover:text-orange flex items-center justify-center transition-colors rounded-full">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-charcoal/50 mb-5">Navegación</h4>
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-charcoal/75 hover:text-orange-deep transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-charcoal/50 mb-5">Contacto</h4>
            <ul className="space-y-3 text-charcoal/75">
              <li><a href="mailto:contacto@innovan.cl" className="hover:text-orange-deep transition-colors">contacto@innovan.cl</a></li>
              <li><a href="tel:+56988286227" className="hover:text-orange-deep transition-colors">+56 9 8828 6227</a></li>
              <li>Santiago, Chile</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-charcoal/10 text-sm text-charcoal/55 leading-relaxed">
              <p className="font-500 text-charcoal/70">Razón social: INNOVAN SpA</p>
              <p>Dirección: Santiago, Región Metropolitana, Chile</p>
            </div>
            <a href="https://autodiagnostico-innovan.netlify.app/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center bg-orange hover:bg-orange-deep text-charcoal font-600 text-sm px-5 py-2.5 rounded-sm transition-colors">
              Autodiagnóstico gratis
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-sm text-charcoal/50">© {new Date().getFullYear()} INNOVAN SpA. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="/privacidad" className="text-charcoal/50 hover:text-orange-deep transition-colors">Privacidad</a>
              <a href="/terminos" className="text-charcoal/50 hover:text-orange-deep transition-colors">Términos</a>
              <a href="/accesibilidad" className="text-charcoal/50 hover:text-orange-deep transition-colors">Accesibilidad</a>
            </div>
          </div>
          <p className="text-sm text-charcoal/50">Consultora boutique de innovación aplicada · Chile</p>
        </div>
      </div>
    </footer>
  );
}