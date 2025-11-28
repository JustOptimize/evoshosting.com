import node from "@astrojs/node";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), svelte(), mdx(), sitemap({
		customPages: ["https://www.evoshosting.com/products/vps", "https://www.evoshosting.com/products/vps-xeon", "https://www.evoshosting.com/prodcuts/vds", "https://www.evoshosting.com/products/vds-xeon", "https://www.evoshosting.com/games/minecraft", "https://www.evoshosting.com/games/gta", "https://www.evoshosting.com/products/discord"]
	})],
	prefetch: true,
	output: "server",
	site: "https://www.evoshosting.com",
	adapter: node({
		mode: "standalone"
	})

	// Soluzione Momentanea finche google non indexa correttamente il nuovo sito
	//redirects: {
	//  "/it": {
	//    status: 301,
	//    destination: '/'
	//  },
	//  "/en/semi-dedicated": {
	//    status: 301,
	//    destination: '/products/vds'
	//  },
	//  "/en/game": {
	//    status: 301,
	//    destination: '/games/minecraft'
	//  },
	//  "/it/contact": {
	//    status: 301,
	//    destination: '/contact'
	//  },
	//  "/it/dedicated": {
	//    status: 301,
	//    destination: '/products/dedicated'
	//  }
	//}
});
