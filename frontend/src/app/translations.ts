export type Language = "en" | "fr" | "de" | "es";

export interface TranslationContent {
  brand: string;
  ticker: string[];
  nav: { dash: string; telemetry: string; nodes: string; live: string };
  hero: { title: string; subtitle: string; status: string };
  stats: { label: string; value: string; status: string; color: string }[];
  nodeCluster: { title: string; subtitle: string; total: string };
  logs: { timestamp: string; event: string; status: string }[];
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    brand: "Lumen // Labs",
    ticker: [
      "NODE_SIGMA: ACTIVE",
      "LATENCY: 14MS",
      "UPLINK: SECURE",
      "PACKET_LOSS: 0.001%",
    ],
    nav: {
      dash: "Dashboard",
      telemetry: "Telemetry",
      nodes: "Nodes",
      live: "Live_Feed",
    },
    hero: {
      title: "Neural Frontier",
      subtitle: "Open-source telemetry for distributed intelligence.",
      status: "Operational",
    },
    stats: [
      {
        label: "Throughput",
        value: "8.4 GB/s",
        status: "peak",
        color: "text-blue-500",
      },
      {
        label: "Nodes",
        value: "1,240",
        status: "online",
        color: "text-emerald-500",
      },
    ],
    nodeCluster: {
      title: "Node_Topology",
      subtitle: "Distributed Mesh Active",
      total: "1.2k Nodes",
    },
    logs: [
      { timestamp: "14:20:01", event: "Handshake_Success", status: "success" },
    ],
  },
  fr: {
    brand: "Lumen // Labs",
    ticker: ["NŒUD_SIGMA: ACTIF", "LATENCE: 14MS", "LIAISON: SÉCURISÉE"],
    nav: {
      dash: "Tableau",
      telemetry: "Télémétrie",
      nodes: "Nœuds",
      live: "Flux_Direct",
    },
    hero: {
      title: "Frontière Neurale",
      subtitle: "Télémétrie open-source pour l'intelligence distribuée.",
      status: "Opérationnel",
    },
    stats: [
      {
        label: "Débit",
        value: "8.4 Go/s",
        status: "pic",
        color: "text-blue-500",
      },
      {
        label: "Nœuds",
        value: "1,240",
        status: "en ligne",
        color: "text-emerald-500",
      },
    ],
    nodeCluster: {
      title: "Topologie_Nœuds",
      subtitle: "Maillage Distribué Actif",
      total: "1.2k Nœuds",
    },
    logs: [
      { timestamp: "14:20:01", event: "Succès_Connexion", status: "success" },
    ],
  },
  de: {
    brand: "Lumen // Labs",
    ticker: ["KNOTEN_SIGMA: AKTIV", "LATENZ: 14MS", "UPLINK: SICHER"],
    nav: {
      dash: "Dashboard",
      telemetry: "Telemetrie",
      nodes: "Knoten",
      live: "Live_Feed",
    },
    hero: {
      title: "Neurale Grenze",
      subtitle: "Telemetrie für verteilte Intelligenz.",
      status: "Bereit",
    },
    stats: [
      {
        label: "Durchsatz",
        value: "8.4 GB/s",
        status: "spitze",
        color: "text-blue-500",
      },
      {
        label: "Knoten",
        value: "1,240",
        status: "online",
        color: "text-emerald-500",
      },
    ],
    nodeCluster: {
      title: "Knoten_Topologie",
      subtitle: "Verteiltes Netz Aktiv",
      total: "1.2k Knoten",
    },
    logs: [
      {
        timestamp: "14:20:01",
        event: "Handshake_Erfolgreich",
        status: "success",
      },
    ],
  },
  es: {
    brand: "Lumen // Labs",
    ticker: ["NODO_SIGMA: ACTIVO", "LATENCIA: 14MS", "UPLINK: SEGURO"],
    nav: {
      dash: "Panel",
      telemetry: "Telemetría",
      nodes: "Nodos",
      live: "Vivo",
    },
    hero: {
      title: "Frontera Neural",
      subtitle: "Telemetría para inteligencia distribuida.",
      status: "Operativo",
    },
    stats: [
      {
        label: "Rendimiento",
        value: "8.4 GB/s",
        status: "pico",
        color: "text-blue-500",
      },
      {
        label: "Nodos",
        value: "1,240",
        status: "activo",
        color: "text-emerald-500",
      },
    ],
    nodeCluster: {
      title: "Topología_Nodos",
      subtitle: "Malla Distribuida Activa",
      total: "1.2k Nodos",
    },
    logs: [
      { timestamp: "14:20:01", event: "Conexión_Exitosa", status: "success" },
    ],
  },
};
