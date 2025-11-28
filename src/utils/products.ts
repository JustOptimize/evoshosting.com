import type { ImageMetadata } from "astro";

export type Product = {
  name: string;
  core?: string;
  ram: string;
  storage: string;
  bandwidth: string;
  frequency?: string;
  antiddos?: string;
  price: number;
  href: string;
  discount?: number;
  featured?: boolean;
};

export type TextItem = {
  title: string;
  content: string;
};

export type Performance = {
  performance: number;
  customization: number;
  price: number;
  text: [TextItem, TextItem, ...TextItem[]];
};

export type VsContent = {
  title: string;
  perf: Performance;
};

export type Images = {
  left: ImageMetadata;
  right: ImageMetadata;
};

export type VsSection = {
  label: string;
  content: [VsContent, VsContent, ...VsContent[]];
};

export type Products = [Product, ...Product[]];

export type Generic = {
  title: string;
  long: string;
  images: Images;
  products: {
    top: Products;
    full: Products;
  };
  vs: VsSection;
};

export type GenericGame = {
  title: string;
  long: string;
  images: Images;
  image_bg: string;
  products: {
    top: Products;
    full: Products;
  };
};

export type Dedicated = {
  processor: {
    name: string;
    extra: string;
  };
  ram: {
    name: string;
    extra: string;
  };
  storage: {
    name: string;
    extra: string;
  };
  bandwidth: {
    name: string;
    extra: string;
  };
  frequency: {
    name: string;
  };
  price: number;
  href: string;
  ready?: boolean;
  discount?: number;
};

export let productsPreview: Products[] = [
  // VPS PREVIEW VELOCI
  [
    {
      name: "VPS-S",
      core: "2",
      ram: "4GB",
      storage: "45GB",
      bandwidth: "3Gbit/s",
      frequency: "5.7GHz",
      price: 4.99,
      href: "#",
    },
    {
      name: "VPS-XXL",
      core: "10",
      ram: "32GB",
      storage: "250GB",
      bandwidth: "10Gbit/s",
      frequency: "5.7GHz",
      price: 32.99,
      href: "#",
      featured: true,
    },
    {
      name: "VPS-XXXL+",
      core: "16",
      ram: "64GB",
      storage: "400GB",
      bandwidth: "10Gbit/s",
      frequency: "5.7GHz",
      price: 48.99,
      href: "#",
    },
  ],
  // VDS Potenti Preview
  [
    {
      name: "VDS-XL",
      core: "10",
      ram: "38GB",
      storage: "180GB",
      bandwidth: "5Gbit/s",
      frequency: "5.7GHz",
      price: 41.99,
      href: "#",
    },
    {
      name: "VDS-XXL",
      core: "14",
      ram: "54GB",
      storage: "250GB",
      bandwidth: "10Gbit/s",
      frequency: "5.7GHz",
      price: 59.99,
      href: "#",
      featured: true,
    },
    {
      name: "VDS-XXL+",
      core: "16",
      ram: "74GB",
      storage: "320GB",
      bandwidth: "10Gbit/s",
      frequency: "5.7GHz",
      price: 85.99,
      href: "#",
    },
  ],
  // Game
  [
    {
      name: "Minecraft",
      core: "4",
      ram: "8GB",
      storage: "20GB",
      bandwidth: "1Gbit/s",
      antiddos: "EvosGame",
      price: 7.99,
      href: "#",
    },
    {
      name: "GTA V",
      core: "4",
      ram: "8GB",
      storage: "60GB",
      bandwidth: "1Gbit/s",
      antiddos: "EvosGame",
      price: 4.99,
      href: "#",
    },
  ],
  [
    {
      name: "E5-2650V2",
      ram: "64GB",
      storage: "500GB",
      bandwidth: "10Gbit/s",
      frequency: "3.4GHz",
      antiddos: "Included",
      price: 59.99,
      href: "#",
    },
    {
      name: "R5-5600X",
      ram: "64GB",
      storage: "500GB",
      bandwidth: "10Gbit/s",
      frequency: "4.6GHz",
      antiddos: "Included",
      price: 69.99,
      href: "#",
      featured: true,
    },
    {
      name: "R9-5950X",
      ram: "64GB",
      storage: "500GB",
      bandwidth: "10Gbit/s",
      frequency: "4.9GHz",
      antiddos: "Included",
      price: 94.99,
      href: "#",
    },
  ],
  // Discord
  [
    {
      name: "BASIC",
      core: "1",
      ram: "512MB",
      storage: "1GB",
      bandwidth: "1Gbit/s",
      price: 0.0,
      href: "#",
    },
    {
      name: "PRO",
      core: "2",
      ram: "2GB",
      storage: "2GB",
      bandwidth: "5Gbit/s",
      price: 1.5,
      href: "#",
      featured: true,
    },
    {
      name: "DELUXE",
      core: "4",
      ram: "4GB",
      storage: "10GB",
      bandwidth: "10Gbit/s",
      price: 4.99,
      href: "#",
    },
  ],
  // Cheap VPS Preview
  [
    {
      name: "CVPS-1",
      core: "3",
      ram: "6GB",
      storage: "70GB",
      bandwidth: "1Gbit/s",
      frequency: "3.6GHz",
      price: 4.99,
      href: "#",
    },
    {
      name: "CVPS-5",
      core: "10",
      ram: "28GB",
      storage: "180GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 21.99,
      href: "#",
      featured: true,
    },
    {
      name: "CVPS-11",
      core: "20",
      ram: "192GB",
      storage: "500GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 71.99,
      href: "#",
    },
  ],
  // Cheap VDS
  [
    {
      name: "CVDS-1",
      core: "4",
      ram: "8GB",
      storage: "100GB",
      bandwidth: "5Gbit/s",
      frequency: "3.6GHz",
      price: 4.99,
      href: "#",
    },
    {
      name: "CVDS-5",
      core: "20",
      ram: "64GB",
      storage: "400GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 49.99,
      href: "#",
      featured: true,
    },
    {
      name: "CVDS-8",
      core: "28",
      ram: "256GB",
      storage: "1TB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 149.99,
      href: "#",
    },
  ],
];

