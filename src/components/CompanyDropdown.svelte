<script lang="ts">
  export let open = false;
</script>

<div
  aria-hidden="true"
  class="relative block"
  on:focus={() => (open = true)}
  on:mouseover={() => (open = true)}
  on:mouseleave={() => (open = false)}
>
  <div
    class="absolute right-51.5 top-12 z-50 hidden w-32 rounded-md border border-white/20 bg-white/5 backdrop-blur-md data-[hide=true]:block md:rounded-t-none"
    data-hide={open}
  >
    <a
      class="block w-full border-b border-b-white/20 py-1 text-center font-bold hover:bg-white/10 data-[last=false]:border-b"
      href="/about"
    >
      About us
    </a>
    <a
      class="block w-full border-b border-b-white/20 py-1 text-center font-bold hover:bg-white/10 data-[last=false]:border-b"
      href="/about/terms"
    >
      Terms
    </a>
    <a
      class="block w-full border-b border-b-white/20 py-1 text-center font-bold hover:bg-white/10 data-[last=false]:border-b"
      href="/about/privacy"
    >
      Privacy
    </a>
    <a
      class="block w-full py-1 text-center font-bold hover:bg-white/10 data-[last=false]:border-b"
      href="/contact"
    >
      Contact
    </a>
  </div>
</div>
