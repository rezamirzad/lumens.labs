export type Language = "en" | "fr" | "de" | "es";

export interface TranslationContent {
  brand: string;
  nav: {
    dash: string;
    telemetry: string;
    nodes: string;
    live: string;
  };
  hero: {
    title: string;
    subtitle: string;
    status: string;
  };
  stats: {
    label: string;
    value: string;
    status: string;
    color: string;
  }[];
  experiments: {
    id: string;
    name: string;
    progress: number;
    status: string;
  }[];
  logs: {
    timestamp: string;
    event: string;
    status: string;
  }[];
  footer: {
    archive: string;
    security: string;
    online: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    brand: "Lumen // Labs",
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
        label: "Active Nodes",
        value: "1,240",
        status: "optimal",
        color: "text-blue-500",
      },
      {
        label: "Neural Latency",
        value: "14ms",
        status: "stable",
        color: "text-emerald-500",
      },
      {
        label: "Throughput",
        value: "8.4 GB/s",
        status: "peak",
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
    ],
    logs: [
      {
        timestamp: "14:20:01",
        event: "Node_Sigma_Connected",
        status: "success",
      },
      { timestamp: "14:18:45", event: "Model_Weights_Updated", status: "info" },
    ],
    footer: {
      archive: "Archive_2026",
      security: "Security: Lvl_4",
      online: "Nodes Online",
    },
  },
  fr: {
    brand: "Lumen // Labs",
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
        label: "Nœuds Actifs",
        value: "1,240",
        status: "optimal",
        color: "text-blue-500",
      },
      {
        label: "Latence Neurale",
        value: "14ms",
        status: "stable",
        color: "text-emerald-500",
      },
      {
        label: "Débit Data",
        value: "8.4 Go/s",
        status: "pic",
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
    ],
    logs: [
      {
        timestamp: "14:20:01",
        event: "Nœud_Sigma_Connecté",
        status: "success",
      },
      {
        timestamp: "14:18:45",
        event: "Poids_Modèle_Mis_à_Jour",
        status: "info",
      },
    ],
    footer: {
      archive: "Archive_2026",
      security: "Sécurité: Niv_4",
      online: "Nœuds en ligne",
    },
  },
  de: {
    brand: "Lumen // Labs",
    nav: {
      dash: "Dashboard",
      telemetry: "Telemetrie",
      nodes: "Knoten",
      live: "Live_Feed",
    },
    hero: {
      title: "Neurale Grenze",
      subtitle: "Open-Source-Telemetrie für verteilte Intelligenz.",
      status: "In Betrieb",
    },
    stats: [
      {
        label: "Aktive Knoten",
        value: "1,240",
        status: "optimal",
        color: "text-blue-500",
      },
      {
        label: "Neurale Latenz",
        value: "14ms",
        status: "stabil",
        color: "text-emerald-500",
      },
      {
        label: "Durchsatz",
        value: "8.4 GB/s",
        status: "spitze",
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
    ],
    logs: [
      {
        timestamp: "14:20:01",
        event: "Knoten_Sigma_Verbunden",
        status: "success",
      },
      {
        timestamp: "14:18:45",
        event: "Modellgewichte_Aktualisiert",
        status: "info",
      },
    ],
    footer: {
      archive: "Archiv_2026",
      security: "Sicherheit: Stufe_4",
      online: "Knoten Online",
    },
  },
  es: {
    brand: "Lumen // Labs",
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
    },
    stats: [
      {
        label: "Nodos Activos",
        value: "1,240",
        status: "óptimo",
        color: "text-blue-500",
      },
      {
        label: "Latencia Neural",
        value: "14ms",
        status: "estable",
        color: "text-emerald-500",
      },
      {
        label: "Rendimiento",
        value: "8.4 GB/s",
        status: "pico",
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
    ],
    logs: [
      {
        timestamp: "14:20:01",
        event: "Nodo_Sigma_Conectado",
        status: "success",
      },
      {
        timestamp: "14:18:45",
        event: "Pesos_Modelo_Actualizados",
        status: "info",
      },
    ],
    footer: {
      archive: "Archivo_2026",
      security: "Seguridad: Nivel_4",
      online: "Nodos en Línea",
    },
  },
};