export let products: Products[] = [
  [
    //VPS PIANI VELOCI
    {
      name: "VPS-XS",
      core: "1",
      ram: "2GB",
      storage: "30GB",
      bandwidth: "1Gbit/s",
      frequency: "5.7GHz",
      price: 3.99,
      href: "#",
    },
    {
      name: "VPS-S",
      core: "2",
      ram: "4GB",
      storage: "45GB",
      bandwidth: "3Gbit/s",
      frequency: "5.7GHz",
      price: 4.99,
      href: "#",
    },
    {
      name: "VPS-M",
      core: "4",
      ram: "8GB",
      storage: "70GB",
      bandwidth: "4Gbit/s",
      frequency: "5.7GHz",
      price: 10.29,
      href: "#",
    },
    {
      name: "VPS-L",
      core: "6",
      ram: "16GB",
      storage: "150GB",
      bandwidth: "5Gbit/s",
      frequency: "5.7GHz",
      price: 18.99,
      href: "#",
    },
    {
      name: "VPS-XL",
      core: "8",
      ram: "24GB",
      storage: "200GB",
      bandwidth: "10Gbit/s",
      frequency: "5.7GHz",
      price: 24.99,
      href: "#",
    },
    {
      name: "VPS-XXL",
      core: "10",
      ram: "32GB",
      storage: "250GB",
      bandwidth: "10Gbit/s",
      frequency: "5.7GHz",
      price: 32.99,
      href: "#",
      featured: true,
    },
    {
      name: "VPS-XXXL",
      core: "12",
      ram: "48GB",
      storage: "340GB",
      bandwidth: "10Gbit/s",
      frequency: "5.7GHz",
      price: 40.99,
      href: "#",
    },
    {
      name: "VPS-XXXL+",
      core: "16",
      ram: "64GB",
      storage: "400GB",
      bandwidth: "10Gbit/s",
      frequency: "5.7GHz",
      price: 48.99,
      href: "#",
    }, //FINE VPS VELOCI
  ],
  [
    {
      //Semi Dedicati Ryzen 9
      name: "VDS-L",
      core: "6",
      ram: "12GB",
      storage: "120GB",
      bandwidth: "5Gbit/s",
      frequency: "5.7GHz",
      price: 28.99,
      href: "#",
    },
    {
      name: "VDS-XL",
      core: "10",
      ram: "38GB",
      storage: "180GB",
      bandwidth: "10Gbit/s",
      frequency: "5.7GHz",
      price: 41.99,
      href: "#",
    },
    {
      name: "VDS-XXL",
      core: "14",
      ram: "54GB",
      storage: "250GB",
      bandwidth: "10Gbit/s",
      frequency: "5.7GHz",
      price: 59.99,
      href: "#",
    },
    {
      name: "VDS-XXL+",
      core: "16",
      ram: "74GB",
      storage: "320GB",
      bandwidth: "10Gbit/s",
      frequency: "5.7GHz",
      price: 85.99,
      href: "#",
    },
  ],
  [
    {
      name: "Minecraft",
      core: "4",
      ram: "8GB",
      storage: "20GB",
      bandwidth: "1Gbit/s",
      antiddos: "EvosGame",
      price: 7.99,
      href: "#",
    },
    {
      name: "GTA V",
      core: "4",
      ram: "8GB",
      storage: "60GB",
      bandwidth: "1Gbit/s",
      antiddos: "EvosGame",
      price: 4.99,
      href: "#",
    },
    {
      name: "Palworld",
      core: "2",
      ram: "6GB",
      storage: "15GB",
      bandwidth: "1Gbit/s",
      antiddos: "EvosGame",
      price: 8.99,
      href: "#",
    },
  ],
  [
    {
      name: "DD-SM",
      ram: "64GB",
      storage: "500GB",
      bandwidth: "10Gbit/s",
      frequency: "T3.4GHz",
      antiddos: "Included",
      price: 59.99,
      href: "#",
    },
    {
      name: "DD-XS",
      ram: "64GB",
      storage: "500GB",
      bandwidth: "10Gbit/s",
      frequency: "T4.6GHz",
      antiddos: "Included",
      price: 69.99,
      href: "#",
    },
    {
      name: "DD-XSS",
      ram: "64GB",
      storage: "1000GB",
      bandwidth: "10Gbit/s",
      frequency: "T5.3GHz",
      antiddos: "Included",
      price: 104.99,
      href: "#",
    },
  ],
  [
    {
      name: "BASIC",
      core: "1",
      ram: "1GB",
      storage: "1GB",
      bandwidth: "1Gbit/s",
      antiddos: "EvosGame",
      price: 0.0,
      href: "#",
    },
    {
      name: "PRO",
      core: "2",
      ram: "1GB",
      storage: "2GB",
      bandwidth: "1Gbit/s",
      antiddos: "EvosGame",
      price: 1.5,
      href: "#",
    },
    {
      name: "DELUXE",
      core: "4",
      ram: "4GB",
      storage: "10GB",
      bandwidth: "1Gbit/s",
      antiddos: "EvosGame",
      price: 4.99,
      href: "#",
    },
  ],
  [
    {
      name: "CVPS-1",
      core: "2",
      ram: "4GB",
      storage: "40GB",
      bandwidth: "0.5Gbit/s",
      frequency: "3.6GHz",
      price: 2.99,
      href: "#",
      discount: 20,
    },
    {
      name: "CVPS-2",
      core: "3",
      ram: "6GB",
      storage: "70GB",
      bandwidth: "1Gbit/s",
      frequency: "3.6GHz",
      price: 4.99,
      href: "#",
      discount: 20,
    },
    {
      name: "CVPS-3",
      core: "5",
      ram: "10GB",
      storage: "100GB",
      bandwidth: "2Gbit/s",
      frequency: "3.6GHz",
      price: 7.99,
      href: "#",
      discount: 20,
    },
    {
      name: "CVPS-4",
      core: "8",
      ram: "18GB",
      storage: "120GB",
      bandwidth: "3Gbit/s",
      frequency: "3.6GHz",
      price: 12.99,
      href: "#",
      discount: 20,
    },
    {
      name: "CVPS-5",
      core: "10",
      ram: "28GB",
      storage: "180GB",
      bandwidth: "4Gbit/s",
      frequency: "3.6GHz",
      price: 17.99,
      href: "#",
      discount: 20,
      featured: true,
    },
    {
      name: "CVPS-6",
      core: "12",
      ram: "36GB",
      storage: "230GB",
      bandwidth: "5Gbit/s",
      frequency: "3.6GHz",
      price: 19.99,
      href: "#",
      discount: 20,
    },
    {
      name: "CVPS-7",
      core: "14",
      ram: "48GB",
      storage: "300GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 23.99,
      href: "#",
      discount: 20,
    },
    {
      name: "CVPS-8",
      core: "16",
      ram: "64GB",
      storage: "350GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 36.99,
      href: "#",
      discount: 20,
    },
    {
      name: "CVPS-9",
      core: "18",
      ram: "80GB",
      storage: "400GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 46.99,
      href: "#",
      discount: 20,
    },
    {
      name: "CVPS-10",
      core: "20",
      ram: "128GB",
      storage: "500GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 59.99,
      href: "#",
      discount: 20,
    },
    {
      name: "CVPS-11",
      core: "22",
      ram: "192GB",
      storage: "600GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 68.99,
      href: "#",
      discount: 20,
    },
  ],
  [
    {
      name: "CVDS-1",
      core: "4",
      ram: "8GB",
      storage: "100GB",
      bandwidth: "5Gbit/s",
      frequency: "3.6GHz",
      price: 4.99,
      href: "#",
    },
    {
      name: "CVDS-2",
      core: "8",
      ram: "16GB",
      storage: "200GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 15.99,
      href: "#",
    },
    {
      name: "CVDS-3",
      core: "14",
      ram: "24GB",
      storage: "250GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 19.99,
      href: "#",
    },
    {
      name: "CVDS-4",
      core: "16",
      ram: "32GB",
      storage: "300GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 24.99,
      href: "#",
      featured: true,
    },
    {
      name: "CVDS-5",
      core: "20",
      ram: "64GB",
      storage: "400GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 49.99,
      href: "#",
    },
    {
      name: "CVDS-6",
      core: "22",
      ram: "128GB",
      storage: "500GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 79.99,
      href: "#",
    },
    {
      name: "CVDS-7",
      core: "26",
      ram: "192GB",
      storage: "700GB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 99.99,
      href: "#",
    },
    {
      name: "CVDS-8",
      core: "28",
      ram: "256GB",
      storage: "1TB",
      bandwidth: "10Gbit/s",
      frequency: "3.6GHz",
      price: 149.99,
      href: "#",
    },
  ],
];

