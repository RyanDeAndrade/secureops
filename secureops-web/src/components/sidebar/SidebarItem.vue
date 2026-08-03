<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  label: string
  routeName: string
  icon: Component
  collapsed: boolean

}>()
</script>

<template>
  <RouterLink
    :to="{ name: routeName }"
    :title="collapsed ? label : undefined"
    :class="collapsed ? 'justify-center px-0' : 'gap-3 px-4'"
    class="flex items-center rounded-xl py-3 text-sm font-medium text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
    active-class="bg-zinc-800 text-white"
  >
    <component :is="icon" :size="19" class="shrink-0" />

    <span v-if="!collapsed">
      {{ label }}
    </span>
  </RouterLink>
</template>
