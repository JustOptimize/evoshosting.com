<script lang="ts">
  import { dedicated, type Dedicated } from "@utils/products";
  import DedicatedCard from "./DedicatedCard.svelte";
  import Dedropdown from "./Dedropdown.svelte";
  import core from "@images/shop/gray/core.svg";
  import ram from "@images/shop/gray/ram.svg";
  import storage from "@images/shop/gray/storage.svg";

  let ded = dedicated;
  let selectedCpu = "all";
  let selectedRam = "all";
  let selectedStorage = "all";

  let maxDedShowed = 5; // How many show each time
  let dedShowed = 5; // How many are shown right now

  const clearDuplicates = (array: string[]) => {
    return array.filter((item, i, ar) => ar.indexOf(item) === i);
  };

  let cpus = ["AMD Ryzen", "AMD EPYC", "Intel Core", "Intel Xeon"];
  let rams = clearDuplicates(
    ded.map((product) => product.ram.name.toLowerCase()),
  );
  let storages = clearDuplicates(
    ded.map((product) => product.storage.name.toLowerCase()),
  );

  const sort = (cpu: string, ram: string, storage: string): Dedicated[] => {
    let finalArray = ded;

    if (cpu != "all") {
      finalArray = finalArray.filter((product) =>
        product.processor.name.toLowerCase().includes(cpu.toLowerCase()),
      );
    }

    if (ram != "all") {
      finalArray = finalArray.filter((product) =>
        product.ram.name.toLowerCase().includes(ram),
      );
    }

    if (storage != "all") {
      finalArray = finalArray.filter((product) =>
        product.storage.name.toLowerCase().includes(storage),
      );
    }

    // Now, sort by price
    finalArray = finalArray.sort((a, b) => a.price - b.price);

    return finalArray;
  };
</script>

<div class="flex items-center justify-between pb-4">
  <div>
    <h3 class="text-xl font-bold text-primary md:text-2xl">Want more?</h3>
    <h2 class="text-2xl font-extrabold text-white md:text-5xl">All Plans</h2>
  </div>
  <!-- DROPDOWNS -->
  <div class="flex space-x-6">
    <Dedropdown name="CPU" img={core} items={cpus} bind:item={selectedCpu} />
    <Dedropdown
      name="RAM"
      img={ram}
      items={rams}
      bind:item={selectedRam}
      caps
    />
    <Dedropdown
      name="Storage"
      img={storage}
      items={storages}
      bind:item={selectedStorage}
      reverseOpen
      caps
    />
  </div>
</div>
<div class="space-y-5">
  {#each sort(selectedCpu, selectedRam, selectedStorage).slice(0, dedShowed) as product}
    <DedicatedCard {product} />
  {/each}

  {#if sort(selectedCpu, selectedRam, selectedStorage).length === 0}
    <p class="text-center text-3xl font-extrabold text-white">
      No results found
    </p>
  {/if}

  {#if sort(selectedCpu, selectedRam, selectedStorage).length > dedShowed && ded[dedShowed] !== undefined}
    <div class="relative">
      <div
        class="absolute z-30 flex h-full w-full items-center justify-center rounded-2xl backdrop-blur-sm"
      >
        <button
          class="rounded-lg border-2 border-white bg-black/5 px-10 py-1 font-bold transition hover:bg-white/10"
          on:click={() => {
            dedShowed += maxDedShowed;
          }}
        >
          Load More
        </button>
      </div>

      <DedicatedCard product={ded[dedShowed]} />
    </div>
  {/if}
</div>