export let dedicated: Dedicated[] = [
  {
    processor: {
      name: "Intel Xeon E5-2650V2",
      extra: "(8C/16T)",
    },
    ram: {
      name: "64GB DDR3",
      extra: "(Max. 128GB DDR3)",
    },
    storage: {
      name: "500GB SATA SSD",
      extra: "(Max. 2TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 3.4GHz" },
    price: 59.99,
    href: "#",
  },
  {
    processor: {
      name: "Intel Xeon E5-2667v2",
      extra: "(8C/16T)",
    },
    ram: {
      name: "64GB DDR3",
      extra: "(Max. 128GB DDR3)",
    },
    storage: {
      name: "500GB SATA SSD",
      extra: "(Max. 2TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 4.0GHz" },
    price: 69.99,
    href: "#",
  },
  {
    processor: {
      name: "AMD Ryzen 5 5600X",
      extra: "(6C/12T)",
    },
    ram: {
      name: "64GB DDR4",
      extra: "(Max. 128GB DDR4)",
    },
    storage: {
      name: "500GB NVMe M.2 SSD",
      extra: "(Max. 3.84TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 4.6GHz" },
    price: 69.99,
    href: "#",
  },
  {
    processor: {
      name: "AMD Ryzen 7 5800X",
      extra: "(8C/16T)",
    },
    ram: {
      name: "64GB DDR4",
      extra: "(Max. 128GB DDR4)",
    },
    storage: {
      name: "500GB NVMe M.2 SSD",
      extra: "(Max. 3.84TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 4.7GHz" },
    price: 74.99,
    href: "#",
  },
  {
    processor: {
      name: "AMD Ryzen 9 5950X",
      extra: "(16C/32T)",
    },
    ram: {
      name: "64GB DDR4",
      extra: "(Max. 128GB DDR4)",
    },
    storage: {
      name: "500GB NVMe M.2 SSD",
      extra: "(Max. 7.84TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 4.9GHz" },
    price: 94.99,
    href: "#",
  },
  {
    processor: {
      name: "Intel Core I9-10900K",
      extra: "(10C/20T)",
    },
    ram: {
      name: "64GB DDR4",
      extra: "(Max. 128GB DDR4)",
    },
    storage: {
      name: "500GB NVMe M.2 SSD",
      extra: "(Max. 7.84TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 5.3GHz" },
    price: 99.99,
    href: "#",
  },
  {
    processor: {
      name: "AMD Ryzen 7 7700X",
      extra: "(8C/16T)",
    },
    ram: {
      name: "64GB DDR5",
      extra: "(Max. 128GB DDR5)",
    },
    storage: {
      name: "500GB NVMe M.2 SSD",
      extra: "(Max. 7.84TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 5.4GHz" },
    price: 105.99,
    href: "#",
  },
  {
    processor: {
      name: "Intel Core I9-13900K",
      extra: "(24C/32T)",
    },
    ram: {
      name: "64GB DDR5",
      extra: "(Max. 128GB DDR5)",
    },
    storage: {
      name: "500GB NVMe M.2 SSD",
      extra: "(Max. 7.84TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 5.8GHz" },
    price: 129.99,
    href: "#",
  },
  {
    processor: {
      name: "AMD Ryzen 9 7950X3D",
      extra: "(16C/32T)",
    },
    ram: {
      name: "64GB DDR5",
      extra: "(Max. 192GB DDR5)",
    },
    storage: {
      name: "1TB NVMe M.2 SSD",
      extra: "(Max. 7.84TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 5.7GHz" },
    price: 134.99,
    href: "#",
  },
  {
    processor: {
      name: "Intel Core I9-14900K",
      extra: "(24C/32T)",
    },
    ram: {
      name: "64GB DDR5",
      extra: "(Max. 192GB DDR5)",
    },
    storage: {
      name: "500GB NVMe M.2 SSD",
      extra: "(Max. 7.84TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 6GHz" },
    price: 149.99,
    href: "#",
  },
  {
    processor: {
      name: "2x Intel Xeon E5-2699v4",
      extra: "(44C/88T)",
    },
    ram: {
      name: "768GB DDR4",
      extra: "(Max. 1024GB DDR4)",
    },
    storage: {
      name: "8.18TB NVMe M.2 SSD",
      extra: "(Max. 15.68TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 3.60GHz" },
    price: 199.99,
    href: "#",
  },
  {
    processor: {
      name: "Intel Xeon E5-2680v4",
      extra: "(14C/28T)",
    },
    ram: {
      name: "128GB DDR4",
      extra: "(Max. 128GB DDR4)",
    },
    storage: {
      name: "216TB Raw Storage HDD",
      extra: "500GB NVMe M.2 SSD",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 3.30GHz" },
    price: 270.0,
    href: "#",
  },
  {
    processor: {
      name: "AMD Epyc 7543",
      extra: "(32C/64T)",
    },
    ram: {
      name: "1024GB DDR4",
      extra: "(Max. 1024GB DDR4)",
    },
    storage: {
      name: "8.18TB NVMe M.2 SSD",
      extra: "(Max. 8.18TB)",
    },
    bandwidth: {
      name: "10Gbit/s",
      extra: "SFP+",
    },
    frequency: { name: "Turbo 3.7GHz" },
    price: 315.99,
    href: "#",
  },
];

export let gameProductsPreview: Products[] = [
  [
    {
      name: "MC-2",
      core: "6",
      ram: "12GB",
      storage: "40GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 12.99,
      href: "#",
    },
    {
      name: "MC-3",
      core: "8",
      ram: "20GB",
      storage: "60GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 17.99,
      href: "#",
      featured: true,
    },
    {
      name: "MC-4",
      core: "10",
      ram: "36GB",
      storage: "110GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 22.99,
      href: "#",
    },
  ],
  [
    {
      name: "GTA-2",
      core: "6",
      ram: "12GB",
      storage: "80GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 9.99,
      href: "#",
    },
    {
      name: "GTA-3",
      core: "8",
      ram: "24GB",
      storage: "110GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      featured: true,
      price: 14.99,
      href: "#",
    },
    {
      name: "GTA-4",
      core: "10",
      ram: "36GB",
      storage: "130GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 22.99,
      href: "#",
    },
  ],
];

export let gameProducts: Products[] = [
  [
    {
      name: "MC-1",
      core: "4",
      ram: "8GB",
      storage: "20GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 7.99,
      href: "#",
    },
    {
      name: "MC-2",
      core: "6",
      ram: "12GB",
      storage: "40GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 12.99,
      href: "#",
      featured: true,
    },
    {
      name: "MC-3",
      core: "8",
      ram: "20GB",
      storage: "60GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 17.99,
      href: "#",
    },
    {
      name: "MC-4",
      core: "10",
      ram: "36GB",
      storage: "110GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 22.99,
      href: "#",
    },
  ],
  [
    {
      name: "GTA-1",
      core: "4",
      ram: "8GB",
      storage: "20GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 5.0,
      href: "#",
    },
    {
      name: "GTA-2",
      core: "6",
      ram: "12GB",
      storage: "80GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 9.99,
      href: "#",
    },
    {
      name: "GTA-3",
      core: "8",
      ram: "24GB DDR5",
      storage: "110GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 14.99,
      href: "#",
    },
    {
      name: "GTA-4",
      core: "10",
      ram: "36GB",
      storage: "130GB",
      bandwidth: "10Gbit/s",
      antiddos: "EvosGame",
      price: 22.99,
      href: "#",
    },
  ],
];
