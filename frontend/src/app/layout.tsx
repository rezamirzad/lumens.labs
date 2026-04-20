"use client";

import "./globals.css";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { translations, Language } from "./translations";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize language state
  const [lang, setLang] = useState<Language>("en");

  // Guard against undefined data
  const t = translations[lang] || translations.en;

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navbar lang={lang} setLang={setLang} t={t} />
        {/* We pass the translation data and language state to children 
            if needed, but for now, we'll keep the layout clean. 
        */}
        {children}
      </body>
    </html>
  );
}
