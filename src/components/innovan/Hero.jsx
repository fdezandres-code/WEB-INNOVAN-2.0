import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const PULSE = [
"Rentabilidad? +20%",
"Proyectos? Ejecutados",
"Plazo? 3 a 6 meses",
"Capacidad? Instalada"];

export default function Hero() {
  const [pulseIdx, setPulseIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPulseIdx((i) => (i + 1) % PULSE.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0">