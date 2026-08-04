import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bentino Servicios | Electricidad y Reparaciones Generales",
  description:
    "Electricidad, mantenimiento y reparaciones para el hogar en CABA y Zona Norte. Atención rápida. Solicite presupuesto por WhatsApp.",

  keywords: [
    "electricista",
    "electricidad",
    "reparaciones hogar",
    "electricista caba",
    "electricista zona norte",
    "mantenimiento hogar",
    "instalaciones electricas",
    "bentino servicios",
  ],

  authors: [
    {
      name: "Bentino Servicios",
    },
  ],

  openGraph: {
    title: "Bentino Servicios",
    description:
      "Electricidad y Reparaciones Generales para el hogar en CABA y Zona Norte.",
    url: "https://www.bentino.com.ar",
    siteName: "Bentino Servicios",
    locale: "es_AR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
