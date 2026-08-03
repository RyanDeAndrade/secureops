<script setup lang="ts">
import type { Component } from 'vue'

import AppCard from '@/components/common/AppCard.vue'

withDefaults(
  defineProps<{
    label: string
    value: string | number
    description?: string
    icon: Component
    trend?: string
    trendDirection?: 'up' | 'down' | 'neutral'
  }>(),
  {
    description: '',
    trend: '',
    trendDirection: 'neutral',
  },
)

const trendClasses = {
  up: 'bg-emerald-50 text-emerald-700',
  down: 'bg-red-50 text-red-700',
  neutral: 'bg-zinc-100 text-zinc-600',
}
</script>

<template>
  <AppCard>
    <div class="flex items-start justify-between gap-4">
      <div class="min-w-0">
        <p class="text-sm font-medium text-zinc-500">
          {{ label }}
        </p>

        <p class="mt-2 text-3xl font-bold tracking-tight text-zinc-900">
          {{ value }}
        </p>
      </div>

      <div
        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700"
      >
        <component :is="icon" :size="21" />
      </div>
    </div>

    <div
      v-if="description || trend"
      class="mt-4 flex items-center gap-2"
    >
      <span
        v-if="trend"
        :class="trendClasses[trendDirection]"
        class="rounded-full px-2 py-1 text-xs font-semibold"
      >
        {{ trend }}
      </span>

      <p
        v-if="description"
        class="truncate text-xs text-zinc-500"
      >
        {{ description }}
      </p>
    </div>
  </AppCard>
</template>
