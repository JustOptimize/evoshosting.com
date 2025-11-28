<script lang="ts">
  import Card from "./Card.svelte";
  import clock from "@images/clock.svg";
  import wifi from "@images/wifi.svg";
  import ddos from "@images/ddos.svg";
  import perf from "@images/perf.svg";
  import arrow from "@images/arrow.svg";
  import { onMount } from "svelte";
  import { cn } from "@utils/cn";

  export let moreMargin = false;
  export let lighterRV = false;

  let features: HTMLDivElement;
  let scrolls = 0;
  let isNecessary = false;

  const scrollRight = () => {
    scrolls++;
    features.scrollTo({
      left: features.scrollLeft + 350,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    features.scrollTo({
      left: features.scrollLeft - 350,
      behavior: "smooth",
    });

    scrolls--;
  };

  onMount(() => {
    isNecessary = features.scrollWidth > features.clientWidth + 50; // 50px for the scrollbar
  });
</script>

<div class={cn("relative space-y-5 px-1.5 md:px-0", `${moreMargin && "px-6"}`)}>
  <h2 class="hidden text-2xl font-extrabold md:block">Why choose us?</h2>
  {#if scrolls > 0}
    <div
      class={`${lighterRV ? "bg-linear-rvl" : "bg-linear-rv"} absolute -left-5 top-3 z-30 h-full w-32 cursor-pointer items-center justify-center p-2 md:flex`}
    >
      <button on:click={scrollLeft} class="pr-16">
        <img src={arrow.src} alt="Arrow" class="h-7 w-7 rotate-90" />
      </button>
    </div>
  {/if}

  <div
    bind:this={features}
    class="hide-scroll flex space-x-4 overflow-x-auto shadow-lg md:p-3"
  >
    <Card>
      <h2 class="text-2xl font-extrabold">
        <img src={wifi.src} alt="wifi" class="inline-block h-12 w-12" />
        <span class="text-blue-evos">10Gbit</span>/s network
      </h2>

      <p class="text-white/70">
        Unleash blazing-fast speeds of up to 10Gbit/s. Experience seamless
        browsing and instant data transfers with our hosting service.
      </p>
    </Card>
    <Card>
      <h2 class="text-2xl font-extrabold">
        <img src={ddos.src} alt="ddos" class="inline-block h-12 w-12" />
        <span class="text-green-evos">DDoS</span> Protection
      </h2>

      <p class="text-white/70">
        Uncompromising security: our DDoS defense provides specific filters up
        to 1.5TB/s to safeguard your service, always active 24/7.
      </p>
    </Card>
    <Card>
      <h2 class="text-2xl font-extrabold">
        <img src={clock.src} alt="clock" class="inline-block h-12 w-12" />
        <span class="text-purple-evos">24/7</span> Support
      </h2>

      <p class="text-white/70">
        Get round-the-clock support for all your hosting needs. We're here 24/7
        to ensure your online presence runs smoothly.
      </p>
    </Card>
    <Card>
      <h2 class="text-2xl font-extrabold">
        <img src={perf.src} alt="perf" class="inline-block h-12 w-12" />
        <span class="text-yellow-evos">Best</span> Performance
      </h2>

      <p class="text-white/70">
        Experience unparalleled performance with our hosting service. Powered by
        the Ryzen 9 5950X and the 7950X3D, paired with cutting-edge DDR4 and
        DDR5 RAM, and the latest-generation NVMe SSDs.
      </p>
    </Card>
  </div>

  {#if isNecessary && scrolls < 1}
    <div
      class="bg-linear absolute -right-4 top-3 z-30 hidden h-full w-32 cursor-pointer items-center justify-center p-2 md:flex"
    >
      <button on:click={scrollRight} class="pl-16">
        <img src={arrow.src} alt="Arrow" class="h-7 w-7 -rotate-90" />
      </button>
    </div>
  {/if}
</div>

<style>
  .hide-scroll::-webkit-scrollbar {
    display: none;
  }

  .hide-scroll {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .bg-linear {
    background: linear-gradient(to left, #000f18 20%, transparent);
  }

  .bg-linear-rv {
    background: linear-gradient(to right, #000f18 20%, transparent);
  }

  .bg-linear-rvl {
    background: linear-gradient(to right, #00121d 20%, transparent);
  }
</style>
