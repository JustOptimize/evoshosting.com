<script lang="ts">
  import { fade } from "svelte/transition";
  import { cn } from "@utils/cn";
  import x from "@images/x.svg";
  import arrow from "@images/arrow.svg";
  import minecraft from "@images/games/minecraft.svg";
  import gta from "@images/games/gta.svg";
  import vds from "@images/vds.svg";
  import vdsCheap from "@images/vds-cheap.svg";
  import vps from "@images/vps.svg";
  import vpsCheap from "@images/vps-cheap.svg";

  export let open = false;
  export let path = "";
  let gamesDropdown = false;
  let vpsDropdown = false;
  let vdsDropdown = false;
</script>

{#if open}
  <div
    class="absolute left-0 top-0 z-10 flex h-screen w-full items-center justify-center bg-black/50 backdrop-blur-xl"
    transition:fade
  >
    <button on:click={() => (open = false)} class="absolute left-6 top-6">
      <img src={x.src} alt="X" class="h-5 w-5" />
    </button>

    <div class="flex flex-col text-center">
      <a
        href="/"
        class={cn(
          "text-3xl font-extrabold text-white/50",
          `${path === "/" ? "text-4xl text-primary" : ""}`,
        )}
      >
        Home
      </a>
      <button
        class={cn(
          "mb-2 flex items-center justify-center gap-x-2 text-3xl font-extrabold text-white/50",
          `${path.startsWith("/products/vps") ? "text-4xl text-primary" : ""}`,
        )}
        on:click={() => (vpsDropdown = !vpsDropdown)}
      >
        VPS
        <img
          src={arrow.src}
          alt="Arrow"
          class={cn(
            "h-5 w-5 -rotate-90 text-white/50 transition",
            `${vpsDropdown && "rotate-0"}`,
          )}
        />
      </button>
      {#if vpsDropdown}
        <button
          class="relative rounded-lg border-2 border-white/20 bg-white/10 p-2 pl-14 pr-4 text-left"
          transition:fade={{ duration: 80 }}
          on:click={() => (window.location.href = "/products/vps")}
        >
          <img
            src={vps.src}
            alt="Minecraft"
            class="absolute -left-6 h-16 w-16"
          />
          <h2 class="text-2xl font-extrabold">AMD Ryzen VPS</h2>
          <span class="text-xl font-bold text-primary">Starting at €3,99</span>
        </button>
        <button
          class="relative mt-2 rounded-lg border-2 border-white/20 bg-white/10 p-2 pl-14 pr-4 text-left"
          on:click={() => (window.location.href = "/products/vps-xeon")}
          transition:fade={{ duration: 80 }}
        >
          <img
            src={vpsCheap.src}
            alt="GTA"
            class="absolute -left-10 top-[4px] h-24 w-24"
          />
          <h2 class="text-2xl font-extrabold">Intel Xeon VPS</h2>
          <span class="text-xl font-bold text-primary">Starting at €2,99</span>
        </button>
      {/if}
      <button
        class={cn(
          "mb-2 flex items-center justify-center gap-x-2 text-3xl font-extrabold text-white/50",
          `${path.startsWith("/products/vds") ? "text-4xl text-primary" : ""}`,
        )}
        on:click={() => (vdsDropdown = !vdsDropdown)}
      >
        VDS
        <img
          src={arrow.src}
          alt="Arrow"
          class={cn(
            "h-5 w-5 -rotate-90 text-white/50 transition",
            `${vdsDropdown && "rotate-0"}`,
          )}
        />
      </button>
      {#if vdsDropdown}
        <button
          class="relative rounded-lg border-2 border-white/20 bg-white/10 p-2 pl-14 pr-4 text-left"
          transition:fade={{ duration: 80 }}
          on:click={() => (window.location.href = "/products/vds")}
        >
          <img
            src={vds.src}
            alt="Minecraft"
            class="absolute -left-7 h-16 w-16"
          />
          <h2 class="text-2xl font-extrabold">AMD Ryzen VDS</h2>
          <span class="text-xl font-bold text-primary">Starting at €28,99</span>
        </button>
        <button
          class="relative mt-2 rounded-lg border-2 border-white/20 bg-white/10 p-2 pl-14 pr-4 text-left"
          on:click={() => (window.location.href = "/products/vds-xeon")}
          transition:fade={{ duration: 80 }}
        >
          <img
            src={vdsCheap.src}
            alt="GTA"
            class="absolute -left-7 top-[10px] h-16 w-16"
          />
          <h2 class="text-2xl font-extrabold">Intel Xeon VDS</h2>
          <span class="text-xl font-bold text-primary">Starting at €3,99</span>
        </button>
      {/if}
      <a
        href="/products/dedicated"
        class={cn(
          "text-3xl font-extrabold text-white/50",
          `${path === "/products/dedicated" ? "text-4xl text-primary" : ""}`,
        )}
      >
        Dedicated
      </a>
      <a
        href="/products/discord"
        class={cn(
          "text-3xl font-extrabold text-white/50",
          `${path === "/products/discord" ? "text-4xl text-primary" : ""}`,
        )}
      >
        Discord
      </a>
      <button
        class={cn(
          "mb-2 flex items-center justify-center gap-x-2 text-3xl font-extrabold text-white/50",
          `${path.startsWith("/game") ? "text-4xl text-primary" : ""}`,
        )}
        on:click={() => (gamesDropdown = !gamesDropdown)}
      >
        GAME
        <img
          src={arrow.src}
          alt="Arrow"
          class={cn(
            "h-5 w-5 -rotate-90 text-white/50 transition",
            `${gamesDropdown && "rotate-0"}`,
          )}
        />
      </button>

      {#if gamesDropdown}
        <button
          class="relative rounded-lg border-2 border-white/20 bg-white/10 p-2 pl-14 pr-4 text-left"
          transition:fade={{ duration: 80 }}
          on:click={() => (window.location.href = "/games/minecraft")}
        >
          <img
            src={minecraft.src}
            alt="Minecraft"
            class="absolute -left-7 h-16 w-16"
          />
          <h2 class="text-2xl font-extrabold">Minecraft servers</h2>
          <span class="text-xl font-bold text-primary">Starting at €3,99</span>
        </button>
        <button
          class="relative mt-2 rounded-lg border-2 border-white/20 bg-white/10 p-2 pl-14 pr-4 text-left"
          on:click={() => (window.location.href = "/games/gta")}
          transition:fade={{ duration: 80 }}
        >
          <img
            src={gta.src}
            alt="GTA"
            class="absolute -left-7 top-1 h-20 w-20"
          />
          <h2 class="text-2xl font-extrabold">GTA servers</h2>
          <span class="text-xl font-bold text-primary">Starting at €3,99</span>
        </button>
      {/if}
    </div>
  </div>
{/if}
