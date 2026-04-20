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
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang] || translations.en;

  return (
    <html lang={lang}>
      <body className={`${inter.className} bg-white`}>
        {/* Navbar now receives the state setters */}
        <Navbar lang={lang} setLang={setLang} t={t} />
        {/* We pass the lang to children using a simple clone pattern or just local state */}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              lang,
            });
          }
          return child;
        })}
      </body>
    </html>
  );
}
