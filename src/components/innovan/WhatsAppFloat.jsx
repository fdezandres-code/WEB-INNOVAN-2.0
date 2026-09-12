import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white border border-charcoal/10 shadow-xl rounded-sm w-72 p-5 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-display font-600 uppercase tracking-tight text-charcoal">Hablemos</div>
              <div className="text-xs text-charcoal/50">Respondemos en minutos</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Cerrar"><X className="w-4 h-4 text-charcoal/50" /></button>
          </div>
          <p className="mt-4 text-sm text-charcoal/70 leading-relaxed">
            ¿Quieres diagnosticar tu innovación? Escríbenos y agendamos una llamada.
          </p>
          <a
            href="https://wa.me/56988286227?text=Hola%20INNOVAN,%20quiero%20diagnosticar%20mi%20innovaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center bg-orange hover:bg-orange-deep text-charcoal font-600 text-sm py-2.5 rounded-sm transition-colors"
          >
            Abrir WhatsApp
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="WhatsApp"
        className="w-14 h-14 bg-orange hover:bg-orange-deep text-charcoal rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        {!open && <span className="absolute top-0 right-0 w-3 h-3 bg-orange rounded-full animate-ping" />}
      </button>
    </div>
  );
}