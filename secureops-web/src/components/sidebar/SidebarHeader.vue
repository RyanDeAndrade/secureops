<script setup lang="ts">
import { PanelLeftClose, ShieldCheck } from 'lucide-vue-next'

defineProps<{
  collapsed: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <header
    :class="collapsed ? 'justify-center px-3' : 'justify-between px-4'"
    class="flex h-20 items-center border-b border-zinc-800"
  >
    <div
      :class="collapsed ? 'justify-center' : 'gap-3'"
      class="flex min-w-0 items-center"
    >
      <div
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-zinc-950 shadow-sm"
      >
        <ShieldCheck :size="22" />
      </div>

      <div v-if="!collapsed" class="min-w-0">
        <p class="truncate font-bold">
          SecureOps
        </p>

        <p class="truncate text-xs text-zinc-400">
          Security Platform
        </p>
      </div>
    </div>

    <button
      v-if="!collapsed"
      type="button"
      aria-label="Collapse sidebar"
      title="Collapse sidebar"
      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-zinc-400 transition-all duration-200 hover:bg-white/10 hover:text-white"
      @click="emit('toggle')"
    >
      <PanelLeftClose :size="20" />
    </button>
  </header>
</template>
