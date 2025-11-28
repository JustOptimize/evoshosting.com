<script lang="ts">
  import { cn } from "@utils/cn";
  import MobileDropdown from "./MobileDropdown.svelte";
  import NavGames from "./NavGames.svelte";
  import NavVps from "./NavVps.svelte";
  import NavVds from "./NavVds.svelte";
  import CompanyDropdown from "./CompanyDropdown.svelte";
  import logo from "@images/logo.svg";
  import logosm from "@images/logosm.svg";
  import arrow from "@images/arrow.svg";
  import user from "@images/user.svg";
  import bars from "@images/bars.svg";

  export let path = "";

  let showDropdown = false;
  let showMobileNav = false;
  let showCompanyDropdown = false;
  let showVpsDropdown = false;
  let showVdsDropdown = false;
</script>

<nav class="sticky top-0 z-40 md:top-6 md:mt-6">
  <NavVps open={showVpsDropdown} />
  <NavVds open={showVdsDropdown} />
  <NavGames open={showDropdown} />
  <MobileDropdown open={showMobileNav} {path} />
  <CompanyDropdown bind:open={showCompanyDropdown} />

  <div
    class="flex justify-between border-b-2 border-white/15 bg-black/5 px-6 py-2 backdrop-blur-lg md:mx-3.5 md:rounded-2xl md:border-2 md:px-8"
  >
    <div class="flex items-center space-x-4 md:space-x-10">
      <div class="flex items-center">
        <button class="md:hidden" on:click={() => (showMobileNav = true)}>
          <img
            src={bars.src}
            alt="Bars"
            class="h-5 w-5 md:hidden md:h-0 md:w-0"
          />
        </button>
        <a href="/" class="block md:hidden">
          <img src={logosm.src} alt="Logo" class="h-11 w-28" />
        </a>
        <a href="/" class="hidden md:block">
          <img src={logo.src} alt="Logo" class="h-11 w-28" />
        </a>
      </div>
      <div class="hidden md:flex md:space-x-6">
        <a
          href="/"
          class={cn("font-bold", `${path === "/" ? "text-primary" : ""}`)}
          >HOME</a
        >
        <button
          class={cn(
            "ml-6 font-bold",
            `${path.includes("vps") ? "text-primary" : ""}`,
          )}
          on:focus={() => (showVpsDropdown = true)}
          on:mouseover={() => (showVpsDropdown = true)}
          on:mouseleave={() => (showVpsDropdown = false)}
        >
          VPS
        </button>
        <button
          class={cn(
            "ml-6 font-bold",
            `${path.includes("vds") ? "text-primary" : ""}`,
          )}
          on:focus={() => (showVdsDropdown = true)}
          on:mouseover={() => (showVdsDropdown = true)}
          on:mouseleave={() => (showVdsDropdown = false)}
        >
          VDS
        </button>
        <button
          class={cn(
            "ml-6 font-bold",
            `${path.includes("games") ? "text-primary" : ""}`,
          )}
          on:focus={() => (showDropdown = true)}
          on:mouseover={() => (showDropdown = true)}
          on:mouseleave={() => (showDropdown = false)}
        >
          GAME
        </button>
        <a
          href="/products/dedicated"
          class={cn(
            "font-bold",
            `${path.includes("dedicated") ? "text-primary" : ""}`,
          )}>DEDICATED</a
        >
        <a
          href="/products/discord"
          class={cn(
            "font-bold",
            `${path.includes("discord") ? "text-primary" : ""}`,
          )}>DISCORD</a
        >
      </div>
    </div>

    <div class="flex items-center space-x-2.5">
      <button
        class={cn(
          "hidden items-center gap-x-1.5 px-4 font-bold transition md:flex",
          `${showCompanyDropdown && "rounded-t-md border border-white/20 bg-white/5 py-1"}`,
        )}
        aria-haspopup="true"
        on:focus={() => (showCompanyDropdown = true)}
        on:mouseover={() => (showCompanyDropdown = true)}
        on:mouseleave={() => (showCompanyDropdown = false)}
      >
        Company <img
          src={arrow.src}
          alt="Arrow down"
          class={cn(
            "h-3 w-3",
            `${showCompanyDropdown && "-rotate-180 transition"}`,
          )}
        />
      </button>

      <!--
      <button class="flex items-center gap-x-1 rounded font-semibold">
        🇬🇧
        <span class="hidden md:block">English</span>
        <img src={arrow.src} alt="Arrow down" class="h-3 w-3" />
      </button>
      -->

      <a
        class="flex items-center gap-x-1 rounded-md bg-primary px-3 py-1.5 text-sm font-bold text-black md:px-7"
        href="#"
      >
        <img src={user.src} alt="User" class="h-3.5 w-3.5" />
        Client Area
      </a>
    </div>
  </div>
</nav>
