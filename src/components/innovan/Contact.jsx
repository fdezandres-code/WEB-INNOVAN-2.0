const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from "react";

import { ArrowRight, Loader2, CheckCircle2, Calendar, Linkedin, Instagram } from "lucide-react";
import Reveal from "./Reveal";

const LOCALBUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "INNOVAN",
  image: "https://media.db.com/images/public/6a8c5ff187edbe58168c74fa/34e9261f8_LOGOINNOVANbaja.png",
  url: "https://innovan.db.app",
  telephone: "+56988286227",
  email: "contacto@innovan.cl",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Santiago",
    addressLocality: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL"
  },
  geo: {
    "@type": "GeoCoordinates",