<script setup lang="ts">
import { securityAlerts } from '../data/dashboard.mock'

const severityClasses = {
  high: 'bg-red-50 text-red-700',
  medium: 'bg-amber-50 text-amber-700',
  low: 'bg-blue-50 text-blue-700',
}
</script>

<template>
  <div class="space-y-3">
    <article
      v-for="alert in securityAlerts"
      :key="alert.id"
      class="rounded-xl border border-zinc-200 p-4"
    >
      <div class="flex items-start justify-between gap-4">
        <div class="min-w-0">
          <p class="font-semibold text-zinc-900">
            {{ alert.title }}
          </p>

          <p class="mt-1 text-sm text-zinc-500">
            {{ alert.source }}
          </p>
        </div>

        <span
          :class="severityClasses[alert.severity as keyof typeof severityClasses]"
          class="shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold uppercase"
        >
          {{ alert.severity }}
        </span>
      </div>
    </article>
  </div>
</template>
