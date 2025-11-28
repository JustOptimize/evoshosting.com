<script lang="ts">
  import { cn } from "@utils/cn";
  import arrow from "@images/arrow.svg";

  export let item: string;
  export let name: string;
  export let img: ImageMetadata;
  export let items: string[];
  export let reverseOpen: boolean = false;
  export let caps: boolean = false;

  let open = false;

  const clickOutside = (node: Node) => {
    const handleClick = (event: MouseEvent) => {
      // @ts-ignore
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        // @ts-ignore
        node.dispatchEvent(new CustomEvent("click_outside", node));
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      },
    };
  };
</script>

<div
  class="relative block"
  use:clickOutside
  on:click_outside={() => (open = false)}
>
  <button
    class={cn(
      "md-4 flex items-center rounded-md border border-white/20 bg-white/5 px-2 py-1 font-bold md:data-[selected=false]:px-10",
      `${open && "md:rounded-b-none md:border-b-0"}`,
    )}
    data-selected={item != "all"}
    on:click={() => (open = !open)}
  >
    <img src={img.src} alt="item" class="inline h-5 w-5" />
    <span class="hidden px-2 md:block">
      {#if item === "all"}
        {name}
      {:else}
        {item.toUpperCase()}
      {/if}
    </span>
    <img
      src={arrow.src}
      alt="Arrow"
      class={cn(
        "inline h-3 w-3 pl-1 transition md:pl-0",
        `${open && "-rotate-90 md:-rotate-180"}`,
      )}
    />
  </button>

  <div
    class="absolute top-8 z-40 hidden w-32 rounded-md border border-white/20 bg-white/5 backdrop-blur-xl data-[reverse=true]:right-1 data-[hide=true]:block md:w-full md:rounded-t-none md:data-[reverse=true]:right-0"
    data-hide={open}
    data-reverse={reverseOpen}
  >
    <button
      class="block w-full border-b border-b-white/20 py-1 text-center font-bold"
      on:click={() => (item = "all") && (open = false)}
    >
      <span>All items</span>
    </button>
    {#each items as c, i}
      <button
        class="block w-full border-b-white/20 py-1 text-center font-bold data-[last=false]:border-b"
        data-last={i === items.length - 1}
        on:click={() => ((item = c), (open = false))}
      >
        <span>{c.toUpperCase()}</span>
      </button>
    {/each}
  </div>
</div>
