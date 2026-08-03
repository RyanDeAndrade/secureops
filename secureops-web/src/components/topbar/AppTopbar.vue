<script setup lang="ts">
import { Bell, ChevronDown, Search } from 'lucide-vue-next'
</script>

<template>
  <header class="flex h-20 items-center justify-between border-b border-zinc-200 bg-white px-6">
    <div class="relative hidden w-full max-w-sm md:block">
      <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" :size="18" />

      <input
        type="search"
        placeholder="Search SecureOps..."
        class="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
      />
    </div>

    <div class="ml-auto flex items-center gap-3">
      <button
        type="button"
        aria-label="Notifications"
        class="relative flex h-10 w-10 items-center justify-center rounded-xl text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
      >
        <Bell :size="20" />

        <span class="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
      </button>

      <button
        type="button"
        class="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-zinc-100"
      >
        <div
          class="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white"
        >
          RA
        </div>

        <div class="hidden text-left sm:block">
          <p class="text-sm font-semibold text-zinc-900">Ryan Andrade</p>

          <p class="text-xs text-zinc-500">Administrator</p>
        </div>

        <ChevronDown class="text-zinc-400" :size="17" />
      </button>
    </div>
  </header>
</template>
