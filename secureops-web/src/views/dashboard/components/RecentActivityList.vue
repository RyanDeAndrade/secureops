<script setup lang="ts">
import { recentActivities } from '../data/dashboard.mock'
</script>

<template>
  <div class="divide-y divide-zinc-100">
    <article
      v-for="activity in recentActivities"
      :key="activity.id"
      class="flex gap-4 py-4 first:pt-0 last:pb-0"
    >
      <div
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700"
      >
        <component :is="activity.icon" :size="19" />
      </div>

      <div class="min-w-0 flex-1">
        <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p class="font-semibold text-zinc-900">
            {{ activity.title }}
          </p>

          <span class="shrink-0 text-xs text-zinc-400">
            {{ activity.time }}
          </span>
        </div>

        <p class="mt-1 text-sm leading-6 text-zinc-500">
          {{ activity.description }}
        </p>
      </div>
    </article>
  </div>
</template>
