<script lang="ts">
  import type { Dedicated } from "@utils/products";
  import core from "@images/shop/gray/core.svg";
  import ram from "@images/shop/gray/ram.svg";
  import storage from "@images/shop/gray/storage.svg";
  import wifi from "@images/shop/gray/wifi.svg";
  import freq from "@images/shop/gray/frequency.svg";
  import intelXeon from "@images/cpu/intel_xeon.webp";
  import ryzenFive from "@images/cpu/ryzen5.webp";
  import amdEpyc from "@images/cpu/amd_epyc.webp";
  import inteli9 from "@images/cpu/intel_i9.webp";
  import ryzen7 from "@images/cpu/ryzen7.webp";
  import ryzen9 from "@images/cpu/ryzen9.webp";
  import { cn } from "@utils/cn";
  import { discount } from "@utils/calc";

  export let product: Dedicated;
</script>

<div class="relative">
  {#if product.ready}
    <div
      class="absolute -right-0 -top-4 z-30 rounded-lg bg-green-500/30 px-4 py-1 font-extrabold text-green-400 md:text-xl"
    >
      Ready for Delivery
    </div>
  {/if}
  <div
    class="relative z-20 overflow-hidden rounded-2xl border-2 border-dark/50 bg-dark/5 p-4 backdrop-blur-sm"
  >
    {#if product.discount}
      <div
        class="absolute -left-11 top-6 z-0 w-40 -rotate-45 bg-yellow-evos p-1 text-center text-sm text-black"
      >
        <span class="font-bold">{product.discount}% OFF</span>
      </div>
    {/if}

    <div class="md:flex md:justify-between">
      <div class="md:flex md:flex-row md:items-center md:space-x-5">
        <div class="rounded-lg pb-4 shadow md:pb-0">
          {#if product.processor.name.toLowerCase().includes("intel xeon")}
            <img
              src={intelXeon.src}
              alt="Intel Xeon"
              class="h-20 w-20 rounded-lg md:mx-auto"
            />
          {:else if product.processor.name.toLowerCase().includes("ryzen 5")}
            <img
              src={ryzenFive.src}
              alt="Ryzen 5"
              class="h-20 w-20 rounded-lg md:mx-auto"
            />
          {:else if product.processor.name.toLowerCase().includes("ryzen 9")}
            <img
              src={ryzen9.src}
              alt="Ryzen 5"
              class="h-20 w-20 rounded-lg md:mx-auto"
            />
          {:else if product.processor.name.toLowerCase().includes("amd epyc")}
            <img
              src={amdEpyc.src}
              alt="Ryzen 5"
              class="h-20 w-20 rounded-lg md:mx-auto"
            />
          {:else if product.processor.name.toLowerCase().includes("intel core")}
            <img
              src={inteli9.src}
              alt="Ryzen 5"
              class="h-20 w-20 rounded-lg md:mx-auto"
            />
          {:else if product.processor.name.toLowerCase().includes("ryzen 5")}
            <img
              src={ryzenFive.src}
              alt="Ryzen 5"
              class="h-20 w-20 rounded-lg md:mx-auto"
            />
          {:else if product.processor.name.toLowerCase().includes("ryzen 7")}
            <img
              src={ryzen7.src}
              alt="Ryzen 5"
              class="h-20 w-20 rounded-lg md:mx-auto"
            />
          {/if}
        </div>

        <div class="grid grid-cols-2 gap-y-3 md:flex md:space-x-5">
          {#each Object.entries(product) as [key, value]}
            {#if typeof value !== "number" && key !== "href"}
              <div>
                {#if key === "processor"}
                  <div class="flex items-center space-x-1 text-xl font-bold">
                    <img src={core.src} alt="core" class="inline h-5 w-5" />
                    <span class="text-white/50">CPU</span>
                  </div>
                {:else if key === "ram"}
                  <div class="flex items-center space-x-1 text-xl font-bold">
                    <img src={ram.src} alt="ram" class="inline h-5 w-5" />
                    <span class="text-white/50">RAM</span>
                  </div>
                {:else if key === "storage"}
                  <div class="flex items-center space-x-1 text-xl font-bold">
                    <img
                      src={storage.src}
                      alt="storage"
                      class="inline h-5 w-5"
                    />
                    <span class="font-bold text-white/50">Storage</span>
                  </div>
                {:else if key === "bandwidth"}
                  <div class="flex items-center space-x-1 text-xl font-bold">
                    <img src={wifi.src} alt="wifi" class="inline h-5 w-5" />
                    <span class="text-white/50">Bandwidth</span>
                  </div>
                {:else if key === "frequency"}
                  <div class="flex items-center space-x-1 text-xl font-bold">
                    <img
                      src={freq.src}
                      alt="frequency"
                      class="inline h-5 w-5"
                    />
                    <span class="text-white/50">Frequency</span>
                  </div>
                {/if}

                <div class="flex flex-col">
                  {#if typeof value == "object"}
                    <span
                      class={cn(
                        "font-extrabold text-white",
                        `${
                          key === "processor"
                            ? (value.name.includes("Intel") &&
                                "text-primary") ||
                              (value.name.includes("Ryzen") &&
                                "text-orange-evos")
                            : ""
                        }`,
                      )}
                    >
                      {value.name}
                    </span>
                    {#if value.extra}
                      <span class="font-bold text-white/50">{value.extra}</span>
                    {/if}
                  {/if}
                </div>
              </div>
            {/if}
          {/each}
        </div>
      </div>
      <div
        class="flex items-center justify-between pt-3 md:block md:text-right"
      >
        <div>
          {#if product.discount}
            <span class="font-extrabold text-white/20 line-through"
              >{product.price.toFixed(2)}€</span
            > <br />
            <span class="text-3xl font-extrabold text-yellow-evos">
              {discount(product.price, product.discount).toFixed(2)}€
            </span>
          {:else}
            <span class="text-3xl font-extrabold text-primary"
              >{product.price.toFixed(2)}€</span
            >
          {/if}
          <br />
          <span class="text-xs font-bold text-white/50">/mo + IVA</span>
        </div>
        <a href={product.href}>
          <button
            class="rounded-xl border-2 border-white px-8 py-1 font-bold transition hover:bg-white/40 hover:text-black md:mt-1"
          >
            Configure
          </button>
        </a>
      </div>
    </div>
  </div>
</div>
