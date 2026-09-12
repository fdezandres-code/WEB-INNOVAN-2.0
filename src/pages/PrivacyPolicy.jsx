import React from "react";
import LegalLayout from "@/components/innovan/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Política de Privacidad" updatedAt="11 de septiembre de 2026">
      <p>
        INNOVAN ("nosotros") es una consultora de innovación aplicada con domicilio
        en Santiago, Chile. Esta política describe cómo recopilamos, usamos y
        protegemos los datos personales que nos entregas a través de nuestro sitio
        web y formularios de contacto.
      </p>

      <h2>Datos que recopilamos</h2>
      <p>
        Cuando completas nuestro formulario de contacto o el autodiagnóstico de
        innovación, recopilamos: nombre, correo electrónico, teléfono, empresa y
        cargo, además del mensaje que decidas enviarnos. No solicitamos datos
        sensibles ni información financiera a través del sitio.
      </p>

      <h2>Uso de tus datos</h2>
      <p>
        Utilizamos tu información exclusivamente para: responder tu solicitud de
        contacto, agendar reuniones, enviar el resultado del autodiagnóstico y
        proponer servicios de consultoría relacionados. No compartimos ni vendemos
        tus datos a terceros.
      </p>

      <h2>Base legal y consentimiento</h2>
      <p>
        Tratamos tus datos en base al consentimiento que nos otorgas al enviar el
        formulario. Puedes retirar tu consentimiento en cualquier momento
        escribiendo a contacto@innovan.cl.
      </p>

      <h2>Conservación y seguridad</h2>
      <p>
        Conservamos tus datos mientras exista una relación comercial o hasta que
        solicites su eliminación. Aplicamos medidas razonables de seguridad
        técnica y organizativa para proteger tu información.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Conforme a la Ley N° 19.628 sobre protección de datos personales, tienes
        derecho a acceder, rectificar o eliminar tus datos. Para ejercer estos
        derechos, escríbenos a contacto@innovan.cl.
      </p>

      <h2>Contacto</h2>
      <p>
        Para cualquier consulta sobre esta política, contáctanos en
        contacto@innovan.cl o al +56 9 8828 6227.
      </p>
    </LegalLayout>
  );
}