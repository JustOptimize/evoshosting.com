<script lang="ts">
  import { cn } from "@utils/cn";
  import map from "@images/map.svg";
  import point from "@images/point.svg";
  import dot from "@images/dot.svg";
  import nl from "@images/flags/nl.svg";

  let country = "";
  let ping = 0;

  const PING_TIMES = 3 + 1;

  const handleClick = (c: string) => {
    let pings: number[] = [];
    let internalPing = 0;

    country = c;
    ping = 0;

    for (let i = 0; i < PING_TIMES; i++) {
      setTimeout(() => {
        const URL =
          internalPing === 0
            ? `https://0.0.0.0`
            : "#" + Math.floor(Math.random() * 1000);

        const start = new Date().getTime();
        fetch(URL)
          .then(() => {
            const end = new Date().getTime();

            pings.push(end - start);

            if (pings.length === PING_TIMES - 1) {
              ping = Math.min(...pings) - internalPing;

              if (ping <= 0) {
                ping = 0;
              }
            }
          })
          .catch(() => {
            const end = new Date().getTime();

            if (internalPing === 0) {
              internalPing = end - start;
            }
          });
      }, 200 * i);
    }
  };
</script>

<div class="relative flex justify-center py-5">
  <img src={map.src} alt="map" class="h-5/6 w-5/6" />

  <!-- Contry Buttons -->
  <!--
    Here tailwindcss explicit value are often used to position the buttons.
    Creating a config variable for the position of each button will be to long
  -->
  <button
    id="nl"
    class="absolute left-[48%] top-20 block md:top-52 xl:top-[16.8rem]"
    on:click={() => handleClick("nl")}
  >
    <img
      src={point.src}
      alt="point"
      class="h-5 w-5 transition hover:scale-125"
    />
  </button>
  <div
    class="absolute top-[80%] min-h-20.5 min-w-96 rounded-2xl border-2 border-dark/50 bg-dark/5 px-6 py-4 backdrop-blur-sm"
  >
    {#if country !== ""}
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-extrabold">
          {#if country !== ""}
            <h2 class="text-sm font-extrabold text-primary">
              SELECTED COUNTRY
            </h2>
          {/if}
          {#if country === "nl"}
            <div class="flex items-center">
              <img src={nl.src} alt="nl" class="mr-1 h-6 w-6" />
              Netherlands
            </div>
          {/if}
        </h2>

        <h2
          class={cn(
            "min-h-11 rounded-xl bg-green-500/30 px-4 py-1 text-2xl font-extrabold text-green-400 transition",
            `${ping == 0 && "flex items-center justify-center bg-white/10 text-white"}`,
          )}
        >
          {#if ping === 0}
            <div class="flex space-x-2">
              <img
                src={dot.src}
                alt="dot"
                class="h-3 w-3 animate-bounce transition animate-delay-[100ms] animate-infinite"
              />
              <img
                src={dot.src}
                alt="dot"
                class="h-3 w-3 animate-bounce transition animate-delay-[200ms] animate-infinite"
              />
              <img
                src={dot.src}
                alt="dot"
                class="h-3 w-3 animate-bounce transition animate-delay-[300ms] animate-infinite"
              />
            </div>
          {:else}
            {ping}ms
          {/if}
        </h2>
      </div>
    {:else}
      <h2 class="pt-2.5 text-center text-2xl font-extrabold">
        Select a country
      </h2>
    {/if}
  </div>
</div>
