export const translations = {
  en: {
    brand: "Lumen // Labs",
    hero: {
      title: "Observing the Neural Frontier",
      subtitle: "Open-source telemetry for distributed intelligence models.",
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
        label: "Data Throughput",
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
      {
        id: "EXP_03",
        name: "Pattern Recognition",
        progress: 100,
        status: "complete",
      },
    ],
    logs: [
      {
        timestamp: "14:20:01",
        event: "Node_Sigma_Connected",
        status: "success",
      },
      { timestamp: "14:18:45", event: "Model_Weights_Updated", status: "info" },
      {
        timestamp: "14:15:20",
        event: "High_Memory_Pressure",
        status: "warning",
      },
      {
        timestamp: "14:10:05",
        event: "Handshake_Protocol_Init",
        status: "info",
      },
    ],
  },
};
