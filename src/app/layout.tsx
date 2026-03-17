import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Martinez | Frontend Developer",
  description:
    "Portfolio de Kevin Martinez — Desarrollador Frontend especializado en React, Next.js y TypeScript. Creando experiencias web modernas, accesibles y visualmente impactantes.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Kevin Martinez",
  ],
  openGraph: {
    title: "Kevin Martinez | Frontend Developer",
    description:
      "Desarrollador Frontend especializado en React, Next.js y TypeScript.",
    type: "website",
    locale: "es_LA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-sans antialiased font-normal overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
