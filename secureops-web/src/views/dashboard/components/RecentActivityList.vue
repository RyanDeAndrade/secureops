<script setup lang="ts">
import { FileText, LogIn, ShieldAlert, UserPlus } from 'lucide-vue-next'

const activities = [
  {
    id: 1,
    title: 'New user created',
    description: 'Administrator created the user Maria Silva.',
    time: '5 minutes ago',
    icon: UserPlus,
  },
  {
    id: 2,
    title: 'Successful login',
    description: 'Administrator signed in successfully.',
    time: '18 minutes ago',
    icon: LogIn,
  },
  {
    id: 3,
    title: 'Security alert detected',
    description: 'Multiple failed login attempts were detected.',
    time: '36 minutes ago',
    icon: ShieldAlert,
  },
  {
    id: 4,
    title: 'Audit report exported',
    description: 'The audit activity report was exported.',
    time: '1 hour ago',
    icon: FileText,
  },
]
</script>

<template>
  <div class="divide-y divide-zinc-100">
    <article
      v-for="activity in activities"
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
