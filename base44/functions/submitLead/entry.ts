const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

export default async function(req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();

    const nombre = (body?.nombre || "").toString().trim();
    const email = (body?.email || "").toString().trim();
    const empresa = (body?.empresa || "").toString().trim();
    const cargo = (body?.cargo || "").toString().trim();
    const telefono = (body?.telefono || "").toString().trim();
    const mensaje = (body?.mensaje || "").toString().trim();
    const tipo = body?.tipo === "autodiagnostico" ? "autodiagnostico" : "contacto";

    if (!nombre || !email) {
      return Response.json({ error: "Nombre y email son obligatorios" }, { status: 400 });
    }

    await db.asServiceRole.entities.Lead.create({
      nombre, email, empresa, cargo, telefono, mensaje, tipo
    });