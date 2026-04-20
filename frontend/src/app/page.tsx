"use client";

import React, { useState, useEffect } from "react";
import { translations, Language } from "./translations";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);
  const t = translations[lang] || translations.en;

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* 1. Global Status Ticker */}
      <div className="bg-black py-2 overflow-hidden whitespace-nowrap border-b border-zinc-800 fixed top-0 w-full z-[60]">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 text-[9px] font-mono font-bold text-blue-500"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="flex gap-8 uppercase">
              {t.ticker.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      <Navbar lang={lang} setLang={setLang} t={t} />

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* HERO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-3 p-12 border border-zinc-100 bg-zinc-50 rounded-[2.5rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <div className="w-80 h-80 border-[30px] border-blue-500 rounded-full border-t-transparent animate-spin-slow"></div>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.4em]">
              system_v4 // {t.hero.status}
            </span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic leading-[0.85] mb-8">
            {t.hero.title}
          </h1>
          <p className="text-xl text-zinc-500 font-medium max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>
        </motion.div>

        {/* NODE CLUSTER VISUALIZER */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 border border-zinc-100 rounded-[2.5rem] bg-white flex flex-col justify-between"
        >
          <div>
            <h3 className="text-[10px] font-mono font-black text-zinc-300 uppercase tracking-widest mb-1 italic">
              // {t.nodeCluster.title}
            </h3>
            <p className="text-xs font-bold text-zinc-400">
              {t.nodeCluster.subtitle}
            </p>
          </div>

          {/* Animated Node Grid */}
          <div className="grid grid-cols-6 gap-2 my-8">
            {Array.from({ length: 36 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: Math.random() * 3 + 1,
                  repeat: Infinity,
                }}
                className={`w-full aspect-square rounded-[2px] ${Math.random() > 0.8 ? "bg-blue-500" : "bg-zinc-100"}`}
              />
            ))}
          </div>

          <div className="text-2xl font-black italic tracking-tighter text-black">
            {t.nodeCluster.total}
          </div>
        </motion.div>

        {/* TELEMETRY CHART BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 p-10 border border-zinc-100 bg-white rounded-[2.5rem] relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-10">
            <div>
              <h3 className="text-[10px] font-mono font-black text-zinc-300 uppercase tracking-widest mb-2 italic">
                Realtime_Throughput
              </h3>
              <p className="text-4xl font-black italic tracking-tighter">
                8.42 <span className="text-sm text-zinc-300">GB/S</span>
              </p>
            </div>
            <span className="text-[9px] font-mono bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold">
              STABLE_UP
            </span>
          </div>

          {/* Simple CSS Wave Graph */}
          <div className="h-24 w-full flex items-end gap-1 overflow-hidden">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [20, Math.random() * 80 + 20, 20] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
                className="w-full bg-blue-500/10 border-t-2 border-blue-500"
              />
            ))}
          </div>
        </motion.div>

        {/* LOG TERMINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 p-10 bg-zinc-950 rounded-[2.5rem] font-mono text-[11px] shadow-2xl overflow-hidden"
        >
          <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
            <span className="text-zinc-600 uppercase tracking-widest text-[9px]">
              {t.nav.telemetry}
            </span>
            <span className="text-blue-500 animate-pulse font-bold tracking-tighter text-[9px]">
              LIVE_FEED
            </span>
          </div>
          <div className="space-y-3 max-h-[160px] overflow-y-auto pr-4 terminal-scroll">
            {t.logs.map((log, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-zinc-700">[{log.timestamp}]</span>
                <span className="text-blue-400">{log.event}</span>
                <span className="text-zinc-800 italic">
                  0x{Math.floor(Math.random() * 1000)}
                </span>
              </div>
            ))}
            <div className="text-zinc-800 animate-pulse">
              _waiting_for_packets...
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
