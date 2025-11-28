<script lang="ts">
  import vps from "@images/vps.svg";
  import vpsCheap from "@images/vps-cheap.svg";

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
      on:click={() => (window.location.href = "/products/vps")}
    >
      <img
        src={vps.src}
        alt="Minecraft"
        class="absolute -left-7 h-[4.5rem] w-[4.5rem]"
      />
      <h2 class="text-2xl font-extrabold">AMD Ryzen VPS</h2>
      <span class="text-xl font-bold text-primary">Starting at €3,99</span>
    </button>
    <button
      class="relative rounded-lg border-2 border-dark/20 bg-white/5 p-2 pl-14 pr-4 text-left"
      on:click={() => (window.location.href = "/products/vps-xeon")}
    >
      <img
        src={vpsCheap.src}
        alt="GTA"
        class="absolute -left-10 top-[0.5px] h-24 w-24"
      />
      <h2 class="text-2xl font-extrabold">Intel Xeon VPS</h2>
      <span class="text-xl font-bold text-primary">Starting at €2,99</span>
    </button>
  </div>
</div>
