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