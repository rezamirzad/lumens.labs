export type Language = "en" | "fr" | "de" | "es";

export interface TranslationContent {
  brand: string;
  ticker: string[];
  nav: { dash: string; telemetry: string; nodes: string; live: string };
  hero: { title: string; subtitle: string; status: string; uptime: string };
  grid: {
    loadTitle: string;
    nodesTitle: string;
    latencyTitle: string;
    opsTitle: string;
  };
  stats: { label: string; value: string; status: string; color: string }[];
  experiments: { id: string; name: string; progress: number; status: string }[];
  logs: { timestamp: string; event: string; status: string; origin: string }[];
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    brand: "Lumen // Labs",
    ticker: ["CORE_STABLE", "NODES_1240", "MEM_OPTIMAL", "NET_SECURE"],
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
      uptime: "99.998%",
    },
    grid: {
      loadTitle: "Neural_Load_Distribution",
      nodesTitle: "Active_Cluster_Nodes",
      latencyTitle: "System_Latency_Matrix",
      opsTitle: "Global_Operations_Log",
    },
    stats: [
      {
        label: "Neural Throughput",
        value: "8.4 GB/s",
        status: "peak",
        color: "text-blue-500",
      },
      {
        label: "Active Nodes",
        value: "1,240",
        status: "stable",
        color: "text-emerald-500",
      },
      {
        label: "Packet Integrity",
        value: "99.9%",
        status: "verified",
        color: "text-fuchsia-500",
      },
    ],
    experiments: [
      {
        id: "EXP_01",
        name: "Synapse Mapping",
        progress: 84,
        status: "processing",
      },
      {
        id: "EXP_02",
        name: "Quantum Entanglement",
        progress: 32,
        status: "delayed",
      },
      { id: "EXP_03", name: "Heuristic Drift", progress: 61, status: "stable" },
    ],
    logs: [
      {
        timestamp: "12:08:01",
        event: "Node_Alpha_Handshake",
        status: "success",
        origin: "US-EAST",
      },
      {
        timestamp: "12:07:45",
        event: "Model_Weight_Sync",
        status: "info",
        origin: "EU-WEST",
      },
      {
        timestamp: "12:07:12",
        event: "Buffer_Overflow_Warning",
        status: "warning",
        origin: "ASIA-SOUTH",
      },
    ],
  },
  fr: {
    brand: "Lumen // Labs",
    ticker: ["CŒUR_STABLE", "NŒUDS_1240", "MÉM_OPTIMAL", "NET_SÉCURISÉ"],
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
      uptime: "99.998%",
    },
    grid: {
      loadTitle: "Distrib_Charge_Neurale",
      nodesTitle: "Nœuds_Cluster_Actifs",
      latencyTitle: "Matrice_Latence_Système",
      opsTitle: "Journal_Opérations_Global",
    },
    stats: [
      {
        label: "Débit Neural",
        value: "8.4 Go/s",
        status: "pic",
        color: "text-blue-500",
      },
      {
        label: "Nœuds Actifs",
        value: "1,240",
        status: "stable",
        color: "text-emerald-500",
      },
      {
        label: "Intégrité Paquets",
        value: "99.9%",
        status: "vérifié",
        color: "text-fuchsia-500",
      },
    ],
    experiments: [
      {
        id: "EXP_01",
        name: "Cartographie Synapse",
        progress: 84,
        status: "en cours",
      },
      {
        id: "EXP_02",
        name: "Intrication Quantique",
        progress: 32,
        status: "retardé",
      },
      {
        id: "EXP_03",
        name: "Dérive Heuristique",
        progress: 61,
        status: "stable",
      },
    ],
    logs: [
      {
        timestamp: "12:08:01",
        event: "Nœud_Alpha_Connexion",
        status: "success",
        origin: "US-EAST",
      },
      {
        timestamp: "12:07:45",
        event: "Sync_Poids_Modèle",
        status: "info",
        origin: "EU-WEST",
      },
      {
        timestamp: "12:07:12",
        event: "Alerte_Saturation_Mémoire",
        status: "warning",
        origin: "ASIA-SOUTH",
      },
    ],
  },
  de: {
    brand: "Lumen // Labs",
    ticker: ["KERN_STABIL", "KNOTEN_1240", "MEM_OPTIMAL", "NETZ_SICHER"],
    nav: {
      dash: "Dashboard",
      telemetry: "Telemetrie",
      nodes: "Knoten",
      live: "Live_Stream",
    },
    hero: {
      title: "Neurale Grenze",
      subtitle: "Open-Source-Telemetrie für verteilte Intelligenz.",
      status: "Betriebsbereit",
      uptime: "99.998%",
    },
    grid: {
      loadTitle: "Neurale_Lastverteilung",
      nodesTitle: "Aktive_Clusterknoten",
      latencyTitle: "System_Latenzmatrix",
      opsTitle: "Globales_Operationsprotokoll",
    },
    stats: [
      {
        label: "Neuraler Durchsatz",
        value: "8.4 GB/s",
        status: "spitze",
        color: "text-blue-500",
      },
      {
        label: "Aktive Knoten",
        value: "1,240",
        status: "stabil",
        color: "text-emerald-500",
      },
      {
        label: "Paketintegrität",
        value: "99.9%",
        status: "verifiziert",
        color: "text-fuchsia-500",
      },
    ],
    experiments: [
      {
        id: "EXP_01",
        name: "Synapsen-Mapping",
        progress: 84,
        status: "verarbeitung",
      },
      {
        id: "EXP_02",
        name: "Quantenverschränkung",
        progress: 32,
        status: "verzögert",
      },
      {
        id: "EXP_03",
        name: "Heuristische Drift",
        progress: 61,
        status: "stabil",
      },
    ],
    logs: [
      {
        timestamp: "12:08:01",
        event: "Knoten_Alpha_Handshake",
        status: "success",
        origin: "US-EAST",
      },
      {
        timestamp: "12:07:45",
        event: "Modellgewichts_Sync",
        status: "info",
        origin: "EU-WEST",
      },
      {
        timestamp: "12:07:12",
        event: "Speicher_Warnung",
        status: "warning",
        origin: "ASIA-SOUTH",
      },
    ],
  },
  es: {
    brand: "Lumen // Labs",
    ticker: ["NÚCLEO_ESTABLE", "NODOS_1240", "MEM_OPTIMA", "RED_SEGURA"],
    nav: {
      dash: "Panel",
      telemetry: "Telemetría",
      nodes: "Nodos",
      live: "Transmisión",
    },
    hero: {
      title: "Frontera Neural",
      subtitle: "Telemetría de código abierto para inteligencia distribuida.",
      status: "Operativo",
      uptime: "99.998%",
    },
    grid: {
      loadTitle: "Distrib_Carga_Neural",
      nodesTitle: "Nodos_Cluster_Activos",
      latencyTitle: "Matriz_Latencia_Sistema",
      opsTitle: "Registro_Global_Ops",
    },
    stats: [
      {
        label: "Rendimiento Neural",
        value: "8.4 GB/s",
        status: "pico",
        color: "text-blue-500",
      },
      {
        label: "Nodos Activos",
        value: "1,240",
        status: "estable",
        color: "text-emerald-500",
      },
      {
        label: "Integridad Paquetes",
        value: "99.9%",
        status: "verificado",
        color: "text-fuchsia-500",
      },
    ],
    experiments: [
      {
        id: "EXP_01",
        name: "Mapeo de Sinapsis",
        progress: 84,
        status: "procesando",
      },
      {
        id: "EXP_02",
        name: "Entrelazamiento Cuántico",
        progress: 32,
        status: "retrasado",
      },
      {
        id: "EXP_03",
        name: "Deriva Heurística",
        progress: 61,
        status: "estable",
      },
    ],
    logs: [
      {
        timestamp: "12:08:01",
        event: "Handshake_Nodo_Alpha",
        status: "success",
        origin: "US-EAST",
      },
      {
        timestamp: "12:07:45",
        event: "Sync_Pesos_Modelo",
        status: "info",
        origin: "EU-WEST",
      },
      {
        timestamp: "12:07:12",
        event: "Aviso_Saturación_Buffer",
        status: "warning",
        origin: "ASIA-SOUTH",
      },
    ],
  },
};
