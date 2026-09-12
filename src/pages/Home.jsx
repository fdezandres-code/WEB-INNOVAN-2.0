import React from "react";
import KineticThread from "@/components/innovan/KineticThread";
import Header from "@/components/innovan/Header";
import Hero from "@/components/innovan/Hero";
import Problem from "@/components/innovan/Problem";
import Program from "@/components/innovan/Program";
import LeadMagnet from "@/components/innovan/LeadMagnet";
import Methodology from "@/components/innovan/Methodology";
import About from "@/components/innovan/About";
import Clients from "@/components/innovan/Clients";
import Urgency from "@/components/innovan/Urgency";
import FAQ from "@/components/innovan/FAQ";
import Contact from "@/components/innovan/Contact";
import Footer from "@/components/innovan/Footer";
import WhatsAppFloat from "@/components/innovan/WhatsAppFloat";

export default function Home() {
  return (
    <div className="bg-white">
      <KineticThread />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Program />
        <Methodology />
        <About />
        <Clients />
        <Urgency />
        <LeadMagnet />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}