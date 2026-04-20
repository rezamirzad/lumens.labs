"use client";

import React, { useState } from "react";
import { translations, Language } from "./translations";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  // Guard: Always ensure t has a value from translations
  const t = translations[lang] || translations.en;

  return (
    <main className="min-h-screen bg-white p-6 md:p-12 selection:bg-blue-500 selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />

      <div className="max-w-7xl mx-auto pt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* HERO CARD - LARGE */}
        <div className="md:col-span-3 p-12 border border-zinc-100 bg-zinc-50 rounded-3xl flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <div className="w-64 h-64 border-[20px] border-blue-500 rounded-full border-t-transparent animate-spin-slow"></div>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.4em]">
              {t.hero.status}
            </span>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter italic leading-[0.8] mb-8">
            {t.hero.title}
          </h1>
          <p className="text-xl text-zinc-500 font-medium max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        {/* SIDEBAR STATS */}
        <div className="flex flex-col gap-6">
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="p-8 border border-zinc-100 rounded-3xl bg-white shadow-sm group hover:border-black transition-colors"
            >
              <p className="text-[10px] font-black uppercase text-zinc-400 mb-2 tracking-widest italic">
                // {stat.label}
              </p>
              <div className="flex justify-between items-end">
                <span className="text-4xl font-bold italic tracking-tighter">
                  {stat.value}
                </span>
                <span
                  className={`text-[9px] font-mono font-bold uppercase ${stat.color}`}
                >
                  {stat.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* LOG TERMINAL */}
        <div className="md:col-span-2 p-10 bg-zinc-900 rounded-3xl font-mono text-[11px] shadow-2xl">
          <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
            <span className="text-zinc-500 uppercase tracking-widest text-[9px]">
              {t.nav.telemetry}
            </span>
            <span className="text-emerald-500 text-[9px] animate-pulse">
              ● REC
            </span>
          </div>
          <div className="space-y-4 max-h-[180px] overflow-y-auto terminal-scroll">
            {t.logs.map((log, i) => (
              <div key={i} className="flex gap-4 group">
                <span className="text-zinc-600">[{log.timestamp}]</span>
                <span className="text-blue-400">{log.event}</span>
                <span className="text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  0x{Math.floor(Math.random() * 1000)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PROGRESS MONITOR */}
        <div className="md:col-span-2 p-10 border border-zinc-100 rounded-3xl bg-white">
          <h3 className="text-[10px] font-black uppercase text-zinc-400 mb-8 tracking-widest italic flex items-center gap-4">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{" "}
            Live_Analysis
          </h3>
          <div className="space-y-8">
            {t.experiments.map((exp, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-bold text-zinc-800">
                    {exp.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {exp.progress}%
                  </span>
                </div>
                <div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-1000 group-hover:bg-black"
                    style={{ width: `${exp.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-20 border-t border-zinc-100 pt-12 flex justify-between items-center text-[9px] font-mono text-zinc-300 uppercase tracking-[0.4em]">
        <span>
          {t.brand}_{t.footer.archive}
        </span>
        <div className="flex gap-8">
          <span>{t.footer.security}</span>
          <span>
            {t.stats[0].value} {t.footer.online}
          </span>
        </div>
      </footer>
    </main>
  );
}
