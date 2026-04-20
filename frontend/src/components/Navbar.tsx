import React from "react";
import { Language, TranslationContent } from "../app/translations";

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationContent;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  // Safety check: if t is undefined, don't crash the app
  if (!t) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-black font-black tracking-tighter text-xl italic flex items-center gap-1">
          <span className="text-zinc-300 font-mono not-italic">[</span>
          {t.brand}
          <span className="text-zinc-300 font-mono not-italic">]</span>
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-8 font-mono text-[10px] font-black uppercase tracking-widest text-zinc-400">
            {Object.values(t.nav).map((label, i) => (
              <span
                key={i}
                className="hover:text-black cursor-pointer transition-colors"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex gap-3 border-l border-zinc-200 pl-8">
            {(["en", "fr", "de", "es"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] font-black uppercase transition-all ${
                  lang === l
                    ? "text-blue-600 underline underline-offset-4 decoration-2"
                    : "text-zinc-400 hover:text-black"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
