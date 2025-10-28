// src/components/SEO.tsx

import React from "react";
// ¡Ya no se importa nada de react-helmet-async!

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string; // URL de la imagen para Open Graph (redes sociales)
  canonicalUrl?: string; // La ruta de la página, ej: "/nosotros"
};


// --- CONFIGURA TUS VALORES POR DEFECTO AQUÍ ---
const DEFAULT_TITLE = "4101Media"; // El nombre de tu sitio
const DEFAULT_DESCRIPTION =
  "Potenciamos empresas y emprendedores con marketing digital.";
const SITE_URL = "https://www.4101media.com";
// ------------------------------------------------

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl,
}) => {
  // Crea el título completo: "Título de la Página | Nombre del Sitio"
  const pageTitle = title
    ? `${title} | ${DEFAULT_TITLE}`
    : DEFAULT_TITLE;

  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageUrl = `${SITE_URL}${canonicalUrl || "/"}`;
  const pageImage = ogImage || `${SITE_URL}/default-og-image.png`; 

  // En React 19, simplemente retornamos los tags dentro de un Fragment (<> ... </>)
  // React los moverá automáticamente al <head> del documento.
  return (
    <>
      {/* --- Metadatos Básicos --- */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={pageUrl} />

      {/* --- Open Graph (para Facebook, LinkedIn, etc.) --- */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />

      {/* --- Twitter Cards (Opcional pero recomendado) --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
    </>
  );
};

export default SEO;