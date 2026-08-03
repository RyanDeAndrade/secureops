<script setup lang="ts">
import { PanelLeftOpen } from 'lucide-vue-next'

defineProps<{
  collapsed: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <footer :class="collapsed ? 'flex justify-center p-3' : 'p-4'" class="border-t border-zinc-800">
    <button
      v-if="collapsed"
      type="button"
      aria-label="Expand sidebar"
      title="Expand sidebar"
      class="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition-all duration-200 hover:bg-white/10 hover:text-white"
      @click="emit('toggle')"
    >
      <PanelLeftOpen :size="20" />
    </button>

    <p v-else class="text-xs text-zinc-500">SecureOps v1.0.0</p>
  </footer>
</template>
