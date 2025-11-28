<script lang="ts">
  import { cn } from "@utils/cn";
  import { discount } from "@utils/calc";
  import type { Product } from "@utils/products";
  import core from "@images/shop/core.svg";
  import ram from "@images/shop/ram.svg";
  import storage from "@images/shop/storage.svg";
  import wifi from "@images/shop/wifi.svg";
  import freq from "@images/shop/frequency.svg";
  import antiddos from "@images/shop/antiddos.svg";
  import type { ImageMetadata } from "astro";

  export let product: Product;
  export let color = "default";
  export let big = false;

  let twColor = "primary";
  let textColor = "white";

  const images: Record<string, ImageMetadata> = {
    core,
    ram,
    storage,
    bandwidth: wifi,
    frequency: freq,
    antiddos,
  };

  $: {
    if (color === "primary") {
      twColor = "primary";
      textColor = "white";
    } else if (color === "green") {
      twColor = "green-mc";
      textColor = "black";
    } else if (color === "orange") {
      twColor = "orange-gta";
      textColor = "black";
    }
  }
</script>

<div
  class={cn(
    "relative z-20 overflow-hidden rounded-2xl border-2 border-dark/50 bg-dark/5 backdrop-blur-sm",
    `${big && "h-[600px]"}`,
  )}
>
  <div class="mx-auto flex max-w-md flex-col space-y-1 px-9 py-7">
    {#if product.discount}
      <div
        class="absolute -right-11 top-6 z-0 w-40 rotate-45 bg-yellow-evos p-1 text-center text-sm text-black"
      >
        <span class="font-bold">
          {product.discount}% OFF
        </span>
      </div>
    {:else if product.featured}
      <div
        class={cn(
          "absolute -right-11 top-6 z-0 w-40 rotate-45 p-1 text-center text-sm",
          `bg-${twColor} text-${textColor}`,
        )}
      >
        <span class="font-bold">FEATURED</span>
      </div>
    {/if}

    <h2
      class={cn(
        "text-center text-5xl font-extrabold",
        `${product.name.length > 7 && "text-4.5xl"}`,
      )}
    >
      {product.name}
    </h2>
    {#if product.discount}
      <h3 class="text-center text-2xl font-bold text-white/60 line-through">
        {product.price.toFixed(2)}€
      </h3>

      <h2 class="text-center text-5xl font-extrabold text-yellow-evos">
        {discount(product.price, product.discount).toFixed(2)}€
      </h2>
    {:else}
      <h2
        class={cn(
          "text-center text-5xl font-extrabold text-primary",
          `text-${twColor}`,
        )}
      >
        {product.price.toFixed(2)}€
      </h2>
    {/if}
    <h3 class="pb-4 text-center text-2xl font-bold text-white/60">mo + VAT</h3>

    <hr class="mx-auto my-4 h-1 w-24 rounded border-0 bg-dark/50 md:my-10" />

    <div class={cn("py-4", `${big && "pt-9"}`)}>
      {#each Object.entries(product) as [key, value], i}
        {#if key === "href" || key === "name" || key === "featured" || key === "discount" || key === "price"}
          {""}
        {:else}
          <div class="flex flex-col justify-between">
            <div class="space-y-2 text-xl font-bold">
              {#if images[key]}
                <img src={images[key].src} alt={key} class="inline h-6 w-6" />
              {/if}
              <span
                class={cn(
                  "pl-1 text-primary",
                  `${(color === "primary" && "text-primary") || (color === "green" && "text-green-mc")}`,
                  `${color === "orange" && "text-orange-gta"}`,
                  `${product.discount && "text-yellow-evos"}`,
                )}
              >
                {value}
              </span>
              <span class="text-white"
                >{key.charAt(0).toUpperCase() + key.slice(1)}</span
              >
            </div>
            {#if i !== Object.entries(product).length - 1}
              <hr class="my-2 h-1 w-full rounded border-0 bg-dark/50" />
            {/if}
          </div>
        {/if}
      {/each}
    </div>

    <a href={product.href}>
      <button
        class={cn(
          "w-full rounded-lg bg-white px-7 py-2 font-semibold text-black transition hover:opacity-75",
          `${(color === "primary" && "bg-primary") || (color === "green" && "bg-green-mc")}`,
          `${color === "orange" && "bg-orange-gta"}`,
          `${product.discount && "bg-yellow-evos"}`,
          `${big && "mt-8"}`,
          `${big && product.name === "PRO" && "mt-20"}`,
          `${big && product.discount && "mt-5"}`,
        )}
      >
        Order Now
      </button>
    </a>
  </div>
</div>
