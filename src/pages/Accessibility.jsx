import React from "react";
import LegalLayout from "@/components/innovan/LegalLayout";

export default function Accessibility() {
  return (
    <LegalLayout title="Declaración de Accesibilidad" updatedAt="11 de septiembre de 2026">
      <p>
        En INNOVAN creemos que la innovación debe ser accesible para todos. Esta
        declaración describe nuestro compromiso con la accesibilidad del sitio
        web de nuestra consultora.
      </p>

      <h2>Nuestro compromiso</h2>
      <p>
        Buscamos que nuestro sitio cumpla con las pautas de accesibilidad web
        WCAG 2.1 nivel AA. Esto incluye contraste adecuado de colores, navegación
        por teclado, textos alternativos en imágenes y estructura semántica clara.
      </p>

      <h2>Estado actual</h2>
      <p>
        Hemos aplicado las siguientes medidas: jerarquía de encabezados ordenada,
        textos alternativos descriptivos en imágenes, navegación mediante teclado
        y formularios con etiquetas asociadas. Trabajamos continuamente para
        mejorar la experiencia de todos los usuarios.
      </p>

      <h2>Limitaciones conocidas</h2>
      <p>
        Algunos componentes interactivos pueden presentar dificultades en
        lectores de pantalla antiguos. Si encuentras una barrera de accesibilidad,
        agradecemos que nos lo reportes para corregirla.
      </p>

      <h2>Contacto</h2>
      <p>
        Para reportar problemas de accesibilidad o solicitar asistencia, escríbenos
        a contacto@innovan.cl o llámanos al +56 9 8828 6227.
      </p>
    </LegalLayout>
  );
}