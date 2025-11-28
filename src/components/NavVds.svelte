<script lang="ts">
  import vds from "@images/vds.svg";
  import vdsCheap from "@images/vds-cheap.svg";

  export let open = false;
</script>

<div
  aria-hidden="true"
  class="absolute left-52 top-11.5 z-50 hidden animate-fade-up rounded-xl border-2 border-white/15 bg-black/5 px-10 py-6 backdrop-blur-lg animate-duration-200 animate-ease-in-out data-[hover=true]:block"
  data-hover={open}
  on:mouseleave={() => (open = false)}
  on:mouseover={() => (open = true)}
  on:focus={() => (open = true)}
>
  <div class="flex space-x-8">
    <button
      class="relative rounded-lg border-2 border-dark/20 bg-white/5 p-2 pl-14 pr-6 text-left"
      on:click={() => (window.location.href = "/products/vds")}
    >
      <img src={vds.src} alt="Minecraft" class="absolute -left-7 h-16 w-16" />
      <h2 class="text-2xl font-extrabold">AMD Ryzen VDS</h2>
      <span class="text-xl font-bold text-primary">Starting at €28,99</span>
    </button>
    <button
      class="relative rounded-lg border-2 border-dark/20 bg-white/5 p-2 pl-14 pr-4 text-left"
      on:click={() => (window.location.href = "/products/vds-xeon")}
    >
      <img src={vdsCheap.src} alt="GTA" class="absolute -left-7 h-16 w-16" />
      <h2 class="text-2xl font-extrabold">Intel Xeon VDS</h2>
      <span class="text-xl font-bold text-primary">Starting at €4,99</span>
    </button>
  </div>
</div>
