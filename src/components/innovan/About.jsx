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