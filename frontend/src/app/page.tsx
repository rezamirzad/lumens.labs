"use client";

import React from "react";
import { translations, Language } from "./translations";
import { motion } from "framer-motion";

export default function Home({ lang = "en" }: { lang: Language }) {
  const t = translations[lang] || translations.en;

  return (
    <main className="min-h-screen pt-32 pb-12 px-6 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* PRIMARY MONITOR (Left) */}
        <div className="md:col-span-8 space-y-4">
          <section className="p-10 border border-zinc-100 bg-zinc-50 rounded-2xl relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="mono-tag">
                {t.hero.status} // {t.hero.uptime}
              </span>
            </div>
            <h1 className="text-8xl font-black italic tracking-tighter leading-none mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl">{t.hero.subtitle}</p>
          </section>

          {/* LATENCY MATRIX (New) */}
          <section className="grid grid-cols-2 gap-4">
            <div className="dashboard-card">
              <h3 className="mono-tag blueprint-divider">
                Regional_Latency_Matrix
              </h3>
              <div className="grid grid-cols-10 gap-1">
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.1, 1, 0.1],
                      backgroundColor: i % 7 === 0 ? "#3b82f6" : "#f4f4f5",
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                    }}
                    className="h-4 rounded-[1px]"
                  />
                ))}
              </div>
            </div>
            <div className="dashboard-card">
              <h3 className="mono-tag blueprint-divider">Memory_Heatmap</h3>
              <div className="flex items-end gap-1 h-20">
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: `${Math.random() * 100}%` }}
                    className="w-full bg-zinc-900"
                  />
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* TELEMETRY SIDEBAR (Right) */}
        <div className="md:col-span-4 space-y-4">
          <div className="bg-zinc-950 p-8 rounded-2xl text-white font-mono text-[10px]">
            <div className="flex justify-between border-b border-zinc-800 pb-4 mb-4">
              <span className="text-zinc-500 uppercase">Live_Node_Stream</span>
              <span className="text-blue-500 animate-flicker">● STABLE</span>
            </div>
            <div className="space-y-3 custom-scroll max-h-[400px] overflow-y-auto">
              {t.logs.map((log, i) => (
                <div
                  key={i}
                  className="border-l border-zinc-800 pl-4 py-1 group"
                >
                  <div className="text-zinc-600">
                    [{log.timestamp}] @{log.origin}
                  </div>
                  <div className="text-blue-400 group-hover:text-white transition-colors">
                    {log.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-card bg-blue-600 border-none text-white">
            <span className="mono-tag text-blue-200">Global_Throughput</span>
            <div className="text-5xl font-black italic tracking-tighter mt-2">
              8.42 GB/S
            </div>
            <div className="mt-4 pt-4 border-t border-blue-500 text-[10px] opacity-80">
              UPLINK_ENCRYPTION: AES-256-GCM
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
