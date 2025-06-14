export type Specs = {
  // CPU e Motherboard
  socket?: string;
  tdp?: number;
  clock_speed?: number;
  boost_clock?: number;
  memory_max_speed?: number;
  chipset?: string;
  cpu_compatibility?: string;

  // RAM e Motherboard
  memory_type?: string;
  memory_slots?: number;

  // RAM e SSD
  capacity?: number;
  speed?: number;

  // GPU e SSD
  interface?: string;

  // GPU
  power_supply?: number;
  video_memory?: string;

  // Motherboard e Case
  form_factor?: string;
};

export type Part = {
  id: string;
  type: string; // CPU, GPU, etc.
  brand: string;
  model: string;
  specs: Specs;
  price_cents: number;
  url: string;
  store: string;
  updated_at: string;
};

export type BuildParts = {
  cpu: Part | null;
  mobo: Part | null;
  ram: Part | null;
  primary_storage: Part | null;
  gpu: Part | null;
  psu: Part | null;
};

export type RecommendationBuild = {
  build_type: string;
  budget: number;
  build_value: number;
  description: string;
  summary: string;
  parts: BuildParts;
};

export type RecommendedBuilds = {
  data: {
    builds: RecommendationBuild[];
  };
};
