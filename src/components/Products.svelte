<script lang="ts">
  import { cn } from "@utils/cn";
  import { productsPreview } from "@utils/products";
  import ShopCard from "./ShopCard.svelte";

  let section = 0;
  let mobileDropdown = false;
  let href = "/products/vps";

  $: currentProduct = productsPreview[section] || [];
  $: if (section === 0) href = "/products/vps";
  else if (section === 1) href = "/products/vds";
  else if (section === 2) href = "/games/minecraft";
  else if (section === 3) href = "/products/dedicated";
  else if (section === 4) href = "/products/discord";

  let categories = ["VPS", "VDS", "GAME", "DEDICATED", "DISCORD"];
</script>

<div
  class="flex items-center justify-center space-x-3 md:space-x-6 md:space-y-0"
>
  <div
    class="flex w-full items-center justify-center space-x-2 px-2 md:space-x-4 md:space-y-0"
  >
    <div class="flex space-x-3 overflow-x-auto md:space-x-0">
      {#each categories as category, i}
        <button
          on:click={() => (section = i)}
          class={cn(
            "hidden rounded-md border-2 border-dark/50 bg-dark/10 px-4 py-1 backdrop-blur transition hover:bg-dark/30 md:block md:rounded-none md:border-r-0 md:px-7",
            `${section === i && "bg-dark/30"}`,
            `${categories.length - 1 === i && "md:rounded-r-md md:border-r-2"}`,
            `${i === 0 && "md:rounded-l-md"}`,
          )}
        >
          {category}
        </button>
      {/each}
    </div>

    <!-- This is only visible on mobile -->
    <div class="relative block w-1/2 md:hidden">
      {#each categories as category, i}
        {#if section === i}
          <button
            class={cn(
              "w-full rounded-md border-2 border-dark/50 bg-dark/10 px-2 py-1 text-xl font-bold backdrop-blur md:hidden",
              `${mobileDropdown && "rounded-b-none border-b-2 border-white/50 bg-white/10"}`,
            )}
            on:click={() => (mobileDropdown = !mobileDropdown)}
          >
            {category}
          </button>
        {/if}
      {/each}
      <div
        class="absolute left-0 right-0 top-10 z-30 hidden w-full flex-col rounded-md rounded-t-none border-2 border-t-0 border-white/50 bg-white/10 py-1 backdrop-blur data-[show=true]:flex"
        data-show={mobileDropdown}
      >
        {#each categories as category, i}
          {#if section !== i}
            <span
              aria-hidden="true"
              class={cn(
                "border-b-2 border-white/50 py-1 text-center text-xl font-semibold",
                `${categories.length - 1 === i && "border-b-0"}`,
              )}
              on:click={() => (section = i) && (mobileDropdown = false)}
            >
              {category}
            </span>
          {/if}
        {/each}
      </div>
    </div>
    <a
      {href}
      class="rounded-xl border-2 border-white px-6 py-1 text-lg font-bold transition hover:bg-white hover:text-black md:px-7 md:text-base"
    >
      See all plans
    </a>
  </div>
</div>

<div
  class={cn(
    "w-full gap-y-4 space-y-3 px-7 pt-3 md:grid md:place-items-center md:gap-x-4 md:space-y-0 md:px-16 md:py-10 md:grid-cols-center-3",
  )}
>
  {#each currentProduct as product, i}
    <ShopCard
      {product}
      color={(section !== 2 && (i === 1 ? "primary" : "secondary")) ||
        "primary"}
      big={section !== 2 && i === 1}
    />
  {/each}
</div>
