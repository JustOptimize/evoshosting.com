<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./Card.svelte";
  import star from "@images/star.svg";
  import arrow from "@images/arrow.svg";

  let reviews: HTMLDivElement;
  let scrolls = 0;
  let isNecessary = false;

  const scrollRight = () => {
    scrolls++;
    reviews.scrollTo({
      left: reviews.scrollLeft + 350,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    reviews.scrollTo({
      left: reviews.scrollLeft - 350,
      behavior: "smooth",
    });

    scrolls--;
  };

  onMount(() => {
    isNecessary = reviews.scrollWidth > reviews.clientWidth + 50;
  });
</script>

<div class="relative">
  {#if scrolls > 0}
    <div
      class="bg-linear-rv absolute -left-5 top-3.5 z-30 h-full w-32 cursor-pointer items-center justify-center md:flex"
    >
      <button on:click={scrollLeft} class="pr-16">
        <img src={arrow.src} alt="Arrow" class="h-7 w-7 rotate-90" />
      </button>
    </div>
  {/if}

  <div
    bind:this={reviews}
    class="hide-scroll flex space-x-4 overflow-x-auto p-5 md:px-5 md:py-7"
  >
    <Card>
      <div class="flex items-center space-x-5">
        <img
          src="https://picsum.photos/200"
          alt="user"
          class="h-20 w-20 rounded-2xl"
        />

        <div>
          <h2 class="text-2xl font-bold">Mario Rossi</h2>
          <span class="flex">
            {#each Object.keys([...Array(5)]) as _}
              <img src={star.src} alt="star" class="h-5 w-5" />
            {/each}
          </span>
        </div>
      </div>

      <p class="font-semibold">
        I have never seen better hosting then evoshosting Amazing host, 0 lag,
        excellent customer support and service they even helped me setup my
        server...
      </p>
    </Card>
    <Card>
      <div class="flex items-center space-x-5">
        <img
          src="https://picsum.photos/200"
          alt="user"
          class="h-20 w-20 rounded-2xl"
        />

        <div>
          <h2 class="text-2xl font-bold">Mario Rossi</h2>
          <span class="flex">
            {#each Object.keys([...Array(5)]) as _}
              <img src={star.src} alt="star" class="h-5 w-5" />
            {/each}
          </span>
        </div>
      </div>

      <p class="font-semibold">
        I have a hosting company so I needed a dedicated person that I could
        resell in the form of a VPS. They therefore made me very cheap custom
        plans with all the resources I needed
      </p>
    </Card>
    <Card>
      <div class="flex items-center space-x-5">
        <img
          src="https://picsum.photos/200"
          alt="user"
          class="h-20 w-20 rounded-2xl"
        />

        <div>
          <h2 class="text-2xl font-bold">Mario Rossi</h2>
          <span class="flex">
            {#each Object.keys([...Array(5)]) as _}
              <img src={star.src} alt="star" class="h-5 w-5" />
            {/each}
          </span>
        </div>
      </div>

      <p class="font-semibold">
        Good Services. I pay only 18 euro for vps with 16gb ram and 6 core with
        10gbit/s fantastic anti-ddos and best support! I suggest them
      </p>
    </Card>
    <Card>
      <div class="flex items-center space-x-5">
        <img
          src="https://picsum.photos/200"
          alt="user"
          class="h-20 w-20 rounded-2xl"
        />

        <div>
          <h2 class="text-2xl font-bold">Mario Rossi</h2>
          <span class="flex">
            {#each Object.keys([...Array(5)]) as _}
              <img src={star.src} alt="star" class="h-5 w-5" />
            {/each}
          </span>
        </div>
      </div>

      <p class="font-semibold">
        Spectacular hosting, I've tried many hosts including Contabo and
        Terabit, but this is by far the best of those I've tried. High bandwidth
        and good antiDDoS which guarantees a good experience.
      </p>
    </Card>
  </div>
  {#if isNecessary && scrolls < 1}
    <div
      class="bg-linear absolute -right-3 top-3.5 z-30 hidden h-full w-32 cursor-pointer items-center justify-center md:flex"
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
    background: linear-gradient(to left, #01131c 20%, transparent);
  }

  .bg-linear-rv {
    background: linear-gradient(to right, #01131c 20%, transparent);
  }
</style>
