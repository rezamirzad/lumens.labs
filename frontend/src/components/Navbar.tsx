import React from "react";

// 1. Define the "shape" of the props
interface NavbarProps {
  brand: string;
}

// 2. Use the interface in the component definition
export default function Navbar({ brand }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Technical Logo Style */}
        <div className="text-black font-black tracking-tighter text-xl italic flex items-center gap-1">
          <span className="text-zinc-300 font-mono not-italic">[</span>
          {brand}
          <span className="text-zinc-300 font-mono not-italic">]</span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 font-mono text-[10px] font-black uppercase tracking-widest text-zinc-400">
            <span className="text-black cursor-pointer">Dashboard</span>
            <span className="hover:text-black cursor-pointer transition-colors">
              Telemetry
            </span>
            <span className="hover:text-black cursor-pointer transition-colors">
              Nodes
            </span>
          </div>
          <button className="bg-black text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">
            Live_Feed
          </button>
        </div>
      </div>
    </nav>
  );
}
