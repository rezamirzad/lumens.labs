"use client";

import React, { useState, useEffect } from "react";
import { translations, Language } from "./translations";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [sys, setSys] = useState({
    throughput: 8.42,
    latency: 14.2,
    integrity: 99.99,
    encryption: 42,
    traffic: Array.from({ length: 42 }, () => Math.random() * 100),
    nodes: [45, 88, 12, 55],
  });

  const t = translations[lang] || translations.en;

  // Discrete 5-second polling cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setSys({
        throughput: parseFloat((8.2 + Math.random() * 0.6).toFixed(2)),
        latency: parseFloat((13.8 + Math.random() * 0.9).toFixed(1)),
        integrity: parseFloat((99.97 + Math.random() * 0.02).toFixed(2)),
        encryption: Math.floor(Math.random() * 20) + 35,
        traffic: Array.from({ length: 42 }, () => Math.random() * 100),
        nodes: sys.nodes.map((v) =>
          Math.min(100, Math.max(10, v + (Math.random() * 10 - 5))),
        ),
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [sys.nodes]);

  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 pb-20 font-sans overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} t={t} />

      <div className="max-w-[1600px] mx-auto pt-32 px-6 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* HERO MONITOR */}
        <div className="md:col-span-8 p-12 border border-zinc-100 bg-zinc-50 rounded-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="mono-tag text-zinc-400">
              {t.hero.status} // {t.hero.uptime} // {t.hero.cpu}
            </span>
          </div>
          <h1 className="text-7xl md:text-[9.5rem] font-black tracking-tighter italic leading-[0.8] mb-8">
            {t.hero.title}
          </h1>
          <p className="text-xl text-zinc-500 font-medium max-w-2xl leading-snug">
            {t.hero.subtitle}
          </p>
        </div>

        {/* STATS STACK */}
        <div className="md:col-span-4 grid grid-cols-1 gap-4">
          {[
            {
              label: t.stats[0].label,
              val: `${sys.throughput} GB/s`,
              sub: t.stats[0].detail,
              trend: t.stats[0].trend,
            },
            {
              label: t.stats[1].label,
              val: `${sys.latency}ms`,
              sub: t.stats[1].detail,
              trend: t.stats[1].trend,
            },
            {
              label: t.stats[2].label,
              val: `${sys.integrity}%`,
              sub: t.stats[2].detail,
              trend: t.stats[2].trend,
            },
          ].map((stat, i) => (
            <div key={i} className="dashboard-card">
              <div className="flex justify-between items-start mb-1">
                <span className="mono-tag italic">{stat.label}</span>
                <span className="text-[10px] font-mono text-emerald-600 font-bold">
                  {stat.trend}
                </span>
              </div>
              <div className="text-5xl font-black italic tracking-tighter">
                {stat.val}
              </div>
              <div className="text-[9px] font-mono text-zinc-400 mt-2 uppercase">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* TRAFFIC HISTOGRAM */}
        <div className="md:col-span-4 p-8 border border-zinc-100 bg-white rounded-2xl">
          <h3 className="mono-tag blueprint-divider">
            {t.grid.distributionTitle}
          </h3>
          <div className="flex items-end gap-1 h-32">
            {sys.traffic.map((val, i) => (
              <div
                key={i}
                className="w-full bg-zinc-900"
                style={{ height: `${val}%` }}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between text-[8px] font-mono text-zinc-400 uppercase">
            <span>Protocol: TCP/IP</span>
            <span>Sync: Active</span>
          </div>
        </div>

        {/* SECURITY MONITOR */}
        <div className="md:col-span-4 p-8 border border-zinc-100 bg-white rounded-2xl">
          <h3 className="mono-tag blueprint-divider">{t.grid.securityTitle}</h3>
          <div className="flex items-center justify-between mb-8">
            <div className="text-5xl font-black italic tracking-tighter">
              0x{sys.encryption}
            </div>
            <div className="text-right">
              <div className="text-[9px] font-mono text-zinc-400 uppercase">
                Rotation_Freq
              </div>
              <div className="text-xs font-bold italic">128_BIT_RSA</div>
            </div>
          </div>
          <div className="w-full h-1 bg-zinc-50 border border-zinc-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-1000"
              style={{ width: `${sys.encryption}%` }}
            />
          </div>
        </div>

        {/* NODE TOPOLOGY */}
        <div className="md:col-span-4 p-8 border border-zinc-100 bg-white rounded-2xl">
          <h3 className="mono-tag blueprint-divider">{t.grid.nodesTitle}</h3>
          <div className="space-y-4">
            {t.nodes.map((node, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-2 border-b border-zinc-50 last:border-0"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase leading-none">
                    {node.region}
                  </span>
                  <span className="text-[8px] font-mono text-zinc-300 mt-1">
                    {node.id}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono font-bold text-zinc-400">
                    {sys.nodes[i].toFixed(0)}%
                  </span>
                  <div className="w-12 h-1 bg-zinc-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-zinc-900"
                      style={{ width: `${sys.nodes[i]}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PACKET INTERCEPTOR - HIGH CONTRAST */}
        <div className="md:col-span-12 bg-zinc-950 p-8 rounded-2xl text-white font-mono text-[10px] shadow-2xl">
          <div className="flex justify-between border-b border-zinc-800 pb-4 mb-6">
            <span className="text-zinc-100 uppercase tracking-widest">
              {t.grid.opsTitle}
            </span>
            <span className="text-blue-500 font-bold italic tracking-tighter">
              REC_LIVE // STABLE
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.logs.map((log, i) => (
              <div key={i} className="border-l border-zinc-800 pl-4 py-1">
                <div className="text-zinc-400">
                  [{log.timestamp}] // PORT_{log.port}
                </div>
                <div className="text-blue-400 font-black my-1.5 uppercase leading-none">
                  {log.event}
                </div>
                <div className="text-zinc-500 italic uppercase tracking-tighter">
                  {log.origin} // {log.hex}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
