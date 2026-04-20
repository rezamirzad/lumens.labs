export type Language = "en" | "fr" | "de" | "es";

export interface TranslationContent {
  brand: string;
  ticker: string[];
  nav: { dash: string; telemetry: string; nodes: string; live: string };
  hero: {
    title: string;
    subtitle: string;
    status: string;
    uptime: string;
    cpu: string;
  };
  grid: {
    loadTitle: string;
    nodesTitle: string;
    latencyTitle: string;
    opsTitle: string;
    topologyTitle: string;
    distributionTitle: string;
    securityTitle: string;
  };
  stats: {
    label: string;
    value: string;
    status: string;
    color: string;
    trend: string;
    detail: string;
  }[];
  nodes: {
    id: string;
    region: string;
    latency: string;
    load: number;
    status: string;
  }[];
  logs: {
    timestamp: string;
    event: string;
    status: string;
    origin: string;
    hex: string;
    port: string;
  }[];
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    brand: "Lumen // Labs",
    ticker: [
      "CORE: STABLE",
      "UPTIME: 99.98%",
      "NODES: 1240",
      "MEM: OPTIMAL",
      "UPLINK: SECURE",
    ],
    nav: {
      dash: "Dashboard",
      telemetry: "Telemetry",
      nodes: "Nodes",
      live: "Live Feed",
    },
    hero: {
      title: "Neural Frontier",
      subtitle:
        "Autonomous telemetry for distributed synthetic intelligence and neural network mapping.",
      status: "Operational",
      uptime: "99.998%",
      cpu: "Load: 12.4%",
    },
    grid: {
      loadTitle: "Neural_Load_Distribution",
      nodesTitle: "Regional_Node_Topology",
      latencyTitle: "System_Latency_Matrix",
      opsTitle: "Packet_Stream_Interceptor",
      topologyTitle: "Neural_Mesh_Mapping",
      distributionTitle: "Packet_Density_Histogram",
      securityTitle: "Encryption_Key_Management",
    },
    stats: [
      {
        label: "Throughput",
        value: "8.42 GB/s",
        status: "peak",
        color: "text-blue-500",
        trend: "+12%",
        detail: "X-Stream 64-bit",
      },
      {
        label: "Latency",
        value: "14.2ms",
        status: "stable",
        color: "text-emerald-500",
        trend: "-2.1ms",
        detail: "Fiber Optic Direct",
      },
      {
        label: "Integrity",
        value: "99.99%",
        status: "verified",
        color: "text-fuchsia-500",
        trend: "nominal",
        detail: "SHA-256 Checksum",
      },
    ],
    nodes: [
      {
        id: "SIGMA-1",
        region: "US-EAST",
        latency: "12ms",
        load: 45,
        status: "Active",
      },
      {
        id: "DELTA-4",
        region: "EU-WEST",
        latency: "24ms",
        load: 88,
        status: "High_Load",
      },
      {
        id: "OMEGA-9",
        region: "ASIA-S",
        latency: "42ms",
        load: 12,
        status: "Standby",
      },
      {
        id: "BETA-2",
        region: "SA-EAST",
        latency: "31ms",
        load: 55,
        status: "Active",
      },
    ],
    logs: [
      {
        timestamp: "12:08:01",
        event: "Node_Alpha_Handshake",
        status: "success",
        origin: "US-EAST",
        hex: "0x4F2",
        port: "443",
      },
      {
        timestamp: "12:07:45",
        event: "Weight_Sync_Init",
        status: "info",
        origin: "EU-WEST",
        hex: "0x1A2",
        port: "8080",
      },
      {
        timestamp: "12:07:12",
        event: "Buffer_Threshold_Hit",
        status: "warning",
        origin: "ASIA-S",
        hex: "0x99B",
        port: "22",
      },
      {
        timestamp: "12:06:55",
        event: "Inbound_Packet_Filtered",
        status: "info",
        origin: "EU-NORTH",
        hex: "0xBC3",
        port: "5000",
      },
    ],
  },
  de: {
    brand: "Lumen // Labs",
    ticker: [
      "KERN: STABIL",
      "UPTIME: 99.98%",
      "KNOTEN: 1240",
      "MEM: OPTIMAL",
      "UPLINK: SICHER",
    ],
    nav: {
      dash: "Instrumententafel",
      telemetry: "Telemetrie",
      nodes: "Knoten",
      live: "Live Stream",
    },
    hero: {
      title: "Neurale Grenze",
      subtitle:
        "Autonome Telemetrie für verteilte synthetische Intelligenz und neuronale Kartierung.",
      status: "Einsatzbereit",
      uptime: "99.998%",
      cpu: "Last: 12.4%",
    },
    grid: {
      loadTitle: "Neurale_Lastverteilung",
      nodesTitle: "Regionale_Knotentopologie",
      latencyTitle: "System_Latenzmatrix",
      opsTitle: "Paketstrom_Abfangjäger",
      topologyTitle: "Neurale_Netzkartierung",
      distributionTitle: "Paketdichte-Histogramm",
      securityTitle: "Verschlüsselungsverwaltung",
    },
    stats: [
      {
        label: "Durchsatz",
        value: "8.42 GB/s",
        status: "spitze",
        color: "text-blue-500",
        trend: "+12%",
        detail: "X-Stream 64-Bit",
      },
      {
        label: "Latenz",
        value: "14.2ms",
        status: "stabil",
        color: "text-emerald-500",
        trend: "-2.1ms",
        detail: "Glasfaser Direkt",
      },
      {
        label: "Integrität",
        value: "99.99%",
        status: "verifiziert",
        color: "text-fuchsia-500",
        trend: "nominal",
        detail: "SHA-256 Prüfsumme",
      },
    ],
    nodes: [
      {
        id: "SIGMA-1",
        region: "US-OST",
        latency: "12ms",
        load: 45,
        status: "Aktiv",
      },
      {
        id: "DELTA-4",
        region: "EU-WEST",
        latency: "24ms",
        load: 88,
        status: "Hohe_Last",
      },
      {
        id: "OMEGA-9",
        region: "ASIEN-S",
        latency: "42ms",
        load: 12,
        status: "Standby",
      },
      {
        id: "BETA-2",
        region: "SA-OST",
        latency: "31ms",
        load: 55,
        status: "Aktiv",
      },
    ],
    logs: [
      {
        timestamp: "12:08:01",
        event: "Knoten_Alpha_Handshake",
        status: "erfolg",
        origin: "US-OST",
        hex: "0x4F2",
        port: "443",
      },
      {
        timestamp: "12:07:45",
        event: "Gewichts_Sync_Init",
        status: "info",
        origin: "EU-WEST",
        hex: "0x1A2",
        port: "8080",
      },
      {
        timestamp: "12:07:12",
        event: "Puffer_Schwellenwert",
        status: "warnung",
        origin: "ASIEN-S",
        hex: "0x99B",
        port: "22",
      },
      {
        timestamp: "12:06:55",
        event: "Eingehendes_Paket_Gefiltert",
        status: "info",
        origin: "EU-NORD",
        hex: "0xBC3",
        port: "5000",
      },
    ],
  },
  fr: {
    brand: "Lumen // Labs",
    ticker: [
      "CŒUR: STABLE",
      "DURÉE: 99.98%",
      "NŒUDS: 1240",
      "MÉM: OPTIMAL",
      "LIEN: SÉCURISÉ",
    ],
    nav: {
      dash: "Tableau",
      telemetry: "Télémétrie",
      nodes: "Nœuds",
      live: "Flux Direct",
    },
    hero: {
      title: "Frontière Neurale",
      subtitle:
        "Télémétrie autonome pour l'intelligence synthétique distribuée et cartographie neuronale.",
      status: "Opérationnel",
      uptime: "99.998%",
      cpu: "Charge: 12.4%",
    },
    grid: {
      loadTitle: "Distrib_Charge_Neurale",
      nodesTitle: "Topologie_Régionale_Nœuds",
      latencyTitle: "Matrice_Latence_Système",
      opsTitle: "Intercepteur_Flux_Paquets",
      topologyTitle: "Cartographie_Maillage_Neural",
      distributionTitle: "Histogramme_Densité_Paquets",
      securityTitle: "Gestion_Clés_Chiffrement",
    },
    stats: [
      {
        label: "Débit",
        value: "8.42 Go/s",
        status: "pic",
        color: "text-blue-500",
        trend: "+12%",
        detail: "X-Stream 64-bit",
      },
      {
        label: "Latence",
        value: "14.2ms",
        status: "stable",
        color: "text-emerald-500",
        trend: "-2.1ms",
        detail: "Fibre Optique Directe",
      },
      {
        label: "Intégrité",
        value: "99.99%",
        status: "vérifié",
        color: "text-fuchsia-500",
        trend: "nominal",
        detail: "Somme de Contrôle SHA",
      },
    ],
    nodes: [
      {
        id: "SIGMA-1",
        region: "US-EST",
        latency: "12ms",
        load: 45,
        status: "Actif",
      },
      {
        id: "DELTA-4",
        region: "EU-OUEST",
        latency: "24ms",
        load: 88,
        status: "Charge_Haute",
      },
      {
        id: "OMEGA-9",
        region: "ASIE-S",
        latency: "42ms",
        load: 12,
        status: "Veille",
      },
      {
        id: "BETA-2",
        region: "SA-EST",
        latency: "31ms",
        load: 55,
        status: "Actif",
      },
    ],
    logs: [
      {
        timestamp: "12:08:01",
        event: "Nœud_Alpha_Connexion",
        status: "succès",
        origin: "US-EST",
        hex: "0x4F2",
        port: "443",
      },
      {
        timestamp: "12:07:45",
        event: "Sync_Poids_Init",
        status: "info",
        origin: "EU-OUEST",
        hex: "0x1A2",
        port: "8080",
      },
      {
        timestamp: "12:07:12",
        event: "Seuil_Tampon_Atteint",
        status: "alerte",
        origin: "ASIE-S",
        hex: "0x99B",
        port: "22",
      },
      {
        timestamp: "12:06:55",
        event: "Paquet_Entrant_Filtré",
        status: "info",
        origin: "EU-NORD",
        hex: "0xBC3",
        port: "5000",
      },
    ],
  },
  es: {
    brand: "Lumen // Labs",
    ticker: [
      "NÚCLEO: ESTABLE",
      "TIEMPO: 99.98%",
      "NODOS: 1240",
      "MEM: ÓPTIMA",
      "ENLACE: SEGURO",
    ],
    nav: {
      dash: "Panel",
      telemetry: "Telemetría",
      nodes: "Nodos",
      live: "Vivo",
    },
    hero: {
      title: "Frontera Neural",
      subtitle:
        "Telemetría autónoma para inteligencia sintética distribuida y mapeo neuronal.",
      status: "Operativo",
      uptime: "99.998%",
      cpu: "Carga: 12.4%",
    },
    grid: {
      loadTitle: "Distrib_Carga_Neural",
      nodesTitle: "Topología_Regional_Nodos",
      latencyTitle: "Matriz_Latencia_Sistema",
      opsTitle: "Interceptor_Paquetes",
      topologyTitle: "Mapeo_Malla_Neural",
      distributionTitle: "Histograma_Densidad_Paquetes",
      securityTitle: "Gestión_Claves_Cifrado",
    },
    stats: [
      {
        label: "Rendimiento",
        value: "8.42 GB/s",
        status: "pico",
        color: "text-blue-500",
        trend: "+12%",
        detail: "Flujo X-Stream 64-bit",
      },
      {
        label: "Latencia",
        value: "14.2ms",
        status: "estable",
        color: "text-emerald-500",
        trend: "-2.1ms",
        detail: "Fibra Óptica Directa",
      },
      {
        label: "Integridad",
        value: "99.99%",
        status: "verificado",
        color: "text-fuchsia-500",
        trend: "nominal",
        detail: "Checksum SHA-256",
      },
    ],
    nodes: [
      {
        id: "SIGMA-1",
        region: "EE.UU-ESTE",
        latency: "12ms",
        load: 45,
        status: "Activo",
      },
      {
        id: "DELTA-4",
        region: "UE-OESTE",
        latency: "24ms",
        load: 88,
        status: "Carga_Alta",
      },
      {
        id: "OMEGA-9",
        region: "ASIA-S",
        latency: "42ms",
        load: 12,
        status: "Espera",
      },
      {
        id: "BETA-2",
        region: "SA-ESTE",
        latency: "31ms",
        load: 55,
        status: "Activo",
      },
    ],
    logs: [
      {
        timestamp: "12:08:01",
        event: "Handshake_Nodo_Alpha",
        status: "éxito",
        origin: "EE.UU-ESTE",
        hex: "0x4F2",
        port: "443",
      },
      {
        timestamp: "12:07:45",
        event: "Sync_Pesos_Init",
        status: "info",
        origin: "UE-OESTE",
        hex: "0x1A2",
        port: "8080",
      },
      {
        timestamp: "12:07:12",
        event: "Límite_Buffer_Alcanzado",
        status: "aviso",
        origin: "ASIA-S",
        hex: "0x99B",
        port: "22",
      },
      {
        timestamp: "12:06:55",
        event: "Paquete_Entrante_Filtrado",
        status: "info",
        origin: "EU-NORTE",
        hex: "0xBC3",
        port: "5000",
      },
    ],
  },
};
