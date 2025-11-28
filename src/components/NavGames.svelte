<script lang="ts">
  import minecraft from "@images/games/minecraft.svg";
  import gta from "@images/games/gta.svg";

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
      class="relative rounded-lg border-2 border-dark/20 bg-white/5 p-2 pl-14 pr-4 text-left"
      on:click={() => (window.location.href = "/games/minecraft")}
    >
      <img
        src={minecraft.src}
        alt="Minecraft"
        class="absolute -left-7 h-16 w-16"
      />
      <h2 class="text-2xl font-extrabold">Minecraft servers</h2>
      <span class="text-xl font-bold text-primary">Starting at €7,99</span>
    </button>
    <button
      class="relative rounded-lg border-2 border-dark/20 bg-white/5 p-2 pl-14 pr-4 text-left"
      on:click={() => (window.location.href = "/games/gta")}
    >
      <img src={gta.src} alt="GTA" class="absolute -left-7 top-1 h-20 w-20" />
      <h2 class="text-2xl font-extrabold">GTA servers</h2>
      <span class="text-xl font-bold text-primary">Starting at €4,99</span>
    </button>
  </div>
</div>
