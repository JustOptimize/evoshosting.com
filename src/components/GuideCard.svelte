<script lang="ts">
  export let data: { title: string; description: string; tags: string };
  export let slug: string;
</script>

<button
  on:click={() => {
    window.location.href = `/guides/${slug}`;
  }}
  class="w-full space-y-3 rounded-2xl border-2 border-dark border-dark/40 bg-dark/5 p-5 text-left"
>
  <h2 class="text-xl font-extrabold md:text-2xl">
    {data.title}
  </h2>

  <p class="text-base md:text-lg">{data.description}</p>

  <div class="space-x-2">
    {#each data.tags.slice(0, 4) as tag}
      <span class="rounded-lg bg-primary/20 px-3 py-1 font-bold text-primary">
        {tag}
      </span>
    {/each}
  </div>
</button>
